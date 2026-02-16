import { Radio } from 'lucide-react';

export function DiscordBanner() {
  return (
    <div className="tactical-panel p-4 md:p-6">
      <div className="tactical-panel-inner p-4 md:p-6">
        <a
          href="https://discord.gg/creekradio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 group"
        >
          <div className="flex items-center gap-3">
            <Radio className="w-5 h-5 text-helldiver-magenta" />
            <p className="text-xs text-helldiver-textDim uppercase tracking-widest font-bold">
              Join The Broadcast Network
            </p>
            <Radio className="w-5 h-5 text-helldiver-magenta" />
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-helldiver-green animate-pulse"></span>
            <p className="text-lg md:text-2xl font-bold text-helldiver-green uppercase tracking-wider glow-text-green group-hover:text-helldiver-brightGreen transition-colors">
              discord.gg/creekradio
            </p>
            <span className="w-2 h-2 rounded-full bg-helldiver-green animate-pulse"></span>
          </div>

          <p className="text-xs text-helldiver-textDim uppercase tracking-wider">
            Citizens are encouraged to report for community duty
          </p>
        </a>
      </div>
    </div>
  );
}
