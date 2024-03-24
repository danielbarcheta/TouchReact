import React from 'react';

function ToDoItemLinha() {
    return (
        <tr>
            <th scope='row'>1</th>
            <td>Tomar um cafézinho</td>
        </tr>
    );
}

export default ToDoItemLinha;




// ESTRUTURA DO NOSSO PRIMEIRO COMPONENTE!


/* Note que quando adicionamos mais de um elemento JSX (no caso, mais de um <tr> </tr>), precisamos encapsula-los dentro de uma div.

Tambem podemos usar React.Fragments -> <> </> equivalente a  <React.Fragment> </React.Fragment>,

que cria um container invisivel que nao ira afetar a estrutura da nossa DOM :

 function ToDoItemLinha () {
    return(
        <>
        <tr>

        </tr>
        <tr>

        </tr>
        </>
    )

}

export default ToDoItemLinha;

*/

