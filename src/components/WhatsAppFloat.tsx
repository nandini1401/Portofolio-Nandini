import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo Nandini, saya tertarik untuk berkolaborasi atau memesan website. Bisa kita diskusi?";
    const whatsappUrl = `https://wa.me/6285714291570?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer group"
      onClick={handleWhatsAppClick}
    >
      <div className="glass rounded-full p-4 card-3d hover:glow-primary transition-all duration-300 bg-green-500/90 hover:bg-green-500">
        <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
    </div>
  );
};