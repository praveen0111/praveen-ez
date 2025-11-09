import { useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import CreativePage from "@/components/CreativePage";
import DigitalPage from "@/components/DigitalPage";

type PageView = "home" | "creative" | "digital";

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
    </main>
  );
};

export default Index;