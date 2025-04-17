import  React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './Rotas/Rotas';

// Estrutura básica para usar React é através de funções
function App() {
//para trazer o resultado da função, eu coloco o que eu quero no Return que deve ter apenas um componente
  return (
    // para chamar o css: Usar um apelido (estilos) e chamar usando o ClassName
    
    // Tags fantasmas servem para que eu consiga usar duas tags no mesmo componente
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  )
}

export default App
