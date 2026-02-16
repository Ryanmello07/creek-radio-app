import { AlertTriangle, Skull, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { PropagandaTicker } from '../components/PropagandaTicker';

interface Dissident {
  id: string;
  name: string;
  reason: string;
  notes: string | null;
  date_added: string;
  mostWanted?: boolean;
  minorInfraction?: boolean;
}

const DISSIDENTS: Dissident[] = [
  {
    id: 'emberyo-001',
    name: 'Emberyo',
    reason: 'Murder of a 10 Star Assault Infantry General',
    notes: 'Threat level: MAXIMUM. Approached during a combat operation and executed high-ranking officer in cold blood. Considered armed and extremely dangerous. Do not engage without full military support.',
    date_added: '2186-11-01T00:00:00.000Z',
    mostWanted: true,
  },
  {
    id: 'atoris-001',
    name: 'Atoris',
    reason: 'Executing a on duty cadet without permission from an officer',
    notes: null,
    date_added: '2186-11-15T00:00:00.000Z',
    minorInfraction: true,
  },
];

export function DissidentsPage() {
  const dissidents = DISSIDENTS;

  return (
    <div className="min-h-screen automaton-red-bg scanline-overlay-red pt-[26px] red-scrollbar">
      <PropagandaTicker />
      <Header theme="red" showArchiveButton={false} />

      <div className="bg-black/60 py-4 w-full border-y-2 border-helldiver-red">
        <div className="hazard-stripes-red-thin h-2"></div>
        <div className="bg-black/80 text-center py-2 px-2">
          <p className="text-helldiver-red text-[10px] sm:text-xs md:text-sm uppercase tracking-wider md:tracking-widest font-bold animate-pulse glow-text-red">
            <span className="hidden sm:inline">Threat Level: Maximum - Automaton Sympathizers Detected - Democracy Under Attack</span>
            <span className="sm:hidden">Threat Level: Maximum - Democracy Under Attack</span>
          </p>
        </div>
        <div className="hazard-stripes-red-thin h-2"></div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="tactical-panel-red p-6 md:p-8 mb-8">
          <div className="tactical-panel-red-inner p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center gap-2 md:gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-helldiver-red animate-pulse" />
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-helldiver-red uppercase tracking-wider glow-text-red">
                  Dissident Registry
                </h1>
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-helldiver-red animate-pulse" />
              </div>
              <p className="text-helldiver-text text-xs md:text-sm lg:text-base uppercase tracking-wide md:tracking-wider max-w-3xl mx-auto px-2">
                Ministry of Truth Warning: The following citizens have abandoned Creek Radio,
                refused to support Managed Democracy, or shown signs of Automaton sympathies.
              </p>
            </div>

            <div className="hazard-stripes-red-thin h-2 my-8"></div>

            <div className="bg-black/80 border-2 border-helldiver-red p-4 md:p-6 mb-6">
              <div className="flex items-start gap-2 md:gap-3 mb-3">
                <div className="w-3 h-3 bg-helldiver-red rounded-full mt-1 animate-pulse-slow shadow-glow-red flex-shrink-0"></div>
                <div>
                  <p className="text-helldiver-red text-sm md:text-lg font-bold uppercase tracking-wide md:tracking-wider glow-text-red mb-2">
                    Ministry of Defense Alert
                  </p>
                  <p className="text-helldiver-text text-xs md:text-sm leading-relaxed">
                    These individuals have demonstrated treasonous behavior by failing to support
                    Creek Radio's mission of spreading Managed Democracy. Their names are recorded
                    for posterity as enemies of freedom and potential Automaton collaborators.
                  </p>
                </div>
              </div>
            </div>

            <div className="hazard-stripes-red-thin h-2 my-8"></div>

            <div className="space-y-8">
                {dissidents.some(d => d.mostWanted) && (
                  <div>
                    <div className="flex justify-center items-center gap-2 md:gap-4 mb-6">
                      <div className="hazard-stripes-red h-1 flex-1 hidden sm:block"></div>
                      <div className="flex items-center gap-2 md:gap-3">
                        <Skull className="w-6 h-6 md:w-10 md:h-10 text-helldiver-red animate-pulse" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-helldiver-red uppercase tracking-wider glow-text-red animate-pulse">
                          Most Wanted
                        </h2>
                        <Skull className="w-6 h-6 md:w-10 md:h-10 text-helldiver-red animate-pulse" />
                      </div>
                      <div className="hazard-stripes-red h-1 flex-1 hidden sm:block"></div>
                    </div>
                    <div className="space-y-4">
                      {dissidents.filter(d => d.mostWanted).map((dissident) => (
                        <div
                          key={dissident.id}
                          className="relative tactical-panel-red p-2"
                        >
                          <div className="absolute inset-0 border-4 border-helldiver-red animate-pulse-slow shadow-glow-red"></div>
                          <div className="hazard-stripes-red h-2"></div>
                          <div className="tactical-panel-red-inner p-4 md:p-8 relative">
                            <div className="absolute top-0 right-0 md:right-0 bg-helldiver-red text-black text-[10px] md:text-xs font-bold uppercase tracking-widest px-2 py-1 md:px-3 md:py-1 rotate-0 md:rotate-12 shadow-glow-red">
                              Extreme Threat
                            </div>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 pt-8 md:pt-0">
                              <div className="flex-shrink-0">
                                <img
                                  src="/emberyo.png"
                                  alt="Emberyo Profile"
                                  className="w-20 h-20 md:w-16 md:h-16 rounded border-2 border-helldiver-red animate-pulse shadow-glow-red"
                                />
                              </div>
                              <div className="flex-1 w-full">
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-3 text-center md:text-left">
                                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-helldiver-red uppercase tracking-wider glow-text-red">
                                    {dissident.name}
                                  </h3>
                                  <span className="text-xs text-helldiver-darkRed uppercase tracking-widest font-mono">
                                    [11/01/2186]
                                  </span>
                                </div>
                                <div className="bg-black/80 border-2 md:border-4 border-helldiver-red p-3 md:p-4 mb-3 shadow-glow-red">
                                  <p className="text-helldiver-red text-sm md:text-lg lg:text-xl font-bold uppercase tracking-wide leading-relaxed">
                                    <span className="text-lg md:text-2xl glow-text-red">⚠ Crime:</span> {dissident.reason}
                                  </p>
                                </div>
                                {dissident.notes && (
                                  <div className="bg-black/60 border-2 border-helldiver-darkRed p-3 md:p-4">
                                    <p className="text-helldiver-textDim text-xs md:text-sm uppercase tracking-wide leading-relaxed">
                                      <span className="text-helldiver-red font-bold">Additional Intel:</span> {dissident.notes}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="hazard-stripes-red h-2"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {dissidents.some(d => !d.mostWanted && !d.minorInfraction) && (
                  <div>
                    <div className="hazard-stripes-red-thin h-2 my-8"></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-helldiver-red uppercase tracking-wider text-center mb-6 glow-text-red">
                      Known Dissidents
                    </h2>
                    <div className="space-y-4">
                      {dissidents.filter(d => !d.mostWanted && !d.minorInfraction).map((dissident) => (
                        <div
                          key={dissident.id}
                          className="tactical-panel-red p-4"
                        >
                          <div className="tactical-panel-red-inner p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <Skull className="w-8 h-8 text-helldiver-red" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-xl font-bold text-helldiver-red uppercase tracking-wider glow-text-red">
                                    {dissident.name}
                                  </h3>
                                  <span className="text-xs text-helldiver-darkRed uppercase tracking-widest font-mono">
                                    [11/01/2186]
                                  </span>
                                </div>
                                <div className="bg-black/60 border-l-4 border-helldiver-red p-3 mb-2">
                                  <p className="text-helldiver-textDim text-sm uppercase tracking-wide">
                                    <span className="text-helldiver-red font-bold">Offense:</span> {dissident.reason}
                                  </p>
                                </div>
                                {dissident.notes && (
                                  <div className="bg-black/40 border border-helldiver-darkRed p-3">
                                    <p className="text-helldiver-textDim text-xs uppercase tracking-wide">
                                      <span className="text-helldiver-red font-bold">Additional Notes:</span> {dissident.notes}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {dissidents.some(d => d.minorInfraction) && (
                  <div>
                    <div className="hazard-stripes-red-thin h-2 my-8"></div>
                    <h2 className="text-xl md:text-2xl font-bold text-helldiver-darkRed uppercase tracking-wider text-center mb-6">
                      Minor Infractions
                    </h2>
                    <div className="bg-black/60 border border-helldiver-darkRed p-4 md:p-6">
                      <p className="text-helldiver-textDim text-center text-xs uppercase tracking-wide mb-4">
                        Citizens who have committed lesser offenses against Managed Democracy:
                      </p>
                      <div className="space-y-3">
                        {dissidents.filter(d => d.minorInfraction).map((dissident) => (
                          <div
                            key={dissident.id}
                            className="bg-black/60 border border-helldiver-darkRed p-3"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-helldiver-darkRed rounded-full flex-shrink-0 mt-1"></div>
                              <div className="flex-1">
                                <h3 className="text-helldiver-red font-mono text-sm uppercase tracking-wider mb-1">
                                  {dissident.name}
                                </h3>
                                <p className="text-helldiver-textDim text-xs tracking-wide">
                                  {dissident.reason}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-helldiver-textDim text-xs text-center mt-4 uppercase tracking-wide opacity-70">
                        Minor infractions are still recorded in perpetuity
                      </p>
                    </div>
                  </div>
                )}
              </div>

            <div className="hazard-stripes-red-thin h-2 my-8"></div>

            <div className="text-center mt-8">
              <div className="bg-black/80 border-2 border-helldiver-red p-3 md:p-4 mb-6">
                <p className="text-helldiver-red text-[10px] md:text-xs uppercase tracking-widest font-bold mb-2">
                  Ministry of Truth Reminder
                </p>
                <p className="text-helldiver-textDim text-[10px] md:text-xs uppercase tracking-wide md:tracking-wider leading-relaxed">
                  Citizens who fail to support Creek Radio demonstrate a lack of patriotism
                  and commitment to Managed Democracy. Report suspicious behavior to your nearest democracy officer immediately.
                </p>
              </div>

              <Link to="/donate">
                <button className="tactical-button-red inline-flex items-center gap-2 text-sm md:text-base">
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                  Return to Donations
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black/80 border-t-4 border-helldiver-red pt-6 pb-8 mt-12">
        <div className="hazard-stripes-red h-2 mb-6"></div>
        <div className="text-center px-4">
          <p className="text-helldiver-textDim text-xs md:text-sm uppercase tracking-wide md:tracking-wider mb-2">
            Dissident Registry - A Service of the Ministry of Truth
          </p>
          <p className="text-helldiver-red text-[10px] md:text-xs uppercase tracking-wide md:tracking-wider">
            For Managed Democracy - Against the Automaton Threat
          </p>
        </div>
      </footer>
    </div>
  );
}
