import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Zap, Briefcase, GraduationCap, Award, Star, Calendar, MapPin } from "lucide-react";

// Certificate images
import certGoogleUX from "@/assets/cert-google-ux.jpg";
import certMetaFrontend from "@/assets/cert-meta-frontend.jpg";
import certAWSCloud from "@/assets/cert-aws-cloud.jpg";
import certReactDev from "@/assets/cert-react-dev.jpg";
import certAdobePhotoshop from "@/assets/cert-adobe-photoshop.jpg";
import certFigmaAdvanced from "@/assets/cert-figma-advanced.jpg";
import certFreeCodeCampJS from "@/assets/cert-freecodecamp-js.jpg";
import certFreeCodeCampRWD from "@/assets/cert-freecodecamp-rwd.jpg";
import certIBMPython from "@/assets/cert-ibm-python.jpg";
import certGoogleMarketing from "@/assets/cert-google-marketing.jpg";
import certScrumMaster from "@/assets/cert-scrum-master.jpg";
import certCiscoSecurity from "@/assets/cert-cisco-security.jpg";

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

  const programmingLanguages = [
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "TypeScript", level: 85, color: "bg-blue-500" },
    { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
    { name: "Python", level: 75, color: "bg-green-500" },
    { name: "Java", level: 70, color: "bg-red-500" },
    { name: "PHP", level: 80, color: "bg-purple-500" }
  ];

  const workExperience = [
    {
      title: "Freelance UI/UX Designer & Python Developer",
      company: "Freelance",
      period: "2022 - Sekarang",
      location: "Remote",
      description: "Menangani berbagai project website untuk klien dari berbagai industri",
      achievements: [
        "Menyelesaikan 15+ project website",
        "Spesialisasi dalam e-commerce dan portfolio",
        "Rating kepuasan klien 98%"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency Local",
      period: "2023 - 2024",
      location: "Jakarta",
      description: "Mengembangkan website untuk klien korporat dan UMKM",
      achievements: [
        "Membangun 8 website korporat",
        "Implementasi responsive design",
        "Optimasi SEO dan performa"
      ]
    }
  ];

  const education = [
    {
      degree: "Teknik Informatika",
      school: "STTI SONY SUGEMA",
      period: "2021 - 2025",
      status: "Semester 5",
      gpa: "3.7/4.0",
      achievements: [
        "Mahasiswa berprestasi",
        "Juara 1 Lomba Web Design",
        "Aktif dalam organisasi IT"
      ]
    },
    {
      degree: "SMA IPA",
      school: "SMA Negeri 1 Jakarta",
      period: "2018 - 2021",
      status: "Lulus",
      gpa: "85/100",
      achievements: [
        "Lulusan terbaik jurusan IPA",
        "Juara Olimpiade Komputer",
        "Ketua OSIS periode 2020-2021"
      ]
    }
  ];

  const certificates = [
    { name: "Google UX Design Professional Certificate", issuer: "Google", year: "2024", image: certGoogleUX },
    { name: "Meta Front-End Developer Certificate", issuer: "Meta", year: "2024", image: certMetaFrontend },
    { name: "AWS Cloud Practitioner", issuer: "Amazon", year: "2023", image: certAWSCloud },
    { name: "React Developer Certification", issuer: "React Training", year: "2023", image: certReactDev },
    { name: "Adobe Certified Expert - Photoshop", issuer: "Adobe", year: "2023", image: certAdobePhotoshop },
    { name: "Figma Advanced Certification", issuer: "Figma", year: "2024", image: certFigmaAdvanced },
    { name: "JavaScript Algorithms Certification", issuer: "FreeCodeCamp", year: "2023", image: certFreeCodeCampJS },
    { name: "Responsive Web Design", issuer: "FreeCodeCamp", year: "2022", image: certFreeCodeCampRWD },
    { name: "Python for Data Science", issuer: "IBM", year: "2023", image: certIBMPython },
    { name: "Digital Marketing Fundamentals", issuer: "Google", year: "2024", image: certGoogleMarketing },
    { name: "Scrum Master Certified", issuer: "Scrum Alliance", year: "2024", image: certScrumMaster },
    { name: "Cybersecurity Fundamentals", issuer: "Cisco", year: "2023", image: certCiscoSecurity }
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
            UI/UX Design dan Python Development dengan pendekatan yang fresh dan kreatif.
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
Saya Nandini, mahasiswi semester 5 STTI SONY SUGEMA. Saya berdedikasi tinggi untuk mengasah kemampuan saya dalam UI/UX Design dan Python Development. Semangat saya untuk terus belajar mendorong saya untuk selalu menghasilkan karya dengan perspektif yang inovatif dan kreatif.                </p>
                <p>
Melalui berbagai project akademik dan freelance, saya belajar memahami kebutuhan user dan menciptakan solusi digital yang tepat sasaran.                </p>
                <p>
Saat ini, saya fokus pada pengembangan keahlian di bidang Python Development dan implementasi desain modern dengan memanfaatkan teknologi terkini.                </p>
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
Setiap keputusan desain berdasarkan penelitian dan feedback pengguna.                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Functional Beauty</h4>
                    <p className="text-muted-foreground text-sm">
Menggabungkan estetika yang memukau dengan fungsionalitas optimal.                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Future-Ready</h4>
                    <p className="text-muted-foreground text-sm">
Implementasi teknologi terdepan untuk solusi yang berkelanjutan.                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="fade-in-up">
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="skills">Skills & Tools</TabsTrigger>
              <TabsTrigger value="experience">Pengalaman Kerja</TabsTrigger>
              <TabsTrigger value="education">Pendidikan</TabsTrigger>
              <TabsTrigger value="certificates">Sertifikat</TabsTrigger>
            </TabsList>

            {/* Skills & Tools Tab */}
            <TabsContent value="skills" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

              {/* Programming Languages */}
              <div className="glass rounded-3xl p-8 card-3d">
                <h3 className="text-2xl font-bold text-gradient mb-6">Bahasa Pemrograman</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {programmingLanguages.map((lang) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-sm text-muted-foreground">{lang.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${lang.color}`}
                          style={{ width: `${lang.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Work Experience Tab */}
            <TabsContent value="experience" className="space-y-6">
              {workExperience.map((exp, index) => (
                <Card key={index} className="glass card-3d">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-gradient">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Pencapaian:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <Star className="w-4 h-4 text-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="glass card-3d">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-gradient">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium">{edu.school}</CardDescription>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="mt-1">
                          <span className="text-primary font-medium">{edu.status}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="font-semibold">GPA: {edu.gpa}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Prestasi:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <Award className="w-4 h-4 text-primary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certificates">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, index) => (
                  <Card key={index} className="glass card-3d hover:glow-primary group overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-gradient group-hover:text-foreground transition-colors text-sm">
                        {cert.name}
                      </h3>
                      <p className="text-muted-foreground text-xs mt-1">
                        {cert.issuer} • {cert.year}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};