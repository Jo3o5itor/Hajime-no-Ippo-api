import React, { useEffect, useState } from 'react';
import api from '../services/api';
import '../App.css';

const BoxeadorList = () => {
  const [boxeadores, setBoxeadores] = useState([]);

  useEffect(() => {
    api.get('/')
      .then((response) => {
        console.log("🔍 Dados da API:", response.data);
        setBoxeadores(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os boxeadores:', error);
      });
  }, []);

  return (
    // <div className="App">
    //   <h1>Lutadores de Hajime no Ippo 🥊</h1>
    //   {Array.isArray(boxeadores) && boxeadores.map((b) => (
    //     <div key={b.id} className="boxeador-card">
    //       <img src={b.image} alt={b.name} className="boxeador-image" />
    //       <div className="boxeador-info">
    //         <h2>{b.name} ({b.country})</h2>
    //         <p>Peso: {b.weightClass}</p>
    //         <p>Vitórias: {b.wins} | Derrotas: {b.losses} | Empates: {b.draws}</p>
    //         <p>Total de lutas: {b.totalMatches}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="App">
    <h1>Lutadores de Hajime no Ippo 🥊</h1>
    {Array.isArray(boxeadores) && boxeadores.map((b) => (
      <div key={b.id} className="boxeador-card">
        <img src={b.image} alt={b.name} className="boxeador-image" />
        <div className="boxeador-info">
          <h2>{b.name} ({b.country})</h2>
          <p>Peso: {b.weightClass}</p>
          <p>Vitórias: {b.wins} | Derrotas: {b.losses} | Empates: {b.draws}</p>
          <p>Total de lutas: {b.totalMatches}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default BoxeadorList;
