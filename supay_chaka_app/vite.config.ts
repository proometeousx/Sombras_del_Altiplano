import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Se removió el plugin `componentTagger` de lovable para evitar que inyecte
  // el logo/badge durante el modo de desarrollo. Si lo necesitas nuevamente,
  // vuelve a importar `componentTagger` y añade la condición deseada.
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
