import React, { useState } from 'react';
import './App.css'; // Importe seu arquivo CSS com os estilos

import Navbar from "./components/Navbar";
import TabelaToDo from "./components/TabelaToDo";
import FormNovaTarefa from "./components/FormNovaTarefa";

function App() {
  const [todos, setTodos] = useState([
    {numeroLinha: 1, descricao: "Tomar um cafezinho"},
    {numeroLinha: 2, descricao: "Ligar o Notebook da Touch"},
    {numeroLinha: 3, descricao: "Abrir o Discord e dar bom dia pro pessoal"},
    {numeroLinha: 4, descricao: "Prestar atencao nas aulitas de React"}
  ]);

  return (

    <div className="App">
      <Navbar/>
      <div className='container'> {/* Adicione a classe 'container' aqui */}
        <TabelaToDo todos={todos} setTodos={setTodos}/>
        <FormNovaTarefa todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
