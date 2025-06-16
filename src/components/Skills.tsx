import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "🌐", color: "text-orange-500" },
        { name: "CSS", icon: "🎨", color: "text-blue-500" },
        { name: "JavaScript", icon: "⚡", color: "text-yellow-500" },
        { name: "React", icon: "⚛️", color: "text-blue-400" },
        { name: "Bootstrap", icon: "🅱️", color: "text-purple-500" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢", color: "text-green-500" },
        { name: "Express.js", icon: "🚀", color: "text-gray-600" },
        { name: "Python", icon: "🐍", color: "text-blue-600" },
        { name: "MySQL", icon: "🗄️", color: "text-orange-600" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "📚", color: "text-red-500" },
        { name: "GitHub", icon: "🐙", color: "text-gray-800" },
        { name: "VS Code", icon: "💻", color: "text-blue-500" },
        { name: "Responsive Design", icon: "📱", color: "text-green-600" }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="glass-effect rounded-lg p-6 h-full hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className={`flex flex-col items-center p-4 rounded-lg bg-card hover:bg-accent transition-all duration-300 hover:scale-110 cursor-pointer group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                      style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                    >
                      <div className="text-3xl mb-2 group-hover:animate-bounce">
                        {skill.icon}
                      </div>
                      <span className={`text-sm font-semibold ${skill.color} group-hover:gradient-text transition-all duration-300`}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.8s" }}>
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "REST APIs", "JSON", "AJAX", "ES6+", "NPM", "Webpack", 
              "Responsive Design", "CSS Grid", "Flexbox", "SASS", "Debugging", "Testing"
            ].map((tech, index) => (
              <span 
                key={tech}
                className={`px-4 py-2 glass-effect rounded-full text-sm font-medium hover:gradient-electric hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${1 + index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "1.2s" }}>
          <h3 className="text-2xl font-bold mb-6 gradient-text">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["TypeScript", "Next.js", "MongoDB", "Docker", "AWS"].map((tech, index) => (
              <div 
                key={tech}
                className="flex items-center space-x-2 glass-effect rounded-lg px-4 py-2 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-2 h-2 bg-electric-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;