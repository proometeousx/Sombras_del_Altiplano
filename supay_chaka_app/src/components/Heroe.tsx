import { Button } from "@/components/ui/button";
import cerroRico from "@/assets/cerro-rico-hero.jpg";
import { Play, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cerroRico})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />
      </div>

      {/* Curtain effect that opens from center */}
      <div className="absolute inset-0 flex pointer-events-none">
        <div className="absolute inset-0 left-0 w-1/2 bg-background animate-curtain-left" />
        <div className="absolute inset-0 right-0 left-1/2 w-1/2 bg-background animate-curtain-right" />
      </div>

      {/* Animated smoke effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in-slow">
        <h1 className="text-6xl md:text-8xl font-cinzel font-bold mb-6 text-foreground glow-supay">
          Supay Chaka
        </h1>
        <h2 className="text-3xl md:text-4xl font-playfair text-lantern mb-8 animate-glow-pulse">
          El Puente del Diablo
        </h2>
        <p className="text-xl md:text-2xl font-playfair italic text-stone mb-12 max-w-2xl mx-auto">
          Terror psicológico y sigilo andino
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            variant="default"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-playfair hover-glow shadow-deep"
          >
            <Play className="mr-2 h-5 w-5" />
            Ver Trailer
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="group relative overflow-hidden border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-playfair hover-glow shadow-deep"
          >
            <Download className="mr-2 h-5 w-5" />
            Descargar Demo
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
