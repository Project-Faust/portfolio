import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 flex justify-center">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="w-64 h-64 rounded-full relative overflow-hidden">
                    <Image
                      src="/images/project-faust-logo.png"
                      alt="Project Faust Logo"
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold">Developer. Designer. Problem Solver.</h1>
            <p className="py-6">
              Hi, I&apos;m Lane. Cody Pentecost to the government and Project-Faust to the internet. I craft efficient digital solutions with clean code and efficient design.
              Throughout my portfolio, you&apos;ll discover projects that showcase my technical skills and streamlined approach.
            </p>
            <div className="flex gap-4">
              <Link href="/projects" className="btn btn-primary">View my work</Link>
              <Link href="/contact" className="btn btn-outline">Contact me</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-lg text-gray-600">Check out some of my recent work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards go here - using DaisyUI card components */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Image {item}</span>
              </figure>
              <div className="card-body">
                <div className="flex items-center gap-2 mb-2">
                  <div className="badge badge-primary">React</div>
                  <div className="text-sm text-gray-500">Mar 2023</div>
                </div>
                <h3 className="card-title">Project Title {item}</h3>
                <p>Brief description of this project, highlighting key features and technologies used.</p>
                <div className="card-actions justify-end mt-4">
                  <Link href={`/projects/${item}`} className="btn btn-sm btn-outline">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects" className="btn btn-outline btn-wide">View all projects</Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">My Skills</h2>
            <p className="text-lg text-gray-600">
              I&apos;ve worked with a variety of technologies and tools throughout my development journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Frontend',
                description: 'Building responsive, accessible, and performant user interfaces.',
                skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
                icon: '🎨'
              },
              {
                name: 'Backend',
                description: 'Developing robust server-side applications and APIs.',
                skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs'],
                icon: '⚙️'
              },
              {
                name: 'Tools & Practices',
                description: 'Employing best practices and tools for efficient development.',
                skills: ['Git', 'GitHub Actions', 'Jest', 'Agile Methodology', 'CI/CD'],
                icon: '🔧'
              }
            ].map((category, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="card-title">{category.name}</h3>
                  <p>{category.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill) => (
                      <span key={skill} className="badge badge-outline">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Something Amazing Together</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          I&apos;m always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch</Link>
      </div>
    </div>
  );
}