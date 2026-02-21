import { Signal } from 'lucide-react';

const LIVE365_EMBED_URL = 'https://live365.com/embeds/v1/player/a50373?s=sm&m=dark&c=mp3';

export function NowPlaying() {
  return (
    <div className="tactical-panel p-4 h-full">
      <div className="tactical-panel-inner p-5 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <Signal className="w-4 h-4 text-helldiver-green" />
          <span className="text-xs text-helldiver-green uppercase tracking-widest font-bold font-mono">
            LIVE BROADCAST FEED
          </span>
        </div>

        <div className="flex-1 flex justify-center items-start">
          <div className="relative">
            <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-helldiver-magenta"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-helldiver-magenta"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-helldiver-magenta"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-helldiver-magenta"></div>
            <iframe
              width="300"
              height="614"
              frameBorder="0"
              src={LIVE365_EMBED_URL}
              title="Creek Radio Live365 Player"
              className="border border-helldiver-borderDim max-w-full"
              allow="autoplay"
            />
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-helldiver-borderDim">
          <div className="text-xs text-helldiver-textDim uppercase tracking-wider font-mono text-center">
            POWERED BY LIVE365 // SUPER EARTH BROADCASTING
          </div>
        </div>
      </div>
    </div>
  );
}
