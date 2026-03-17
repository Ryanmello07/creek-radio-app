import { useState, useEffect, useRef, useCallback } from 'react';
import { useAudioPlayer, AudioSource, setAudioModeAsync } from 'expo-audio';

const STREAM_URL = 'https://streaming.live365.com/a50373';

export function useRadioPlayer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const player = useAudioPlayer({ uri: STREAM_URL } as AudioSource);
  const volumeRef = useRef(0.7);

  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  useEffect(() => {
    player.volume = isMuted ? 0 : volume;
  }, [volume, isMuted, player]);

  useEffect(() => {
    setAudioModeAsync({
      shouldPlayInBackground: true,
      playsInSilentMode: true,
      interruptionMode: 'doNotMix',
    }).catch((error) => {
      console.error('Failed to set audio mode:', error);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (isPlaying) {
        player.pause();
      }
    };
  }, [player, isPlaying]);

  const togglePlay = useCallback(async () => {
    try {
      if (isPlaying) {
        setIsPlaying(false);
        player.pause();
      } else {
        setIsLoading(true);
        setIsPlaying(true);
        player.play();
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Playback error:', error);
      setIsLoading(false);
      setIsPlaying(false);
    }
  }, [isPlaying, player]);

  const toggleMute = useCallback(() => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    player.volume = newMuted ? 0 : volume;
  }, [isMuted, volume, player]);

  const handleVolumeChange = useCallback(
    (newVolume: number) => {
      setVolume(newVolume);
      if (!isMuted) {
        player.volume = newVolume;
      }
    },
    [isMuted, player]
  );

  return {
    isLoading,
    isPlaying,
    volume,
    isMuted,
    togglePlay,
    toggleMute,
    handleVolumeChange,
  };
}
