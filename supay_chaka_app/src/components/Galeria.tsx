import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const Gallery = () => {
  return (
    <section className="py-24 px-4 bg-stone-brown">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cinzel mb-4 text-foreground">
            Galería Visual
          </h2>
          <p className="text-xl text-muted-foreground font-playfair italic">
            Sumérgete en la atmósfera de Supay Chaka
          </p>
        </div>

        {/* Video placeholder */}
        <Card className="relative overflow-hidden group cursor-pointer mb-8 animate-fade-in shadow-deep border-2 border-border">
          <div className="aspect-video bg-gradient-to-br from-stone-brown to-volcanic-black flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/30 group-hover:bg-primary/50 transition-mystical mb-4 glow-supay">
                <Play className="w-12 h-12 text-primary ml-2" />
              </div>
              <p className="text-2xl font-playfair text-muted-foreground">
                Trailer Cinematográfico
              </p>
              <p className="text-sm text-stone mt-2 font-merriweather">
                Descubre el terror que aguarda en la noche andina
              </p>
            </div>
          </div>
        </Card>

        <p className="text-center text-muted-foreground font-merriweather italic">
          Más capturas y contenido exclusivo próximamente
        </p>
      </div>
    </section>
  );
};

export default Gallery;
