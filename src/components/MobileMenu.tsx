import { useState } from "react";
import { Menu, X } from "lucide-react";
import { content } from "@/config/placeholders";

interface MobileMenuProps {
  onNavigate: (view: "home" | "creative" | "digital" | "contact") => void;
  currentView: string;
}

const MobileMenu = ({ onNavigate, currentView }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate(id as "home" | "creative" | "digital" | "contact");
    setIsOpen(false);
  };

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-14 bg-background/90 backdrop-blur-sm border-b border-border">
        <button
          onClick={() => onNavigate("home")}
          className="font-mono text-lg tracking-wider text-foreground"
        >
          {content.nav.logo}
        </button>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-14 bg-background/98 backdrop-blur-md animate-fade-up">
          <nav className="flex flex-col items-center justify-center h-full gap-8 -mt-14">
            {content.nav.links.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id)}
                className={`font-mono text-2xl uppercase tracking-[0.3em] transition-all duration-300 animate-fade-up ${
                  currentView === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </button>
            ))}
            
            <div className="mt-8 flex gap-6 animate-fade-up delay-400">
              {content.contact.social.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-mono uppercase tracking-wider"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
