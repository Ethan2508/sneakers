// Importation de la fonction createSlice de Redux Toolkit pour créer un slice de l'état global.
import { createSlice } from "@reduxjs/toolkit";

// Définition de l'état initial du panier comme un tableau vide.
const initialState = [];

// Création du slice du panier avec createSlice.
const CartSlice = createSlice({
  name: "cart", // Nom du slice, utilisé dans les actions et le reducer.
  initialState, // État initial du slice.
  reducers: {
    // Définition des reducers et des actions correspondantes.

    // Action pour initialiser le panier à partir du localStorage.
    setCartFromLocalStorage: (state, action) => {
      return [...state, ...action.payload];
    },
    
    // Action pour vider le panier.
    checkoutCart: (state, action) => {
      return [];
    },

    // Action pour ajouter un article au panier.
    addToCart: (state, action) => {
      return [...state, action.payload];
    },

    // Action pour retirer un article du panier en se basant sur son id.
    removeFromCart: (state, action) => {
      return state.filter((shoe) => action.payload !== shoe.id);
    },

    // Action pour augmenter la quantité d'un article spécifique dans le panier.
    increaseQty: (state, action) => {
      return state.map((shoe) =>
        shoe.id === action.payload ? { ...shoe, qty: shoe.qty + 1 } : shoe
      );
    },

    // Action pour diminuer la quantité d'un article spécifique dans le panier.
    decreaseQty: (state, action) => {
      return state.map((shoe) =>
        shoe.id === action.payload ? { ...shoe, qty: shoe.qty - 1 } : shoe
      );
    },
  },
});

// Exportation des actions pour les utiliser dans les composants ou autres parties de l'application.
export const {
  setCartFromLocalStorage,
  checkoutCart,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = CartSlice.actions;

// Exportation du reducer pour l'intégrer au store global de Redux.
export default CartSlice.reducer;
