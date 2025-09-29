import React, { useState, useEffect } from 'react';
import { Github, Mail, Code, Database, Briefcase, GraduationCap, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/19 rounded-full blur-3xl animate-slowFloat" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-500/19 rounded-full blur-3xl animate-slowFloat" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-96 h-96 bg-green-500/14 rounded-full blur-3xl animate-slowFloat" style={{animationDuration: '9s', animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/9 rounded-full blur-3xl animate-slowFloat" style={{animationDuration: '7s', animationDelay: '1s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
              RN_Tan
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-400 transition-all duration-300 hover:scale-110 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 animate-fadeIn">
              {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 hover:bg-slate-800 rounded transition-all duration-300 hover:translate-x-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/50 animate-float relative group">
            <img 
              src="/images/profile-picture.png" 
              alt="Ron Nicolas J. Tan"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-slideUp">
            Ron Nicolas J. Tan
          </h1>
          <p className="text-xl sm:text-2xl text-blue-400 mb-6 animate-slideUp" style={{animationDelay: '0.1s'}}>
            Computer Science Student | Future Tech Innovator
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 animate-slideUp" style={{animationDelay: '0.2s'}}>
            Passionate about leveraging technology to create meaningful solutions and bridge the digital divide
          </p>
          <div className="flex justify-center gap-4 animate-slideUp" style={{animationDelay: '0.3s'}}>
            <a
              href="https://github.com/NorCubess"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-700/50"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="mailto:ronnicolastan@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50"
            >
              <Mail size={20} />
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 group">
            <Briefcase className="text-blue-400 transition-transform duration-300 group-hover:rotate-12" />
            About Me
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed hover:text-white transition-colors duration-300">
            I ventured into computer science seeking a challenge that would push me beyond my comfort zone. 
            What began as a test of my abilities has evolved into a genuine passion. I've discovered that 
            technology is not just about code—it's a powerful tool that transcends boundaries and transforms 
            every industry imaginable: from healthcare and agriculture to economics and data science. 
            My mission is to harness this versatility to make a tangible difference, particularly for 
            underserved communities in my locality who lack access to the technological resources that many 
            take for granted. I'm committed to using my skills to bridge this digital divide and create 
            opportunities for those who need them most.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-900 p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group">
              <p className="text-2xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300">2028</p>
              <p className="text-slate-400">Expected Graduation</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group">
              <p className="text-2xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">3rd Year</p>
              <p className="text-slate-400">Current Level</p>
            </div>
            <div className="bg-slate-900 p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 group">
              <p className="text-2xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">Computer Science</p>
              <p className="text-slate-400">Major</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 group">
            <Code className="text-blue-400 transition-transform duration-300 group-hover:rotate-12" />
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group">
              <h3 className="text-xl font-semibold mb-4 text-blue-400 group-hover:scale-105 transition-transform duration-300">Programming Languages</h3>
              <div className="space-y-4">
                <div className="group/item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium group-hover/item:text-blue-400 transition-colors duration-300">C/C++</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${i <= 4 ? 'bg-blue-500 group-hover/item:scale-125 group-hover/item:shadow-lg group-hover/item:shadow-blue-500/50' : 'bg-slate-600'}`} style={{transitionDelay: `${i * 50}ms`}}></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">Data structures, algorithms, sequential programming</p>
                </div>
                <div className="group/item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium group-hover/item:text-blue-400 transition-colors duration-300">Java</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${i <= 3 ? 'bg-blue-500 group-hover/item:scale-125 group-hover/item:shadow-lg group-hover/item:shadow-blue-500/50' : 'bg-slate-600'}`} style={{transitionDelay: `${i * 50}ms`}}></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">Object-oriented programming principles</p>
                </div>
                <div className="group/item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium group-hover/item:text-blue-400 transition-colors duration-300">C#</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${i <= 2 ? 'bg-blue-500 group-hover/item:scale-125 group-hover/item:shadow-lg group-hover/item:shadow-blue-500/50' : 'bg-slate-600'}`} style={{transitionDelay: `${i * 50}ms`}}></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">Application development</p>
                </div>
                <div className="group/item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium group-hover/item:text-blue-400 transition-colors duration-300">HTML/CSS/JavaScript</span>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className={`w-3 h-3 rounded-full transition-all duration-300 ${i <= 3 ? 'bg-blue-500 group-hover/item:scale-125 group-hover/item:shadow-lg group-hover/item:shadow-blue-500/50' : 'bg-slate-600'}`} style={{transitionDelay: `${i * 50}ms`}}></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">Frontend design and web development</p>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group">
              <h3 className="text-xl font-semibold mb-4 text-purple-400 group-hover:scale-105 transition-transform duration-300">Tools & Frameworks</h3>
              <p className="text-sm text-slate-400 mb-3">Currently expanding my skillset with these modern development tools, frameworks, libraries and programming languages.</p>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'GitKraken', 'VS Code', 'CodeBlocks', 'Visual Studio', 
                  'Next.js', 'React Native', 'Flutter', 'React', 'Tailwind CSS', 'TypeScript'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-slate-900 rounded-full text-sm hover:bg-purple-600/20 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Structures & Algorithms */}
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10 group">
              <h3 className="text-xl font-semibold mb-4 text-green-400 group-hover:scale-105 transition-transform duration-300">Core Competencies</h3>
              <p className="text-sm text-slate-400 mb-3">Strong foundation in computer science fundamentals</p>
              <ul className="space-y-2 text-slate-300">
                {['Advanced Tree & Graph Algorithms', 'Dynamic Data Structures (Linked Lists, Arrays)', 'Sequential & Parallel Programming', 'Number Theory & Mathematical Computing'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-green-400/50 transition-all duration-300"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/10 group">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400 group-hover:scale-105 transition-transform duration-300">Professional Skills</h3>
              <p className="text-sm text-slate-400 mb-3">Proven ability to lead and collaborate effectively</p>
              <ul className="space-y-2 text-slate-300">
                {['Team Leadership & Collaboration', 'Project & Resource Management', 'Strategic Workload Distribution', 'Strong Work Ethic & Dedication'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 group/item hover:translate-x-2 transition-transform duration-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-yellow-400/50 transition-all duration-300"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 group">
            <GraduationCap className="text-blue-400 transition-transform duration-300 group-hover:rotate-12" />
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-slate-900 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group">
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src="/images/vsu-logo.png" 
                  alt="Visayas State University"
                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">Visayas State University - Main</h3>
                  <p className="text-blue-400 font-medium mb-2">Bachelor of Science in Computer Science</p>
                  <p className="text-slate-400 mb-4">Expected Graduation: 2028</p>
                </div>
              </div>
              <p className="text-slate-300 font-medium mb-2">Relevant Coursework:</p>
              <ul className="space-y-1 text-slate-400">
                <li className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300">• Algorithm and Complexities</li>
                <li className="hover:text-blue-400 hover:translate-x-2 transition-all duration-300">• Data Mining</li>
              </ul>
            </div>

            {/* Certification */}
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 p-6 rounded-lg border border-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 hover:border-green-500 group">
              <div className="flex items-start gap-4">
                <img 
                  src="/images/cisco-badge.png" 
                  alt="Cisco Data Science Certification"
                  className="w-20 h-20 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-green-300 transition-colors duration-300">Introduction to Data Science</h3>
                  <p className="text-green-400 font-medium mb-2">Cisco Networking Academy - Verified Certificate</p>
                  <p className="text-slate-300 mb-3">
                    Completed comprehensive training exploring how data science is revolutionizing industries 
                    and creating new career opportunities in the age of big data. Gained foundational knowledge 
                    in data analysis, visualization, and the practical applications of data-driven decision making.
                  </p>
                  <div className="flex gap-4 text-sm text-slate-400">
                    <span>📅 Sep 12, 2025</span>
                    <span>⏱️ 6 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2 group">
            <Database className="text-blue-400 transition-transform duration-300 group-hover:rotate-12" />
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* This Portfolio Project */}
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group cursor-pointer">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">Personal Portfolio Website</h3>
              <p className="text-slate-300 mb-4">
                A fully responsive, modern portfolio website built from scratch using React and Tailwind CSS. 
                Features smooth navigation, dynamic components, and optimized performance. Successfully deployed 
                on Vercel with continuous integration for seamless updates and maintenance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm hover:bg-blue-700/50 hover:scale-110 transition-all duration-300">React</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm hover:bg-blue-700/50 hover:scale-110 transition-all duration-300">Tailwind CSS</span>
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm hover:bg-blue-700/50 hover:scale-110 transition-all duration-300">Vercel</span>
              </div>
            </div>

            {/* Placeholder for future projects */}
            <div className="bg-slate-800/30 p-6 rounded-lg border-2 border-dashed border-slate-600 hover:border-slate-500 transition-all duration-300 hover:scale-105 hover:bg-slate-800/40 group">
              <h3 className="text-xl font-semibold mb-3 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Upcoming Projects</h3>
              <p className="text-slate-500 mb-4 group-hover:text-slate-400 transition-colors duration-300">
                Currently developing several exciting projects that will showcase my technical abilities 
                and problem-solving skills. Check back soon for updates on web applications, algorithm 
                implementations, and data-driven solutions.
              </p>
              <p className="text-slate-600 text-sm group-hover:text-slate-500 transition-colors duration-300">
                💡 Focus areas: Full-stack web development, efficient algorithm design, and practical 
                applications of data structures in real-world scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur-sm relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8 hover:text-white transition-colors duration-300">
            I'm always eager to discuss new opportunities, collaborate on innovative projects, 
            or simply connect with fellow tech enthusiasts. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:ronnicolastan@gmail.com"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 text-lg hover:scale-105 hover:shadow-xl hover:shadow-blue-600/50 group"
            >
              <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              ronnicolastan@gmail.com
            </a>
            <a
              href="https://github.com/NorCubess"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 text-lg hover:scale-105 hover:shadow-xl hover:shadow-slate-700/50 group"
            >
              <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center text-slate-400 hover:text-slate-300 transition-colors duration-300">
          <p>© 2025 Ron Nicolas J. Tan. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slowFloat {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          33% { 
            transform: translate(30px, -30px) scale(1.1);
            opacity: 0.8;
          }
          66% { 
            transform: translate(-20px, 20px) scale(0.95);
            opacity: 0.9;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-slowFloat {
          animation: slowFloat 8s ease-in-out infinite;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}