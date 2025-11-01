export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>

        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">Background</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a passionate full-stack developer from Kerala, India, specializing in building
              modern web applications. My journey from Quality Control Engineer to Full-Stack Developer
              reflects my dedication to continuous learning and problem-solving.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">Experience</h3>
            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-white">Full-Stack Web Developer</h4>
                  <span className="text-gray-400">April 2024 – Present</span>
                </div>
                <p className="text-teal-300 mb-2">Brototype</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Built and deployed 3+ full-stack applications using the MERN stack</li>
                  <li>Collaborated in team-driven environment to solve real-world business problems</li>
                  <li>Applied Clean Architecture and MVC patterns for maintainable code</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h4 className="text-xl font-semibold text-white">Quality Control Engineer</h4>
                  <span className="text-gray-400">August 2021 – May 2024</span>
                </div>
                <p className="text-gray-300">
                  Conducted quality inspections ensuring compliance with industry standards
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-white">MERN Stack Development</h4>
                <p className="text-teal-300">Brototype - 2024 to Present</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white">B.Tech</h4>
                <p className="text-teal-300">Govt. Engineering College, Kozhikode - 2017 to 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
