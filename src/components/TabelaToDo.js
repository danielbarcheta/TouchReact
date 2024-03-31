import React from 'react';
import './TabelaToDo.css';
import ToDoItemLinha from './ToDoItemLinha';



function TabelaToDo(props) {

    const deletarTarefa = (numeroTarefaDeletada) => {
        let filtrado = props.todos.filter((value)=> value.numeroLinha !== numeroTarefaDeletada);
        props.setTodos(filtrado);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th className="cabecalho2">Tarefas</th>
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
                        key={toDoRow.numeroLinha} // Serve para identificar unicamente cada componente filho da lista. Se removermos -> Warning no Console!!
                        numeroLinha={toDoRow.numeroLinha}
                        descricao={toDoRow.descricao}
                        deletarTarefa={deletarTarefa}
                    />
                ))
            }
            </tbody>
        </table>
    );
}

export default TabelaToDo;
