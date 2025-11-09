import { Button } from "./ui/button";
interface DigitalPageProps {
  onGoHome: () => void;
  onSwitchToCreative: () => void;
}
const DigitalPage = ({
  onGoHome,
  onSwitchToCreative
}: DigitalPageProps) => {
  return <div className="min-h-screen bg-[hsl(var(--digital-bg))] text-[hsl(var(--digital-fg))] animate-[fadeIn_0.5s_ease-in-out]">
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Navigation */}
          <div className="flex justify-center items-center flex-wrap gap-4 mb-12">
            <Button onClick={onGoHome} variant="ghost" className="text-gray-600 hover:text-black transition-colors font-semibold">
              Home
            </Button>
            <Button onClick={onSwitchToCreative} className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              View Creative Work
            </Button>
            <a href="mailto:praveenchezhian1@gmail.com" className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors inline-block">
              Contact
            </a>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Profile Intro */}
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 mb-16">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex-shrink-0 shadow-lg">
                <img src="https://placehold.co/200x200/e5e7eb/4b5563?text=PE" alt="Praveen Elanchezhian - Professional headshot" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-4xl font-bold">Praveen Elanchezhian</h2>
                <p className="text-xl text-gray-600 mt-2">
                  MBA Candidate | Product & Marketing Strategist | Filmmaker
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  A brief, engaging summary about yourself can go here. Highlight your key strengths and what drives you professionally and creatively.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Education</h3>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <p className="text-xl font-semibold">Master of Business Administration (MBA)</p>
                <p className="text-gray-600">NIT, Trichy (2024-2026)</p>
                <hr className="my-4 border-gray-300" />
                <p className="text-xl font-semibold">B.E. Electronics and Communication Engineering</p>
                <p className="text-gray-600">
                  Loyola ICAM College of Engineering and Technology, Chennai (2020-2024)
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Experience & Projects</h3>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-4">
                <h4 className="text-xl font-bold">
                  Product Design Engineer & Consultant - AR Smart Glass
                </h4>
                <p className="text-gray-500 italic">Tamizh (Jul 2024 - Present)</p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Designing UI/UX for AR Smart Glasses with hand gesture and voice control.</li>
                  <li>Collaborating on display and interaction systems.</li>
                  <li>Consulting on overall product design strategy from concept to prototype.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h4 className="text-xl font-bold">Summer Intern: Brand-Aligned Marketing Strategies</h4>
                <p className="text-gray-500 italic">Madarth (May 2025 - Jul 2025)</p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>
                    Developed social media calendars, copywriting, and video scripting for TAFE and DahNAY.
                  </li>
                  <li>
                    Experimented with 3D modelling, photogrammetry, and AI-based design.
                  </li>
                </ul>
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
    </div>;
};
export default DigitalPage;