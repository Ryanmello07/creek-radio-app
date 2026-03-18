import TrackPlayer, { Event } from 'react-native-track-player';

async function PlaybackService() {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.RemoteStop, () => TrackPlayer.stop());
}

try {
  TrackPlayer.registerPlaybackService(() => PlaybackService);
} catch (e) {
  console.warn('TrackPlayer.registerPlaybackService failed:', e);
}
