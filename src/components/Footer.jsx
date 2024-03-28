import React from 'react';

const Footer = () => {
  return (
    // Utilisation des classes Tailwind pour appliquer le style
    <footer className=" text-gray-600 text-sm border-t border-gray-200 text-center p-5 inset-x-0 bottom-0 h-15">
      <div>
        {/* Droits d'auteur */}
        <p>© {new Date().getFullYear()} SneakAddict. Tous droits réservés.</p>
        {/* Mention légale ou autre information */}
        <p>
          <a href="/" className="text-blue-600 hover:text-blue-800 transition duration-300">Mentions légales</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
