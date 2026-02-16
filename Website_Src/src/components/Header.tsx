import { Users, Archive } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  listenerCount?: number;
  theme?: 'magenta' | 'red';
  showArchiveButton?: boolean;
}

export function Header({ listenerCount, theme = 'magenta', showArchiveButton = true }: HeaderProps) {
  const location = useLocation();
  const isArchive = location.pathname === '/archive';

  const themeClasses = {
    magenta: {
      hazardStripes: 'hazard-stripes',
      border: 'border-helldiver-magenta',
      text: 'text-helldiver-magenta',
      glow: 'glow-text-magenta',
      hover: 'group-hover:text-helldiver-brightMagenta',
      accent: 'bg-helldiver-magenta',
      logo: '/creek_radio_icon_512.png',
      title: 'Creek Radio',
      subtitle: 'Super Earth Broadcasting Network'
    },
    red: {
      hazardStripes: 'hazard-stripes-red',
      border: 'border-helldiver-red',
      text: 'text-helldiver-red',
      glow: 'glow-text-red',
      hover: 'group-hover:text-red-400',
      accent: 'bg-helldiver-red',
      logo: '/dissident-logo.png',
      title: 'Dissident Registry',
      subtitle: 'Ministry of Truth Database'
    }
  };

  const colors = themeClasses[theme];

  return (
    <header className="relative">
      <div className={`${colors.hazardStripes} h-3`}></div>

      <div className={`bg-helldiver-bgLight border-b-4 ${colors.border}`}>
        <div className="container mx-auto px-3 py-4 md:px-4 md:py-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">
            <Link to="/" className="flex items-center gap-2 md:gap-4 group">
              <div className="relative shrink-0">
                <img
                  src={colors.logo}
                  alt={theme === 'red' ? 'Dissident Logo' : 'Creek Radio Logo'}
                  className="w-12 h-12 md:w-24 md:h-24 object-contain"
                />
              </div>

              <div>
                <h1 className={`text-2xl md:text-4xl font-bold ${colors.text} ${colors.glow} uppercase tracking-wider ${colors.hover} transition-colors`}>
                  {colors.title}
                </h1>
                <p className="text-helldiver-white text-xs md:text-sm uppercase tracking-widest mt-1">
                  {colors.subtitle}
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
              {showArchiveButton && (
                <Link
                  to={isArchive ? '/' : '/archive'}
                  className="tactical-button flex items-center gap-2 text-xs md:text-sm py-2 px-4 md:py-3 md:px-6"
                >
                  <Archive className="w-4 h-4" />
                  <span>{isArchive ? 'Live Radio' : 'Archive'}</span>
                </Link>
              )}

              {listenerCount !== undefined && (
                <div className="tactical-panel flex-1 md:flex-none px-4 py-2 md:px-6 md:py-4">
                  <div className="tactical-panel-inner px-3 py-1.5 md:px-4 md:py-2">
                    <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-helldiver-green" />
                      <div>
                        <div className="text-xs md:text-xs text-helldiver-textDim uppercase tracking-wider">
                          Forces in Reserve
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-helldiver-green glow-text-green font-mono">
                          {listenerCount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`${colors.accent} h-1`}></div>
    </header>
  );
}
