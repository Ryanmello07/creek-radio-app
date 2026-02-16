import { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { RadioPlayer } from '@/components/RadioPlayer';
import { NowPlaying } from '@/components/NowPlaying';
import { HazardStripes } from '@/components/HazardStripes';
import { TacticalPanel } from '@/components/TacticalPanel';
import { icecastService, StreamMetadata } from '@/services/icecastMetadata';
import { Heart, ExternalLink, MessageCircle, Radio } from 'lucide-react-native';

export default function HomeScreen() {
  const [metadata, setMetadata] = useState<StreamMetadata>({
    title: 'Creek Radio',
    artist: 'Super Earth Broadcasting',
    song: 'Awaiting Connection...',
    bitrate: 'Unknown',
    listeners: 0,
    serverStatus: 'offline',
  });

  useEffect(() => {
    icecastService.startPolling((newMetadata) => {
      setMetadata(newMetadata);
    });

    return () => {
      icecastService.stopPolling();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
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
          <Radio size={32} color={Colors.magenta} />
          <View style={styles.headerText}>
            <Text style={styles.title}>CREEK RADIO</Text>
            <Text style={styles.subtitle}>
              Super Earth Broadcasting Network
            </Text>
          </View>
        </View>

        <View style={styles.listenerCount}>
          <View style={styles.listenerIndicator} />
          <Text style={styles.listenerText}>
            {metadata.listeners} HELLDIVERS LISTENING
          </Text>
        </View>

        <RadioPlayer />

        <NowPlaying metadata={metadata} />

        <TouchableOpacity
          onPress={() => Linking.openURL('https://ko-fi.com/warchildofthecreek')}
          activeOpacity={0.8}
        >
          <TacticalPanel style={styles.donationBanner}>
            <View style={styles.donationContent}>
              <Heart size={24} color={Colors.magenta} />
              <View style={styles.donationText}>
                <Text style={styles.donationTitle}>SUPPORT CREEK RADIO</Text>
                <Text style={styles.donationSubtitle}>
                  Help keep democracy broadcasting
                </Text>
              </View>
              <ExternalLink size={20} color={Colors.green} />
            </View>
          </TacticalPanel>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://discord.gg/UGHCGqPEej')}
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
    </SafeAreaView>
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
  listenerCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.bgPanel,
    borderWidth: 1,
    borderColor: Colors.borderDim,
  },
  listenerIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.green,
  },
  listenerText: {
    color: Colors.green,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  donationBanner: {
    marginBottom: 16,
  },
  donationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  donationText: {
    flex: 1,
  },
  donationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.magenta,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  donationSubtitle: {
    fontSize: 11,
    color: Colors.textDim,
    textTransform: 'uppercase',
    marginTop: 2,
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
