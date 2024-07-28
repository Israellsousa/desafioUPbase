// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import backIcon from '../assets/icons/back.svg';
import './PropertyDetailsScreen.css';
import { useNavigate } from 'react-router-dom';

function PropertyDetailsScreen () {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleBackButtonClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmLeave = () => {
    navigate('/');
  };

  const handleCancelLeave = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="property-details">
    <header className="property-header">
      <button className="back-button" onClick={handleBackButtonClick}>
      <img src={backIcon} alt="Back" className="back-icon" />
      </button>
    </header>
    <div className="form-section">
      <h2>Para começarmos, precisamos de alguns dados</h2>
      <form>
        <input type="text" placeholder="Nome do imóvel" />
        <textarea placeholder="Descrição" maxLength="250"></textarea>
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="Endereço" />
        <input type="text" placeholder="Número" />
        <input type="text" placeholder="Complemento" />
        <input type="text" placeholder="Cidade" />
        <select>
          <option value="">UF</option>
          <option value="SP">São Paulo</option>
          <option value="RJ">Rio de Janeiro</option>
          {/* Para Adicionar outras opções conforme necessário */}
        </select>
        <button className="cont" type="submit">Continuar</button>
      </form>
    </div>
    {showConfirmation && (
      <div className="confirmation-modal">
        <p>Você, realmente, deseja sair do Poundsflats?</p>
        <div className='alingbutton'>

        <button onClick={handleConfirmLeave}>Sim, sair agora!</button>
        <button onClick={handleCancelLeave}>Não, quero continuar</button>
        </div>
      </div>
    )}
  </div>
);
}

export default PropertyDetailsScreen;