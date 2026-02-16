import { Heart, ExternalLink, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { PropagandaTicker } from '../components/PropagandaTicker';

export function DonationsPage() {
  return (
    <div className="min-h-screen bg-helldiver-bg scanline-overlay pt-[26px]">
      <PropagandaTicker />
      <Header />

      <div className="bg-helldiver-bgLight py-4 w-full">
        <div className="hazard-stripes-thin h-2"></div>
        <div className="bg-helldiver-bg text-center py-2 px-2">
          <p className="text-helldiver-white text-xs sm:text-sm uppercase tracking-wide sm:tracking-widest font-bold animate-pulse">
            Support Managed Democracy - Fund Freedom - Defend Super Earth
          </p>
        </div>
        <div className="hazard-stripes-thin h-2"></div>
      </div>

      <main className="container mx-auto px-3 sm:px-4 py-8 sm:py-10 md:py-12">
        <div className="tactical-panel p-3 sm:p-4 md:p-6 lg:p-8 mb-6 md:mb-8">
          <div className="tactical-panel-inner p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="text-center mb-6 md:mb-8">
              <div className="flex justify-center items-center gap-2 sm:gap-3 mb-3 md:mb-4">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-helldiver-magenta animate-pulse" />
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-helldiver-magenta uppercase tracking-wide sm:tracking-wider glow-text-magenta">
                  Support Creek Radio
                </h1>
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-helldiver-magenta animate-pulse" />
              </div>
              <p className="text-helldiver-text text-xs sm:text-sm md:text-base uppercase tracking-wide sm:tracking-wider max-w-3xl mx-auto px-2">
                Citizens! Your generous contributions ensure the continued operation of Creek Radio,
                broadcasting liberty and defending managed democracy across the Galaxy!
              </p>
            </div>

            <div className="hazard-stripes-thin h-2 my-4 sm:my-6 md:my-8"></div>

            <div className="bg-helldiver-bgPanel border-2 border-helldiver-green p-3 sm:p-4 md:p-6 mb-4 md:mb-6">
              <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-helldiver-green rounded-full mt-1 animate-pulse-slow shadow-glow-green flex-shrink-0"></div>
                <div>
                  <p className="text-helldiver-green text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide sm:tracking-wider glow-text-green mb-1 sm:mb-2">
                    Ministry of Truth Announcement
                  </p>
                  <p className="text-helldiver-text text-xs sm:text-sm leading-relaxed">
                    Creek Radio operates as a FREE, AD-FREE service to all citizens of Super Earth.
                    Your donations directly support server costs, equipment upgrades, and the continued
                    spread of Managed Democracy through superior broadcasting.
                  </p>
                </div>
              </div>
            </div>

            <div className="hazard-stripes-thin h-2 my-4 sm:my-6 md:my-8"></div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-helldiver-magenta uppercase tracking-wide sm:tracking-wider text-center mb-4 md:mb-6 glow-text-magenta">
              Donation Platforms
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <a
                href="https://ko-fi.com/warchildofthecreek"
                target="_blank"
                rel="noopener noreferrer"
                className="tactical-panel p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform active:scale-95"
              >
                <div className="tactical-panel-inner p-4 sm:p-5 md:p-6">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-helldiver-green uppercase tracking-wide sm:tracking-wider glow-text-green">
                      Ko-fi
                    </h3>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-helldiver-magenta" />
                  </div>
                  <p className="text-helldiver-textDim text-xs sm:text-sm mb-3 md:mb-4 uppercase tracking-wide">
                    Support with one-time contributions
                  </p>
                  <div className="tactical-button w-full text-center text-sm sm:text-base py-2">
                    Contribute Now
                  </div>
                </div>
              </a>

              <a
                href="https://www.patreon.com/cw/WarChildOfTheCreek/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="tactical-panel p-2 sm:p-3 md:p-4 hover:scale-105 transition-transform active:scale-95"
              >
                <div className="tactical-panel-inner p-4 sm:p-5 md:p-6">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-helldiver-green uppercase tracking-wide sm:tracking-wider glow-text-green">
                      Patreon
                    </h3>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-helldiver-magenta" />
                  </div>
                  <p className="text-helldiver-textDim text-xs sm:text-sm mb-3 md:mb-4 uppercase tracking-wide">
                    Join as a recurring supporter
                  </p>
                  <div className="tactical-button w-full text-center text-sm sm:text-base py-2">
                    Become a Patron
                  </div>
                </div>
              </a>
            </div>

            <div className="hazard-stripes-thin h-2 my-4 sm:my-6 md:my-8"></div>

            <div className="tactical-panel p-2 sm:p-3 md:p-4 mb-4 md:mb-6">
              <div className="tactical-panel-inner p-4 sm:p-5 md:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-helldiver-magenta uppercase tracking-wide sm:tracking-wider text-center mb-4 md:mb-6 glow-text-magenta">
                  Honored Contributors
                </h2>

                <div className="bg-helldiver-bg border border-helldiver-borderDim p-3 sm:p-4">
                  <p className="text-helldiver-text text-center text-xs sm:text-sm uppercase tracking-wide sm:tracking-wider mb-3 md:mb-4">
                    Citizens who have demonstrated exceptional patriotism through their support:
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-helldiver-bgPanel border border-helldiver-green">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-helldiver-green rounded-full flex-shrink-0"></div>
                      <p className="text-helldiver-green font-mono text-xs sm:text-sm uppercase tracking-wide sm:tracking-wider">
                        War Child of The Creek - Our DJ
                      </p>
                    </div>

                    <div className="border-t border-helldiver-borderDim my-3 sm:my-4"></div>

                    <p className="text-helldiver-magenta text-xs uppercase tracking-wide sm:tracking-widest font-bold text-center mb-2 sm:mb-3">
                      Patreon Supporters
                    </p>

                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-helldiver-bgPanel border border-helldiver-magenta">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-helldiver-magenta rounded-full flex-shrink-0"></div>
                      <p className="text-helldiver-white font-mono text-xs sm:text-sm tracking-wide sm:tracking-wider">
                        Johnathan
                      </p>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-helldiver-bgPanel border border-helldiver-magenta">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-helldiver-magenta rounded-full flex-shrink-0"></div>
                      <p className="text-helldiver-white font-mono text-xs sm:text-sm tracking-wide sm:tracking-wider">
                        Atoris
                      </p>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-helldiver-bgPanel border border-helldiver-magenta">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-helldiver-magenta rounded-full flex-shrink-0"></div>
                      <p className="text-helldiver-white font-mono text-xs sm:text-sm tracking-wide sm:tracking-wider">
                        Vexsomnia
                      </p>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-helldiver-bgPanel border border-helldiver-magenta">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-helldiver-magenta rounded-full flex-shrink-0"></div>
                      <p className="text-helldiver-white font-mono text-xs sm:text-sm tracking-wide sm:tracking-wider">
                        Thor Van Den Abeele
                      </p>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-helldiver-bgPanel border border-helldiver-magenta">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-helldiver-magenta rounded-full flex-shrink-0"></div>
                      <p className="text-helldiver-white font-mono text-xs sm:text-sm tracking-wide sm:tracking-wider">
                        Kemosabe94g
                      </p>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-helldiver-bgPanel border border-helldiver-magenta">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-helldiver-magenta rounded-full flex-shrink-0"></div>
                      <p className="text-helldiver-white font-mono text-xs sm:text-sm tracking-wide sm:tracking-wider">
                        Sauce
                      </p>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-helldiver-bgPanel border border-helldiver-magenta">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-helldiver-magenta rounded-full flex-shrink-0"></div>
                      <p className="text-helldiver-white font-mono text-xs sm:text-sm tracking-wide sm:tracking-wider">
                        Markel Martin
                      </p>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-helldiver-bgPanel border border-helldiver-magenta">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-helldiver-magenta rounded-full flex-shrink-0"></div>
                      <p className="text-helldiver-white font-mono text-xs sm:text-sm tracking-wide sm:tracking-wider">
                        ImYeti
                      </p>
                    </div>
                  </div>

                  <p className="text-helldiver-textDim text-xs text-center mt-3 sm:mt-4 uppercase tracking-wide">
                    Your name will be immortalized in the annals of Creek Radio history
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 md:mt-8">
              <div className="bg-helldiver-bgPanel border-2 border-helldiver-magenta p-3 sm:p-4">
                <p className="text-helldiver-magenta text-xs uppercase tracking-wide sm:tracking-widest font-bold mb-1 sm:mb-2">
                  Ministry of Defense Reminder
                </p>
                <p className="text-helldiver-textDim text-xs uppercase tracking-wide sm:tracking-wider">
                  All donations are voluntary. Creek Radio will remain free and ad-free for all citizens.
                  Your support ensures we can continue our mission of spreading managed democracy through superior broadcasting.
                </p>
              </div>
            </div>

            <div className="hazard-stripes-thin h-2 my-6 md:my-8"></div>

            <div className="bg-black/90 border-2 border-helldiver-red p-4 sm:p-5 md:p-6 mt-6 md:mt-8">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 md:mb-4">
                <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-helldiver-red animate-pulse flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-helldiver-red text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider glow-text-red mb-1 sm:mb-2">
                    Ministry of Truth Warning
                  </p>
                  <p className="text-helldiver-textDim text-xs uppercase tracking-wide leading-relaxed">
                    Citizens who fail to support Creek Radio demonstrate questionable loyalty to Managed Democracy.
                    The Ministry maintains a registry of known dissidents, non-supporters, and potential Automaton sympathizers.
                  </p>
                </div>
              </div>
              <div className="text-center mt-3 md:mt-4">
                <Link to="/dissidents">
                  <button className="bg-black/80 border-2 border-helldiver-red text-helldiver-red font-bold uppercase tracking-wide sm:tracking-wider text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 hover:bg-helldiver-red hover:text-white transition-all duration-200 shadow-glow-red active:scale-95">
                    <div className="flex items-center gap-1.5 sm:gap-2 justify-center">
                      <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
                      View Dissident Registry
                      <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-helldiver-bgLight border-t-4 border-helldiver-magenta pt-4 sm:pt-5 md:pt-6 pb-6 sm:pb-7 md:pb-8 mt-8 sm:mt-10 md:mt-12">
        <div className="hazard-stripes h-2 mb-4 sm:mb-5 md:mb-6"></div>
        <div className="text-center px-4 sm:px-6">
          <p className="text-helldiver-textDim text-xs sm:text-sm uppercase tracking-wide sm:tracking-wider mb-1.5 sm:mb-2">
            Creek Radio - A Division of Super Earth Broadcasting Network
          </p>
          <p className="text-helldiver-textDim text-xs">
            Approved by the Ministry of Truth - For Managed Democracy
          </p>
          <p className="text-helldiver-textDim text-xs mt-1.5 sm:mt-2 opacity-70 leading-relaxed">
            We are not affiliated with Arrowhead Game Studios, this is a fan project, and will always remain ad-free and free to use.
          </p>
        </div>
      </footer>
    </div>
  );
}
