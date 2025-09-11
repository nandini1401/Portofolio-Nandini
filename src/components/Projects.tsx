import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Design & Development",
      description: "Platform e-commerce modern dengan 3D product showcase, payment gateway terintegrasi, dan admin dashboard komprehensif.",
      image: projectEcommerce,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Three.js"],
      features: ["3D Product Viewer", "Real-time Inventory", "AI Recommendations", "Multi-vendor Support"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile UI/UX Design",
      description: "Aplikasi mobile banking dengan interface futuristik, biometric authentication, dan real-time financial analytics.",
      image: projectMobile,
      technologies: ["React Native", "TypeScript", "Firebase", "Biometric Auth"],
      features: ["Biometric Login", "Real-time Analytics", "QR Payments", "Budget Tracking"],
      demoUrl: "#",
      githubUrl: "#",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Creative Portfolio Dashboard",
      category: "Dashboard Design",
      description: "Portfolio dashboard untuk creative agency dengan project management tools, client portal, dan analytics dashboard.",
      image: projectDashboard,
      technologies: ["Vue.js", "D3.js", "PostgreSQL", "AWS"],
      features: ["Project Management", "Client Portal", "Analytics", "File Sharing"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed"
    }
  ];

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
            <span className="text-foreground">Featured</span>{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Koleksi project terpilih yang menampilkan keahlian dalam UI/UX design 
            dan development dengan teknologi cutting-edge.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} slide-in-${index % 2 === 1 ? 'right' : 'left'}`}>
                <div className="relative group">
                  <div className="glass rounded-3xl p-4 card-3d">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          <Button variant="glass" size="lg">
                            <Eye className="mr-2" />
                            Live Demo
                          </Button>
                          <Button variant="outline" size="lg">
                            <Github className="mr-2" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute -top-3 -right-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-success text-success-foreground' 
                        : 'bg-gradient-primary text-primary-foreground'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6 slide-in-${index % 2 === 1 ? 'left' : 'right'}`}>
                <div>
                  <div className="text-sm text-gradient font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-medium hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button variant="default" size="lg" className="group">
                    <ExternalLink className="mr-2 transition-transform group-hover:scale-110" />
                    View Project
                  </Button>
                  
                  <Button variant="outline" size="lg" className="group">
                    <Github className="mr-2 transition-transform group-hover:scale-110" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-20 fade-in-up">
          <div className="glass rounded-3xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">
              Ingin melihat project lainnya?
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore lebih banyak case studies dan project portfolio saya
            </p>
            <Button variant="hero" size="xl">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};