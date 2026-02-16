import { Lightbulb, ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github?: string;
  live?: string;
  highlight?: string;
}

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "MH Cockpit — AI Flight Assistant",
      description:
        "Developed an intelligent aviation chatbot powered by Google Gemini 2.5 Flash Latest, delivering real-time, context-aware responses for pilot training and course inquiries. Engineered a full-stack system using FastAPI, MongoDB, and Pinecone to manage user data, conversation history, and semantic retrieval. Designed an aviation-themed interface with secure user onboarding and an admin dashboard for lead tracking and chat analytics.",
      image: "/MHC.png",
      techStack: ["Google Gemini", "FastAPI", "MongoDB", "Pinecone", "React"],
      github: "https://github.com/Kopichino/Aviation-chatbot",
      highlight:
        "AI-powered real-time aviation chatbot with semantic retrieval",
    },
    {
      title: "UPACS — Unconscious Patient Autonomous Care System",
      description:
        "Designed an AI-based system using ECG signals to predict patient states in critical care. Implemented advanced signal processing and machine learning models to detect anomalies and provide real-time alerts for healthcare professionals. The system achieved 95% accuracy in patient state prediction.",
      image: "/UPACS.jpg",
      techStack: ["Python", "TensorFlow", "ECG Analysis", "Healthcare AI"],
      github: "https://github.com/Kopichino/UPACS",
      highlight: "5th place at VMedithon Hackathon among 150+ teams",
    },
    {
      title: "Philosite — Philosophy Platform",
      description:
        "A visually immersive philosophy platform featuring GSAP scroll animations, custom JavaScript sliders, and pre-rendered Blender 3D assets for interactive storytelling. Creates an engaging experience for exploring philosophical concepts with cutting-edge web animation techniques and 3D visualization.",
      image: "/Philosite.png",
      techStack: ["JavaScript", "GSAP", "Blender 3D", "HTML5", "CSS3"],
      github: "https://github.com/Kopichino/Philosite",
      highlight:
        "Interactive philosophy platform with 3D assets and animations",
    },
    {
      title: "Non-Linear PDE Solver PINN",
      description:
        "Physics-Informed Neural Network (PINN) for solving the 2D incompressible Navier–Stokes equations using the Taylor–Green vortex benchmark. Combines physics principles with deep learning to accurately solve complex partial differential equations without requiring traditional numerical solvers.",
      image: "/PDE.webp",
      techStack: [
        "PyTorch",
        "Physics-Informed Neural Networks",
        "Navier-Stokes",
        "Scientific Computing",
      ],
      github: "https://github.com/Kopichino/Non-Linear-PDE-Solver-PINN",
      highlight:
        "PINN-based solution for incompressible Navier-Stokes equations",
    },
    {
      title: "Voxcoder — Voice Coding Assistant",
      description:
        "An intelligent voice-based coding assistant that converts natural language commands into executable code. Uses advanced NLP and speech recognition to understand programming intent and generate code snippets, comments, and documentation automatically.",
      image: "/Voxcoder.png",
      techStack: ["Python", "Speech Recognition", "NLP", "Deep Learning"],
      github: "https://github.com/Kopichino/Voxcoder",
      highlight: "AI-powered voice-to-code converter",
    },
    {
      title: "GAN-Based Auditory Attention Detection",
      description:
        "A Deep Learning-based Auditory Attention Detection (AAD) system designed to solve the 'Cocktail Party Problem' using EEG signals. Classifies and decodes which speaker a subject is attending to in multi-speaker environments, advancing brain-computer interface research.",
      image: "/AAD.png",
      techStack: ["PyTorch", "GAN", "EEG Analysis", "Brain-Computer Interface"],
      github: "https://github.com/Kopichino/Auditory-Attention-Detection",
      highlight: "Deep learning AAD system solving the Cocktail Party Problem",
    },
  ];

  return (
    <section className="mb-12 pb-8 border-b-2 border-[#1a1a1a]">
      <div className="flex items-center gap-2 mb-6 pb-2 border-b-2 border-[#1a1a1a]">
        <Lightbulb size={24} />
        <h3 className="font-playfair text-3xl md:text-4xl font-bold uppercase">
          Innovation Weekly
        </h3>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="border-2 border-[#1a1a1a] overflow-hidden"
          >
            <div className="grid md:grid-cols-3 gap-0">
              <div className="md:col-span-1 h-48 md:h-auto bg-gray-300 border-r-2 border-[#1a1a1a] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-2 p-6">
                <h4 className="font-playfair text-2xl md:text-3xl font-bold mb-2 leading-tight">
                  {project.title}
                </h4>

                {project.highlight && (
                  <div className="bg-[#1a1a1a] text-[#f4f1ea] px-2 py-1 text-xs font-bold inline-block mb-3">
                    {project.highlight}
                  </div>
                )}

                <p className="text-base leading-relaxed mb-4 text-justify">
                  {project.description}
                </p>

                <div className="mb-4 border-t border-[#1a1a1a] pt-4">
                  <p className="text-xs uppercase tracking-wide font-bold mb-2">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-[#1a1a1a] px-2 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-3 border-t border-[#1a1a1a]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-bold border-2 border-[#1a1a1a] px-3 py-1 hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors"
                    >
                      <Github size={14} />
                      CODE
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-bold border-2 border-[#1a1a1a] px-3 py-1 hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors"
                    >
                      <ExternalLink size={14} />
                      LIVE
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
