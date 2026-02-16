import { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react-native';
import { Audio } from 'expo-av';
import { Colors } from '@/constants/Colors';
import { TacticalPanel } from './TacticalPanel';

const STREAM_URL = 'https://creekradio.nohost.me/radio';

interface RadioPlayerProps {
  onPlayStateChange?: (isPlaying: boolean) => void;
}

export function RadioPlayer({ onPlayStateChange }: RadioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const soundRef = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    setupAudio();
    return () => {
      unloadAudio();
    };
  }, []);

  const setupAudio = async () => {
    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        shouldDuckAndroid: true,
      });
    } catch (error) {
      console.error('Error setting up audio:', error);
    }
  };

  const unloadAudio = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }
    } catch (error) {
      console.error('Error unloading audio:', error);
    }
  };

  const togglePlay = async () => {
    try {
      if (isPlaying) {
        if (soundRef.current) {
          try {
            await soundRef.current.unloadAsync();
          } catch {}
          soundRef.current = null;
        }
        setIsPlaying(false);
        onPlayStateChange?.(false);
      } else {
        setIsLoading(true);
        const { sound } = await Audio.Sound.createAsync(
          { uri: STREAM_URL },
          { shouldPlay: true, volume: isMuted ? 0 : volume },
          onPlaybackStatusUpdate
        );
        soundRef.current = sound;
        setIsPlaying(true);
        setIsLoading(false);
        onPlayStateChange?.(true);
      }
    } catch (error) {
      console.error('Playback error:', error);
      setIsLoading(false);
    }
  };

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.isLoaded && status.didJustFinish) {
      setIsPlaying(false);
      onPlayStateChange?.(false);
    }
  };

  const toggleMute = async () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (soundRef.current) {
      await soundRef.current.setVolumeAsync(newMuted ? 0 : volume);
    }
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
          onPress={togglePlay}
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
  playButtonActive: {},
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
