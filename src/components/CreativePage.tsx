import { Button } from "./ui/button";

interface CreativePageProps {
  onGoHome: () => void;
  onSwitchToDigital: () => void;
}

const CreativePage = ({ onGoHome, onSwitchToDigital }: CreativePageProps) => {
  return (
    <div className="min-h-screen bg-[hsl(var(--creative-bg))] text-[hsl(var(--creative-fg))] animate-[fadeIn_0.5s_ease-in-out]">
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Navigation */}
          <div className="flex justify-center items-center flex-wrap gap-4 mb-12">
            <Button 
              onClick={onGoHome}
              variant="ghost"
              className="text-gray-300 hover:text-white transition-colors font-semibold"
            >
              Home
            </Button>
            <Button 
              onClick={onSwitchToDigital}
              className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              View Digital Profile
            </Button>
            <a 
              href="mailto:praveenchezhian1@gmail.com"
              className="bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors inline-block"
            >
              Contact
            </a>
          </div>

          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Creative Film Projects
          </h2>

          <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
            {/* Project GR3Y */}
            <div className="bg-gray-800 rounded-lg overflow-hidden md:flex md:flex-row-reverse shadow-xl">
              <div className="md:w-1/2">
                <img 
                  className="h-64 md:h-full w-full object-cover" 
                  src="https://placehold.co/600x400/1f2937/d1d5db?text=GR3Y" 
                  alt="Project GR3Y - Thriller film poster"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  GR3Y (2023) - Thriller
                </h3>
                <p className="text-gray-400 mb-4">
                  An archaeologist unearths a treasure box, which leads to a turn of unexpected events.
                </p>
                <p className="text-white font-semibold mb-2">My Roles:</p>
                <p className="text-gray-300 mb-4">
                  Story, Screenplay, Dialogues, Direction, Editing, VFX, Dubbing, Sound Design, Poster Design.
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Awards:</strong> Best Direction & Best Film at Malda Int'l Film Festival, 2nd Runner up at Kaolin National Film Festival.
                </p>
              </div>
            </div>

            {/* Project STRANGERS */}
            <div className="bg-gray-800 rounded-lg overflow-hidden md:flex shadow-xl">
              <div className="md:w-1/2">
                <img 
                  className="h-64 md:h-full w-full object-cover" 
                  src="https://placehold.co/600x400/1f2937/d1d5db?text=STRANGERS" 
                  alt="Project STRANGERS - Drama film poster"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  STRANGERS (2023) - Drama
                </h3>
                <p className="text-gray-400 mb-4">
                  A conversation between a stranger and a bystander unfolds, past and present collide, and actions ripple through lives.
                </p>
                <p className="text-white font-semibold mb-2">My Roles:</p>
                <p className="text-gray-300 mb-4">
                  Story, Screenplay, Dialogues, Direction, Editing, Cinematography, Sound Design.
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Awards:</strong> Best Film, Best Editing & Best Director at ENGENIA 2024 (LICET), Best Mobile Shot Film at Pillar4 2024 (MCC).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Praveen Elanchezhian. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CreativePage;