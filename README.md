# 📰 The Daily Developer - Portfolio Website

A modern, retro-inspired portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. This project showcases a computer science student's professional journey, projects, skills, and achievements in an elegant newspaper-themed design.

### Portfolio link - https://koppesh-portfolio.vercel.app/

## 🎯 Project Overview

**The Daily Developer** is a creative portfolio website that reimagines a traditional developer portfolio as a newspaper publication. It displays:

- **Professional Profile**: Personal introduction and key highlights
- **Education Chronicle**: Academic background and specializations
- **Experience Timeline**: Internship and professional experience
- **Achievements Section**: Awards, certifications, and recognitions
- **Project Showcase**: Detailed portfolio of completed projects with tech stacks
- **Skills Matrix**: Comprehensive breakdown of technical competencies
- **Contact Information**: Footer with links to social profiles

The design combines modern web technologies with a classic newspaper aesthetic, creating a unique and memorable presentation.

## 🎨 Design Highlights

- **Retro Newspaper Theme**: Inspired by classic print journalism with a digital twist
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Color Scheme**: Warm, elegant colors (#f4f1ea background with #1a1a1a text)
- **Typography**: Mix of Playfair Display for headers and Merriweather for body text
- **Dynamic Date Display**: Shows current date and location in the masthead
- **Professional Imagery**: Portfolio includes images for profile and project showcase

## 🛠️ Tech Stack

### Core Technologies

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Lucide React 0.344.0 (for icons)
- **Backend Services**: Supabase 2.57.4

### Development Tools

- **Code Quality**: ESLint 9.9.1
- **CSS Processing**: PostCSS 8.4.35, Autoprefixer 10.4.18
- **Type Checking**: TypeScript
- **Development Server**: Vite with React plugin

## 📁 Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Masthead.tsx          # Header with profile picture and intro
│   │   ├── BreakingNews.tsx      # Featured introduction/bio section
│   │   ├── Education.tsx         # Education and specializations
│   │   ├── Experience.tsx        # Work experience and internships
│   │   ├── Achievements.tsx      # Awards and certifications
│   │   ├── Projects.tsx          # Portfolio projects showcase
│   │   ├── Skills.tsx            # Technical skills breakdown
│   │   └── Footer.tsx            # Contact and social links
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # React entry point
│   ├── index.css                 # Global styles
│   └── vite-env.d.ts            # Vite environment type definitions
├── images/                        # Project and profile images
│   ├── Koppesh.jpg              # Profile picture
│   ├── MHC.png                  # MHCognition project
│   ├── UPACS.jpg                # UPACS project
│   ├── Jarvis.png               # Jarvis project
│   ├── Philosite.png            # Philosite project
│   ├── Voxcoder.png             # Voxcoder project
│   ├── AAD.png                  # AAD project
│   └── PDE.webp                 # PDE project
├── Configuration Files
│   ├── vite.config.ts            # Vite build configuration
│   ├── tailwind.config.js        # Tailwind CSS theme setup
│   ├── postcss.config.js         # PostCSS configuration
│   ├── tsconfig.json             # TypeScript main config
│   ├── tsconfig.app.json         # TypeScript app-specific config
│   ├── tsconfig.node.json        # TypeScript Node.js config
│   ├── eslint.config.js          # ESLint rules
│   └── package.json              # Project dependencies and scripts
├── index.html                     # HTML entry point
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 16+ installed
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📜 Available Scripts

All scripts are defined in `package.json`:

| Command             | Purpose                                                    |
| ------------------- | ---------------------------------------------------------- |
| `npm run dev`       | Start development server with hot module replacement (HMR) |
| `npm run build`     | Create optimized production build                          |
| `npm run preview`   | Preview the production build locally                       |
| `npm run lint`      | Run ESLint to check code quality                           |
| `npm run typecheck` | Run TypeScript type checking without emitting files        |

## 🧩 Component Breakdown

### **Masthead Component** (`Masthead.tsx`)

- Displays profile picture with border styling
- Shows current date and location (Chennai, India)
- Features the main title "The Daily Developer"
- Displays edition information (Est. 2022, Volume I)
- Contains key metrics and tagline
- Responsive grid layout for different screen sizes

### **Breaking News Component** (`BreakingNews.tsx`)

- Featured introduction/bio section styled as "Breaking News"
- Highlights key skills and professional goals
- Uses decorative drop cap styling
- Newspaper-style left border accent

### **Education Component** (`Education.tsx`)

- **Current Degree**: B.Tech in Computer Science & Engineering (AI & ML) at VIT Chennai
- **Current Year**: 2nd Year (2023–2027)
- **CGPA**: 9.06
- **Specializations**: AI, Machine Learning, Neural Networks, NLP, Computer Vision, Data Science
- **Previous Education**: CBSE Class XII with 98.2% (School Topper)

### **Experience Component** (`Experience.tsx`)

- **AI & ML Intern** at MHCognition (Dec 2025 - Jan 2026)
  - AI chatbot development with NLP and RAG
  - HRM chatbot enhancement
  - AWS cloud deployment
- **System Analyst Intern** at LambdaDigital Pvt Ltd (Jun 2024)
  - Enterprise Asset Management platform development
  - Tech stack evaluation and prototyping

### **Achievements Component** (`Achievements.tsx`)

Features multiple certifications and recognitions:

- 5th Place in VMedithon Hackathon (2025)
- NPTEL Top 5% Certificates:
  - Data Science for Engineers
  - Python for Data Science
  - Entrepreneurship
- FreeCodeCamp Responsive Web Design Certification

### **Projects Component** (`Projects.tsx`)

Showcases major projects with full details:

- Project title, description, and images
- Technology stack used
- GitHub and live demo links
- Highlight of key achievement

**Notable Projects**:

- **MH Cockpit**: AI Flight Assistant using Google Gemini
- **UPACS**: Unconscious Patient Autonomous Care System
- And more...

### **Skills Component** (`Skills.tsx`)

Organized skill categories:

- **Programming Languages**: Python, Java, C, C++, JavaScript, HTML/CSS, SQL
- **AI/ML Tools**: PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas, NLP, RAG, LangChain
- **Web & Backend**: React.js, Django, Flask, REST APIs
- **Cloud & DevOps**: AWS, Docker, Git
- **Databases**: MongoDB, SQL

### **Footer Component** (`Footer.tsx`)

- Contact information
- Social media links
- Professional profiles and repositories

## 🎨 Styling & Design

### Tailwind CSS Configuration

- **Content Paths**: Configured for HTML and all TypeScript/TSX files
- **Custom Theme**: Extended theme with custom colors and typography
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints (sm, md, lg, xl, 2xl)

### Color Palette

- **Background**: `#f4f1ea` (Warm cream)
- **Text**: `#1a1a1a` (Deep black)
- **Borders**: `#1a1a1a` with varying thickness for visual hierarchy

### Typography

- **Headers**: Playfair Display for elegant, large headlines
- **Body**: Merriweather for readable, classic serif text
- **Monospace**: For code snippets and technical details

### Responsive Breakpoints

- **Mobile**: Default and `sm` (640px)
- **Tablet**: `md` (768px)
- **Desktop**: `lg` (1024px)

## 📱 Responsive Features

The portfolio is fully responsive:

- **Mobile**: Single-column layout with optimized spacing
- **Tablet**: Adjusted font sizes and 2-column sections
- **Desktop**: Full 3-column grid with max-width container
- **Typography**: Scales from `md:text-*` classes for optimal readability

## 🔧 Configuration Files Explained

### `vite.config.ts`

- Configures Vite as the build tool
- Enables React plugin for JSX transformation
- Optimizes **lucide-react** dependencies

### `tailwind.config.js`

- Scans HTML and component files for class names
- Sets up content paths for proper tree-shaking
- Extends theme configuration

### `tsconfig.json` & `tsconfig.app.json`

- Strict type checking enabled
- ES2020 target for modern JavaScript
- Support for JSX with React

### `eslint.config.js`

- Enforces code quality standards
- React and React Hooks linting rules
- TypeScript support

### `postcss.config.js`

- Integrates Tailwind CSS
- Autoprefixes CSS for browser compatibility

## 🌐 Deployment

### Build Before Deployment

```bash
npm run build
```

The production-ready files are in the `dist/` folder.

### Deployment Options

1. **Vercel** (Recommended for Vite projects)
   - Connect GitHub repository
   - Auto-deploys on push
   - Free tier available

2. **Netlify**
   - Drag-and-drop `dist/` folder
   - Or connect Git repository
   - Free SSL included

3. **GitHub Pages**
   - Configure `vite.config.ts` with base path
   - Push `dist/` to gh-pages branch

4. **Traditional Hosting**
   - Upload `dist/` folder contents
   - Ensure server supports single-page applications (SPA)

## 📝 Usage & Customization

### Updating Personal Information

- Edit component content directly in respective files
- Update images in the `images/` folder
- Modify color scheme in Tailwind classes

### Adding New Projects

Edit `Projects.tsx` and add to the `projects` array with:

- Title, description, image path
- Technology stack array
- GitHub and live links (optional)

### Modifying Styling

- Global styles: `src/index.css`
- Component-specific: Tailwind classes in TSX files
- Theme colors: Update hex values in Tailwind classes

## 🔒 Environment Variables

If using Supabase features:

- Create a `.env` file in project root
- Add your Supabase URL and API key
- Reference in components as needed

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [Lucide React Icons](https://lucide.dev)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 About

**Developer**: Koppesh P  
**Location**: Chennai, India  
**Education**: B.Tech CSE (AI & ML) Student at VIT Chennai  
**Interests**: Full-stack development, Machine Learning, AI, Web Applications

---

**Last Updated**: February 2026  
**Portfolio Version**: 1.0  
**Status**: Active Development
