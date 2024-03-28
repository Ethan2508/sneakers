module.exports = {
  root: true, // Indique qu'il s'agit de la configuration racine et ESLint ne devrait pas chercher d'autres configurations dans les dossiers parents
  env: {
    browser: true, // Active l'environnement de navigateur, ce qui définit des variables globales comme window et document
    es2020: true, // Active les fonctionnalités d'ECMAScript 2020
  },
  extends: [
    'eslint:recommended', // Utilise un ensemble de règles recommandées par ESLint
    'plugin:react/recommended', // Active l'ensemble de règles recommandées pour React
    'plugin:react/jsx-runtime', // Ajoute des règles spécifiques pour le JSX
    'plugin:react-hooks/recommended', // Active les recommandations pour les Hooks React
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // Dossiers et fichiers à ignorer par ESLint
  parserOptions: {
    ecmaVersion: 'latest', // Utilise la dernière version d'ECMAScript disponible
    sourceType: 'module', // Permet l'utilisation de modules ES6
  },
  settings: {
    react: {
      version: '18.2' // Spécifie la version de React utilisée, pour que les règles soient adaptées à cette version
    }
  },
  plugins: [
    'react-refresh' // Utilise le plugin react-refresh pour ESLint
  ],
  rules: {
    // Définit des règles spécifiques ou ajuste les règles existantes
    'react-refresh/only-export-components': [
      'warn', // Niveau de sévérité : affiche un avertissement
      { allowConstantExport: true }, // Configuration spécifique de la règle
    ],
  },
}
