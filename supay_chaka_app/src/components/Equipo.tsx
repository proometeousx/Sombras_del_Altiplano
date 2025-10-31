import { Card } from "@/components/ui/card";
import stoneTexture from "@/assets/stone-texture.jpg";

const teamMembers = [
  {
    name: "Director del Proyecto",
    role: "Visión Creativa y Narrativa",
    description: "Arquitecto de la pesadilla andina"
  },
  {
    name: "Diseñador de Niveles",
    role: "Arquitectura del Terror",
    description: "Creador de los escenarios coloniales"
  },
  {
    name: "Artista Visual",
    role: "Dirección de Arte",
    description: "Guardián de la estética oscura"
  },
  {
    name: "Programador Principal",
    role: "Mecánicas y Sistemas",
    description: "Tejedor del código del sigilo"
  },
  {
    name: "Diseñador de Sonido",
    role: "Atmósfera Audio",
    description: "Maestro del horror auditivo"
  },
  {
    name: "Especialista en IA",
    role: "Comportamiento del Supay",
    description: "Dador de vida al demonio"
  }
];

const Team = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background with stone texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${stoneTexture})` }}
      />
      <div className="absolute inset-0 gradient-mystical" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cinzel mb-4 text-foreground">
            El Equipo Detrás del Mito
          </h2>
          <p className="text-xl text-muted-foreground font-playfair italic">
            Artesanos digitales del terror andino
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/80 backdrop-blur border-2 border-border hover-glow transition-mystical group animate-fade-in shadow-deep"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-red mx-auto mb-6 flex items-center justify-center group-hover:glow-supay transition-mystical">
                  <div className="w-16 h-16 rounded-full border-2 border-lantern" />
                </div>
                <h3 className="text-xl font-cinzel mb-2 text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-lantern font-playfair mb-3 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground font-merriweather italic">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
