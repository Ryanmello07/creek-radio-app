import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { RadioPlayer } from '../components/RadioPlayer';
import { NowPlaying } from '../components/NowPlaying';
import { AboutSection } from '../components/AboutSection';
import { FAQSection } from '../components/FAQSection';
import { HeroBanner } from '../components/HeroBanner';
import { ComingSoonBanner } from '../components/ComingSoonBanner';
import { DonationBanner } from '../components/DonationBanner';
import { DiscordBanner } from '../components/DiscordBanner';
import { PropagandaTicker } from '../components/PropagandaTicker';
import { createIcecastService, StreamMetadata } from '../services/icecastMetadata';

const STREAM_URL = 'https://creekradio.nohost.me/radio';
const STATUS_URL = '/api/icecast-status';

const icecastService = createIcecastService(STATUS_URL);

export function HomePage() {
  const [listenerCount, setListenerCount] = useState(0);
  const [metadata, setMetadata] = useState<StreamMetadata>({
    title: 'Creek Radio',
    artist: 'Super Earth Broadcasting',
    song: 'Awaiting Connection...',
    bitrate: 'Unknown',
    listeners: 0,
    serverStatus: 'offline',
  });

  useEffect(() => {
    icecastService.startPolling((newMetadata) => {
      setMetadata(newMetadata);
      setListenerCount(newMetadata.listeners);
    });

    return () => {
      icecastService.stopPolling();
    };
  }, []);

  return (
    <div className="min-h-screen bg-helldiver-bg scanline-overlay pt-[26px]">
      <PropagandaTicker />
      <Header listenerCount={listenerCount} />
      <HeroBanner />

      <div className="bg-helldiver-bgLight py-4 w-full">
        <div className="hazard-stripes-thin h-2"></div>
        <div className="bg-helldiver-bg text-center py-2">
          <p className="text-helldiver-white text-sm uppercase tracking-widest font-bold animate-pulse">
            Broadcasting Liberty - Defending Managed Democracy - Serving Super Earth
          </p>
        </div>
        <div className="hazard-stripes-thin h-2"></div>
      </div>

      <div className="container mx-auto px-4 pt-8 pb-0">
        <DonationBanner />
      </div>

      <div className="container mx-auto px-4 pt-4 pb-0">
        <DiscordBanner />
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <RadioPlayer streamUrl={STREAM_URL} />
          </div>

          <div>
            <NowPlaying metadata={metadata} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <AboutSection />
          <FAQSection />
        </div>
      </main>

      <ComingSoonBanner />

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
