import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const mainProjects = [
    {
      title: 'AutomateX',
      description: 'Automation platform enabling users to create automated zaps using triggers and actions across services. Built with microservices architecture using Kafka for asynchronous messaging.',
      image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Kafka', 'Docker'],
      features: [
        'Microservice pattern with 5 services',
        'Clean Architecture implementation',
        'Outbox pattern & retry mechanisms',
        'Background processing with worker queues'
      ],
      github: 'https://github.com/Basim-B-1998',
      live: null
    },
    {
      title: 'Clothmart',
      description: 'Full-featured e-commerce platform with Redux state management, admin dashboard, and integrated payment gateways. Includes image upload functionality with Cloudinary.',
      image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Redux', 'Node.js', 'MongoDB', 'Stripe', 'PayPal'],
      features: [
        'JWT-based authentication',
        'Admin panel with CRUD operations',
        'Multiple payment gateways',
        'Image upload with Cloudinary'
      ],
      github: 'https://github.com/Basim-B-1998',
      live: 'https://clothmart-frontend.vercel.app/'
    },
    {
      title: 'Streamify',
      description: 'Movie discovery and streaming interface with Firebase authentication and TMDb API integration. Features trending, upcoming, and top-rated movies.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Firebase', 'TMDb API', 'CSS3'],
      features: [
        'Firebase Authentication',
        'Real-time movie data from TMDb',
        'Fully responsive design',
        'Session persistence'
      ],
      github: 'https://github.com/Basim-B-1998',
      live: 'https://streamify-virid-eight.vercel.app/'
    }
  ];



  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>

        <div className="space-y-8 mb-16">
          {mainProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-teal-500/20 transition-all"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-teal-400 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 text-teal-300 rounded-full text-sm border border-teal-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all hover:scale-105"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all hover:scale-105"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
