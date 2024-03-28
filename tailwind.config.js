// Cette ligne spécifie le type de configuration pour bénéficier de l'auto-complétion et de la vérification de type dans des éditeurs de code comme VSCode.
/** @type {import('tailwindcss').Config} */
export default {
  // La propriété 'content' indique à Tailwind où chercher les classes utilisées dans votre projet.
  // Cela permet à Tailwind de purger les styles inutilisés et de réduire la taille du fichier CSS final.
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // La section 'theme' vous permet de personnaliser les paramètres par défaut de Tailwind, tels que les couleurs, la typographie, etc.
  // 'extend' permet d'ajouter des valeurs personnalisées sans écraser les valeurs par défaut de Tailwind.
  theme: {
    extend: {},
  },

  // 'plugins' peut être utilisé pour ajouter des fonctionnalités supplémentaires à Tailwind via des plugins officiels ou créés par la communauté.
  plugins: [],
};
