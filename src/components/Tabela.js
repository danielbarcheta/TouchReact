import React from 'react';
import ToDoItemLinha from './ToDoItemLinha';

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
                <ToDoItemLinha />
            </tbody>
        </table>
    );
}

export default Tabela;
