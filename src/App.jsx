import Navbar from "./components/Navbar";import TabelaToDo from "./components/TabelaToDo";
import React, {useState} from 'react';


// PODERIAMOS PENSAR EM FAZER DA SEGUINTE FORMA: 

// const addTodos = () => {
//   if(todos.length > 0){
//     const novaTarefa = {
//       numeroLinha: todos.length + 1, descricao: 'Nova Tarefa'
//     }
//     todos.push(novaTarefa);
//   }
// } 

// POREM APESAR DO ARRAY DE TAREFAS SER INCREMENTADO, O ESTADO NAO É REFLETIDO NA NOSSA PAGINA.
// PRECISAMOS DO USESTATE PARA RENDERIZAR NOVAMENTE OS COMPONENTES!!!

function App() {

  const [todos, setTodos] = useState([
    {numeroLinha: "1", descricao: "Tomar um cafezinho"},
    {numeroLinha: "2", descricao: "Ligar o Notebook da Touch"},
    {numeroLinha: "3", descricao: "Abrir o Discord e dar bom dia pro pessoal"},
    {numeroLinha: "4", descricao: "Prestar atencao nas aulitas de React"}
  ]
  )

  return (
    <div className="App">
      <Navbar/>
      <TabelaToDo todos={todos} setTodos={setTodos}/>

    </div>
  );
}

export default App;
