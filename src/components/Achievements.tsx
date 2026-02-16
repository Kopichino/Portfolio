import { Award, Trophy } from 'lucide-react';

interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "5th Place - VMedithon Hackathon",
      issuer: "VIT Chennai",
      date: "2025",
      description: "UPACS Project among 150+ teams"
    },
    {
      title: "NPTEL - Data Science for Engineers",
      issuer: "NPTEL",
      date: "2024",
      description: "Top 5%"
    },
    {
      title: "NPTEL - Python for Data Science",
      issuer: "NPTEL",
      date: "2024",
      description: "Top 5%"
    },
    {
      title: "NPTEL - Entrepreneurship",
      issuer: "NPTEL",
      date: "2024",
      description: "Top 5%"
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2023"
    }
  ];

  return (
    <section className="mb-8 w-full">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-[#1a1a1a]">
        <Trophy size={20} />
        <h3 className="font-playfair text-2xl md:text-3xl font-bold uppercase">
          Classifieds & Awards
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {achievements.map((achievement, index) => (
          <div key={index} className="border border-[#1a1a1a] p-3">
            <div className="flex items-start gap-2">
              <Award size={14} className="mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm mb-1 leading-tight">{achievement.title}</h4>
                <p className="text-xs mb-1 truncate">{achievement.issuer}</p>
                <p className="text-xs uppercase tracking-wide">{achievement.date}</p>
                {achievement.description && (
                  <p className="text-xs mt-1 italic">{achievement.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
