import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import { ProjectDetail } from "./ProjectDetail";
import { useState } from "react";
// Import the available real image so we can show it for every project immediately
import ui1 from '@/assets/ui-1.jpg';
import webinvite from '@/assets/webinvite.jpg';
import fashionPortfolio from '@/assets/fashion-portfolio.jpg';
import ui2 from '@/assets/ui-2.jpg';
import ui3 from '@/assets/ui-3.jpg';
import designerAvatar from '@/assets/human.jpg';
import safevisionImg from '@/assets/safevision.jpg';
import ml3 from '@/assets/qr-generator.jpg';
import nadinFlorist from '@/assets/nadin-florist.jpg';
// Use unique inline SVG data-URIs so each project has its own image (prevents shared-image updates)

const makeSvgDataUri = (bg: string, label: string) => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>` +
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>` +
    `<rect width='100%' height='100%' fill='${bg}' />` +
    `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='48' fill='#ffffff' font-family='Inter, Arial, sans-serif'>${label}</text>` +
    `</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const img1 = makeSvgDataUri('#0ea5a4', 'Wedding Invite');
const img2 = makeSvgDataUri('#7c3aed', 'Aplikasi LAPOR');
const img3 = makeSvgDataUri('#2563eb', 'Kampus Digital');
const img4 = makeSvgDataUri('#ef4444', 'Fashion Portfolio');
// (one set of img1..img9 already declared above)
const img5 = makeSvgDataUri('#f97316', 'E-commerce Store');
const img6 = makeSvgDataUri('#059669', 'Mobile UI Kit');
const img7 = makeSvgDataUri('#06b6d4', 'Prediksi Rumah');
const img8 = makeSvgDataUri('#8b5cf6', 'Klasifikasi Sentimen');
const img9 = makeSvgDataUri('#f43f5e', 'Deteksi Anomali');

/*
  To use real images for the UI Design projects, drop your files into `src/assets/` and
  uncomment and update the imports below. Example filenames from your attachments:

  import ui1 from '@/assets/ui-1.jpg';
  import ui2 from '@/assets/ui-2.jpg';
  import ui3 from '@/assets/ui-3.jpg';

  Then set the variables `uiImg1`, `uiImg2`, `uiImg3` to those imports. If you prefer
  different names, adjust accordingly.
*/

// Safe fallbacks use the existing SVG data URIs so the site stays green if you don't
// add actual image files yet. We'll also try to load `ui-1.jpg`..`ui-3.jpg` from
// `src/assets/` using Vite's import.meta.globEager. If those files exist, they'll be
// used automatically; otherwise we keep the SVG fallbacks.
let uiImg1 = img2;
let uiImg2 = img3;
let uiImg3 = img1;

// Vite-only: eager import all common image types from src/assets. This returns an
// object keyed by the file path for files that exist at build time.
try {
  const assets = (import.meta as any).globEager('/src/assets/*.{png,jpg,jpeg,webp}');
  const getAsset = (name: string) => {
    const maybeKeys = [
      `/src/assets/${name}`,
      `./src/assets/${name}`,
      `/assets/${name}`,
      `./assets/${name}`,
      name
    ];

    // Try direct keys first
    for (const k of maybeKeys) {
      const m = (assets as Record<string, any>)[k];
      if (m) return m.default ?? m;
    }

    // Fallback: find any asset key that endsWith the filename (handles various prefixes)
    const foundKey = Object.keys(assets).find(k => k.endsWith(`/${name}`) || k.endsWith(name));
    if (foundKey) {
      const m = (assets as Record<string, any>)[foundKey];
      return m ? (m.default ?? m) : null;
    }

    return null;
  };

  uiImg1 = getAsset('ui-1.jpg') ?? getAsset('ui-1.png') ?? uiImg1;
  uiImg2 = getAsset('ui-2.jpg') ?? getAsset('ui-2.png') ?? uiImg2;
  uiImg3 = getAsset('ui-3.jpg') ?? getAsset('ui-3.png') ?? uiImg3;
  // Also accept images named '1.jpg' (existing in assets) as the Aplikasi LAPOR image
  uiImg1 = getAsset('1.jpg') ?? uiImg1;
  
  // Build a simple assets index to allow mapping real images to projects later
  var availableAssetKeys: string[] = Object.keys(assets || {});
  // Normalize keys for matching
  availableAssetKeys = availableAssetKeys.map(k => k.toString());
} catch (e) {
  // import.meta.globEager may not be supported in non-Vite environments; ignore failures
  // and keep SVG fallbacks.
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  // Helper: try to pick a matching real asset for a project using keywords
  const mapAssetForProject = (fallback: string, keywords: string[]) => {
    try {
      const assets = (import.meta as any).globEager('/src/assets/*.{png,jpg,jpeg,webp}');
      const keys = Object.keys(assets);
      // find a key which contains any keyword
      for (const k of keys) {
        const lower = k.toLowerCase();
        for (const kw of keywords) {
          if (lower.includes(kw.toLowerCase())) {
            const m = (assets as Record<string, any>)[k];
            return (m.default ?? m) as string;
          }
        }
      }
    } catch (e) {
      // ignore
    }
    return fallback;
  };

  const projects = [
    {
      id: 1,
      title: "Wedding Invitation Website",
      category: "Landing Page Web",
      description: "Website undangan pernikahan digital yang modern dan elegan, dilengkapi dengan fitur RSVP online dan informasi acara lengkap.",
  image: webinvite,
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Lagu", "Lokasi", "Kontak", "Detail Transfer"],
      demoUrl: "https://web-invite-wedding.vercel.app/",
      status: "Selesai"
    },
    {
      id: 2,
      title: "Aplikasi LAPOR",
      category: "UI Design",
      description: "Aplikasi Laporan Masyarakat kepada Pihak Desa berbasis digital dengan sistem pelaporan terintegrasi dan notifikasi real-time.",
  image: ui1,
      technologies: ["Figma"],
      features: ["Tampilan Design"],
      demoUrl: "https://www.figma.com/proto/OFNYmeeOtDVzWH6BUpsz1Q/LAPOR--?node-id=74-30&t=tjUt2Di3Df3M8cHd-1&scaling=scale-down&content-scaling=responsive&page-id=1%3A2&starting-point-node-id=4%3A4&show-proto-sidebar=1",
      status: "Proses"
    },
    {
      id: 3,
      title: "Kampus Digital",
      category: "UI Design",
      description: "Aplikasi kampus terintegrasi untuk absensi, melihat jadwal, unggah tugas, dan akses sistem akademik penting seperti KHS dan KRS dalam satu platform digital.",
  image: ui2,
      technologies: ["Figma"],
      features: ["Tampilan Fitur Aplikasi"],
      demoUrl: "https://www.figma.com/proto/fwnjaz4zTXpO0S5DQcYCVd/Untitled?node-id=35-73&t=VWSUbfL8G49ZIQpx-1",
      status: "Proses"
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      category: "Portfolio Website",
      description: "Website portfolio dengan design menarik dan elegant.",
  image: fashionPortfolio,
      technologies: ["HTML/CSS", "JavaScript", "GSAP", "EmailJS"],
      features: ["galery projec", "Contact Form", "Responsive Design"],
      demoUrl: "https://fashion-portfolio-demo.com",
      status: "proses"
    },
    {
      id: 5,
      title: "Website Nadin Florist",
      category: "E-commerce",
      description: "Website toko bunga e-commerce yang responsif, menampilkan katalog produk, cart, dan checkout sederhana untuk memudahkan pelanggan membeli rangkaian bunga.",
      image: nadinFlorist,
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Product Catalog", "Cart", "Checkout"],
      demoUrl: "https://nadin-florist.example.com",
      status: "Selesai"
    },
    {
      id: 5,
      title: "Serenity Cafe",
      category: "UI Design",
      description: "Serenity Cafe adalah desain UI untuk aplikasi mobile yang secara khusus dibuat untuk meningkatkan pengalaman pelanggan sebuah coffee shop. Aplikasi ini dirancang untuk menjembatani kafe dengan pelanggannya secara digital.",
  image: ui3,
      technologies: ["Figma"],
      features: ["tampilan produk", "pemesanan produk", "payment"],
      demoUrl: "https://www.figma.com/proto/m4WsgmyRIDEOEmgaulrNtO/Coffee-Shop-App?node-id=3-5",
      status: "selesai"
    }
  ];

  
  /* Prepare groups */
  const uiDesignProjects = projects.filter(p => ['UI Design', 'Design System'].includes(p.category));
  const landingProjects = projects.filter(p => ['Landing Page Web', 'Portfolio Website', 'E-commerce'].includes(p.category));
  const mlProjects = [
    {
      id: 101,
      title: 'SafeVision',
      category: 'Machine Learning',
      description: 'SafeVision - sistem keamanan gabungan IoT + Computer Vision untuk mengamankan barang menggunakan sensor ultrasonik, buzzer, dan deteksi visual.',
  image: safevisionImg,
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Arduino'],
      features: ['Ultrasonic sensor integration', 'Buzzer alert', 'Real-time object detection', 'Snapshot & alert via server'],
      demoUrl: 'https://www.instagram.com/reel/DPkURevj4Q4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      status: 'selesai'
    },
    {
      id: 102,
      title: 'Human Detection',
      category: 'Machine Learning',
      description: 'Human Detection Sistem pelacakan objek real-time untuk aplikasi pengawasan menggunakan OpenCV dan algoritma tracking.',
  image: designerAvatar,
      technologies: ['Python', 'OpenCV', 'SORT'],
      features: ['human tracking'],
      demoUrl: 'https://www.linkedin.com/posts/nandini06_100harinulis-python-machinelearning-activity-7328080441624723457-irDo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmmLdwBjYgigTOzLJo_iE-GngFtPoLZH_w',
      status: 'Selesai'
    },
    {
      id: 103,
      title: 'File to QR/Barcode Converter',
      category: 'Python Project',
      description: 'Project Python yang mengubah berkas (JPG, PDF, gambar, dll.) menjadi kode QR agar mudah dibagikan dan dipindai.',
  image: ((): string => { try { const m = (import.meta as any).globEager('/src/assets/*.{png,jpg,jpeg,webp}')['/src/assets/qr-generator.jpg']; return (m?.default ?? m) as string; } catch { return ml3; } })(),
      technologies: ['Python', 'qrcode', 'Pillow'],
      features: ['Convert files to QR/Barcode', 'Supports JPG/PDF/Images', 'Generate downloadable image'],
      demoUrl: 'https://qr-generator-demo.example.com',
      status: 'Completed'
    }
    
    
  ];

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
            <span className="text-foreground">Project Saya</span>{" "}
            <span className="text-gradient"></span>{" "}
            <span className="text-foreground"> </span>
          </h2>
        </div>

        {/* UI Design Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gradient">UI Design Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiDesignProjects.map(project => (
              <div key={project.id} className="glass rounded-3xl p-6 card-3d group" onClick={() => setSelectedProject(project)}>
                <div className="relative mb-6">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-3 right-3">
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${project.status === 'selesai' ? 'bg-success text-success-foreground' : 'bg-gradient-primary text-primary-foreground'}`}>
                        {project.status}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gradient font-semibold mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  </div>
                  <div className="pt-4 border-t border-glass-border/20 flex justify-end">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <Button variant="outline" size="sm" className="group"><Eye className="mr-1 w-3 h-3"/>Demo</Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Landing Page Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Website / Landing Page Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingProjects.map(project => (
              <div key={project.id} className="glass rounded-3xl p-6 card-3d group" onClick={() => setSelectedProject(project)}>
                <div className="relative mb-6">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-3 right-3">
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${project.status === 'selesai' ? 'bg-success text-success-foreground' : 'bg-gradient-primary text-primary-foreground'}`}>
                        {project.status}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gradient font-semibold mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  </div>
                  <div className="pt-4 border-t border-glass-border/20 flex justify-end">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <Button variant="outline" size="sm" className="group"><Eye className="mr-1 w-3 h-3"/>Demo</Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Machine Learning Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Machine Learning Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlProjects.map(project => (
              <div key={project.id} className="glass rounded-3xl p-6 card-3d group" onClick={() => setSelectedProject(project)}>
                <div className="relative mb-6">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-3 right-3">
                      <div className={`px-2 py-1 rounded-full text-xs font-semibold ${project.status === 'selesai' ? 'bg-success text-success-foreground' : 'bg-gradient-primary text-primary-foreground'}`}>
                        {project.status}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gradient font-semibold mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  </div>
                  <div className="pt-4 border-t border-glass-border/20 flex justify-end">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <Button variant="outline" size="sm" className="group"><Eye className="mr-1 w-3 h-3"/>Demo</Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};