import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
// Importation du logo depuis vos assets
import logo from "../assets/logo.png"; // Assurez-vous que le chemin est correct

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const [click, setClick] = useState(false);
  const mobile = () => {
    setClick(!click);
  };

  return (
    <div className="p-1 md:p-4 flex items-center justify-between h-10 w-full">
      <div className="flex flex-row items-center gap-2">
        {/* Utilisation du logo importé au lieu du texte */}
        <img src={logo} alt="SneakAddict Logo" className="h-6 md:h-8 mt-2 ml-4" />
      </div>

      <ul className="hidden md:flex text-sm text-black dark:text-white font-semibold md:tracking-wide flex-col gap-2 md:flex-row md:gap-8">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/explore">Catalogue</Link>
        </li>
        <li>
          <Link to="/explore">Connexion</Link>
        </li>
        <li>
          <Link to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 
                  flex justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
        </li>
      </ul>

      <div className="block md:hidden">
        <button onClick={mobile}>
          {!click && <GiHamburgerMenu className="text-2xl dark:text-white" />}
          {click && <FaTimes className="text-2xl dark:text-white" />}
          <ul
            className={`text-sm ${
              click ? "block" : "hidden"
            } w-full flex flex-col gap-y-4 absolute top-10 left-0 right-0 text-black dark:text-white font-semibold z-10 backdrop-blur-sm`}
          >
            <li className="rounded-md h-8">
              <Link to="/">Accueil</Link>
            </li>
            <li className="rounded-md h-8">
              <Link to="/explore">Catalogue</Link>
            </li>
            <li className="rounded-md h-8">
              <Link to="/explore">Connexion</Link>
            </li>
            <li>
              <Link to="/cart">
                <div className="relative">
                  <FaShoppingCart className="text-xl" />
                  {cart.length > 0 && <span className="">{cart.length}</span>}
                </div>
              </Link>
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
