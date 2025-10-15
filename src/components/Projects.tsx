import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import { ProjectDetail } from "./ProjectDetail";
import { useState } from "react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const projects = [
    {
      id: 1,
      title: "wedding invitation website",
      category: "Landing Page Web",
      description: "Website undangan pernikahan digital yang modern dan elegan, dilengkapi dengan fitur RSVP online dan informasi acara lengkap.",
      image: projectEcommerce,
      technologies: ["html", "css", "Java Script"],
      features: ["Lagu", "Lokasi", "Kontak", "Detail Transfer"],
      demoUrl: "https://web-invite-wedding.vercel.app/",
      status: "Selesai"
    },
    {
      id: 2,
      title: "UI Design ",
      category: "Aplikasi LAPOR",
      description: "Website reservasi restoran dengan sistem booking real-time, menu digital, dan integrasi payment online.",
      image: projectMobile,
      technologies: ["Figma"],
      features: ["Tampilan Design"],
      demoUrl: "https://www.figma.com/proto/OFNYmeeOtDVzWH6BUpsz1Q/LAPOR--?node-id=74-30&t=tjUt2Di3Df3M8cHd-1&scaling=scale-down&content-scaling=responsive&page-id=1%3A2&starting-point-node-id=4%3A4&show-proto-sidebar=1",
      // pricing removed
      status: "Proses"
    },
    {
      id: 3,
      title: "Educational Learning Platform",
      category: "Learning Management System",
      description: "Platform pembelajaran online dengan video streaming, quiz interaktif, dan tracking progress siswa.",
      image: projectDashboard,
      technologies: ["React", "Firebase", "Node.js", "Socket.io"],
      features: ["Video Streaming", "Interactive Quiz", "Progress Tracking", "Certificate"],
      demoUrl: "https://learning-platform-demo.com",
      // pricing removed
      status: "Completed"
    },
    {
      id: 4,
      title: "Fashion Portfolio Website",
      category: "Portfolio Website",
      description: "Website portfolio untuk fashion designer dengan galeri foto, lookbook, dan contact form yang elegant.",
      image: projectEcommerce,
      technologies: ["HTML/CSS", "JavaScript", "GSAP", "EmailJS"],
      features: ["Photo Gallery", "Lookbook", "Contact Form", "Responsive Design"],
      demoUrl: "https://fashion-portfolio-demo.com",
      // pricing removed
      status: "Completed"
    }  ];

  

  if (selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject} 
        onBack={() => setSelectedProject(null)} 
      />
    );
  }

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Python </span>{" "}
            <span className="text-gradient">&</span>{" "}
            <span className="text-foreground">Innovation Projects </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proyek yang berfokus pada pengembangan project Python dan
              teknologi IoT 
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="glass rounded-3xl p-6 card-3d group cursor-pointer hover:glow-primary transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative mb-6">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-success text-success-foreground' 
                        : 'bg-gradient-primary text-primary-foreground'
                    }`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Discount Badge */}
                  {/* discount badge removed */}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gradient font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted/50 rounded-full text-xs text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-glass-border/20 flex justify-end">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button variant="outline" size="sm" className="group">
                      <Eye className="mr-1 w-3 h-3" />
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};