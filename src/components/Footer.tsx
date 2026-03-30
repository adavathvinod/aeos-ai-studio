const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-mono text-sm tracking-widest uppercase text-muted-foreground">
          JEE FILMS
        </span>
        <a
          href="mailto:hello@jeefilms.com"
          className="font-serif text-lg text-foreground hover:text-primary transition-colors"
        >
          hello@jeefilms.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
