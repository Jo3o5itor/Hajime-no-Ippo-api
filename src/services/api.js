// Importa a biblioteca axios para fazer requisições HTTP
import axios from 'axios';

// Cria uma instância personalizada do axios com a base da URL da API
const api = axios.create({
  baseURL: 'https://hajime-no-ippo-api.onrender.com/ts/api/v1/boxers', // URL base da API de boxeadores
});

export default api; // Exporta a instância para ser usada em outros arquivos
