import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Eye } from "lucide-react";

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    demoUrl: string;
    originalPrice: string;
    discountPrice: string;
    discount: string;
    status: string;
  };
  onBack: () => void;
}

export const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 hover:text-gradient transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Projects
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project Image */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  project.status === 'Completed' 
                    ? 'bg-success text-success-foreground' 
                    : 'bg-gradient-primary text-primary-foreground'
                }`}>
                  {project.status}
                </div>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 left-4">
                <div className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <span>%</span>
                  <span>{project.discount}</span>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 text-gradient">Pricing</h3>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground line-through">
                  {project.originalPrice}
                </div>
                <div className="text-2xl font-bold text-gradient">
                  {project.discountPrice}
                </div>
                <div className="text-sm text-muted-foreground">
                  Save {project.discount} with current promotion
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <div className="text-sm text-gradient font-semibold mb-2">
                {project.category}
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gradient">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 glass rounded-full text-sm border border-glass-border/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open(project.demoUrl, '_blank')}
              >
                <Eye className="mr-2 w-4 h-4" />
                View Demo
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const message = `Halo Nandini, saya tertarik dengan project ${project.title}. Bisa kita diskusi lebih lanjut?`;
                  const whatsappUrl = `https://wa.me/+6285714291570?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                <ExternalLink className="mr-2 w-4 h-4" />
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};