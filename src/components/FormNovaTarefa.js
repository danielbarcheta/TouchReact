import React, {useState} from "react";
import './FormNovaTarefa.css'; 


function FormNovaTarefa(props) {

const [descricao, setDescricao] = useState('');

const mudaDescricao = (event) => {
    setDescricao(event.target.value);
}


const submitTarefa = () => {
    if (descricao !== ''){
        const novaTarefa = {
            numeroLinha: props.todos.length + 1, descricao: descricao
          }

          props.setTodos([...props.todos, novaTarefa]); 
          setDescricao('');
        
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
                        onChange={mudaDescricao}>
                    </textarea>
                </div>
                <button type='button' className="btn btn-primario" onClick={submitTarefa}>Add Tarefa</button>
            </form>
        </div>
    )
}

export default FormNovaTarefa;