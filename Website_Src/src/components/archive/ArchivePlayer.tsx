import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Music2 } from 'lucide-react';
import { Song, formatDuration } from '../../data/songs';

interface ArchivePlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onEnded: () => void;
  onPlayingChange: (playing: boolean) => void;
  onDurationLoaded: (songId: string, duration: number) => void;
  onCurrentTimeChange?: (time: number) => void;
  seekToTime?: number;
}

export function ArchivePlayer({
  currentSong,
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
  onEnded,
  onPlayingChange,
  onDurationLoaded,
  onCurrentTimeChange,
  seekToTime,
}: ArchivePlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const isSeeking = useRef(false);
  const shouldPlayAfterSeek = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      if (!isSeeking.current) {
        setCurrentTime(audio.currentTime);
      }
    };
    const onDurationChange = () => {
      const dur = audio.duration || 0;
      setDuration(dur);
      if (dur > 0 && currentSong) {
        onDurationLoaded(currentSong.id, Math.floor(dur));
      }
    };
    const onAudioEnded = () => onEnded();
    const onError = () => {
      if (!isSeeking.current) {
        onPlayingChange(false);
      }
    };
    const onSeeked = () => {
      isSeeking.current = false;
      if (shouldPlayAfterSeek.current) {
        shouldPlayAfterSeek.current = false;
        audio.play().catch(() => onPlayingChange(false));
      }
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('durationchange', onDurationChange);
    audio.addEventListener('ended', onAudioEnded);
    audio.addEventListener('error', onError);
    audio.addEventListener('seeked', onSeeked);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('durationchange', onDurationChange);
      audio.removeEventListener('ended', onAudioEnded);
      audio.removeEventListener('error', onError);
      audio.removeEventListener('seeked', onSeeked);
    };
  }, [onEnded, onPlayingChange, currentSong, onDurationLoaded]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const playCurrent = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !currentSong) return;
    try {
      await audio.play();
    } catch {
      onPlayingChange(false);
    }
  }, [currentSong, onPlayingChange]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong) return;

    audio.src = currentSong.audioSrc;
    audio.load();
    setCurrentTime(0);
    setDuration(0);
  }, [currentSong?.id]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong) return;

    if (isPlaying) {
      playCurrent();
    } else {
      audio.pause();
    }
  }, [isPlaying, playCurrent, currentSong]);

  useEffect(() => {
    if (onCurrentTimeChange) {
      onCurrentTimeChange(currentTime);
    }
  }, [currentTime, onCurrentTimeChange]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || seekToTime === undefined || !duration || isNaN(duration)) return;

    isSeeking.current = true;
    shouldPlayAfterSeek.current = isPlaying;

    if (audio.readyState >= 2) {
      setCurrentTime(seekToTime);
      audio.currentTime = seekToTime;
    } else {
      const onLoadedMetadata = () => {
        setCurrentTime(seekToTime);
        audio.currentTime = seekToTime;
        audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      };
      audio.addEventListener('loadedmetadata', onLoadedMetadata);
    }
  }, [seekToTime, isPlaying, duration]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration || audio.readyState < 2) return;
    const time = parseFloat(e.target.value);
    isSeeking.current = true;
    shouldPlayAfterSeek.current = isPlaying;
    setCurrentTime(time);
    audio.currentTime = time;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) setIsMuted(false);
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!currentSong) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-helldiver-bgPanel border-t-2 border-helldiver-borderDim">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-3 text-helldiver-textDim">
            <Music2 className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider font-mono">
              Select a track to begin playback
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-helldiver-bgPanel border-t-2 border-helldiver-magenta">
      <div className="container mx-auto px-4 pt-3 pb-2">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono text-helldiver-textDim w-12 text-right flex-shrink-0">
            {formatDuration(Math.floor(currentTime))}
          </span>
          <div className="flex-1 relative h-6 flex items-center group">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 bg-helldiver-bg border border-helldiver-borderDim overflow-hidden">
              <div
                className="h-full bg-helldiver-green transition-[width] duration-75"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              className="seek-slider relative z-10"
            />
          </div>
          <span className="text-xs font-mono text-helldiver-textDim w-12 flex-shrink-0">
            {duration > 0 ? formatDuration(Math.floor(duration)) : '--:--'}
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={onPrevious}
              className="p-2 text-helldiver-magenta hover:text-helldiver-brightMagenta transition-colors"
            >
              <SkipBack className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <button
              onClick={onPlayPause}
              className="w-10 h-10 md:w-12 md:h-12 bg-helldiver-bgLight border-2 border-helldiver-green flex items-center justify-center hover:bg-helldiver-green transition-all duration-200 group"
              style={{
                clipPath: 'polygon(0 6px, 6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px))'
              }}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 md:w-6 md:h-6 text-helldiver-green group-hover:text-helldiver-bg" />
              ) : (
                <Play className="w-5 h-5 md:w-6 md:h-6 text-helldiver-green group-hover:text-helldiver-bg ml-0.5" />
              )}
            </button>

            <button
              onClick={onNext}
              className="p-2 text-helldiver-magenta hover:text-helldiver-brightMagenta transition-colors"
            >
              <SkipForward className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-helldiver-white truncate">
              {currentSong.title}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 w-36">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-1 text-helldiver-magenta hover:text-helldiver-brightMagenta transition-colors"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <div className="flex-1 relative h-6 flex items-center">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-helldiver-bg border border-helldiver-borderDim overflow-hidden">
                <div
                  className="h-full bg-helldiver-magenta/60"
                  style={{ width: `${volume * 100}%` }}
                />
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} preload="auto" />
    </div>
  );
}
