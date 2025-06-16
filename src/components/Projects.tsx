import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "Express", "MySQL", "Bootstrap"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "CSS3", "JavaScript", "Local Storage"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays current weather conditions and forecasts using external APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather API"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Personal Blog",
      description: "A dynamic blog platform with content management, comment system, and SEO optimization.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6c19d?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express", "MySQL", "Bootstrap"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for web development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 gradient-text ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card 
                key={project.id}
                className={`group hover:scale-105 transition-all duration-300 glass-effect border-0 overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-electric-100 text-electric-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex space-x-4">
                  <Button 
                    variant="outline"
                    className="w-full border-electric-400 text-electric-400 hover:bg-electric-50 hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    View GitHub
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 gradient-text ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.5s" }}>
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card 
                key={project.id}
                className={`group hover:scale-105 transition-all duration-300 glass-effect border-0 overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex space-x-2 pt-0">
                  <Button 
                    size="sm"
                    variant="outline"
                    className="w-full border-purple-400 text-purple-400 hover:bg-purple-50 text-xs hover:scale-105 transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    View Code
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "1s" }}>
          <Button 
            variant="outline"
            size="lg"
            className="border-electric-400 text-electric-400 hover:bg-electric-50 hover:scale-105 transition-all duration-300"
            onClick={() => window.open("https://github.com/saikumar", "_blank")}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
