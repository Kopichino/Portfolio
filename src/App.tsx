import { Masthead } from './components/Masthead';
import { BreakingNews } from './components/BreakingNews';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#1a1a1a] font-merriweather newspaper-texture">
      <div className="max-w-7xl mx-auto px-6 py-8 md:px-12 md:py-12">
        <div className="bg-[#f4f1ea] shadow-2xl border-4 border-[#1a1a1a] p-6 md:p-12">
          <Masthead />

          <BreakingNews />

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <Education />
            </div>

            <div className="lg:col-span-2">
              <Experience />
            </div>
          </div>

          <Achievements />

          <Projects />

          <Skills />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
