// SELECTORS

const input = document.querySelector('.app input[type=text]');
const addToDoBtn = document.querySelector('.app input[type=submit]');
const filter = document.querySelector('.app select');
const todos = document.querySelector('.app .todos');


// EVENT LISTENER

addToDoBtn.addEventListener('click', addNewTodoFunc);
todos.addEventListener('click', checkToDoFunc);
filter.addEventListener('change', filterFunc)



// FUNCTIONS

function addNewTodoFunc(e){ 
    e.preventDefault();

    if(!input.value.trim()) return;

    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoText = document.createElement('div');
    todoText.classList.add('todoText');
    todoText.innerText = input.value;

    const todoButtons = document.createElement('div');
    todoButtons.classList.add('todoButtons');
    todoButtons.innerHTML = '<i class="fas fa-check"></i>';
    todoButtons.innerHTML += '<i class="fas fa-trash"></i>';

    todo.append(todoText);
    todo.append(todoButtons);

    todos.append(todo);

    input.value = '';

}

function checkToDoFunc (e){

    const todo = e.target.parentElement.parentElement;


     if(e.target.classList[1] == 'fa-trash'){
        todo.classList.add('fail')
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })
     }

     if(e.target.classList[1] == 'fa-check'){
         todo.classList.toggle('done');
     }
}

function filterFunc (e){

    const ourToDos = document.querySelectorAll('.todos .todo')


    if(e.target.value === 'all'){

        ourToDos.forEach(todo => {
            todo.style.display = 'flex';
        })

    }
    else if(e.target.value === 'completed'){

        ourToDos.forEach(todo => {
            if(todo.classList.contains('done')) todo.style.display = 'flex';
            else todo.style.display = 'none';
        })
    }
    else if(e.target.value === 'uncompleted'){
        
        ourToDos.forEach(todo => {
            if(!todo.classList.contains('done')) todo.style.display = 'flex';
            else todo.style.display = 'none';
        })
    }
}