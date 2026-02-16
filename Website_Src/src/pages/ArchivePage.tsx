import { useState } from 'react';
import { Database, ChevronDown, ChevronUp, Music2 } from 'lucide-react';
import { Header } from '../components/Header';
import { DiscordBanner } from '../components/DiscordBanner';
import { songs } from '../data/songs';

export function ArchivePage() {
  const [expandedSeason, setExpandedSeason] = useState<string | null>(null);

  const toggleTracklist = (id: string) => {
    setExpandedSeason(prev => (prev === id ? null : id));
  };

  const totalTracks = songs.reduce((sum, s) => sum + s.tracks.length, 0);

  return (
    <div className="min-h-screen bg-helldiver-bg scanline-overlay">
      <Header />

      <div className="bg-helldiver-bgLight py-4 w-full">
        <div className="hazard-stripes-thin h-2"></div>
        <div className="bg-helldiver-bg text-center py-2">
          <p className="text-helldiver-white text-sm uppercase tracking-widest font-bold animate-pulse">
            Classified Audio Archive - Super Earth Broadcasting Division
          </p>
        </div>
        <div className="hazard-stripes-thin h-2"></div>
      </div>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="tactical-panel p-4 md:p-6 mb-8">
          <div className="tactical-panel-inner p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-helldiver-magenta" />
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-helldiver-magenta uppercase tracking-wider glow-text-magenta">
                    Audio Archive
                  </h2>
                  <p className="text-xs text-helldiver-textDim uppercase tracking-wider mt-1">
                    Declassified broadcast recordings
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-helldiver-textDim uppercase tracking-wider text-xs font-mono">Seasons:</span>
                  <span className="text-helldiver-green font-bold font-mono">{songs.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-helldiver-textDim uppercase tracking-wider text-xs font-mono">Total Songs:</span>
                  <span className="text-helldiver-green font-bold font-mono">{totalTracks}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {songs.map((song) => {
            const isExpanded = expandedSeason === song.id;

            return (
              <div key={song.id} className="tactical-panel p-4 md:p-6">
                <div className="tactical-panel-inner p-4 md:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Music2 className="w-5 h-5 text-helldiver-green" />
                      <h3 className="text-lg font-bold text-helldiver-white uppercase tracking-wider">
                        {song.title}
                      </h3>
                    </div>
                    <span className="text-xs text-helldiver-textDim font-mono">
                      {song.tracks.length} tracks
                    </span>
                  </div>

                  <div className="border-2 border-helldiver-borderDim bg-helldiver-bg overflow-hidden">
                    <iframe
                      width="100%"
                      height="120"
                      src={song.mixcloudEmbed}
                      frameBorder="0"
                      allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
                      title={song.title}
                    />
                  </div>

                  <button
                    onClick={() => toggleTracklist(song.id)}
                    className="mt-4 w-full flex items-center justify-between px-4 py-2.5 bg-helldiver-bgLight border border-helldiver-borderDim hover:border-helldiver-magenta transition-colors group"
                  >
                    <span className="text-xs text-helldiver-textDim uppercase tracking-wider font-mono group-hover:text-helldiver-magenta transition-colors">
                      {isExpanded ? 'Hide' : 'View'} Track Listing
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-helldiver-magenta" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-helldiver-textDim group-hover:text-helldiver-magenta transition-colors" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="mt-2 border border-helldiver-borderDim bg-helldiver-bg">
                      <div className="hidden md:grid grid-cols-[40px_1fr_1fr] gap-3 px-4 py-2 border-b border-helldiver-borderDim text-[10px] text-helldiver-textDim uppercase tracking-wider font-mono">
                        <span>#</span>
                        <span>Title</span>
                        <span>Artist</span>
                      </div>
                      <div className="divide-y divide-helldiver-borderDim/30">
                        {song.tracks.map((track, index) => (
                          <div
                            key={track.id}
                            className="grid grid-cols-[28px_1fr] md:grid-cols-[40px_1fr_1fr] gap-2 md:gap-3 px-4 py-2 items-center"
                          >
                            <span className="text-xs font-mono text-helldiver-textDim">
                              {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <div className="min-w-0">
                              <span className="text-xs font-bold text-helldiver-white truncate block">
                                {track.title}
                              </span>
                              <span className="text-[10px] text-helldiver-textDim truncate block md:hidden">
                                {track.artist}
                              </span>
                            </div>
                            <span className="hidden md:block text-xs text-helldiver-textDim truncate">
                              {track.artist}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <DiscordBanner />
        </div>
      </main>

      <footer className="bg-helldiver-bgLight border-t-4 border-helldiver-magenta pt-6 pb-8 mt-12">
        <div className="hazard-stripes h-2 mb-6"></div>
        <div className="text-center">
          <p className="text-helldiver-textDim text-sm uppercase tracking-wider mb-2">
            Creek Radio - A Division of Super Earth Broadcasting Network
          </p>
          <p className="text-helldiver-textDim text-xs">
            Approved by the Ministry of Truth - For Managed Democracy
          </p>
          <p className="text-helldiver-textDim text-xs mt-2 opacity-70">
            We are not affiliated with Arrowhead Game Studios, this is a fan project, and will always remain ad-free and free to use.
          </p>
        </div>
      </footer>
    </div>
  );
}
