const projects = [
  {
    year: "2025",
    client: "State Bank of India",
    description: "AI-driven short film celebrating the 70th anniversary of State Bank of India.",
    type: "AI Short Film",
    image: "https://framerusercontent.com/images/nxtfGZyi4Zpj1BvoVNULNpgTLc.png",
  },
  {
    year: "2025",
    client: "Lenovo × Intel",
    description: "Smarter AI for you — AI Short Film",
    type: "AI Short Film",
    image: "https://framerusercontent.com/images/8xIpIbAIorupgrNxrtopCUf7Xew.png",
  },
  {
    year: "2025",
    client: "Godrej Properties",
    description: "AI Launch Trailer",
    type: "AI Short Film",
    image: "https://framerusercontent.com/images/swehZsFnkq8QMYTw92kWlMjfBc.png",
  },
  {
    year: "2025",
    client: "SFMG",
    description: "Mother's Day — AI Short Film",
    type: "AI Short Film",
    image: "https://framerusercontent.com/images/oX8O8CCVMe94PiKCi4TydVCFjk.png",
  },
];

const PortfolioSection = () => {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.client}
              className="group relative overflow-hidden rounded-lg bg-card border border-border cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  <span>/</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-xl text-foreground">
                  {project.client}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 font-mono text-xs text-primary uppercase tracking-wider mt-2">
                  <span>/</span>
                  <span>{project.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
