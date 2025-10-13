import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import designerAvatar from "@/assets/designer-avatar.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-primary opacity-20 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-secondary opacity-15 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Hi, Saya</span>{" "}
                <span className="text-gradient">Nandini</span>
                <br />
                <span className="text-gradient">UI/UX Designer</span>{" "}
                <span className="text-foreground">&</span>{" "}
                <span className="text-gradient">Web Developer</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg leading-relaxed">
                Mahasiswa STTI SONY SUGEMA semester 5 yang passionate dalam menciptakan 
                pengalaman digital yang cantik dan fungsional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('projects')}
                className="group"
              >
                <span>Lihat Portfolio</span>
                <ArrowDown className="ml-2 transition-transform group-hover:translate-y-1" />
              </Button>
              
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => scrollToSection('contact')}
                className="group"
              >
                <Mail className="mr-2 transition-transform group-hover:scale-110" />
                <span>Hubungi Saya</span>
              </Button>
            </div>

            <div className="pt-4">
              <a 
                href="/cv-nandini.pdf" 
                download="CV-Nandini-UI-UX-Designer.pdf"
              >
                <Button variant="ghost" size="sm">
                  <Download className="mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* 3D Avatar Section */}
          <div className="relative slide-in-right">
            <div className="relative">
              {/* Main Avatar */}
              <div className="card-3d glass rounded-3xl p-8 glow-primary">
                <img 
                  src={designerAvatar} 
                  alt="UI/UX Designer Avatar" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 float" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 float" style={{ animationDelay: '3s' }}>
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💻</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 glass rounded-xl p-3 float" style={{ animationDelay: '2s' }}>
                <div className="text-xs text-gradient font-semibold">
                  5+ Years
                  <br />
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};