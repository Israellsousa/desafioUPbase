// eslint-disable-next-line no-unused-vars
import React from 'react';

import './AdditionalDetailsScreen.css';
import { useNavigate } from 'react-router-dom';

const AdditionalDetailsScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="additional-details-container">
      <h2>Agora é hora de dar mais detalhes</h2>
      <select>
        <option value="">Tipo de imóvel</option>
        <option value="casa">Casa</option>
        <option value="apartamento">Apartamento</option>
        <option value="flat">Flat</option>
      </select>
      <button onClick={() => navigate('/home')}>Continuar</button>
    </div>
  );
};

export default AdditionalDetailsScreen;
