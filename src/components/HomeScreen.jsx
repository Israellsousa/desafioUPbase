// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../assets/icons/back.svg';
import addIcon from '../assets/icons/add.svg'
import emojiIcon from '../assets/icons/emoji.svg';
import Botão1 from '../assets/icons/Botão1.svg';
import Botão2 from '../assets/icons/Botão2.svg';
import Botão3 from '../assets/icons/Botão3.svg';
import Botão4 from '../assets/icons/Botão4.svg';
import './HomeScreen.css'; // Vamos criar este arquivo para os estilos

function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
      <header className="home-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <img src={backIcon} alt="Back" className="back-icon" />
        </button>
        <div className="alinhaadd">
          <button className="register-button" onClick={() => navigate('/property-details')}> <img src={addIcon} alt="Add" className="add-icon" /> Cadastrar imóvel</button>
          </div>
      </header>
      <div className="welcome-section">
      <div className='left-aligned'>

        <h1> Bem-vindo, Raphael!</h1>
        <div className="filter-buttons">
          <button className='botão-flats'>Todos os flats</button>
          <button className='botão-indisponivel'>Indisponíveis</button>
        </div>
      </div>
        <div className="no-properties">
          <span className="sad-face"><img src={emojiIcon} alt="Emoji" className="emoji-icon"/></span>
          <p>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>
          <button onClick={() => navigate('/property-details')}>Cadastrar meu primeiro imóvel</button>
        </div>
      </div>
      <nav className="bottom-nav">
        <button className="nav-button"><img src={Botão1} alt="Botão1" className="Botão-icon" /></button>
        <button className="nav-button"><img src={Botão2} alt="Botão2" className="Botão-icon" /></button>
        <button className="nav-button"><img src={Botão3} alt="Botão3" className="Botão-icon" /></button>
        <button className="nav-button"><img src={Botão4} alt="Botão4" className="Botão-icon" /></button>
      </nav>
    </div>
  );
}

export default HomeScreen;