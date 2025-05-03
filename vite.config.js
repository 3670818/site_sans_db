// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
// });

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'portfolio', // Cela définit le répertoire principal de ton application
  plugins: [react()],
  base: '/portofolio-projet8/', // Assure-toi que c'est bien le chemin sur GitHub Pages
  assetsInclude: ['**/*.PNG', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'], // Ajout des types d'images
  build: {
    outDir: 'dist',  // Dossier de sortie pour les fichiers de production
  },
});


