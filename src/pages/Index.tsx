import { useState } from "react";
import { Button } from "@/components/ui/button";
import CreativePage from "@/components/CreativePage";
import DigitalPage from "@/components/DigitalPage";

type PageView = "home" | "creative" | "digital" | "contact";

// HeroSlider Component (inline)
const HeroSlider = ({ onNavigateCreative, onNavigateDigital }: { onNavigateCreative: () => void; onNavigateDigital: () => void }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-6xl font-bold text-white mb-4">Praveen Elanchezhian</h1>
        <p className="text-2xl text-gray-300 mb-8">Creative Filmmaker | Product Strategist</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            onClick={onNavigateCreative}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-colors"
          >
            View Creative Work
          </Button>
          <Button 
            onClick={onNavigateDigital}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-colors"
          >
            View Digital Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

// ContactPage Component (inline)
const ContactPage = ({ onGoHome }: { onGoHome: () => void }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-2xl">
        <Button 
          onClick={onGoHome}
          variant="ghost"
          className="mb-8"
        >
          ← Back to Home
        </Button>
        
        <h1 className="text-4xl font-bold mb-8 text-center">Get In Touch</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:praveenchezhian1@gmail.com" className="text-blue-600 hover:underline">
                praveenchezhian1@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Let's Connect</h3>
              <p className="text-gray-600">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [currentView, setCurrentView] = useState<PageView>("home");

  const handleNavigateCreative = () => {
    setCurrentView("creative");
    window.scrollTo(0, 0);
  };

  const handleNavigateDigital = () => {
    setCurrentView("digital");
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setCurrentView("home");
    window.scrollTo(0, 0);
  };

  const handleNavigateToContact = () => {
    setCurrentView("contact");
    window.scrollTo(0, 0);
  };

  return (
    <main className="min-h-screen">
      {currentView === "home" && (
        <HeroSlider 
          onNavigateCreative={handleNavigateCreative}
          onNavigateDigital={handleNavigateDigital}
        />
      )}
      
      {currentView === "creative" && (
        <CreativePage 
          onGoHome={handleGoHome}
          onSwitchToDigital={handleNavigateDigital}
        />
      )}
      
      {currentView === "digital" && (
        <DigitalPage 
          onGoHome={handleGoHome}
          onSwitchToCreative={handleNavigateCreative}
        />
      )}

      {currentView === "contact" && (
        <ContactPage 
          onGoHome={handleGoHome}
        />
      )}
    </main>
  );
};

export default Index;
