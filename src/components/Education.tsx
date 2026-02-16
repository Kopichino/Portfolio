import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-[#1a1a1a]">
        <GraduationCap size={20} />
        <h3 className="font-playfair text-2xl md:text-3xl font-bold uppercase">
          Education Chronicle
        </h3>
      </div>

      <div className="space-y-5">
        <div className="border-l-2 border-[#1a1a1a] pl-4">
          <h4 className="font-bold text-xl mb-1">Vellore Institute of Technology, Chennai</h4>
          <p className="text-lg mb-1">B.Tech in Computer Science & Engineering (AI & ML)</p>
          <p className="text-sm uppercase tracking-wide mb-2">2023 – 2027 • 2nd Year</p>
          <div className="bg-[#1a1a1a] text-[#f4f1ea] inline-block px-3 py-1 text-sm font-bold mb-3">
            CGPA: 9.06
          </div>

          <div className="mt-3">
            <p className="font-bold text-sm uppercase tracking-wide mb-2">Specialization:</p>
            <div className="flex flex-wrap gap-2">
              {['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'NLP', 'Computer Vision', 'Data Science'].map((course) => (
                <span key={course} className="border border-[#1a1a1a] px-2 py-1 text-xs">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-l-2 border-[#1a1a1a] pl-4">
          <h4 className="font-bold text-lg mb-1">VELS Vidyashram</h4>
          <p className="text-base mb-1">CBSE Class XII</p>
          <p className="text-sm uppercase tracking-wide">2022 – 2023</p>
          <div className="bg-[#1a1a1a] text-[#f4f1ea] inline-block px-3 py-1 text-sm font-bold mt-2">
            98.2% • School Topper
          </div>
        </div>
      </div>
    </section>
  );
};
