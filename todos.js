var listElement = document.querySelector('#app ul');
var inputElemnt = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){ //função responsavel por criar a lista em tela dinamicamente
    listElement.innerHTML = ''; //comando responsavel para limpar a lista sempre quando for insert de dados para não causar duplicidade

    for (todo of todos){
        var todoElement = document.createElement('li'); //createElement cria o elemento no html
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo); // indexof -> metodo responsavel por informar a posição no texto no array
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')'); //chamada de função deleteTodo concatenado com o metodo splice para excluir linha do js

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);


        todoElement.appendChild(todoText); //adicionar dentro da li criada no createElement('li')
        todoElement.appendChild(linkElement); //adicionar dentro da li criada no createElement('li')

        listElement.appendChild(todoElement); //adicionar a createElement('li') detro da ul que foi chamada pelo querySelector
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElemnt.value; //recupera valor do input da linha 2 do todo.js
    
    todos.push(todoText); // push função do array para add um item no fim da lista
    inputElemnt.value = ''; //apaga texto atual adicionado no input assim que um for add via push
    renderTodos(); //chama função para renderizar novamente a lista dando um F5 em tempo real
    
    saveToStorage();
}

buttonElement.onclick = addTodo; //chama o campo html da linha 3 do todo.js com onclick e chama a função addTodo

function deleteTodo(pos){
    todos.splice(pos, 1); // splice -> metodo responsavel por remover uma qtd expecifica de itens do array
    renderTodos();

    saveToStorage();
}

function saveToStorage() { // função responsavel para buscar os dados em formado JSON em application
    localStorage.setItem('list_todos', JSON.stringify(todos));
}