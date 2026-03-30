import compassImg from "@/assets/compass.jpg";
import brushImg from "@/assets/brush.jpg";
import officeImg from "@/assets/office-gathering.jpg";
import workspaceImg from "@/assets/workspace.jpg";

const steps = [
  {
    title: "Concept Development",
    description: "We start with a blank page. Just the problem, and a way through it.",
    image: compassImg,
  },
  {
    title: "AI-Generated Storyboarding",
    description: "AI lets us move faster. So we spend time where it matters.",
    image: brushImg,
  },
  {
    title: "Production without Production",
    description: "We work with you, not just for you.",
    image: officeImg,
    wide: true,
  },
  {
    title: "AI Editing & Post",
    description: "Cut, color, and finish at lightning speed.",
    image: workspaceImg,
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
          Not another ad agency.
        </h2>
        <p className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl mb-16">
          We're a new kind of film studio. AI-native. Strategy-led. Built for brands who don't want to sound like everyone else.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className={`group relative overflow-hidden rounded-lg bg-card border border-border ${
                step.wide ? "md:col-span-2" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-serif text-lg text-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
