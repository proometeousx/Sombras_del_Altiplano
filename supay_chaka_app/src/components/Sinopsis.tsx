import calcaPortrait from "@/assets/game2.png";

const Synopsis = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-brown to-volcanic-black" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-cinzel mb-6 text-lantern">
            Una noche. Un pacto. Doce horas para romperlo.
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto glow-supay" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-mystical" />
              <img 
                src={calcaPortrait} 
                alt="Calca, el protagonista con su linterna" 
                className="relative rounded-lg shadow-deep w-full hover:scale-105 transition-mystical border-4 border-stone-brown"
              />
            </div>
          </div>

          {/* Story */}
          <div className="order-1 md:order-2 space-y-6 animate-fade-in">
            <p className="text-lg leading-relaxed text-muted-foreground font-merriweather">
              En las profundidades de Potosí, Bolivia, <span className="text-lantern font-semibold">Calca</span> debe enfrentar 
              una deuda ancestral. Su abuelo pactó con el <span className="text-supay font-semibold">Supay</span>, 
              señor del inframundo andino, y ahora el demonio colonial exige su pago.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground font-merriweather">
              Desde las 7 PM hasta el amanecer a las 7 AM, Calca debe recuperar el <span className="text-lantern font-semibold">gallo sagrado</span> que 
              romperá el pacto. Pero el Supay no descansa. Sus martillos resuenan en la oscuridad, 
              construyendo el puente que conecta ambos mundos.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 italic text-xl text-stone font-playfair">
              "El verdadero enemigo no es el Diablo, sino el tiempo."
            </blockquote>

            <p className="text-lg leading-relaxed text-muted-foreground font-merriweather">
              Solo el sigilo, la astucia y una luz frágil se interponen entre Calca y la oscuridad eterna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Synopsis;
