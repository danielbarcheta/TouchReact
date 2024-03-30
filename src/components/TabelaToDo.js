import React from 'react';
import './TabelaToDo.css';
import ToDoItemLinha from './ToDoItemLinha';



function TabelaToDo(props) {

      
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
                    />
                ))
            }
            </tbody>
        </table>
    );
}

export default TabelaToDo;
