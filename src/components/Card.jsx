// Importation des dépendances nécessaires depuis React et Redux
import React, { useState } from "react"; // Ajout de useState pour gérer l'état local
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice"; // Actions Redux pour ajouter et retirer des articles du panier
import toast from "react-hot-toast"; // Bibliothèque pour afficher des notifications toast
import { Link } from "react-router-dom"; // Composant pour la navigation déclarative

// Définition du composant Card qui prend en entrée une chaussure (shoe)
const Card = ({ shoe }) => {
  const cart = useSelector((state) => state.cart);
  const [selectedSize, setSelectedSize] = useState(shoe.size_range[0]); // État pour la taille sélectionnée, avec la première taille par défaut

  const img = shoe.original_picture_url;
  const price = shoe.retail_price_cents;
  const desc = shoe.story_html;
  const id = shoe.id;

  const dispatch = useDispatch();

  const add = () => {
    const itemWithSize = { ...shoe, selectedSize, qty: 1 }; // Assurez-vous d'ajouter `qty` si ce n'est pas déjà fait
    dispatch(addToCart(itemWithSize));

    toast.success("Ajouté au panier");
  };

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Retiré du panier");
  };

  const safeDesc = desc ? desc.substring(0, 50) + "..." : "No description available.";

  return (
    <div>
      <div className="w-[300px] h-[420px] shadow-sm rounded-2xl p-4 bg-slate-50 dark:bg-[#1f1b24]   dark:outline-none dark:border-none border border-slate-100 outline outline-slate-100 hover:shadow-2xl relative">
        <div className="flex flex-col gap-3">
          <div>
            <Link to={`/preview/${id}`}>
              <img src={img} width={200} height={200} alt="shoe" className="mx-auto" />
              <button className="absolute bg-slate-600 dark:bg-slate-800 dark:font-semibold text-white text-xs p-1 top-2 right-2 rounded-md animate-pulse">
                Visualisation
              </button>
            </Link>
          </div>
          <h2 className="text-xl font-semibold">{shoe.name}</h2>
          <span className="text-xl font-semibold">{price} €</span>

          
          <div className="flex  justify-between">
            
            <div className="flex gap-10 items-center">
              {cart.some((item) => item.id === shoe.id) ? (
                <button onClick={() => remove(shoe.id)} className="bg-red-400 text-white p-2 rounded-md text-sm">
                  Retirer du panier
                </button>
              ) : (
                <>
                  <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className="text-sm p-1 rounded-md">
                    {shoe.size_range.map((size) => (
                      <option key={size} value={size}>
                        {size} US
                      </option>
                    ))}
                  </select>
                  <button onClick={add} className="bg-black dark:bg-slate-800 dark:hover:bg-black text-white p-2 rounded-md text-sm">
                    Ajouter au panier
                  </button>
                </>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Card; // Exportation du composant pour son utilisation ailleurs dans l'application
