import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface RadioPlayerProps {
  streamUrl: string;
  onPlayStateChange?: (isPlaying: boolean) => void;
  onConnectionStateChange?: (state: 'idle' | 'connecting' | 'playing' | 'error') => void;
}

export function RadioPlayer({ streamUrl, onPlayStateChange, onConnectionStateChange }: RadioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [connectionState, setConnectionState] = useState<'idle' | 'connecting' | 'playing' | 'error'>('idle');
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlaying = () => {
      setConnectionState('playing');
      onConnectionStateChange?.('playing');
    };

    const handleWaiting = () => {
      setConnectionState('connecting');
      onConnectionStateChange?.('connecting');
    };

    const handleError = () => {
      setConnectionState('error');
      onConnectionStateChange?.('error');
      setIsPlaying(false);
      onPlayStateChange?.(false);
    };

    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('error', handleError);
    };
  }, [onConnectionStateChange, onPlayStateChange]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        setConnectionState('idle');
        onPlayStateChange?.(false);
        onConnectionStateChange?.('idle');
      } else {
        setConnectionState('connecting');
        onConnectionStateChange?.('connecting');
        await audio.play();
        setIsPlaying(true);
        onPlayStateChange?.(true);
      }
    } catch (error) {
      console.error('Playback error:', error);
      setConnectionState('error');
      onConnectionStateChange?.('error');
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const getStatusIndicatorClass = () => {
    switch (connectionState) {
      case 'playing':
        return 'status-online';
      case 'connecting':
        return 'status-buffering';
      case 'error':
        return 'status-offline';
      default:
        return 'bg-helldiver-textDim';
    }
  };

  const getStatusText = () => {
    switch (connectionState) {
      case 'playing':
        return 'ONLINE';
      case 'connecting':
        return 'CONNECTING...';
      case 'error':
        return 'ERROR';
      default:
        return 'STANDBY';
    }
  };

  return (
    <div className="tactical-panel p-8">
      <div className="tactical-panel-inner p-8">
        {/* Status Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-helldiver-borderDim">
          <div className="flex items-center gap-3">
            <div className={`status-indicator ${getStatusIndicatorClass()}`}></div>
            <div>
              <div className="text-xs text-helldiver-textDim uppercase tracking-wider font-mono">
                BROADCAST STATUS
              </div>
              <div className="text-sm font-bold text-helldiver-white uppercase tracking-widest font-mono">
                {getStatusText()}
              </div>
            </div>
          </div>
          <div className="hazard-stripes-thin h-8 w-24"></div>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Control Section */}
          <div className="w-full flex justify-center">
            <div className="relative">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-helldiver-magenta"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-helldiver-magenta"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-helldiver-magenta"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-helldiver-magenta"></div>

              {/* Tactical Play Button */}
              <button
                onClick={togglePlay}
                className="w-40 h-40 bg-helldiver-bgLight border-4 border-helldiver-green flex items-center justify-center hover:bg-helldiver-green hover:shadow-glow-green transition-all duration-200 group relative overflow-hidden"
                style={{
                  clipPath: 'polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))'
                }}
              >
                <div className="absolute inset-0 bg-helldiver-green opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative z-10 flex flex-col items-center gap-2">
                  {isPlaying ? (
                    <>
                      <Pause className="w-16 h-16 text-helldiver-green group-hover:text-helldiver-bg" strokeWidth={3} />
                      <span className="text-xs font-bold uppercase tracking-widest text-helldiver-green group-hover:text-helldiver-bg font-mono">
                        PAUSE
                      </span>
                    </>
                  ) : (
                    <>
                      <Play className="w-16 h-16 text-helldiver-green group-hover:text-helldiver-bg ml-1" strokeWidth={3} />
                      <span className="text-xs font-bold uppercase tracking-widest text-helldiver-green group-hover:text-helldiver-bg font-mono">
                        ENGAGE
                      </span>
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Volume Control Section */}
          <div className="w-full max-w-md bg-helldiver-bgLight border-2 border-helldiver-borderDim p-6"
            style={{
              clipPath: 'polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))'
            }}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="text-xs text-helldiver-textDim uppercase tracking-wider font-mono">
                AUDIO LEVEL
              </div>
              <div className="text-lg font-bold text-helldiver-magenta font-mono glow-text-magenta">
                {Math.round(volume * 100)}%
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleMute}
                className="text-helldiver-magenta hover:text-helldiver-brightMagenta transition-colors p-2 border border-helldiver-borderDim hover:border-helldiver-magenta"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>

              <div className="flex-1 relative h-8 flex items-center">
                <div className="absolute inset-0 border border-helldiver-borderDim bg-helldiver-bg overflow-hidden">
                  <div
                    className="h-full bg-helldiver-magenta/40"
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
      </div>

      <audio ref={audioRef} src={streamUrl} preload="none" />
    </div>
  );
}
