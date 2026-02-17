Creek Radio Mobile App

Notes:

- This is a fan project and not affiliated with Arrowhead Game Studios
- The app will remain ad-free and free to use

Android APK Build Script tested on Debian 12

```bash
#!/bin/bash

set -e  # Exit on any error

PROJECT_DIR="${1:-creek-radio-app}"  # Use arg1 or default
VPS_USER="root"  # Change if not root

echo "🚀 Expo Android Builder Setup for Debian 12"
echo "============================================"
echo "Project: $PROJECT_DIR"
echo ""

# 1. Update system & install base deps
echo "📦 Updating system & installing base packages..."
apt update -y
apt install -y curl wget unzip git build-essential openjdk-17-jdk

# 2. Install Node via nvm
echo "🐳 Installing Node LTS via nvm..."
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install --lts
nvm use --lts

# 3. Android SDK
echo "📱 Installing Android SDK..."
mkdir -p ~/Android/cmdline-tools
cd ~/Android/cmdline-tools
wget -q https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip
unzip -q commandlinetools-linux-*.zip
mv cmdline-tools latest

# Environment vars (persistent)
cat >> ~/.bashrc << 'EOF'
export ANDROID_HOME="$HOME/Android"
export ANDROID_SDK_ROOT="$HOME/Android"
export PATH="$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
EOF
source ~/.bashrc

# Install SDK components
yes | sdkmanager "platform-tools" "platforms;android-35" "build-tools;36.0.0"

echo "✅ Android SDK ready"

# 4. Clone project (if not exists)
if [ ! -d "$PROJECT_DIR" ]; then
  echo "📂 Cloning $PROJECT_DIR..."
  git clone https://github.com/Ryanmello07/$PROJECT_DIR.git
fi
cd $PROJECT_DIR

# 5. Install deps & prebuild
echo "📦 Installing npm packages..."
npm install

echo "🔨 Running prebuild..."
npx expo prebuild --platform android

# 6. Build APK
echo "🏗️  Building debug APK..."
cd android
./gradlew clean assembleDebug

# 7. Show APK location
APK_PATH="$(pwd)/app/build/outputs/apk/debug/app-debug.apk"
echo ""
echo "🎉 BUILD COMPLETE!"
echo "APK location: $APK_PATH"
echo "Size: $(du -h $APK_PATH | cut -f1)"
echo ""
echo "📥 To download from local machine:"
echo "  scp $VPS_USER@your-vps-ip:$APK_PATH ./"
echo ""
echo "🚀 To run:"
echo "  cd $PROJECT_DIR"
echo "  npx expo start --tunnel"
echo ""
```
