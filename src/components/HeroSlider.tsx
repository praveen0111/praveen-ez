import { useEffect, useRef, useState } from "react";
import { Camera, Film, Clapperboard, Briefcase, TrendingUp, Cpu, BarChart2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface HeroSliderProps {
  onNavigateCreative: () => void;
  onNavigateDigital: () => void;
}

const HeroSlider = ({ onNavigateCreative, onNavigateDigital }: HeroSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasIntroPlayed = useRef(false);

  useEffect(() => {
    // Intro animation
    if (!hasIntroPlayed.current) {
      hasIntroPlayed.current = true;
      const duration = 1500;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const amplitude = 15;
        const position = 50 + amplitude * Math.sin(progress * Math.PI * 2);
        setSliderPosition(position);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setSliderPosition(50);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      e.preventDefault();
      const rect = containerRef.current.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      setSliderPosition(pos * 100);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !containerRef.current) return;
      e.preventDefault();
      const rect = containerRef.current.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (e.touches[0].clientX - rect.left) / rect.width));
      setSliderPosition(pos * 100);
    };

    const handleEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchend", handleEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden select-none">
      {/* Creative Panel (Dark) */}
      <div 
        className="absolute inset-0 bg-[hsl(var(--creative-bg))] text-[hsl(var(--creative-fg))] flex items-center justify-end"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="max-w-[500px] w-full px-8 md:px-16 text-right">
          <div className="font-bold text-xl mb-8">PE.</div>
          <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none uppercase tracking-tight">
            Creative
          </h1>
          <p className="mt-6 text-base leading-relaxed max-w-md ml-auto">
            Filmmaker with a passion for visual storytelling and expertise in editing and post-production workflow.
          </p>
          <Button 
            onClick={onNavigateCreative}
            variant="outline"
            className="mt-8 border-2 border-[hsl(var(--creative-fg))] text-[hsl(var(--creative-fg))] hover:bg-[hsl(var(--creative-fg))] hover:text-[hsl(var(--creative-bg))] rounded-full px-6 py-6 font-semibold transition-all"
          >
            Explore My Work
          </Button>
        </div>

        {/* Filmmaker Character */}
        <div className="hidden lg:block absolute left-[30%] top-1/2 -translate-y-1/2 w-48 h-64">
          <div className="animate-[float_6s_ease-in-out_infinite]">
            {/* Character icons */}
            <div className="absolute top-0 left-0 animate-[float-icon_8s_ease-in-out_infinite]">
              <Camera className="w-8 h-8" />
            </div>
            <div className="absolute bottom-5 right-0 animate-[float-icon_8s_ease-in-out_infinite] [animation-delay:-2s]">
              <Film className="w-8 h-8" />
            </div>
            <div className="absolute top-[10%] right-[-15%] w-12 h-12 rounded-full bg-[hsl(var(--premiere))] flex items-center justify-center text-white font-extrabold text-xl border-2 border-white/50 animate-[float-icon_8s_ease-in-out_infinite] [animation-delay:-1s]">
              Pr
            </div>
            <div className="absolute bottom-12 left-[-20%] w-12 h-12 rounded-full bg-[hsl(var(--after-effects))] flex items-center justify-center text-white font-extrabold text-xl border-2 border-white/50 animate-[float-icon_8s_ease-in-out_infinite] [animation-delay:-3s]">
              Ae
            </div>
            <div className="absolute top-[60%] left-[-10%] animate-[float-icon_8s_ease-in-out_infinite] [animation-delay:-5s]">
              <Clapperboard className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Digital Panel (Light) */}
      <div 
        className="absolute inset-0 bg-[hsl(var(--digital-bg))] text-[hsl(var(--digital-fg))] flex items-center justify-start"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <div className="max-w-[500px] w-full px-8 md:px-16 text-left">
          <div className="font-bold text-xl mb-8">PE.</div>
          <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none uppercase tracking-tight text-[hsl(var(--digital-accent))]">
            Digital
          </h1>
          <p className="mt-6 text-base leading-relaxed max-w-md">
            MBA candidate specializing in the intersection of technology, marketing, and product design.
          </p>
          <Button 
            onClick={onNavigateDigital}
            variant="outline"
            className="mt-8 border-2 border-[hsl(var(--creative-accent))] text-[hsl(var(--creative-accent))] hover:bg-[hsl(var(--creative-accent))] hover:text-[hsl(var(--digital-bg))] rounded-full px-6 py-6 font-semibold transition-all"
          >
            View My Profile
          </Button>
        </div>

        {/* Business Character */}
        <div className="hidden lg:block absolute right-[30%] top-1/2 -translate-y-1/2 w-48 h-64">
          <div className="animate-[float_6s_ease-in-out_infinite]">
            {/* Character icons */}
            <div className="absolute top-[10%] left-[-10%] text-[hsl(var(--creative-accent))] animate-[float-icon_8s_ease-in-out_infinite] [animation-delay:-0.5s]">
              <Briefcase className="w-10 h-10" />
            </div>
            <div className="absolute top-[15%] right-[-15%] text-[hsl(var(--creative-accent))] animate-[float-icon_8s_ease-in-out_infinite] [animation-delay:-2.5s]">
              <TrendingUp className="w-10 h-10" />
            </div>
            <div className="absolute bottom-14 left-[-20%] text-[hsl(var(--creative-accent))] animate-[float-icon_8s_ease-in-out_infinite] [animation-delay:-4.5s]">
              <Cpu className="w-10 h-10" />
            </div>
            <div className="absolute bottom-6 right-[-5%] text-[hsl(var(--creative-accent))] animate-[float-icon_8s_ease-in-out_infinite] [animation-delay:-1.5s]">
              <BarChart2 className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 w-1 h-full bg-[hsl(var(--creative-accent))] cursor-grab active:cursor-grabbing z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[hsl(var(--creative-accent))] rounded-full flex items-center justify-between px-2 shadow-lg">
          <ChevronLeft className="w-5 h-5 text-white" />
          <ChevronRight className="w-5 h-5 text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;