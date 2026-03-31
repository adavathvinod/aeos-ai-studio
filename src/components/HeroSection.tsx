import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cinematic noir hallway"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Walking person silhouette */}
      <div className="absolute bottom-[15%] z-[5] hero-walker pointer-events-none">
        <svg width="80" height="180" viewBox="0 0 80 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          {/* Head with fedora */}
          <ellipse cx="40" cy="18" rx="10" ry="10" fill="hsl(0,0%,8%)" />
          <rect x="22" y="10" width="36" height="5" rx="2" fill="hsl(0,0%,8%)" />
          <rect x="28" y="6" width="24" height="8" rx="3" fill="hsl(0,0%,8%)" />
          {/* Neck */}
          <rect x="36" y="28" width="8" height="6" fill="hsl(0,0%,8%)" />
          {/* Trench coat body */}
          <path d="M24 34 L56 34 L60 110 L48 110 L46 70 L40 110 L34 70 L32 110 L20 110 Z" fill="hsl(0,0%,10%)" />
          {/* Coat collar */}
          <path d="M30 34 L40 48 L50 34" stroke="hsl(0,0%,15%)" strokeWidth="2" fill="none" />
          {/* Left arm */}
          <path d="M24 40 L14 75 L18 76 L26 46" fill="hsl(0,0%,10%)" />
          {/* Right arm */}
          <path d="M56 40 L66 72 L62 74 L54 46" fill="hsl(0,0%,10%)" />
          {/* Left leg */}
          <path d="M28 110 L22 160 L18 162 L26 162 L34 112" fill="hsl(0,0%,8%)" />
          {/* Right leg */}
          <path d="M46 110 L54 158 L58 162 L50 162 L42 112" fill="hsl(0,0%,8%)" />
          {/* Shoes */}
          <ellipse cx="22" cy="164" rx="8" ry="4" fill="hsl(0,0%,6%)" />
          <ellipse cx="54" cy="164" rx="8" ry="4" fill="hsl(0,0%,6%)" />
        </svg>
      </div>


      <div className="relative z-10 px-6 md:px-12 pb-12 md:pb-20">
        <p className="font-serif italic text-lg md:text-xl text-foreground/80 mb-4">
          We're an AI-first Ad Films studio.
        </p>
        <div className="flex items-end gap-2 flex-wrap">
          <h1 className="text-primary font-sans font-black text-[15vw] md:text-[12vw] leading-[0.85] tracking-tight">
            JEE
          </h1>
          <span className="font-serif italic text-primary text-[10vw] md:text-[8vw] leading-[0.85]">
            Films
          </span>
        </div>
      </div>

      <div className="absolute top-1/3 right-6 md:right-12 z-10">
        <p className="font-serif text-xl md:text-2xl text-foreground text-right leading-tight">
          Next-Gen Films for<br />Next-Gen Brands.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
