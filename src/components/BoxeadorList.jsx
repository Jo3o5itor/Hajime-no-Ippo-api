// Importa React e dois hooks: useEffect (para ações no carregamento) e useState (para armazenar os dados)
import React, { useEffect, useState } from 'react';
// Importa a instância da API que criamos
import api from '../services/api';
// Importa os estilos da aplicação
import '../App.css';

const BoxeadorList = () => {
  // Cria um estado chamado "boxeadores" que começa como uma lista vazia
  const [boxeadores, setBoxeadores] = useState([]);

  // useEffect roda assim que o componente for montado
  useEffect(() => {
    // Faz uma requisição GET para a rota base da API
    api.get('/')
      .then((response) => {
        console.log("🔍 Dados da API:", response.data); // Mostra os dados no console
        setBoxeadores(response.data); // Salva os dados recebidos no estado
      })
      .catch((error) => {
        console.error('Erro ao buscar os boxeadores:', error); // Mostra erro se a requisição falhar
      });
  }, []); // [] significa que vai rodar apenas uma vez ao montar o componente

  return (
    <div className="App">
      <h1>Lutadores de Hajime no Ippo 🥊</h1>

      {/* Verifica se 'boxeadores' é um array e então renderiza um card para cada boxeador */}
      {Array.isArray(boxeadores) && boxeadores.map((b) => (
        <div key={b.id} className="boxeador-card">
          <img src={b.image} alt={b.name} className="boxeador-image" /> {/* Imagem do boxeador */}
          <div className="boxeador-info">
            <h2>{b.name} ({b.country})</h2> {/* Nome e país */}
            <p>Peso: {b.weightClass}</p>
            <p>Vitórias: {b.wins} | Derrotas: {b.losses} | Empates: {b.draws}</p>
            <p>Total de lutas: {b.totalMatches}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxeadorList; // Exporta o componente
