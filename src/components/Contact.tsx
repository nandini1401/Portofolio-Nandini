import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@designer.com",
      description: "Kirim email untuk project inquiry"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+62 812-3456-7890",
      description: "Available Mon-Fri, 9AM-6PM"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Jakarta, Indonesia",
      description: "Open for remote collaboration"
    }
  ];

  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Complete design solutions from research to prototype"
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "Responsive websites with modern technologies"
    },
    {
      icon: "📱",
      title: "Mobile App Design",
      description: "Native and cross-platform mobile experiences"
    },
    {
      icon: "🚀",
      title: "Consultation",
      description: "Design strategy and technical consulting"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-20 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl float"></div>
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Mari</span>{" "}
            <span className="text-gradient">Berkolaborasi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Siap untuk mewujudkan ide digital Anda? Mari diskusikan project 
            dan ciptakan sesuatu yang luar biasa bersama.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="slide-in-left">
            <div className="glass rounded-3xl p-8 card-3d">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                Kirim Pesan
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nama lengkap Anda"
                      className="glass border-glass-border/30 focus:border-primary/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@domain.com"
                      className="glass border-glass-border/30 focus:border-primary/50 transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Topik project atau pertanyaan"
                    className="glass border-glass-border/30 focus:border-primary/50 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Ceritakan detail project atau pertanyaan Anda..."
                    rows={6}
                    className="glass border-glass-border/30 focus:border-primary/50 transition-all duration-300 resize-none"
                    required
                  />
                </div>
                
                <Button type="submit" variant="hero" size="xl" className="w-full group">
                  <Send className="mr-2 transition-transform group-hover:translate-x-1" />
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Services */}
          <div className="space-y-8 slide-in-right">
            
            {/* Contact Information */}
            <div className="glass rounded-3xl p-8 card-3d">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                Informasi Kontak
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-gradient transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-lg font-medium text-primary">
                        {info.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass rounded-3xl p-8 card-3d">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                Quick Actions
              </h3>
              
              <div className="space-y-4">
                <Button variant="default" size="lg" className="w-full justify-start group">
                  <MessageCircle className="mr-3 transition-transform group-hover:scale-110" />
                  WhatsApp Chat
                </Button>
                
                <Button variant="outline" size="lg" className="w-full justify-start group">
                  <Calendar className="mr-3 transition-transform group-hover:scale-110" />
                  Schedule Meeting
                </Button>
                
                <Button variant="ghost" size="lg" className="w-full justify-start group">
                  <Mail className="mr-3 transition-transform group-hover:scale-110" />
                  Send Direct Email
                </Button>
              </div>
            </div>

            {/* Services Overview */}
            <div className="glass rounded-3xl p-8 card-3d">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                Services Available
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={service.title}
                    className="text-center p-4 rounded-xl bg-muted/20 hover:bg-gradient-primary/10 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h4 className="font-semibold text-sm mb-1 group-hover:text-gradient transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="glass rounded-3xl p-8 inline-block">
            <h3 className="text-xl font-bold mb-2">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Let's discuss your ideas and bring them to life
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="hero">
                Start Project
              </Button>
              <Button variant="outline">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};