import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, ArrowUp, Youtube, Facebook } from "lucide-react";

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
      icon: <Instagram className="w-5 h-5" />,
      url: "#",
      label: "Instagram"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      url: "#",
      label: "Facebook"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      url: "#",
      label: "YouTube"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.989-5.366 11.989-11.99C24.006 5.367 18.639.001 12.017.001zm5.109 18.707c-2.567.956-6.657.956-9.223 0-2.567-.956-2.567-2.566 0-3.523 2.566-.956 6.656-.956 9.223 0 2.567.957 2.567 2.567 0 3.523z"/>
        </svg>
      ),
      url: "#",
      label: "TikTok"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
        </svg>
      ),
      url: `https://wa.me/6285714291570?text=${encodeURIComponent("Halo Nandini, saya tertarik untuk berkolaborasi atau memesan website. Bisa kita diskusi?")}`,
      label: "WhatsApp"
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
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
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
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="glass hover:bg-gradient-primary hover:text-primary-foreground group"
                    aria-label={social.label}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </Button>
                </a>
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