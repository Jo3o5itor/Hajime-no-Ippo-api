// Importa o React
import React from 'react';
// Importa o componente que exibe a lista de boxeadores
import BoxeadorList from './components/BoxeadorList';

const App = () => {
  return (
    // Renderiza o componente BoxeadorList dentro da aplicação
    <div>
      <BoxeadorList />
    </div>
  );
};

export default App; // Exporta o componente App como padrão
