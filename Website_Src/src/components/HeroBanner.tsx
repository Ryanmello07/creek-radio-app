export function HeroBanner() {
  return (
    <div className="relative w-full overflow-hidden max-h-[250px] md:max-h-[400px]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
      <img
        src="/background.jpg"
        alt="Creek Radio DJ broadcasting live from the station"
        className="w-full h-full object-cover object-center min-h-[180px] md:min-h-[200px] max-h-[250px] md:max-h-[400px]"
      />
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 md:p-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-helldiver-green rounded-full animate-pulse-slow shadow-glow-green" />
            <span className="text-helldiver-green font-mono text-sm uppercase tracking-widest font-bold">
              Now Broadcasting
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
