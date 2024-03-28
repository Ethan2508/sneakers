import React, { useState } from 'react';
import ConfirmationPopup from '../components/ConfirmationPopup';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === 'cardNumber') {
      // Ajoute un espace tous les 4 chiffres pour le numéro de carte
      value = value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
      value = value.substring(0, 19); // Limite à 16 chiffres + 3 espaces
    } else if (name === 'expirationDate') {
      // Ajoute automatiquement un slash après le mois MM/AA
      value = value.replace(/\//g, '').substring(0, 4);
      if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2);
      }
    } else if (name === 'cvv') {
      value = value.substring(0, 3); // Limite à 3 chiffres pour le CVC
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true);
      setErrorMessage('');
    } else {
      setShowConfirmation(false);
    }
  };

  const validateForm = () => {
    // Ajoutez ici des validations supplémentaires si nécessaire
    const isFormValid = Object.values(formData).every(value => value.trim() !== '');
    if (!isFormValid) {
      setErrorMessage('Veuillez remplir tous les champs.');
      return false;
    }
    // Plus de validations peuvent être ajoutées ici
    return true;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Validation de la commande</h1>
      <form onSubmit={handleFormSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Les champs du formulaire ici avec Tailwind CSS pour le style */}
        <div className="mb-4">
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nom" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Prénom" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-4">
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <h2>Informations de paiments</h2>
        <div className="mb-4">
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} placeholder="Numéro de carte" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" maxLength="19" required />
        </div>
        <div className="flex gap-3 mb-4">
          <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleInputChange} placeholder="MM/AA" className="shadow appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" maxLength="5" required />
          <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="CVC" className="shadow appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" maxLength="3" required />
        </div>
        <div className="flex items-center justify-center mt-4">
  <button type="submit" className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline">
    Valider la commande
  </button>
</div>

        {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
      </form>
      {showConfirmation && <ConfirmationPopup onClose={() => setShowConfirmation(false)} />}
    </div>
  );
};

export default CheckoutPage;
