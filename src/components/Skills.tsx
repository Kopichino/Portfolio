import { Wrench } from "lucide-react";

interface SkillCategory {
  category: string;
  skills: string[];
}

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C", "C++", "JavaScript", "HTML/CSS", "SQL"],
    },
    {
      category: "AI / ML",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "NLP",
        "RAG",
        "LangChain",
      ],
    },
    {
      category: "Web & Backend",
      skills: ["React.js", "Django", "Flask", "REST APIs"],
    },
    {
      category: "Tools & Cloud",
      skills: [
        "Git/GitHub",
        "AWS",
        "Streamlit",
        "VS Code",
        "Prompt Engineering",
      ],
    },
    {
      category: "Languages",
      skills: [
        "English (Fluent)",
        "Tamil (Native)",
        "Hindi (Basic)",
        "Japanese (Basic)",
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        "Problem Solving",
        "Leadership",
        "Time Management",
        "Adaptability",
      ],
    },
  ];

  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-[#1a1a1a]">
        <Wrench size={20} />
        <h3 className="font-playfair text-2xl md:text-3xl font-bold uppercase">
          Toolbox
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="border-2 border-[#1a1a1a] p-4">
            <h4 className="font-bold text-sm uppercase tracking-wide mb-3 bg-[#1a1a1a] text-[#f4f1ea] px-2 py-1">
              {category.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-[#1a1a1a] px-2 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
