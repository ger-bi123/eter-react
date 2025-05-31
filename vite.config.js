import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Importa el plugin de Vite para Tailwind

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
  
});
