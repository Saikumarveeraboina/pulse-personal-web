import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Saikumar – a passionate full stack developer fresher";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-electric opacity-10 animate-gradient bg-[length:400%_400%]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-electric-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-electric-300 rounded-full opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-float" style={{ animationDelay: "0.5s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Typing Animation */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 min-h-[2.5rem] md:min-h-[4rem]">
              <span className="gradient-text">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "3s" }}>
              Transforming ideas into beautiful, functional web applications with modern technologies
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: "4s" }}>
            <Button 
              size="lg"
              className="gradient-electric hover:scale-105 transition-all duration-300 shadow-lg px-8 py-3 text-lg font-semibold"
              onClick={() => window.open("#resume", "_blank")}
            >
              View Resume
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-electric-400 text-electric-400 hover:bg-electric-50 hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "5s" }}>
            <div className="glass-effect rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="glass-effect rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-muted-foreground">Technologies Learned</div>
            </div>
            <div className="glass-effect rounded-lg p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-muted-foreground">Commitment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;