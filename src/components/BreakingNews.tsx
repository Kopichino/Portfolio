import { Newspaper } from 'lucide-react';

export const BreakingNews = () => {
  return (
    <section className="mb-12 pb-8 border-b-2 border-[#1a1a1a]">
      <div className="flex items-center gap-2 mb-4">
        <Newspaper size={24} className="text-[#1a1a1a]" />
        <h3 className="font-playfair text-3xl md:text-4xl font-bold uppercase tracking-tight">
          Breaking News
        </h3>
      </div>

      <div className="border-l-4 border-[#1a1a1a] pl-6">
        <p className="text-lg md:text-xl leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
          Innovative computer science student with a passion for building scalable web applications
          and solving complex problems through code. Currently pursuing B.Tech at VIT Chennai with
          hands-on experience in full-stack development, machine learning, and competitive programming.
          Known for transforming ideas into elegant solutions and delivering results under tight deadlines.
          Seeking opportunities to contribute to cutting-edge projects and learn from industry leaders.
        </p>
      </div>
    </section>
  );
};
