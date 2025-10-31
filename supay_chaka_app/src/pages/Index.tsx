import Heroe from "@/components/Heroe";
import Sinopsis from "@/components/Sinopsis";
import Caracteristicas from "@/components/Caracteristicas";
import LineaDeTiempo from "@/components/LineaDeTiempo";
import Galeria from "@/components/Galeria";
import Equipo from "@/components/Equipo";
import PieDePagina from "@/components/PieDePagina";

const Index = () => {
  // Página principal del sitio web
  return (
    <main className="min-h-screen bg-background">
      <Heroe />
      <Sinopsis />
      <Caracteristicas />
      <LineaDeTiempo />
      <Galeria />
      <Equipo />
      <PieDePagina />
    </main>
  );
};

export default Index;
