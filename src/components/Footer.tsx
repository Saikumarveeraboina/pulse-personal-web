const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/saikumar"
    },
    {
      name: "GitHub", 
      icon: "🐙",
      url: "https://github.com/saikumar"
    },
    {
      name: "Twitter",
      icon: "🐦", 
      url: "https://twitter.com/saikumar"
    },
    {
      name: "Email",
      icon: "📧",
      url: "mailto:veeraboinasai123@gmail.com"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-muted/50 to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Saikumar</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              A passionate full-stack developer fresher, dedicated to creating amazing web experiences 
              and bringing innovative ideas to life through code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                  aria-label={social.name}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Projects", id: "projects" },
                { name: "Contact", id: "contact" }
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:gradient-text transition-colors duration-300 hover:translate-x-1 transform transition-transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <span>📧</span>
                <a 
                  href="mailto:veeraboinasai123@gmail.com"
                  className="hover:gradient-text transition-colors duration-300"
                >
                  veeraboinasai123@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <span>📱</span>
                <a 
                  href="tel:+917780601401"
                  className="hover:gradient-text transition-colors duration-300"
                >
                  +91 7780601401
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <span>📍</span>
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Saikumar. All rights reserved. Built with ❤️ using React & Tailwind CSS.
          </div>
          
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-muted-foreground hover:gradient-text transition-all duration-300 hover:scale-105 group"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-6 h-6 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-xs">↑</span>
            </div>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-electric-500 via-purple-500 to-electric-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;