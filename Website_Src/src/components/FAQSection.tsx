import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is Creek Radio?',
    answer: 'Creek Radio is the unofficial broadcasting station for Super Earth Armed Forces, providing 24/7 music and entertainment to all Helldivers across the galaxy. We broadcast directly from the Creek sector to boost morale and maintain fighting spirit.'
  },
  {
    question: 'How do I listen to Creek Radio?',
    answer: 'Simply click the PLAY button on this page to start streaming. The radio will connect to our Icecast2 server and begin broadcasting immediately. Make sure your device has an active internet connection and audio enabled.'
  },
  {
    question: 'What audio quality does Creek Radio use?',
    answer: 'Creek Radio streams in high-quality audio format. The bitrate information is displayed in the "Now Broadcasting" panel. We optimize our streams for clarity while maintaining efficient bandwidth usage for field operations.'
  },
  {
    question: 'Why is the stream buffering or not playing?',
    answer: 'Buffering can occur due to network conditions in your sector. Ensure you have a stable internet connection. If the stream shows "OFFLINE", our broadcast may be temporarily down for maintenance. Check back shortly or refresh the page.'
  },
  {
    question: 'Can I request songs?',
    answer: 'Currently, Creek Radio operates on a pre-programmed rotation approved by Super Earth High Command. Song requests are not available at this time. Trust in the Ministry of Truth\'s musical selections for optimal morale enhancement.'
  },
  {
    question: 'What browsers are supported?',
    answer: 'Creek Radio works best on modern browsers including Chrome, Firefox, Safari, and Edge. Ensure your browser is updated to the latest version for optimal streaming performance. Some older devices may experience compatibility issues.'
  },
  {
    question: 'What does "Forces in Reserve" mean?',
    answer: 'The "Forces in Reserve" counter displays the current number of active listeners tuned into Creek Radio. This shows how many fellow Helldivers are simultaneously receiving our broadcast signal across Super Earth territories.'
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Creek Radio is accessible through any mobile web browser. Simply visit this website on your mobile device and use it like you would on desktop. A dedicated app may be deployed in future operations.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="tactical-panel p-6">
      <div className="tactical-panel-inner p-6">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="w-6 h-6 text-helldiver-magenta" />
          <h2 className="text-2xl font-bold text-helldiver-magenta uppercase tracking-wider">
            Intelligence Database
          </h2>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-helldiver-bgLight border border-helldiver-borderDim overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 hover:bg-helldiver-bgPanel transition-colors text-left"
              >
                <span className="text-helldiver-magenta font-bold uppercase text-sm tracking-wider flex-1">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-helldiver-green" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-helldiver-green" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 border-t border-helldiver-borderDim">
                  <div className="pt-4 text-helldiver-text leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
