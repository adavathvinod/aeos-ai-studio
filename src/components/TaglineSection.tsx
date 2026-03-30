const TaglineSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-4xl">
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-foreground">
          <span className="font-mono text-sm md:text-base text-muted-foreground block mb-6">
            no cameras. no crews.
          </span>
          just bold ideas turned into ad films made with AI, at a fraction of the cost of a real one.
        </h2>
        <a
          href="#contact"
          className="inline-block mt-10 px-8 py-4 border border-foreground/20 rounded-full font-mono text-sm uppercase tracking-wider text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
        >
          Let's Chat
        </a>
      </div>
    </section>
  );
};

export default TaglineSection;
