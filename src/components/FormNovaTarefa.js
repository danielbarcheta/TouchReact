import React, {useState} from "react";
import './FormNovaTarefa.css'; 


function FormNovaTarefa(props) {

const [descricao, setDescricao] = useState('');

const mudaDescricao = (event) => {
    setDescricao(event.target.value);
}

//Note que escrevemos essa funcao pensando na futura exclusao de elementos da lista.
const submitTarefa = () => {
    let numeroLinha;
    let novaTarefa = {
        numeroLinha: numeroLinha, descricao: descricao
      }

    if (descricao !== ''){
        if(props.todos.length > 0){
            novaTarefa.numeroLinha = props.todos[props.todos.length - 1].numeroLinha + 1;
        }
        else{
            novaTarefa.numeroLinha = 1;
        }
          props.setTodos([...props.todos, novaTarefa]); 
          setDescricao('');
        
    }
}

const handleKeyDown = (event) => {
    if (event.keyCode === 13) { 
      submitTarefa(); 
    }
  }

    return (
        <div className='Formulario'>
            <h2>Adicione uma nova tarefa!</h2>
            <form>
                <div className='form'>
                    <textarea
                        className='controle-formulario' 
                        ows={3} 
                        required
                        value={descricao}
                        onChange={mudaDescricao}
                        onKeyDown={handleKeyDown}>
                    </textarea>
                    <button type='button' className="btn btn-primario" onClick={submitTarefa}>ADD</button>
                </div>
            </form>
        </div>
    )
}

export default FormNovaTarefa;