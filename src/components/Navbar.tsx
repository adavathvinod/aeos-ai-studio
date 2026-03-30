import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
      <a href="#" className="font-mono text-sm tracking-widest uppercase text-foreground">
        AEOS FILMS
      </a>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-foreground z-50 relative"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 z-40">
          {["Work", "Services", "FAQ", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="font-serif text-4xl md:text-5xl text-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
