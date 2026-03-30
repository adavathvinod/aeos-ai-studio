import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:hello@aeosfilms.com?subject=Project Inquiry from ${form.name}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
          Reach Out!
        </h2>
        <p className="text-muted-foreground font-mono text-sm mb-12">
          Let us help you conquer the AI Ad Film Industry.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { key: "name", label: "Name", type: "text" },
            { key: "email", label: "Email", type: "email" },
            { key: "phone", label: "Contact Number", type: "tel" },
            { key: "company", label: "Company Name", type: "text" },
          ].map(({ key, label, type }) => (
            <div key={key}>
              <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                {label}
              </label>
              <input
                type={type}
                value={form[key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors font-sans text-sm"
                required={key === "name" || key === "email"}
              />
            </div>
          ))}
          <div>
            <label className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
              How Can We Help?
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors font-sans text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-mono text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
