// Importations des composants React individuels.
// Chaque composant est supposé représenter une page ou une partie spécifique de votre application.
import Cart from "./Cart"; // Composant pour la page du panier d'achat.
import Explore from "./Explore"; // Composant pour la page d'exploration ou de découverte de nouveaux produits.
import Home from "./Home"; // Composant pour la page d'accueil de l'application.
import Preview from "./Preview"; // Composant pour la page de prévisualisation d'un produit spécifique.

// Réexportation des composants.
// Cela permet d'importer ces composants depuis d'autres fichiers en utilisant une importation déstructurée
// à partir de ce fichier d'index, plutôt que d'avoir à importer chaque composant individuellement.
export { Cart, Explore, Home, Preview };
