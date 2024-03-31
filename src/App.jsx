import React, { useState } from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import TabelaToDo from "./components/TabelaToDo";
import FormNovaTarefa from "./components/FormNovaTarefa";

function App() {
  const [mostraFormulario, setMostraFormulario] = useState(false);
  const [mostraBotao, setMostraBotao] = useState(true); 

  const [todos, setTodos] = useState([
    {numeroLinha: 1, descricao: "Tomar um cafezinho"},
    {numeroLinha: 2, descricao: "Ligar o Notebook da Touch"},
    {numeroLinha: 3, descricao: "Abrir o Discord e dar bom dia pro pessoal"},
    {numeroLinha: 4, descricao: "Prestar atencao nas aulitas de React"}
  ]);

  const handleButtonClick = () => {
    setMostraFormulario(!mostraFormulario);
    setMostraBotao(false); 
  };

  return (
    <div className="App">
      <Navbar/>
      
      <div className='container'>
        <TabelaToDo todos={todos} setTodos={setTodos}/>
        {mostraBotao && <button className="botao-primario" onClick={handleButtonClick}>Adicionar Tarefas</button>}
        {mostraFormulario && 
         <FormNovaTarefa todos={todos} setTodos={setTodos}/>
        }
      </div>
    </div>
  );
}

export default App;
