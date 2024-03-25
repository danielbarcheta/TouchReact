import React from 'react';
import ToDoItemLinha from './ToDoItemLinha';

const todos = [
    {numeroLinha: "1", descricao: "Tomar um cafezinho"},
    {numeroLinha: "2", descricao: "Ligar o Notebook da Touch"},
    {numeroLinha: "3", descricao: "Abrir o Discord e dar bom dia pro pessoal"},
    {numeroLinha: "4", descricao: "Prestar atencao nas aulitas de React"}
]

function Tabela() {
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
            todos.map((toDoRow) => (
                    <ToDoItemLinha 
                        numeroLinha={toDoRow.numeroLinha}
                        descricao={toDoRow.descricao}
                    />
                ))
            }


            </tbody>
        </table>
    );
}

export default Tabela;
