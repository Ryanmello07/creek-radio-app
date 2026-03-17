import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react-native';
import Slider from '@react-native-community/slider';
import { Colors } from '@/constants/Colors';
import { TacticalPanel } from './TacticalPanel';
import { useRadioPlayer } from '@/hooks/useRadioPlayer';

interface RadioPlayerProps {
  onPlayStateChange?: (isPlaying: boolean) => void;
}

export function RadioPlayer({ onPlayStateChange }: RadioPlayerProps) {
  const {
    isLoading,
    isPlaying,
    volume,
    isMuted,
    togglePlay,
    toggleMute,
    handleVolumeChange,
  } = useRadioPlayer();

  const handleTogglePlay = async () => {
    await togglePlay();
    onPlayStateChange?.(!isPlaying);
  };

  const getStatusText = () => {
    if (isLoading) return 'CONNECTING...';
    if (isPlaying) return 'ONLINE';
    return 'STANDBY';
  };

  const getStatusColor = () => {
    if (isLoading) return Colors.yellow;
    if (isPlaying) return Colors.green;
    return Colors.textDim;
  };

  return (
    <TacticalPanel style={styles.container}>
      <View style={styles.statusHeader}>
        <View style={styles.statusInfo}>
          <View style={[styles.statusIndicator, { backgroundColor: getStatusColor() }]} />
          <View>
            <Text style={styles.statusLabel}>BROADCAST STATUS</Text>
            <Text style={styles.statusValue}>{getStatusText()}</Text>
          </View>
        </View>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          onPress={handleTogglePlay}
          style={styles.playButton}
          disabled={isLoading}
        >
          <View style={styles.playButtonCorners}>
            <View style={[styles.corner, styles.cornerTL]} />
            <View style={[styles.corner, styles.cornerTR]} />
            <View style={[styles.corner, styles.cornerBL]} />
            <View style={[styles.corner, styles.cornerBR]} />
          </View>
          {isPlaying ? (
            <>
              <Pause size={64} color={Colors.green} strokeWidth={3} />
              <Text style={styles.buttonLabel}>PAUSE</Text>
            </>
          ) : (
            <>
              <Play size={64} color={Colors.green} strokeWidth={3} />
              <Text style={styles.buttonLabel}>ENGAGE</Text>
            </>
          )}
        </TouchableOpacity>

        <View style={styles.volumeContainer}>
          <View style={styles.volumeHeader}>
            <Text style={styles.volumeLabel}>AUDIO LEVEL</Text>
            <Text style={styles.volumeValue}>{Math.round(volume * 100)}%</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1}
            value={volume}
            onValueChange={handleVolumeChange}
            minimumTrackTintColor={Colors.magenta}
            maximumTrackTintColor={Colors.borderDim}
            thumbTintColor={Colors.green}
            disabled={isMuted}
          />
          <TouchableOpacity onPress={toggleMute} style={styles.muteButton}>
            {isMuted ? (
              <VolumeX size={24} color={Colors.magenta} />
            ) : (
              <Volume2 size={24} color={Colors.magenta} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TacticalPanel>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  statusHeader: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.borderDim,
    paddingBottom: 12,
    marginBottom: 24,
  },
  statusInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  statusLabel: {
    fontSize: 10,
    color: Colors.textDim,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  statusValue: {
    fontSize: 12,
    color: Colors.white,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: 'bold',
    marginTop: 2,
  },
  controls: {
    alignItems: 'center',
    gap: 24,
  },
  playButton: {
    width: 160,
    height: 160,
    backgroundColor: Colors.bgLight,
    borderWidth: 4,
    borderColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  playButtonCorners: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  corner: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderColor: Colors.magenta,
  },
  cornerTL: {
    top: -8,
    left: -8,
    borderTopWidth: 2,
    borderLeftWidth: 2,
  },
  cornerTR: {
    top: -8,
    right: -8,
    borderTopWidth: 2,
    borderRightWidth: 2,
  },
  cornerBL: {
    bottom: -8,
    left: -8,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  cornerBR: {
    bottom: -8,
    right: -8,
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
  buttonLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: Colors.green,
    marginTop: 8,
  },
  volumeContainer: {
    width: '100%',
    backgroundColor: Colors.bgLight,
    borderWidth: 2,
    borderColor: Colors.borderDim,
    padding: 16,
  },
  volumeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 12,
  },
  volumeLabel: {
    fontSize: 10,
    color: Colors.textDim,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  volumeValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.magenta,
  },
  muteButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.borderDim,
    alignSelf: 'flex-start',
  },
});
