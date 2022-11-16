

let novaTarefa = document.getElementById ("novaTarefa")
let btnAddTarefa = document.getElementById ("btnAddTarefa")
let listaTarefas = document.getElementById ("listaTarefas")
let btnDeletarTudo = document.getElementById ("btnDeletarTudo")



novaTarefa.addEventListener('keypress', (e) => {
    
    if(e.keyCode == 13)
    {
        let tarefa = 
        {
            nome: novaTarefa.value,
            id: gerarId(),
        }
        addTarefa(tarefa);
    }
});

btnAddTarefa.addEventListener('click', (e)=> 
{

    let tarefa =
    {
        nome: novaTarefa.value,
        id: gerarId(),
    }
    addTarefa(tarefa);

});


function gerarId(){
    return Math.floor(Math.random() * 3000);
}

function addTarefa(tarefa){
    let li = criarTagLI(tarefa);
    listaTarefas.appendChild(li);
    novaTarefa.value = '';
}

function criarTagLI(tarefa){

    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement ('div');

    let btnDeletar = document.createElement('button')
    btnDeletar.classList.add ('btnAcao');
    btnDeletar.innerHTML = '<i class= "fa fa-trash"></i>';
    btnDeletar.setAttribute('onclick', 'deletar('+tarefa.id+')');


    div.appendChild(btnDeletar);

    li.appendChild (span);
    li.appendChild(div);

    return li;
}

function deletar (idTarefa){
    let confirmacao = window.confirm ('Tem certeza que deseja excluir a tarefa?');
    if (confirmacao)
    {
        let li = document.getElementById (idTarefa);
        if(li)
        {
            listaTarefas.removeChild(li);
        }
    }
}


btnDeletarTudo.addEventListener('click', (e)=> {

    let tchau = listaTarefas;
    deletarTudo(tchau);

});

function deletarTudo(listaTarefas){

    let confirmacao = window.confirm ('Tem certeza que deseja excluir tudo?');
    if (confirmacao)
    {
        listaTarefas.remove();
    }
    
}


