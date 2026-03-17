import { Platform } from 'react-native';

if (Platform.OS !== 'web') {
  const TrackPlayer = require('react-native-track-player').default;
  const { PlaybackService } = require('./services/PlaybackService');
  TrackPlayer.registerPlaybackService(() => PlaybackService);
}

require('expo-router/entry');
