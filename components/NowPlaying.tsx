import { View, Text, StyleSheet } from 'react-native';
import { Music2, Signal } from 'lucide-react-native';
import { Colors } from '@/constants/Colors';
import { TacticalPanel } from './TacticalPanel';
import { StreamMetadata } from '@/services/icecastMetadata';

interface NowPlayingProps {
  metadata: StreamMetadata;
}

export function NowPlaying({ metadata }: NowPlayingProps) {
  return (
    <TacticalPanel style={styles.container}>
      <View style={styles.header}>
        <Signal size={16} color={Colors.green} />
        <Text style={styles.headerText}>NOW BROADCASTING</Text>
      </View>

      <View style={styles.trackInfo}>
        <View style={styles.iconContainer}>
          <Music2 size={40} color={Colors.magenta} strokeWidth={1.5} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.songTitle} numberOfLines={1}>
            {metadata.song}
          </Text>
          <Text style={styles.artistName} numberOfLines={1}>
            {metadata.artist}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>BITRATE:</Text>
          <Text style={styles.statValue}>{metadata.bitrate}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>STATUS:</Text>
          <Text
            style={[
              styles.statValue,
              {
                color:
                  metadata.serverStatus === 'online'
                    ? Colors.green
                    : Colors.red,
              },
            ]}
          >
            {metadata.serverStatus.toUpperCase()}
          </Text>
        </View>
      </View>
    </TacticalPanel>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 10,
    color: Colors.green,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  trackInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  iconContainer: {
    backgroundColor: Colors.bgLight,
    borderWidth: 1,
    borderColor: Colors.magenta,
    padding: 16,
  },
  textContainer: {
    flex: 1,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.magenta,
    marginBottom: 4,
  },
  artistName: {
    fontSize: 14,
    color: Colors.text,
  },
  footer: {
    flexDirection: 'row',
    gap: 24,
    borderTopWidth: 1,
    borderTopColor: Colors.borderDim,
    paddingTop: 12,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statLabel: {
    fontSize: 10,
    color: Colors.textDim,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  statValue: {
    fontSize: 10,
    color: Colors.white,
    fontWeight: 'bold',
  },
});
