import footerBanner from "@/assets/footer-banner.jpg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-background">
      {/* Banner Image with gradient fade */}
      <div className="relative w-full h-[250px] md:h-[350px]">
        <img
          src={footerBanner}
          alt="Cinematic illustration banner"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={512}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      {/* Footer Content */}
      <div className="relative px-6 md:px-12 lg:px-20 pb-8 -mt-16 md:-mt-20">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          {/* Left: CTA */}
          <div className="max-w-md">
            <p className="font-serif italic text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Ready to turn your idea into a cinematic{" "}
              <span className="font-sans font-bold not-italic text-foreground">AI</span>{" "}
              masterpiece?
              <br />
              Let's make it happen!
            </p>
            <a
              href="mailto:hello@jeefilms.com"
              className="inline-block border border-foreground text-foreground font-mono text-sm tracking-wider uppercase px-6 py-3 rounded-full hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Let's Chat
            </a>
          </div>

          {/* Right: Nav + Copyright */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <nav className="flex flex-col items-start md:items-end gap-2">
              {["Home", "Work", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-sans text-sm md:text-base text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <p className="font-mono text-xs text-muted-foreground mt-4">
              All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Giant Brand Name */}
        <div className="mt-10 md:mt-16 overflow-hidden">
          <h2 className="font-sans font-black text-[18vw] md:text-[14vw] leading-[0.85] tracking-tighter text-foreground select-none">
            JEE Films
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
