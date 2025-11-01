import { Code2, Database, Package, Wrench, GitBranch } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 className="w-8 h-8" />,
      skills: ['JavaScript', 'TypeScript', 'MongoDB', 'SQL', 'HTML', 'CSS']
    },
    {
      title: 'Libraries & Frameworks',
      icon: <Package className="w-8 h-8" />,
      skills: ['Next.js', 'Node.js', 'Express', 'React', 'Tailwind CSS', 'shadcn/ui']
    },
    {
      title: 'Microservices',
      icon: <Database className="w-8 h-8" />,
      skills: ['Docker', 'Apache Kafka']
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="w-8 h-8" />,
      skills: ['Git', 'GitHub Actions', 'Vercel', 'Render', 'Netlify', 'Firebase', 'Cloudinary', 'Nodemailer']
    },
    {
      title: 'Concepts',
      icon: <GitBranch className="w-8 h-8" />,
      skills: ['Clean Architecture', 'MVC Architecture']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all hover:scale-105 shadow-lg hover:shadow-teal-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-teal-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-700 text-teal-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
