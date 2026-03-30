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

      {/* Animated walking person silhouette */}
      <div className="absolute inset-0 z-[5] pointer-events-none flex items-end justify-center">
        <div className="hero-walker w-[200px] md:w-[300px] h-[60%] md:h-[75%] relative mb-0">
          <svg
            viewBox="0 0 200 500"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Hat */}
            <ellipse cx="100" cy="52" rx="45" ry="12" fill="#0a0a0a" />
            <ellipse cx="100" cy="48" rx="28" ry="18" fill="#111" />
            {/* Head */}
            <circle cx="100" cy="65" r="18" fill="#0d0d0d" />
            {/* Body / Coat */}
            <path
              d="M72 82 C72 82 65 200 68 280 L132 280 C135 200 128 82 128 82 Z"
              fill="#0e0e0e"
            />
            {/* Coat flare */}
            <path
              d="M68 280 C60 340 55 400 50 460 L85 460 L90 300 Z"
              fill="#0c0c0c"
            />
            <path
              d="M132 280 C140 340 145 400 150 460 L115 460 L110 300 Z"
              fill="#0c0c0c"
            />
            {/* Left leg walking */}
            <path
              d="M85 460 L75 500 L95 500 L90 460 Z"
              fill="#080808"
              className="animate-walk-left"
            />
            {/* Right leg walking */}
            <path
              d="M110 460 L105 500 L125 500 L115 460 Z"
              fill="#080808"
              className="animate-walk-right"
            />
            {/* Arms */}
            <path
              d="M72 100 C55 140 50 180 55 220"
              stroke="#0d0d0d"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M128 100 C145 140 150 180 145 220"
              stroke="#0d0d0d"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
        </div>
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
