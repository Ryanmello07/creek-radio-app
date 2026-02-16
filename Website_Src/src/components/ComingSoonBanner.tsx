export function ComingSoonBanner() {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="tactical-panel p-6">
        <div className="tactical-panel-inner p-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="/creek_banner.jpg"
                alt="Creek Radio - More Updates Coming Soon"
                className="w-48 md:w-56 h-auto border-2 border-helldiver-borderDim"
                style={{ boxShadow: '0 0 20px rgba(190, 43, 151, 0.3)' }}
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-helldiver-magenta uppercase tracking-wider glow-text-magenta mb-3">
                Stand By For Updates
              </h3>
              <p className="text-helldiver-text leading-relaxed mb-4">
                Creek Radio is expanding operations. New features, content, and improvements are
                currently in development. Stay tuned to this frequency for incoming transmissions.
              </p>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="w-2 h-2 bg-helldiver-magenta rounded-full animate-pulse" />
                <span className="text-helldiver-magenta font-mono text-xs uppercase tracking-widest">
                  Transmission Pending
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
