// Importations des bibliothèques et fichiers nécessaires
import React from "react"; // Bibliothèque React pour construire l'interface utilisateur
import ReactDOM from "react-dom/client"; // ReactDOM pour interagir avec le DOM
import App from "./App.jsx"; // Le composant racine de l'application React
import "./index.css"; // Fichier CSS principal pour les styles globaux
import { BrowserRouter } from "react-router-dom"; // Gestionnaire de routage pour les applications React
import { Provider } from "react-redux"; // Composant Provider de Redux pour passer le store Redux à l'arbre de composants
import { store } from "./redux/store.js"; // Le store Redux configuré pour l'état global de l'application
import { Toaster } from "react-hot-toast"; // Composant Toaster de react-hot-toast pour afficher des notifications

// Utilisation de la nouvelle API React 18 pour rendre l'application
ReactDOM.createRoot(document.getElementById("root")).render(
  // Le Provider de Redux enveloppe l'application pour permettre l'accès au store Redux dans l'ensemble de l'application
  <Provider store={store}>
    {/* BrowserRouter enveloppe l'application pour activer le routage côté client */}
    <BrowserRouter>
      {/* Le composant App, qui est le composant racine de l'application React */}
      <App />
      {/* Le composant Toaster de react-hot-toast pour afficher les notifications à l'utilisateur */}
      <Toaster />
    </BrowserRouter>
  </Provider>
);
