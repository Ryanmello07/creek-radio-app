import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DonationBanner() {
  return (
    <div className="tactical-panel p-4 md:p-6">
      <div className="tactical-panel-inner p-4 md:p-6">
        <Link
          to="/donate"
          className="flex flex-col items-center gap-3 group"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-helldiver-red" />
            <p className="text-xs text-helldiver-textDim uppercase tracking-widest font-bold">
              Support Managed Democracy Broadcasting
            </p>
            <Heart className="w-5 h-5 text-helldiver-red" />
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-helldiver-green animate-pulse"></span>
            <p className="text-lg md:text-2xl font-bold text-helldiver-green uppercase tracking-wider glow-text-green group-hover:brightness-125 transition-all">
              Support Creek Radio
            </p>
            <span className="w-2 h-2 rounded-full bg-helldiver-green animate-pulse"></span>
          </div>

          <p className="text-xs text-helldiver-textDim uppercase tracking-wider text-center">
            Your donations ensure continued freedom broadcasts across Super Earth
          </p>
        </Link>
      </div>
    </div>
  );
}
