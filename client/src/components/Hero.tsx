import { Download, Folder } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Basim B
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-400 mb-6">
            React Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Self-taught full-stack developer with hands-on experience building scalable,
            real-time web applications using the MERN stack and microservices architecture.
            Passionate about automation platforms and developer tooling.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href="/Basim_Resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-all hover:scale-105 shadow-lg hover:shadow-teal-500/50"
          >
            <Download size={20} />
            Download CV
          </a>
          <button
            onClick={() => scrollToSection('projects')}
            className="flex items-center gap-2 px-8 py-4 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-all hover:scale-105 shadow-lg"
          >
            <Folder size={20} />
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
