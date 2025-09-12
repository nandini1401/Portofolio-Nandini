import { Button } from "@/components/ui/button";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Menciptakan interface yang intuitif dan estetis dengan prinsip design thinking",
      tools: ["Figma", "Adobe XD", "Sketch", "Principle"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development", 
      description: "Mengembangkan website responsive dengan teknologi modern dan performa optimal",
      tools: ["React", "Vue.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Design",
      description: "Merancang aplikasi mobile yang user-friendly dengan pengalaman seamless",
      tools: ["React Native", "Flutter", "Ionic", "Expo"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Web Developer",
      description: "Mengembangkan website modern dengan teknologi terkini dan performa optimal",
      tools: ["HTML/CSS", "JavaScript", "React", "Node.js"]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-secondary opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Tentang</span>{" "}
            <span className="text-foreground">Saya</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Saya Nandini, mahasiswa semester 5 di STTI SONY SUGEMA yang passionate dalam 
            UI/UX Design dan Web Development dengan pendekatan yang fresh dan kreatif.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Story Section */}
          <div className="space-y-6 slide-in-left">
            <div className="glass rounded-3xl p-8 card-3d">
              <h3 className="text-2xl font-bold text-gradient mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sebagai mahasiswa yang aktif di STTI SONY SUGEMA, saya mengembangkan 
                  passion dalam design yang tidak hanya cantik tapi juga fungsional dan user-friendly.
                </p>
                <p>
                  Melalui berbagai project akademik dan freelance, saya belajar memahami 
                  kebutuhan user dan menciptakan solusi digital yang tepat sasaran.
                </p>
                <p>
                  Saat ini fokus pada pengembangan skill di bidang Web Development dan 
                  implementasi design modern dengan teknologi terkini.
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-glass-border">
                <div className="flex flex-wrap gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">15+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">10+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="slide-in-right">
            <div className="glass rounded-3xl p-8 card-3d space-y-6">
              <h3 className="text-2xl font-bold text-gradient">Design Philosophy</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">User-Centered Design</h4>
                    <p className="text-muted-foreground text-sm">
                      Setiap desisi design berdasarkan penelitian dan feedback pengguna
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Functional Beauty</h4>
                    <p className="text-muted-foreground text-sm">
                      Menggabungkan estetika yang memukau dengan functionalitas optimal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Future-Ready</h4>
                    <p className="text-muted-foreground text-sm">
                      Implementasi teknologi terdepan untuk solusi yang sustainable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-up">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="glass rounded-2xl p-6 card-3d hover:glow-primary group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-3 group-hover:text-gradient transition-colors">
                {skill.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span 
                    key={tool}
                    className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground group-hover:text-gradient transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-up">
          <a 
            href="mailto:nandini14012006@gmail.com?subject=Kolaborasi%20Project&body=Halo%20Nandini,%20saya%20tertarik%20untuk%20berkolaborasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="xl">
              Mari Berkolaborasi
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};