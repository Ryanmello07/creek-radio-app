import { Music2, Play } from 'lucide-react';
import { Track } from '../../data/songs';
import { formatDuration } from '../../data/songs';

interface TrackListProps {
  tracks: Track[];
  currentTime: number;
  onSeekToTrack: (timestamp: number) => void;
}

function getCurrentTrackIndex(tracks: Track[], currentTime: number): number {
  if (tracks.length === 0) return -1;

  for (let i = tracks.length - 1; i >= 0; i--) {
    if (currentTime >= tracks[i].timestamp) {
      return i;
    }
  }

  return -1;
}

export function TrackList({ tracks, currentTime, onSeekToTrack }: TrackListProps) {
  const currentTrackIndex = getCurrentTrackIndex(tracks, currentTime);

  return (
    <div className="tactical-panel p-4 md:p-6">
      <div className="tactical-panel-inner p-4 md:p-6">
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-bold text-helldiver-magenta uppercase tracking-wider glow-text-magenta flex items-center gap-2">
            <Music2 className="w-5 h-5" />
            Track Listing
          </h3>
          <p className="text-xs text-helldiver-textDim uppercase tracking-wider mt-1">
            {tracks.length} tracks in this broadcast
          </p>
        </div>

        <div className="hidden md:grid grid-cols-[40px_2fr_2fr_100px] gap-4 px-4 pb-3 mb-3 border-b-2 border-helldiver-borderDim text-xs text-helldiver-textDim uppercase tracking-wider font-mono">
          <span>#</span>
          <span>Title</span>
          <span>Artist</span>
          <span className="text-right">Time</span>
        </div>

        <div className="space-y-1 max-h-[600px] overflow-y-auto custom-scrollbar px-1">
          {tracks.map((track, index) => {
            const isActive = index === currentTrackIndex;
            const hasPassed = currentTime > track.timestamp && !isActive;

            return (
              <button
                key={track.id}
                onClick={() => onSeekToTrack(track.timestamp)}
                className={`w-full grid grid-cols-[32px_1fr_auto] md:grid-cols-[40px_2fr_2fr_100px] gap-1 md:gap-4 px-3 py-2 md:px-4 md:py-3 items-center text-left transition-all duration-150 border border-transparent group ${
                  isActive
                    ? 'bg-helldiver-green/10 border-helldiver-green'
                    : hasPassed
                    ? 'opacity-50 hover:opacity-75 hover:bg-helldiver-bgLight hover:border-helldiver-borderDim'
                    : 'hover:bg-helldiver-bgLight hover:border-helldiver-borderDim'
                }`}
                style={isActive ? { boxShadow: 'inset 0 0 12px rgba(0, 255, 65, 0.3), 0 0 4px rgba(0, 255, 65, 0.2)' } : undefined}
              >
                <div className="flex items-center">
                  {isActive ? (
                    <Music2 className="w-4 h-4 text-helldiver-green animate-pulse-slow" />
                  ) : (
                    <>
                      <span className="text-sm font-mono text-helldiver-textDim group-hover:hidden">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <Play className="w-4 h-4 text-helldiver-magenta hidden group-hover:block" />
                    </>
                  )}
                </div>

                <div className="min-w-0">
                  <span className={`text-sm font-bold truncate block ${isActive ? 'text-helldiver-green glow-text-green' : 'text-helldiver-white'}`}>
                    {track.title}
                  </span>
                  <span className="text-xs text-helldiver-textDim truncate block md:hidden">
                    {track.artist}
                  </span>
                </div>

                <span className={`text-xs md:text-sm font-mono text-right self-center md:hidden ${isActive ? 'text-helldiver-green' : 'text-helldiver-textDim'}`}>
                  {formatDuration(track.timestamp)}
                </span>

                <div className="hidden md:block min-w-0">
                  <span className="text-sm text-helldiver-white truncate block">
                    {track.artist}
                  </span>
                </div>

                <span className={`hidden md:block text-sm font-mono text-right self-center ${isActive ? 'text-helldiver-green' : 'text-helldiver-textDim'}`}>
                  {formatDuration(track.timestamp)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
