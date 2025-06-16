import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    technologies: 0,
    experience: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate counters
          const animateCounter = (key: keyof typeof counters, target: number) => {
            let current = 0;
            const increment = target / 60; // 60 frames for smooth animation
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => ({
                ...prev,
                [key]: Math.floor(current)
              }));
            }, 16); // ~60fps
          };

          animateCounter('projects', 5);
          animateCounter('technologies', 10);
          animateCounter('experience', 1);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const skills = [
    { name: "Frontend Development", percentage: 85 },
    { name: "Backend Development", percentage: 80 },
    { name: "Database Management", percentage: 75 },
    { name: "Problem Solving", percentage: 90 },
    { name: "Team Collaboration", percentage: 85 }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer fresher with a strong foundation in modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a recent graduate with a degree in Computer Science, I bring fresh perspectives and 
                cutting-edge knowledge to web development. My journey began with curiosity about how 
                websites work, and it has evolved into a passion for creating seamless user experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in full-stack development using modern technologies like React, Node.js, 
                and databases. I'm always eager to learn new technologies and take on challenging projects 
                that push my boundaries and help me grow as a developer.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="glass-effect rounded-lg px-4 py-2">
                  <span className="text-sm font-semibold text-electric-600">🎓 Fresh Graduate</span>
                </div>
                <div className="glass-effect rounded-lg px-4 py-2">
                  <span className="text-sm font-semibold text-purple-600">💡 Quick Learner</span>
                </div>
                <div className="glass-effect rounded-lg px-4 py-2">
                  <span className="text-sm font-semibold text-electric-600">🚀 Innovation Focused</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Progress Bars */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-8 gradient-text">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm font-medium text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full gradient-electric transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${0.6 + index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Counter */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.8s" }}>
          <div className="text-center glass-effect rounded-lg p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold gradient-text mb-2">{counters.projects}+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center glass-effect rounded-lg p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold gradient-text mb-2">{counters.technologies}+</div>
            <div className="text-muted-foreground">Technologies Mastered</div>
          </div>
          <div className="text-center glass-effect rounded-lg p-8 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold gradient-text mb-2">{counters.experience}+</div>
            <div className="text-muted-foreground">Years Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;