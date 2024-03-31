import React, { useState } from 'react';
import './App.css'; // Importe seu arquivo CSS com os estilos

import Navbar from "./components/Navbar";
import TabelaToDo from "./components/TabelaToDo";
import FormNovaTarefa from "./components/FormNovaTarefa";

function App() {
  const [mostraFormulario, setMostraFormulario] = useState(false);
  const [mostraBotao, setMostraBotao] = useState(true); // Estado para controlar a visibilidade do botão

  const [todos, setTodos] = useState([
    {numeroLinha: 1, descricao: "Tomar um cafezinho"},
    {numeroLinha: 2, descricao: "Ligar o Notebook da Touch"},
    {numeroLinha: 3, descricao: "Abrir o Discord e dar bom dia pro pessoal"},
    {numeroLinha: 4, descricao: "Prestar atencao nas aulitas de React"}
  ]);

  const handleButtonClick = () => {
    setMostraFormulario(!mostraFormulario);
    setMostraBotao(false); // Oculta o botão quando clicado
  };

  return (
    <div className="App">
      <Navbar/>
      {mostraBotao && <button className="botao-primario" onClick={handleButtonClick}>Adicionar Tarefas</button>}
      <div className='container'>
        <TabelaToDo todos={todos} setTodos={setTodos}/>
        {mostraFormulario && 
         <FormNovaTarefa todos={todos} setTodos={setTodos}/>
        }
      </div>
    </div>
  );
}

export default App;
