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
