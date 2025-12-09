import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { content } from "@/config/placeholders";
import { desktopAlignment, mobileAlignment } from "@/config/alignment";
import { useEffect } from "react";
import { toast } from "sonner";

interface ContactPageProps {
  onGoHome: () => void;
}

const ContactPage = ({ onGoHome }: ContactPageProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const alignment = isMobile ? mobileAlignment : desktopAlignment;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div
          className="flex items-center justify-between mx-auto"
          style={{
            height: alignment.nav.height,
            paddingLeft: alignment.nav.paddingX,
            paddingRight: alignment.nav.paddingX,
            maxWidth: desktopAlignment.section.maxWidth,
          }}
        >
          <button
            onClick={onGoHome}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-xs uppercase tracking-wider"
          >
            <ArrowLeft size={16} />
            <span>Home</span>
          </button>
          
          <h1 className="font-mono text-sm tracking-[0.2em] uppercase">Contact</h1>
          
          <div className="w-16" />
        </div>
      </header>

      {/* Main Content */}
      <main
        className="mx-auto pt-32 pb-20"
        style={{
          maxWidth: "600px",
          paddingLeft: alignment.section.paddingX,
          paddingRight: alignment.section.paddingX,
        }}
      >
        {/* Hero */}
        <section className="text-center mb-16 animate-fade-up">
          <h2 className="font-mono text-4xl md:text-5xl font-bold tracking-[0.1em] mb-4">
            {content.contact.heading}
          </h2>
          <p className="font-mono text-muted-foreground tracking-wider">
            {content.contact.subheading}
          </p>
        </section>

        {/* Email */}
        <section className="text-center mb-12 animate-fade-up delay-100">
          <a
            href={`mailto:${content.contact.email}`}
            className="font-mono text-lg md:text-xl tracking-wider text-foreground hover:text-muted-foreground transition-colors border-b border-foreground hover:border-muted-foreground pb-1"
          >
            {content.contact.email}
          </a>
        </section>

        {/* Social Links */}
        <section className="flex justify-center gap-8 mb-16 animate-fade-up delay-200">
          {content.contact.social.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {social.platform}
            </a>
          ))}
        </section>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up delay-300">
          <div>
            <input
              type="text"
              placeholder={content.contact.form.namePlaceholder}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-transparent border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
          
          <div>
            <input
              type="email"
              placeholder={content.contact.form.emailPlaceholder}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-transparent border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
          </div>
          
          <div>
            <textarea
              placeholder={content.contact.form.messagePlaceholder}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="w-full bg-transparent border border-border px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
            />
          </div>
          
          <button type="submit" className="btn-mono w-full flex items-center justify-center gap-2">
            <span>{content.contact.form.submitButton}</span>
            <Send size={14} />
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <p className="text-center font-mono text-xs text-muted-foreground tracking-wider">
          {content.footer.copyright}
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;
