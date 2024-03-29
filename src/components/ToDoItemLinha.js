import React from 'react';
import './ToDoItemLinha.css';


function ToDoItemLinha(props) {
    return (
        <tr>
            <th scope='row'>{props.numeroLinha}</th>
            <td>{props.descricao}</td>
            {console.log(props)}
        </tr>


    );
}

export default ToDoItemLinha;




// 1- ESTRUTURA DO NOSSO PRIMEIRO COMPONENTE!


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

// 2- PASSANDO DADOS DINAMICAMENTE PARA OS COMPONENTES USANDO PROPS

/* IMPORTANTE!!
 Sempre que  inserimos elementos Javascript dentro dos nossos elementos JSX precisamos coloca-los entre { }.


*/

