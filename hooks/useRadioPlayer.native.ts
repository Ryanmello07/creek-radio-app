import { useState, useEffect, useRef, useCallback } from 'react';
import TrackPlayer, {
  State,
  usePlaybackState,
  Capability,
} from 'react-native-track-player';

const STREAM_URL = 'https://streaming.live365.com/a50373';

let isSetup = false;

async function setupPlayer() {
  if (isSetup) return;
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
      compactCapabilities: [Capability.Play, Capability.Pause],
      notificationCapabilities: [Capability.Play, Capability.Pause],
    });
    isSetup = true;
  } catch (e: any) {
    if (e?.message?.includes('already been initialized')) {
      isSetup = true;
    } else {
      throw e;
    }
  }
}

export function useRadioPlayer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [ready, setReady] = useState(false);
  const previousVolume = useRef(0.7);
  const playbackState = usePlaybackState();

  useEffect(() => {
    setupPlayer()
      .then(() => setReady(true))
      .catch((err) => console.error('TrackPlayer setup failed:', err));
  }, []);

  useEffect(() => {
    if (!ready) return;
    const state = playbackState.state;
    if (state === State.Playing || state === State.Buffering) {
      setIsPlaying(true);
      setIsLoading(state === State.Buffering);
    } else {
      setIsPlaying(false);
      setIsLoading(false);
    }
  }, [playbackState, ready]);

  useEffect(() => {
    if (!ready) return;
    TrackPlayer.setVolume(isMuted ? 0 : volume);
  }, [volume, isMuted, ready]);

  const togglePlay = useCallback(async () => {
    if (!ready) return;
    try {
      if (isPlaying) {
        await TrackPlayer.pause();
      } else {
        setIsLoading(true);
        const queue = await TrackPlayer.getQueue();
        if (queue.length === 0) {
          await TrackPlayer.add({
            id: 'creek-radio-stream',
            url: STREAM_URL,
            title: 'Creek Radio',
            artist: 'Super Earth Broadcasting Network',
            isLiveStream: true,
          });
        } else {
          await TrackPlayer.reset();
          await TrackPlayer.add({
            id: 'creek-radio-stream',
            url: STREAM_URL,
            title: 'Creek Radio',
            artist: 'Super Earth Broadcasting Network',
            isLiveStream: true,
          });
        }
        await TrackPlayer.play();
      }
    } catch (error) {
      console.error('Playback error:', error);
      setIsLoading(false);
      setIsPlaying(false);
    }
  }, [ready, isPlaying]);

  const toggleMute = useCallback(() => {
    if (isMuted) {
      setIsMuted(false);
      setVolume(previousVolume.current);
    } else {
      previousVolume.current = volume;
      setIsMuted(true);
    }
  }, [isMuted, volume]);

  const handleVolumeChange = useCallback(
    (newVolume: number) => {
      setVolume(newVolume);
      if (isMuted) {
        setIsMuted(false);
      }
    },
    [isMuted]
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
