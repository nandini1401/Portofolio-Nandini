import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "nandini14012006@gmail.com",
      description: "kirim pesan di email",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+62 857-1429-1570",
      description: "",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Lokasi",
      value: "Karawang, jawa Barat, Indonesia",
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
        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl p-8 card-3d">
            <h3 className="text-2xl font-bold text-gradient mb-6">
              Informasi Kontak
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
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
        </div>
      </div>
    </section>
  );
};
