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
                <ToDoItemLinha 
                numeroLinha="1" 
                descricao="Tomar um cafezinho"
                />
                <ToDoItemLinha 
                numeroLinha="2" 
                descricao="Dar bom dia pro pessoal da touch no discord"
                />
                <ToDoItemLinha 
                numeroLinha="3" 
                descricao="Fazer ginastica laboral"
                />
            </tbody>
        </table>
    );
}

export default Tabela;
