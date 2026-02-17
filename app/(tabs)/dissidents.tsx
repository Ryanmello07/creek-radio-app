import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AlertTriangle, Skull, ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { TacticalPanel } from '@/components/TacticalPanel';
import { HazardStripes } from '@/components/HazardStripes';
import { dissidents } from '@/data/dissidents';
import { DISSIDENT_IMAGES } from '@/constants/images';

export default function DissidentsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.banner}>
          <HazardStripes variant="red" />
          <View style={styles.bannerContent}>
            <Text style={styles.bannerText}>
              THREAT LEVEL: MAXIMUM - DEMOCRACY UNDER ATTACK
            </Text>
          </View>
          <HazardStripes variant="red" />
        </View>

        <TacticalPanel variant="red" style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerTitle}>
              <AlertTriangle size={32} color={Colors.red} />
              <Text style={styles.title}>DISSIDENT REGISTRY</Text>
              <AlertTriangle size={32} color={Colors.red} />
            </View>
            <Text style={styles.subtitle}>
              Ministry of Truth Warning: The following citizens have abandoned Creek Radio, refused to support Managed Democracy, or shown signs of Automaton sympathies.
            </Text>
          </View>
        </TacticalPanel>

        <TacticalPanel variant="red" style={styles.alertPanel}>
          <View style={styles.alertHeader}>
            <View style={styles.alertIndicator} />
            <View style={styles.alertContent}>
              <Text style={styles.alertTitle}>
                MINISTRY OF DEFENSE ALERT
              </Text>
              <Text style={styles.alertText}>
                These individuals have demonstrated treasonous behavior by failing to support Creek Radio's mission of spreading Managed Democracy. Their names are recorded for posterity as enemies of freedom and potential Automaton collaborators.
              </Text>
            </View>
          </View>
        </TacticalPanel>

        {dissidents.some(d => d.mostWanted) && (
          <>
            <View style={styles.mostWantedHeader}>
              <Skull size={40} color={Colors.red} />
              <Text style={styles.mostWantedTitle}>MOST WANTED</Text>
              <Skull size={40} color={Colors.red} />
            </View>

            {dissidents.filter(d => d.mostWanted).map((dissident) => (
              <TacticalPanel key={dissident.id} variant="red" style={styles.mostWantedCard}>
                <HazardStripes variant="red" />

                <View style={styles.extremeThreatBadge}>
                  <Text style={styles.extremeThreatText}>EXTREME THREAT</Text>
                </View>

                <View style={styles.mostWantedContent}>
                  {(DISSIDENT_IMAGES[dissident.id] || dissident.profileImage) && (
                    <Image
                      source={DISSIDENT_IMAGES[dissident.id] || { uri: dissident.profileImage }}
                      style={styles.profileImage}
                    />
                  )}
                  <View style={styles.mostWantedInfo}>
                    <Text style={styles.dissidentName}>{dissident.name}</Text>
                    <Text style={styles.dissidentDate}>[11/01/2186]</Text>

                    <View style={styles.crimeBox}>
                      <Text style={styles.crimeLabel}>⚠ CRIME:</Text>
                      <Text style={styles.crimeText}>{dissident.reason}</Text>
                    </View>

                    {dissident.notes && (
                      <View style={styles.notesBox}>
                        <Text style={styles.notesLabel}>ADDITIONAL INTEL:</Text>
                        <Text style={styles.notesText}>{dissident.notes}</Text>
                      </View>
                    )}
                  </View>
                </View>

                <HazardStripes variant="red" />
              </TacticalPanel>
            ))}
          </>
        )}

        {dissidents.some(d => !d.mostWanted && !d.minorInfraction) && (
          <>
            <Text style={styles.sectionTitle}>KNOWN DISSIDENTS</Text>
            {dissidents.filter(d => !d.mostWanted && !d.minorInfraction).map((dissident) => (
              <TacticalPanel key={dissident.id} variant="red">
                <View style={styles.dissidentCard}>
                  <Skull size={32} color={Colors.red} />
                  <View style={styles.dissidentInfo}>
                    <View style={styles.dissidentHeader}>
                      <Text style={styles.dissidentNameSmall}>{dissident.name}</Text>
                      <Text style={styles.dissidentDate}>[11/01/2186]</Text>
                    </View>
                    <View style={styles.offenseBox}>
                      <Text style={styles.offenseLabel}>OFFENSE:</Text>
                      <Text style={styles.offenseText}>{dissident.reason}</Text>
                    </View>
                  </View>
                </View>
              </TacticalPanel>
            ))}
          </>
        )}

        {dissidents.some(d => d.minorInfraction) && (
          <>
            <Text style={[styles.sectionTitle, { color: Colors.darkRed }]}>
              MINOR INFRACTIONS
            </Text>
            <TacticalPanel variant="red">
              <Text style={styles.minorSubtitle}>
                Citizens who have committed lesser offenses against Managed Democracy:
              </Text>
              <View style={styles.minorList}>
                {dissidents.filter(d => d.minorInfraction).map((dissident) => (
                  <View key={dissident.id} style={styles.minorItem}>
                    <View style={styles.minorDot} />
                    <View style={styles.minorInfo}>
                      <Text style={styles.minorName}>{dissident.name}</Text>
                      <Text style={styles.minorReason}>{dissident.reason}</Text>
                    </View>
                  </View>
                ))}
              </View>
              <Text style={styles.minorFooter}>
                Minor infractions are still recorded in perpetuity
              </Text>
            </TacticalPanel>
          </>
        )}

        <View style={styles.reminderPanel}>
          <Text style={styles.reminderTitle}>
            MINISTRY OF TRUTH REMINDER
          </Text>
          <Text style={styles.reminderText}>
            Citizens who fail to support Creek Radio demonstrate a lack of patriotism and commitment to Managed Democracy. Report suspicious behavior to your nearest democracy officer immediately.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push('/(tabs)/donations')}
          style={styles.returnButton}
        >
          <ArrowLeft size={20} color={Colors.red} />
          <Text style={styles.returnButtonText}>RETURN TO DONATIONS</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <HazardStripes variant="red" />
          <Text style={styles.footerText}>
            Dissident Registry - A Service of the Ministry of Truth
          </Text>
          <Text style={styles.footerSmall}>
            For Managed Democracy - Against the Automaton Threat
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0000',
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
    backgroundColor: '#00000080',
    paddingVertical: 12,
    alignItems: 'center',
  },
  bannerText: {
    color: Colors.red,
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
    color: Colors.red,
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
  alertPanel: {
    marginBottom: 16,
    backgroundColor: '#00000080',
  },
  alertHeader: {
    flexDirection: 'row',
    gap: 12,
  },
  alertIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.red,
    marginTop: 4,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.red,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  alertText: {
    fontSize: 11,
    color: Colors.text,
    lineHeight: 16,
  },
  mostWantedHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginVertical: 24,
  },
  mostWantedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.red,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  mostWantedCard: {
    marginBottom: 16,
    backgroundColor: '#00000080',
  },
  extremeThreatBadge: {
    position: 'absolute',
    top: 28,
    right: 16,
    backgroundColor: Colors.red,
    paddingHorizontal: 12,
    paddingVertical: 6,
    zIndex: 1,
  },
  extremeThreatText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  mostWantedContent: {
    paddingVertical: 24,
    gap: 16,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.red,
  },
  mostWantedInfo: {
    width: '100%',
    gap: 12,
  },
  dissidentName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.red,
    textTransform: 'uppercase',
    letterSpacing: 2,
    textAlign: 'center',
  },
  dissidentDate: {
    fontSize: 10,
    color: Colors.darkRed,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  crimeBox: {
    backgroundColor: '#00000080',
    borderWidth: 2,
    borderColor: Colors.red,
    padding: 16,
  },
  crimeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.red,
    marginBottom: 8,
  },
  crimeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.red,
    textTransform: 'uppercase',
    lineHeight: 20,
  },
  notesBox: {
    backgroundColor: '#00000060',
    borderWidth: 2,
    borderColor: Colors.darkRed,
    padding: 16,
  },
  notesLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: Colors.red,
    marginBottom: 8,
  },
  notesText: {
    fontSize: 11,
    color: Colors.textDim,
    textTransform: 'uppercase',
    lineHeight: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.red,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
    marginVertical: 16,
  },
  dissidentCard: {
    flexDirection: 'row',
    gap: 16,
  },
  dissidentInfo: {
    flex: 1,
  },
  dissidentHeader: {
    marginBottom: 12,
  },
  dissidentNameSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.red,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  offenseBox: {
    backgroundColor: '#00000060',
    borderLeftWidth: 4,
    borderLeftColor: Colors.red,
    padding: 12,
  },
  offenseLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: Colors.red,
    marginBottom: 4,
  },
  offenseText: {
    fontSize: 12,
    color: Colors.textDim,
    textTransform: 'uppercase',
  },
  minorSubtitle: {
    fontSize: 10,
    color: Colors.textDim,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 16,
  },
  minorList: {
    gap: 12,
    marginBottom: 16,
  },
  minorItem: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    backgroundColor: '#00000060',
    borderWidth: 1,
    borderColor: Colors.darkRed,
  },
  minorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.darkRed,
    marginTop: 4,
  },
  minorInfo: {
    flex: 1,
  },
  minorName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.red,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  minorReason: {
    fontSize: 10,
    color: Colors.textDim,
  },
  minorFooter: {
    fontSize: 10,
    color: Colors.textDim,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  reminderPanel: {
    backgroundColor: '#00000080',
    borderWidth: 2,
    borderColor: Colors.red,
    padding: 16,
    marginVertical: 16,
  },
  reminderTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.red,
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
  returnButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#00000080',
    borderWidth: 2,
    borderColor: Colors.red,
    paddingVertical: 16,
    marginBottom: 24,
  },
  returnButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.red,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  footer: {
    paddingTop: 24,
    borderTopWidth: 2,
    borderTopColor: Colors.red,
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
    color: Colors.red,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
