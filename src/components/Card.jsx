import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Card = ({ shoe }) => {
  const cart = useSelector((state) => state.cart);
  const img = shoe.original_picture_url;
  const price = shoe.retail_price_cents
  const desc = shoe.story_html;
  const id = shoe.id;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(shoe));
    toast.success("Ajouté au panier");
  };

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Retiré du panier");
  };

  // Gestion sécurisée de `desc` qui pourrait être null.
  const safeDesc = desc ? desc.substring(0, 50) + "..." : "No description available.";

  return (
    <div>
      <div className="w-[300px] h-[420px] shadow-sm rounded-2xl p-4 bg-slate-50 dark:bg-[#1f1b24] dark:hover:bg-[#121015] dark:text-white dark:outline-none dark:border-none border border-slate-100 outline outline-slate-100  hover:shadow-2xl relative">
        <div className="flex flex-col gap-3">
          {/* Image de la chaussure */}
          <div>
      <Link to={`/preview/${id}`}>

            <img src={img} width={200} height={200} alt="shoe" className="mx-auto" />
              <button className="absolute bg-slate-600 dark:bg-slate-800 dark:font-semibold text-white text-xs p-1 top-2 right-2 rounded-md animate-pulse">
                Visualisation
              </button>
              </Link>
          </div>
          {/* Nom de la chaussure */}
          <h2 className="text-xl font-semibold">{shoe.name}</h2>
          <p className="text-base font-medium max-h-[96px] overflow-y-hidden">
            {safeDesc}
          </p>
          <div className="flex items-center justify-between">
            {/* Bouton "Add to Cart" */}
            {cart.some((item) => item.id === shoe.id) ? (
              <button onClick={() => remove(shoe.id)} className="bg-red-400 text-white p-2 rounded-md text-sm">
                Retirer du panier
              </button>
            ) : (
              <button onClick={add} className="bg-black dark:bg-slate-800 dark:hover:bg-black text-white p-2 rounded-md text-sm">
                Ajouter au panier
              </button>
            )}
            {/* Prix */}
            <span className="text-xl font-semibold">{price} €</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
