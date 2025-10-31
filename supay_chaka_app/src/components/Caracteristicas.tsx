import { Ghost, EyeOff, Clock, GitBranch } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Ghost,
    title: "Terror Psicológico Andino",
    description: "Experimenta el horror místico basado en leyendas bolivianas auténticas. El Supay acecha en cada sombra."
  },
  {
    icon: EyeOff,
    title: "Sigilo, Persecución y Sonido",
    description: "Usa la luz de tu linterna con cuidado. El sonido es tu enemigo y tu aliado. Cada paso cuenta."
  },
  {
    icon: Clock,
    title: "Tiempo Real: 7 PM → 7 AM",
    description: "Doce horas de pesadilla en tiempo real. El reloj avanza sin piedad hacia el amanecer o tu perdición."
  },
  {
    icon: GitBranch,
    title: "Finales Múltiples",
    description: "Tus decisiones determinan el destino de Calca. ¿Lograrás romper el pacto o sucumbirás a la oscuridad?"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-stone-brown relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cinzel mb-4 text-foreground">
            Mecánicas del Juego
          </h2>
          <p className="text-xl text-muted-foreground font-playfair italic">
            Un viaje al corazón de la noche andina
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card border-2 border-border hover-glow transition-mystical group animate-fade-in shadow-deep"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-mystical glow-supay">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-cinzel mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-merriweather">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
