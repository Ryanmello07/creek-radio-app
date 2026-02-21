const TrackPlayer = require('react-native-track-player').default;

TrackPlayer.registerPlaybackService(() => require('./service'));

require('expo-router/entry');
