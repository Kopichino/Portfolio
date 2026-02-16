import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      role: "AI & ML Intern",
      company: "MHCognition",
      duration: "Dec 2025 - Jan 2026",
      responsibilities: [
        "Developed and deployed an AI-powered chatbot using NLP and Retrieval-Augmented Generation (RAG)",
        "Enhanced internal HRM chatbot that improved employee query resolution",
        "Integrated Django backend with AWS for scalable cloud deployment"
      ]
    },
    {
      role: "System Analyst Intern",
      company: "LambdaDigital Pvt Ltd",
      duration: "Jun 2024",
      responsibilities: [
        "Contributed to development of tagminds.ai, an AI-driven Enterprise Asset Management platform",
        "Assisted in requirement analysis, tech stack evaluation, and rapid prototyping",
        "Supported successful on-time delivery of Phase-1"
      ]
    }
  ];

  return (
    <section className="mb-12 pb-8 border-b-2 border-[#1a1a1a]">
      <div className="flex items-center gap-2 mb-6 pb-2 border-b-2 border-[#1a1a1a]">
        <Briefcase size={24} />
        <h3 className="font-playfair text-3xl md:text-4xl font-bold uppercase">
          Industry Updates
        </h3>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <article key={index} className="border-l-4 border-[#1a1a1a] pl-6">
            <h4 className="font-playfair text-2xl font-bold mb-1">{exp.role}</h4>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-bold text-lg">{exp.company}</span>
              <span className="text-sm">•</span>
              <span className="text-sm italic">{exp.duration}</span>
            </div>
            <ul className="space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex gap-2 text-base">
                  <span className="font-bold">■</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
