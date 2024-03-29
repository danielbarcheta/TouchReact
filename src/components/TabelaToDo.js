import React from 'react';
import './TabelaToDo.css';
import ToDoItemLinha from './ToDoItemLinha';



function TabelaToDo(props) {

    const adicionarTarefa = () => {
          const novaTarefa = {
            numeroLinha: props.todos.length + 1, descricao: 'Nova Tarefa'
          }
          props.setTodos([...props.todos, novaTarefa]); // Atualiza os dados usando a função setTodos
        
      }
      
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                </tr>
            </thead>
            <tbody>

                {/* PODERIAMOS FAZER DESSA FORMA, ITERANDO UM POR UM:
                <ToDoItemLinha 
                numeroLinha={todos[0].numeroLinha}
                descricao={todos[0].descricao}
                /> */}

            {   
            props.todos.map((toDoRow) => (
                    <ToDoItemLinha 
                        numeroLinha={toDoRow.numeroLinha}
                        descricao={toDoRow.descricao}
                    />
                ))
            }
            <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
            </tbody>
        </table>
    );
}

export default TabelaToDo;
