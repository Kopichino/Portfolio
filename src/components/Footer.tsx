import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-12 pt-8 border-t-4 border-[#1a1a1a]">
      <div className="text-center mb-6">
        <h3 className="font-playfair text-2xl font-bold uppercase mb-4 tracking-wide">
          Contact Information
        </h3>
        <p className="text-xs uppercase tracking-widest mb-4">
          For Inquiries, Collaborations, or Opportunities
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <a
          href="mailto:koppeshp@gmail.com"
          className="flex items-center justify-center gap-2 border-2 border-[#1a1a1a] p-4 hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors"
        >
          <Mail size={20} />
          <span className="font-bold text-sm">EMAIL</span>
        </a>

        <a
          href="https://linkedin.com/in/koppeshp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border-2 border-[#1a1a1a] p-4 hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors"
        >
          <Linkedin size={20} />
          <span className="font-bold text-sm">LINKEDIN</span>
        </a>

        <a
          href="https://github.com/Kopichino"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border-2 border-[#1a1a1a] p-4 hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors"
        >
          <Github size={20} />
          <span className="font-bold text-sm">GITHUB</span>
        </a>

        <a
          href="tel:+919444040398"
          className="flex items-center justify-center gap-2 border-2 border-[#1a1a1a] p-4 hover:bg-[#1a1a1a] hover:text-[#f4f1ea] transition-colors"
        >
          <Phone size={20} />
          <span className="font-bold text-sm">PHONE</span>
        </a>
      </div>

      <div className="text-center text-xs border-t-2 border-[#1a1a1a] pt-6">
        <p className="tracking-widest uppercase mb-2">
          © {new Date().getFullYear()} The Daily Developer
        </p>
        <p className="italic">
          "All the code that's fit to print"
        </p>
      </div>
    </footer>
  );
};
