import React, { useState } from 'react';
import ConfirmationPopup from '../components/ConfirmationPopup';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true);
      setErrorMessage('');
    } else {
      setShowConfirmation(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const isFormValid = Object.values(formData).every(value => value.trim() !== '');
    if (!isFormValid) {
      setErrorMessage('Veuillez remplir tous les champs.');
      return false;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Validation de la commande</h1>
      <form onSubmit={handleFormSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nom" required />
        </div>
        <div className="mb-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Prenom" required />
        </div>
        <div className="mb-6">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
        </div>
        <h2 className="text-lg font-semibold mb-4">Informations de paiement</h2>
        <div className="mb-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} placeholder="Numéro de la carte" required />
        </div>
        <div className="mb-4 flex justify-between gap-3">
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full" type="text" name="expirationDate" value={formData.expirationDate} onChange={handleInputChange} placeholder="Date d'expiration MM/AA" required />
          <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/3" type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="CVV" required />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Valider la commande
          </button>
        </div>
      </form>
      {showConfirmation && <ConfirmationPopup onClose={() => setShowConfirmation(false)} />}
      {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
};

export default CheckoutPage;
