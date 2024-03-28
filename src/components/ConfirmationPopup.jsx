import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkoutCart } from '../redux/slices/CartSlice'; // Assurez-vous que le chemin d'importation est correct

const ConfirmationPopup = ({ onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleConfirm = () => {
      // Vider le panier en utilisant l'action checkoutCart
      dispatch(checkoutCart());
      // Fermer la popup
      onClose();
      // Rediriger vers le catalogue
      navigate('/Explore'); // Assurez-vous que le chemin est correct pour votre application
    };

    return (
      <div className="confirmation-popup">
        <div className="popup-inner">
          <h2>Commande Confirmée</h2>
          <p>Votre commande a été placée avec succès. Vous recevrez bientôt un email de confirmation.</p>
          <button onClick={handleConfirm}>Fermer</button>
        </div>

      {/* Style minimal pour la démonstration */}
      <style jsx>{`
        .confirmation-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-inner {
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        button {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #000;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #333;
        }
      `}</style>
    </div>
  );
};

export default ConfirmationPopup;
