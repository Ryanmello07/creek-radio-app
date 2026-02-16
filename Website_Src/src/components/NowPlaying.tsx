import { Music2, Signal } from 'lucide-react';
import { StreamMetadata } from '../services/icecastMetadata';

interface NowPlayingProps {
  metadata: StreamMetadata;
}

export function NowPlaying({ metadata }: NowPlayingProps) {
  return (
    <div className="tactical-panel p-4 h-full">
      <div className="tactical-panel-inner p-5 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <Signal className="w-4 h-4 text-helldiver-green" />
          <span className="text-xs text-helldiver-green uppercase tracking-widest font-bold">
            Now Broadcasting
          </span>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="bg-helldiver-bgLight border border-helldiver-magenta p-4 flex-shrink-0">
            <Music2 className="w-10 h-10 text-helldiver-magenta" strokeWidth={1.5} />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-bold text-helldiver-magenta glow-text-magenta truncate">
              {metadata.song}
            </h2>
            <p className="text-base text-helldiver-text truncate">
              {metadata.artist}
            </p>
          </div>
        </div>

        <div className="mt-auto flex gap-6 text-sm border-t border-helldiver-borderDim pt-3">
          <div>
            <span className="text-helldiver-textDim uppercase tracking-wider text-xs">Bitrate:</span>
            <span className="text-helldiver-white ml-2 font-mono text-xs">{metadata.bitrate}</span>
          </div>
          <div>
            <span className="text-helldiver-textDim uppercase tracking-wider text-xs">Status:</span>
            <span className={`ml-2 font-bold text-xs ${metadata.serverStatus === 'online' ? 'text-helldiver-green' : 'text-helldiver-red'}`}>
              {metadata.serverStatus.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
