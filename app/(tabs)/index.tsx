import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { RadioPlayer } from '@/components/RadioPlayer';
import { NowPlaying } from '@/components/NowPlaying';
import { HazardStripes } from '@/components/HazardStripes';
import { TacticalPanel } from '@/components/TacticalPanel';
import { ExternalLink, MessageCircle } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.banner}>
          <HazardStripes variant="thin" />
          <View style={styles.bannerContent}>
            <Text style={styles.bannerText}>
              BROADCASTING LIBERTY - DEFENDING MANAGED DEMOCRACY
            </Text>
          </View>
          <HazardStripes variant="thin" />
        </View>

        <View style={styles.header}>
          <Image
            source={require('@/assets/images/creek_radio_icon_512.png')}
            style={styles.logo}
          />
          <View style={styles.headerText}>
            <Text style={styles.title}>CREEK RADIO</Text>
            <Text style={styles.subtitle}>
              Super Earth Broadcasting Network
            </Text>
          </View>
        </View>

        <RadioPlayer />

        <NowPlaying />

        <TouchableOpacity
          onPress={() => Linking.openURL('https://discord.gg/creekradio')}
          activeOpacity={0.8}
        >
          <TacticalPanel style={styles.discordBanner}>
            <View style={styles.discordContent}>
              <MessageCircle size={24} color={Colors.green} />
              <View style={styles.discordText}>
                <Text style={styles.discordTitle}>JOIN THE DISCORD</Text>
                <Text style={styles.discordSubtitle}>
                  Connect with fellow Helldivers
                </Text>
              </View>
              <ExternalLink size={20} color={Colors.magenta} />
            </View>
          </TacticalPanel>
        </TouchableOpacity>

        <TacticalPanel>
          <Text style={styles.aboutTitle}>ABOUT CREEK RADIO</Text>
          <Text style={styles.aboutText}>
            Broadcasting Democracy across the galaxy, Creek Radio is your premier source for liberty-themed entertainment. We deliver only the finest tactical audio content approved by the Ministry of Truth.
          </Text>
        </TacticalPanel>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Creek Radio - A Division of Super Earth Broadcasting Network
          </Text>
          <Text style={styles.footerSmall}>
            Approved by the Ministry of Truth - For Managed Democracy
          </Text>
          <Text style={styles.footerDisclaimer}>
            We are not affiliated with Arrowhead Game Studios, this is a fan project, and will always remain ad-free and free to use.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  banner: {
    marginBottom: 16,
    marginHorizontal: -16,
  },
  bannerContent: {
    backgroundColor: Colors.bg,
    paddingVertical: 12,
    alignItems: 'center',
  },
  bannerText: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  logo: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.magenta,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 12,
    color: Colors.textDim,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: 4,
  },
  discordBanner: {
    marginBottom: 16,
  },
  discordContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  discordText: {
    flex: 1,
  },
  discordTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.green,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  discordSubtitle: {
    fontSize: 11,
    color: Colors.textDim,
    textTransform: 'uppercase',
    marginTop: 2,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.magenta,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 13,
    color: Colors.text,
    lineHeight: 20,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  footer: {
    marginTop: 24,
    paddingTop: 24,
    borderTopWidth: 2,
    borderTopColor: Colors.border,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 11,
    color: Colors.textDim,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
    textAlign: 'center',
  },
  footerSmall: {
    fontSize: 10,
    color: Colors.textDim,
    textAlign: 'center',
    marginBottom: 8,
  },
  footerDisclaimer: {
    fontSize: 9,
    color: Colors.textDim,
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 14,
  },
});
