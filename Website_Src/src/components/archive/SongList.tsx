import { Play, Pause, Music2 } from 'lucide-react';
import { Song } from '../../data/songs';

interface SongListProps {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  onSelectSong: (song: Song) => void;
  durations: Record<string, number>;
  formatDuration: (seconds: number) => string;
}

export function SongList({ songs, currentSong, isPlaying, onSelectSong, durations, formatDuration }: SongListProps) {
  return (
    <div className="tactical-panel p-4 md:p-6">
      <div className="tactical-panel-inner p-4 md:p-6">
        <div className="hidden md:grid grid-cols-[40px_1fr_100px] gap-4 px-4 pb-3 mb-3 border-b-2 border-helldiver-borderDim text-xs text-helldiver-textDim uppercase tracking-wider font-mono">
          <span>#</span>
          <span>Title</span>
          <span className="text-right">Duration</span>
        </div>

        <div className="space-y-1">
          {songs.map((song, index) => {
            const isActive = currentSong?.id === song.id;
            const dur = durations[song.id];

            return (
              <button
                key={song.id}
                onClick={() => onSelectSong(song)}
                className={`w-full grid grid-cols-[40px_1fr] md:grid-cols-[40px_1fr_100px] gap-2 md:gap-4 px-4 py-3 text-left transition-all duration-150 border border-transparent group ${
                  isActive
                    ? 'bg-helldiver-magenta/10 border-helldiver-magenta shadow-glow-magenta'
                    : 'hover:bg-helldiver-bgLight hover:border-helldiver-borderDim'
                }`}
              >
                <div className="flex items-center">
                  {isActive && isPlaying ? (
                    <Pause className="w-4 h-4 text-helldiver-green" />
                  ) : isActive ? (
                    <Play className="w-4 h-4 text-helldiver-green" />
                  ) : (
                    <span className="text-sm font-mono text-helldiver-textDim group-hover:hidden">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  )}
                  {!isActive && (
                    <Play className="w-4 h-4 text-helldiver-magenta hidden group-hover:block" />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    {isActive && (
                      <Music2 className="w-3 h-3 text-helldiver-green flex-shrink-0 animate-pulse-slow" />
                    )}
                    <span className={`text-sm font-bold truncate ${isActive ? 'text-helldiver-green glow-text-green' : 'text-helldiver-white'}`}>
                      {song.title}
                    </span>
                  </div>
                </div>

                <span className="hidden md:block text-sm font-mono text-helldiver-textDim text-right self-center">
                  {dur ? formatDuration(dur) : '--:--'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
