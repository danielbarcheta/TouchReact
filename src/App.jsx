import Navbar from "./components/Navbar";import TabelaToDo from "./components/TabelaToDo";

const todos = [
  {numeroLinha: "1", descricao: "Tomar um cafezinho"},
  {numeroLinha: "2", descricao: "Ligar o Notebook da Touch"},
  {numeroLinha: "3", descricao: "Abrir o Discord e dar bom dia pro pessoal"},
  {numeroLinha: "4", descricao: "Prestar atencao nas aulitas de React"}
]

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TabelaToDo todos={todos}/>

    </div>
  );
}

export default App;
