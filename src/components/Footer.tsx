import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "#",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "#",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      url: "#",
      label: "Twitter"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      url: "#",
      label: "Instagram"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "#" }
  ];

  const services = [
    { label: "UI/UX Design", href: "#" },
    { label: "Web Development", href: "#" },
    { label: "Mobile Design", href: "#" },
    { label: "Consultation", href: "#" }
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">D</span>
              </div>
              <span className="text-2xl font-bold text-gradient">Designer</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Passionate UI/UX Designer dan Frontend Developer yang berdedikasi 
              menciptakan pengalaman digital yang memukau dan meaningful.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="glass hover:bg-gradient-primary hover:text-primary-foreground group"
                  aria-label={social.label}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gradient">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-gradient transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gradient">Services</h3>
            <div className="space-y-3">
              {services.map((service) => (
                <a
                  key={service.label}
                  href={service.href}
                  className="block text-muted-foreground hover:text-gradient transition-colors duration-300"
                >
                  {service.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="glass rounded-2xl p-8 mb-12 card-3d">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient mb-3">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get latest updates about design trends and new projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg glass border border-glass-border/30 focus:border-primary/50 focus:outline-none transition-all duration-300"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-glass-border/30">
          <div className="text-sm text-muted-foreground">
            © 2024 Designer Portfolio. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-gradient transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-gradient transition-colors">
              Terms of Service
            </a>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="glass hover:bg-gradient-primary hover:text-primary-foreground group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};