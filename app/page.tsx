import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative flex flex-col md:flex-row h-screen w-full">
      {/* Centered header overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center pt-6 md:pt-8 pointer-events-none">
        <Image
          src="/logo.png"
          alt="Liberators Alliance"
          width={100}
          height={100}
          className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          priority
        />
        <p className="mt-3 text-white text-sm md:text-base font-medium tracking-widest uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] text-center px-4">
          Building Alliances to Free the Oppressed
        </p>
      </div>

      {/* OCONUS — Left half */}
      <a
        href="https://oconus.liberators-alliance.org"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col justify-center items-center w-full md:w-1/2 h-1/2 md:h-full overflow-hidden"
        style={{ backgroundColor: '#151515' }}
      >
        {/* Subtle dark texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' fill='%23ffffff' opacity='0.15'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Yellow accent border on hover — left edge on desktop, top edge on mobile */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 transition-all duration-300 group-hover:w-2 md:group-hover:w-2"
          style={{ backgroundColor: '#F6DB06' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-0 md:h-0 transition-all duration-300 group-hover:h-0"
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-8 select-none">
          <span
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4 transition-colors duration-200"
            style={{ color: '#F6DB06' }}
          >
            International Operations
          </span>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none mb-2 transition-transform duration-300 group-hover:scale-105"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: '0.05em' }}
          >
            OCONUS
          </h2>

          <div
            className="w-12 h-0.5 my-4 transition-all duration-300 group-hover:w-20"
            style={{ backgroundColor: '#F6DB06' }}
          />

          <p className="text-gray-400 text-sm tracking-wide mb-8 max-w-xs">
            Global reach. Tactical precision. Freeing the oppressed beyond our borders.
          </p>

          <span
            className="inline-block px-6 py-2.5 text-sm font-bold uppercase tracking-widest border-2 text-black transition-all duration-200 group-hover:shadow-[0_0_20px_rgba(246,219,6,0.5)]"
            style={{ backgroundColor: '#F6DB06', borderColor: '#F6DB06' }}
          >
            Join the Mission
          </span>
        </div>
      </a>

      {/* Divider line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-10" />
      <div className="md:hidden absolute left-0 right-0 top-1/2 h-px bg-white/10 z-10" />

      {/* CONUS — Right half */}
      <a
        href="https://conus.liberators-alliance.org"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col justify-center items-center w-full md:w-1/2 h-1/2 md:h-full overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B3A5C 0%, #2E6DA4 100%)' }}
      >
        {/* Soft radial glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(46,109,164,0.4) 0%, transparent 70%)' }}
        />

        {/* Subtle top-right light */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)' }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-8 select-none">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 text-blue-200/80 transition-colors duration-200 group-hover:text-white">
            Domestic Operations
          </span>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none mb-2 transition-transform duration-300 group-hover:scale-105"
            style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", letterSpacing: '0.05em' }}
          >
            CONUS
          </h2>

          <div className="w-12 h-0.5 my-4 bg-blue-300/50 transition-all duration-300 group-hover:w-20 group-hover:bg-white/60" />

          <p className="text-blue-100/70 text-sm tracking-wide mb-8 max-w-xs">
            Compassionate care. Lasting recovery. Supporting those who serve our nation at home.
          </p>

          <span className="inline-block px-6 py-2.5 text-sm font-semibold uppercase tracking-widest border-2 border-white/40 text-white bg-white/10 transition-all duration-200 group-hover:bg-white/20 group-hover:border-white/70 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            Support Healing
          </span>
        </div>
      </a>
    </main>
  )
}
