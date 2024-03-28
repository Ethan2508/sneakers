import { configureStore } from "@reduxjs/toolkit";
import CartReducer, { setCartFromLocalStorage } from "./slices/CartSlice";
import { useEffect } from "react";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

// Use subscribe to listen for changes in the store
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  localStorage.setItem("localCart", JSON.stringify(state.cart));
});

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("localCart");
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart);

    store.dispatch(setCartFromLocalStorage(parsedCart));
  }
};
loadCartFromLocalStorage();

// À chaque fois que l'état du store change, la souscription au store déclenche une sauvegarde de l'état du panier dans le localStorage. Au démarrage de l'application, l'état du panier est récupéré du localStorage s'il existe et est utilisé pour initialiser l'état du store avec 
// la fonction setCartFromLocalStorage. Cela garantit que les articles ajoutés au panier sont conservés même après le rechargement de la page ou la fermeture de l'onglet du navigateur.