import { Calendar, MapPin } from "lucide-react";

export const Masthead = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="border-b-4 border-[#1a1a1a] pb-6 mb-8">
      <div className="text-center border-b-2 border-[#1a1a1a] pb-4 mb-4">
        <div className="flex items-center justify-center gap-8 text-xs tracking-widest mb-2">
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            CHENNAI, INDIA
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {currentDate.toUpperCase()}
          </span>
        </div>
        <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          The Daily Developer
        </h1>
        <p className="text-xs tracking-[0.3em] mt-2">EST. 2022 • VOLUME I</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 py-8 border-y-2 border-[#1a1a1a]">
        <div className="md:col-span-1 flex justify-center">
          <div className="w-40 h-48 border-4 border-[#1a1a1a] overflow-hidden bg-gray-200">
            <img
              src="/images/Koppesh.jpg"
              alt="Koppesh P"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Koppesh P
          </h2>
          <p className="text-lg md:text-xl tracking-wide uppercase font-semibold mb-4">
            AI & ML Specialist | 3rd Year CSE Student @ VIT Chennai
          </p>
          <div className="border-t border-[#1a1a1a] pt-3 text-sm space-y-1">
            <p>
              <span className="font-bold">Email:</span> koppeshp@gmail.com
            </p>
            <p>
              <span className="font-bold">Phone:</span> +91 94440 40398
            </p>
            <p>
              <span className="font-bold">LinkedIn:</span>{" "}
              linkedin.com/in/koppeshp
            </p>
            <p>
              <span className="font-bold">GitHub:</span> github.com/Kopichino
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
