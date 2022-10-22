import React from 'react';
import { Tabela } from './components/components';
import './App.css';


let contacts = [
      {id: 1, nome: 'Ajalmar', fone: '8888-7777', ações: ""},
      {id: 2, nome: 'Claudia', fone: '9999-4444'},
      {id: 3, nome: 'Betinho', fone: '9876-3333'},
      {id: 4, nome: 'Ana Julia', fone: '9855-3333'}, 
      {id: 5, nome: 'Bia Julia', fone: '9755-3333'}  
   ];



function App() {
  return (
    <div className='pagina'>

      <div className='NavBar'>
        <div className='NavBarContainer'>NavBAr</div>
      </div>

      <div className='Funcional'>

        <div className='ConteudoTabela'>
      
          <Tabela contacts={contacts} />
      
        </div>
      
      </div>
    </div>
  );
}

export default App;