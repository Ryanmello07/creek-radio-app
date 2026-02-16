import { Shield, Radio, Globe } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="tactical-panel p-6">
      <div className="tactical-panel-inner p-6">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-helldiver-magenta" />
          <h2 className="text-2xl font-bold text-helldiver-magenta uppercase tracking-wider">
            Mission Briefing
          </h2>
        </div>

        <div className="space-y-4 text-helldiver-text leading-relaxed">
          <p>
            <span className="text-helldiver-green font-bold">Creek Radio</span> is the unofficial broadcasting station of the{' '}
            <span className="text-helldiver-magenta font-bold">Super Earth Armed Forces</span>, transmitting liberty and managed democracy across the galaxy.
          </p>

          <p>
            Operating from the Creek sector, our mission is to provide continuous entertainment, morale support, and tactical updates to all Helldivers deployed in the field. Every broadcast strengthens the resolve of humanity's finest warriors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-helldiver-bgLight border border-helldiver-borderDim p-4">
              <div className="flex items-center gap-2 mb-2">
                <Radio className="w-5 h-5 text-helldiver-green" />
                <h3 className="text-helldiver-magenta font-bold uppercase text-sm">Broadcasting 24/7</h3>
              </div>
              <p className="text-sm text-helldiver-textDim">
                Non-stop music and entertainment to keep your spirits high during extended operations.
              </p>
            </div>

            <div className="bg-helldiver-bgLight border border-helldiver-borderDim p-4">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-helldiver-green" />
                <h3 className="text-helldiver-magenta font-bold uppercase text-sm">Galactic Coverage</h3>
              </div>
              <p className="text-sm text-helldiver-textDim">
                Transmitting to all sectors where freedom-loving citizens serve Super Earth.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-helldiver-magenta bg-helldiver-bgLight p-4 mt-6">
            <p className="text-helldiver-magenta font-bold uppercase text-sm mb-2">
              Remember, Helldiver:
            </p>
            <p className="text-sm text-helldiver-text italic">
              "Even when you log off, the war continues."
            </p>
          </div>

          <div className="border-l-4 border-helldiver-green bg-helldiver-bgLight p-4 mt-4">
            <div className="flex items-start gap-4">
              <img
                src="/dj_pfp.png"
                alt="War Child Of The Creek"
                className="w-20 h-20 flex-shrink-0 border-2 border-helldiver-green object-cover"
                style={{ boxShadow: '0 0 12px rgba(0, 255, 65, 0.4)' }}
              />
              <div>
                <p className="text-helldiver-green font-bold uppercase text-sm mb-2">
                  From Our DJ:
                </p>
                <p className="text-sm text-helldiver-text italic leading-relaxed">
                  "My name is [Redacted], but most of y'all know me as "War Child Of The Creek". I am a Helldivers II player who has been around since launch. Over the past year I've started using a soundboard and made Creek Radio."
                </p>
              </div>
            </div>
            <p className="text-sm text-helldiver-text italic leading-relaxed mt-3">
              "Creek Radio is a passion project that grew organically from a simple soundboard playlist into a lore-friendly radio station for Helldivers II. It features classic rock, alternative rock, satirical ads, propaganda, radio jingles, and dark humor. All designed to boost morale and immersion."
            </p>
            <p className="text-sm text-helldiver-text italic leading-relaxed mt-3">
              "What began as a personal project has grown into a full broadcast experience that I plan to continue expanding upon for the foreseeable future, for all to enjoy."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
