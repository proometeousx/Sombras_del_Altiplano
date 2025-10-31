import phase1 from "@/assets/game5.png";
import phase2 from "@/assets/game1.png";
import phase3 from "@/assets/phase3-yoqalla.jpg";
import phase4 from "@/assets/game6.png";

const phases = [
  {
    number: "01",
    title: "La Orilla del Río",
    time: "7:00 PM - 9:30 PM",
    emotion: "Incertidumbre",
    description: "Calca comienza su travesía en la orilla oscura del río. La niebla cubre el camino hacia el puente.",
    image: phase1
  },
  {
    number: "02",
    title: "El Puente del Diablo",
    time: "9:30 PM - 12:00 AM",
    emotion: "Terror Puro",
    description: "El infame puente resplandece con luz roja. Los martillos del Supay resuenan. Cruzar es inevitable.",
    image: phase2
  },
  {
    number: "03",
    title: "Camino a Yoqalla",
    time: "12:00 AM - 4:00 AM",
    emotion: "Persecución",
    description: "Senderos estrechos entre montañas. El Supay acecha. Cada sombra puede ser tu fin.",
    image: phase3
  },
  {
    number: "04",
    title: "Campanario y Retorno",
    time: "4:00 AM - 7:00 AM",
    emotion: "Esperanza y Desesperación",
    description: "El gallo sagrado aguarda en el campanario. El amanecer se aproxima. ¿Llegarás a tiempo?",
    image: phase4
  }
];

const Timeline = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden gradient-dark">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cinzel mb-4 text-foreground">
            Doce Horas de Terror
          </h2>
          <p className="text-xl text-muted-foreground font-playfair italic">
            Cada fase es un paso más cerca del amanecer... o del abismo
          </p>
        </div>

        <div className="space-y-16">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-mystical" />
                <img 
                  src={phase.image} 
                  alt={phase.title}
                  className="relative rounded-lg shadow-deep w-full hover:scale-105 transition-mystical border-2 border-stone-brown"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-cinzel text-xl shadow-deep">
                  {phase.number}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl md:text-4xl font-cinzel text-lantern">
                  {phase.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="px-4 py-2 bg-stone-brown border border-border rounded-full font-playfair text-muted-foreground">
                    {phase.time}
                  </span>
                  <span className="px-4 py-2 bg-primary/20 border border-primary rounded-full font-playfair text-primary">
                    {phase.emotion}
                  </span>
                </div>
                <p className="text-lg text-muted-foreground font-merriweather leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline connector visual */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent opacity-30 hidden md:block" />
      </div>
    </section>
  );
};

export default Timeline;
