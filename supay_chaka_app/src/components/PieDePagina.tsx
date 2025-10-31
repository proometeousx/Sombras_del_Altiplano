import { Button } from "@/components/ui/button";
import { Download, Mail, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-volcanic-black border-t border-border">
      {/* Mystical gradient overlay */}
      <div className="absolute inset-0 gradient-red opacity-20" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cinzel mb-6 text-foreground">
            ¿Te Atreves a Cruzar el Puente?
          </h2>
          <p className="text-xl text-muted-foreground font-playfair italic mb-8">
            El puente sigue incompleto... hasta que tú lo cruces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-playfair hover-glow shadow-deep"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar Demo
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-playfair hover-glow shadow-deep"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contacto / Prensa
            </Button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a 
            href="#" 
            className="w-14 h-14 rounded-full bg-stone-brown border border-border flex items-center justify-center hover-glow transition-mystical group"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-mystical" />
          </a>
          <a 
            href="#" 
            className="w-14 h-14 rounded-full bg-stone-brown border border-border flex items-center justify-center hover-glow transition-mystical group"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-mystical" />
          </a>
          <a 
            href="#" 
            className="w-14 h-14 rounded-full bg-stone-brown border border-border flex items-center justify-center hover-glow transition-mystical group"
            aria-label="Itch.io"
          >
            <svg className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-mystical" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.13 1.338C2.08 1.96.02 4.328.02 4.328l-.004.035c-.185.984-.165 2.025.227 2.988.29.701.863 1.337 1.609 1.449.077.02.15.032.226.032.196 0 .395-.036.586-.096.646-.206 1.21-.722 1.535-1.407a2.83 2.83 0 00.24-1.32c.015-.427-.05-.854-.195-1.248-.106-.287-.263-.554-.47-.792C3.39 3.535 3.13 1.338 3.13 1.338zm17.74 0s-.26 2.197-.644 2.64c-.207.238-.364.505-.47.792-.145.394-.21.82-.195 1.248a2.83 2.83 0 00.24 1.32c.325.685.889 1.201 1.535 1.407.191.06.39.096.586.096.076 0 .149-.012.226-.032.746-.112 1.319-.748 1.609-1.449.392-.963.412-2.004.227-2.988l-.004-.035S21.92 1.96 20.87 1.338z"/>
            </svg>
          </a>
        </div>

        {/* Bottom info */}
        <div className="text-center border-t border-border pt-8">
          <h3 className="text-2xl font-cinzel mb-3 text-lantern">
            Supay Chaka: El Puente del Diablo
          </h3>
          <p className="text-sm text-muted-foreground font-merriweather mb-2">
            Un juego de terror psicológico y sigilo andino
          </p>
          <p className="text-xs text-stone font-merriweather">
            © 2025 Supay Chaka Team. Basado en leyendas bolivianas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
