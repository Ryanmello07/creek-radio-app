import TrackPlayer, { Event } from 'react-native-track-player';

module.exports = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.RemoteStop, () => TrackPlayer.stop());
  TrackPlayer.addEventListener(Event.RemoteDuck, async (e: { paused: boolean; permanent: boolean }) => {
    if (e.permanent) {
      await TrackPlayer.pause();
    } else if (e.paused) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  });
};
