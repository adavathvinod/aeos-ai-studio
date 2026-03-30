const services = [
  {
    title: "AI Commercials",
    description: "Ad films for TV, YouTube, and beyond using AI — from script to final grade.",
    steps: ["Concept Brief", "Pre-Execution Doc", "AI-Generated Production", "Social & Platform-Ready Edits"],
  },
  {
    title: "AI Short Films",
    description: "Short-form storytelling that connects deeply with audiences and strengthens your brand voice.",
    steps: ["Narrative Development", "AI Character & Scene Creation", "AI Cinematic Production", "Editing & Color Finishing"],
  },
  {
    title: "AI Launch Trailers",
    description: "High-energy AI-generated trailers designed to build hype for your product, event, or campaign.",
    steps: ["Trailer Script & Concept", "AI Visual & Motion Design", "Dynamic Editing", "Optimized Cuts for Multiple Platforms"],
  },
  {
    title: "AI Music Videos",
    description: "Visually stunning music videos with limitless creative freedom, powered entirely by AI.",
    steps: ["Concept & Creative Direction", "AI World & Character Creation", "AI Motion & Performance Visuals", "Final Cut & Platform Optimization"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
          What We Create
        </h2>
        <p className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl mb-16">
          We produce full film content using AI — from scripting and previz to VFX and editing — eliminating restraints to deliver creative excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="font-serif text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="font-mono text-xs text-foreground/70">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
