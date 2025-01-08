import React from 'react';
import './researchpage.css';
import magnifyingglass from '../../../assets/images/magnifyingglass.png'; 

const ResearchPage = () => {
  return (
    <div className="research-page">
      <div className="content-container">
        <h1>Добро пожаловать в мир исследований!</h1>
        <p>
          Наши образовательные программы — это путь к успешному будущему. Мы
          предлагаем качественное и доступное образование для людей всех
          возрастов и на разных этапах жизни.
        </p>
      </div>
      <img
        src={magnifyingglass}
        alt="Лупа"
        className="magnifying-glass"
      />
    </div>
  );
};

export default ResearchPage;
