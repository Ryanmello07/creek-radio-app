import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { Database, ChevronDown, ChevronUp, Music2 } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { TacticalPanel } from '@/components/TacticalPanel';
import { HazardStripes } from '@/components/HazardStripes';
import { songs } from '@/data/songs';

export default function ArchiveScreen() {
  const [expandedSeason, setExpandedSeason] = useState<string | null>(null);

  const toggleTracklist = (id: string) => {
    setExpandedSeason(prev => (prev === id ? null : id));
  };

  const totalTracks = songs.reduce((sum, s) => sum + s.tracks.length, 0);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.banner}>
          <HazardStripes variant="thin" />
          <View style={styles.bannerContent}>
            <Text style={styles.bannerText}>
              CLASSIFIED AUDIO ARCHIVE - SUPER EARTH BROADCASTING
            </Text>
          </View>
          <HazardStripes variant="thin" />
        </View>

        <TacticalPanel style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerLeft}>
              <Database size={24} color={Colors.magenta} />
              <View>
                <Text style={styles.headerTitle}>AUDIO ARCHIVE</Text>
                <Text style={styles.headerSubtitle}>
                  Declassified broadcast recordings
                </Text>
              </View>
            </View>
            <View style={styles.stats}>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>SEASONS:</Text>
                <Text style={styles.statValue}>{songs.length}</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>TRACKS:</Text>
                <Text style={styles.statValue}>{totalTracks}</Text>
              </View>
            </View>
          </View>
        </TacticalPanel>

        {songs.map((song) => {
          const isExpanded = expandedSeason === song.id;

          return (
            <TacticalPanel key={song.id} style={styles.seasonPanel}>
              <View style={styles.seasonHeader}>
                <View style={styles.seasonTitleContainer}>
                  <Music2 size={20} color={Colors.green} />
                  <Text style={styles.seasonTitle}>{song.title}</Text>
                </View>
                <Text style={styles.trackCount}>{song.tracks.length} tracks</Text>
              </View>

              <View style={styles.playerContainer}>
                <WebView
                  source={{ uri: song.mixcloudEmbed }}
                  style={styles.webview}
                  scrollEnabled={false}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  mediaPlaybackRequiresUserAction={false}
                />
              </View>

              <TouchableOpacity
                onPress={() => toggleTracklist(song.id)}
                style={styles.tracklistToggle}
              >
                <Text style={styles.tracklistToggleText}>
                  {isExpanded ? 'HIDE' : 'VIEW'} TRACK LISTING
                </Text>
                {isExpanded ? (
                  <ChevronUp size={16} color={Colors.magenta} />
                ) : (
                  <ChevronDown size={16} color={Colors.textDim} />
                )}
              </TouchableOpacity>

              {isExpanded && (
                <View style={styles.tracklist}>
                  {song.tracks.map((track, index) => (
                    <View key={track.id} style={styles.trackItem}>
                      <Text style={styles.trackNumber}>
                        {(index + 1).toString().padStart(2, '0')}
                      </Text>
                      <View style={styles.trackInfo}>
                        <Text style={styles.trackTitle}>{track.title}</Text>
                        <Text style={styles.trackArtist}>{track.artist}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </TacticalPanel>
          );
        })}

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Creek Radio Archive - Super Earth Broadcasting Network
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
    marginBottom: 16,
  },
  headerContent: {
    gap: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.magenta,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 10,
    color: Colors.textDim,
    textTransform: 'uppercase',
    marginTop: 2,
  },
  stats: {
    flexDirection: 'row',
    gap: 24,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statLabel: {
    fontSize: 10,
    color: Colors.textDim,
    textTransform: 'uppercase',
  },
  statValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.green,
  },
  seasonPanel: {
    marginBottom: 16,
  },
  seasonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  seasonTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  seasonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  trackCount: {
    fontSize: 10,
    color: Colors.textDim,
  },
  playerContainer: {
    height: 180,
    backgroundColor: Colors.bg,
    borderWidth: 2,
    borderColor: Colors.borderDim,
    marginBottom: 12,
  },
  webview: {
    backgroundColor: Colors.bg,
  },
  tracklistToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.bgLight,
    borderWidth: 1,
    borderColor: Colors.borderDim,
  },
  tracklistToggleText: {
    fontSize: 10,
    color: Colors.textDim,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  tracklist: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: Colors.borderDim,
    backgroundColor: Colors.bg,
  },
  trackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: `${Colors.borderDim}30`,
  },
  trackNumber: {
    fontSize: 11,
    color: Colors.textDim,
    fontWeight: 'bold',
    width: 24,
  },
  trackInfo: {
    flex: 1,
  },
  trackTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 2,
  },
  trackArtist: {
    fontSize: 10,
    color: Colors.textDim,
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
    textAlign: 'center',
  },
});
