# Creek Radio Mobile App

A React Native mobile application for Creek Radio, featuring live streaming, archived shows, donations, and a dissident registry - all themed in the Helldivers 2 universe aesthetic.

## Features

### 🏠 Home Screen
- Live radio streaming with play/pause controls
- Real-time metadata display (Now Playing)
- Volume control
- Listener count
- Quick links to Discord and donation platforms

### 📻 Archive Screen
- Browse Creek Radio seasons (Season 1 & 2)
- Embedded Mixcloud players for archived shows
- Expandable track listings for each season
- Full track details (artist and title)

### 💝 Donations Screen
- Ko-fi and Patreon integration
- List of honored contributors
- Patreon supporter showcase
- Dissident registry warning and link

### ⚠️ Dissidents Screen
- Most Wanted section with profile images
- Known Dissidents registry
- Minor Infractions listing
- Full red military aesthetic

## Technical Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router with tab-based layout
- **Audio**: expo-av for live radio streaming
- **Web Content**: react-native-webview for Mixcloud embeds
- **Icons**: lucide-react-native
- **Styling**: React Native StyleSheet (no Supabase, matching website's static approach)

## Data Structure

All data is statically defined in the `/data` folder:
- `songs.ts` - Archive seasons and track listings
- `dissidents.ts` - Dissident registry entries
- `contributors.ts` - Ko-fi and Patreon supporters

## Services

- `icecastMetadata.ts` - Polls Icecast server every 10 seconds for live stream metadata

## Stream Details

- **Stream URL**: https://creekradio.nohost.me/radio
- **Status API**: https://creekradio.nohost.me/status-json.xsl
- **Format**: MP3, 128 kbps

## Design Theme

The app replicates the Helldivers 2 military aesthetic with:
- Tactical panels with clipped corners
- Hazard stripe patterns
- Magenta and green accent colors
- Dark military-themed backgrounds
- Red variant for dissident-related content
- Uppercase typography with tracking
- Glowing text effects

## Scripts

```bash
# Start development server
npm run dev

# Build for web
npm run build:web

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Notes

- This is a fan project and not affiliated with Arrowhead Game Studios
- The app will remain ad-free and free to use
- All content matches the Creek Radio website functionality
