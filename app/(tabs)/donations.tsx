import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Heart, ExternalLink, AlertTriangle } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { TacticalPanel } from '@/components/TacticalPanel';
import { HazardStripes } from '@/components/HazardStripes';
import { contributors } from '@/data/contributors';

export default function DonationsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.banner}>
          <HazardStripes variant="thin" />
          <View style={styles.bannerContent}>
            <Text style={styles.bannerText}>
              SUPPORT MANAGED DEMOCRACY - FUND FREEDOM
            </Text>
          </View>
          <HazardStripes variant="thin" />
        </View>

        <TacticalPanel style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerTitle}>
              <Heart size={32} color={Colors.magenta} />
              <Text style={styles.title}>SUPPORT CREEK RADIO</Text>
              <Heart size={32} color={Colors.magenta} />
            </View>
            <Text style={styles.subtitle}>
              Citizens! Your generous contributions ensure the continued operation of Creek Radio, broadcasting liberty and defending managed democracy across the Galaxy!
            </Text>
          </View>
        </TacticalPanel>

        <TacticalPanel style={styles.infoPanel}>
          <View style={styles.infoHeader}>
            <View style={styles.indicator} />
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                MINISTRY OF TRUTH ANNOUNCEMENT
              </Text>
              <Text style={styles.infoText}>
                Creek Radio operates as a FREE, AD-FREE service to all citizens of Super Earth. Your donations directly support server costs, equipment upgrades, and the continued spread of Managed Democracy through superior broadcasting.
              </Text>
            </View>
          </View>
        </TacticalPanel>

        <Text style={styles.sectionTitle}>DONATION PLATFORMS</Text>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://ko-fi.com/warchildofthecreek')}
          activeOpacity={0.8}
        >
          <TacticalPanel style={styles.platformCard}>
            <View style={styles.platformHeader}>
              <Text style={styles.platformTitle}>KO-FI</Text>
              <ExternalLink size={20} color={Colors.magenta} />
            </View>
            <Text style={styles.platformSubtitle}>
              Support with one-time contributions
            </Text>
            <View style={styles.platformButton}>
              <Text style={styles.platformButtonText}>CONTRIBUTE NOW</Text>
            </View>
          </TacticalPanel>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.patreon.com/cw/WarChildOfTheCreek/membership')}
          activeOpacity={0.8}
        >
          <TacticalPanel style={styles.platformCard}>
            <View style={styles.platformHeader}>
              <Text style={styles.platformTitle}>PATREON</Text>
              <ExternalLink size={20} color={Colors.magenta} />
            </View>
            <Text style={styles.platformSubtitle}>
              Join as a recurring supporter
            </Text>
            <View style={styles.platformButton}>
              <Text style={styles.platformButtonText}>BECOME A PATRON</Text>
            </View>
          </TacticalPanel>
        </TouchableOpacity>

        <TacticalPanel>
          <Text style={styles.contributorsTitle}>HONORED CONTRIBUTORS</Text>
          <Text style={styles.contributorsSubtitle}>
            Citizens who have demonstrated exceptional patriotism through their support:
          </Text>

          <View style={styles.contributorsList}>
            {contributors.filter(c => c.type === 'dj').map(contributor => (
              <View key={contributor.id} style={styles.contributorItem}>
                <View style={[styles.contributorDot, { backgroundColor: Colors.green }]} />
                <Text style={[styles.contributorName, { color: Colors.green }]}>
                  {contributor.name}
                </Text>
              </View>
            ))}

            <View style={styles.separator} />

            <Text style={styles.patreonLabel}>PATREON SUPPORTERS</Text>

            {contributors.filter(c => c.type === 'patreon').map(contributor => (
              <View key={contributor.id} style={styles.contributorItem}>
                <View style={[styles.contributorDot, { backgroundColor: Colors.magenta }]} />
                <Text style={styles.contributorName}>{contributor.name}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.contributorsFooter}>
            Your name will be immortalized in the annals of Creek Radio history
          </Text>
        </TacticalPanel>

        <View style={styles.reminderPanel}>
          <Text style={styles.reminderTitle}>
            MINISTRY OF DEFENSE REMINDER
          </Text>
          <Text style={styles.reminderText}>
            All donations are voluntary. Creek Radio will remain free and ad-free for all citizens. Your support ensures we can continue our mission of spreading managed democracy through superior broadcasting.
          </Text>
        </View>

        <TacticalPanel variant="red" style={styles.warningPanel}>
          <View style={styles.warningHeader}>
            <AlertTriangle size={32} color={Colors.red} />
            <View style={styles.warningContent}>
              <Text style={styles.warningTitle}>
                MINISTRY OF TRUTH WARNING
              </Text>
              <Text style={styles.warningText}>
                Citizens who fail to support Creek Radio demonstrate questionable loyalty to Managed Democracy. The Ministry maintains a registry of known dissidents, non-supporters, and potential Automaton sympathizers.
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => router.push('/(tabs)/dissidents')}
            style={styles.warningButton}
          >
            <AlertTriangle size={20} color={Colors.red} />
            <Text style={styles.warningButtonText}>
              VIEW DISSIDENT REGISTRY
            </Text>
            <AlertTriangle size={20} color={Colors.red} />
          </TouchableOpacity>
        </TacticalPanel>

        <View style={styles.footer}>
          <HazardStripes />
          <Text style={styles.footerText}>
            Creek Radio - A Division of Super Earth Broadcasting Network
          </Text>
          <Text style={styles.footerSmall}>
            Approved by the Ministry of Truth - For Managed Democracy
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
    marginBottom: 16,
  },
  headerContent: {
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.magenta,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 11,
    color: Colors.text,
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 16,
  },
  infoPanel: {
    marginBottom: 16,
    backgroundColor: `${Colors.green}20`,
  },
  infoHeader: {
    flexDirection: 'row',
    gap: 12,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.green,
    marginTop: 4,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.green,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 11,
    color: Colors.text,
    lineHeight: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.magenta,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
    marginVertical: 16,
  },
  platformCard: {
    marginBottom: 16,
  },
  platformHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  platformTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.green,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  platformSubtitle: {
    fontSize: 11,
    color: Colors.textDim,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  platformButton: {
    backgroundColor: Colors.bgLight,
    borderWidth: 2,
    borderColor: Colors.green,
    paddingVertical: 12,
    alignItems: 'center',
  },
  platformButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.green,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  contributorsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.magenta,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 16,
  },
  contributorsSubtitle: {
    fontSize: 11,
    color: Colors.text,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 16,
  },
  contributorsList: {
    gap: 12,
  },
  contributorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: Colors.bg,
    borderWidth: 1,
    borderColor: Colors.borderDim,
  },
  contributorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  contributorName: {
    fontSize: 12,
    color: Colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  separator: {
    height: 1,
    backgroundColor: Colors.borderDim,
    marginVertical: 8,
  },
  patreonLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.magenta,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 8,
  },
  contributorsFooter: {
    fontSize: 10,
    color: Colors.textDim,
    textAlign: 'center',
    marginTop: 16,
  },
  reminderPanel: {
    backgroundColor: Colors.bgPanel,
    borderWidth: 2,
    borderColor: Colors.magenta,
    padding: 16,
    marginVertical: 16,
  },
  reminderTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.magenta,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  reminderText: {
    fontSize: 10,
    color: Colors.textDim,
    textTransform: 'uppercase',
    lineHeight: 14,
  },
  warningPanel: {
    marginBottom: 16,
    backgroundColor: `${Colors.red}20`,
  },
  warningHeader: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  warningContent: {
    flex: 1,
  },
  warningTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.red,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  warningText: {
    fontSize: 11,
    color: Colors.textDim,
    textTransform: 'uppercase',
    lineHeight: 16,
  },
  warningButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#00000080',
    borderWidth: 2,
    borderColor: Colors.red,
    paddingVertical: 12,
  },
  warningButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.red,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  footer: {
    marginTop: 24,
    paddingTop: 24,
    borderTopWidth: 2,
    borderTopColor: Colors.border,
    alignItems: 'center',
    gap: 12,
  },
  footerText: {
    fontSize: 11,
    color: Colors.textDim,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  footerSmall: {
    fontSize: 10,
    color: Colors.textDim,
    textAlign: 'center',
  },
});
