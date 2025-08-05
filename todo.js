let input = document.querySelector('#input')
let addBtn = document.querySelector('#addBtn')
let task = document.querySelector('#task');

function addTsk(){
    let todoText = input.value.trim();
    if(todoText === ''){
        return;
    };
    let todoInput = document.createElement('li')
    todoInput.innerHTML = `
    <img id='edit-btn' src="assets/pen.png" alt="Edit Button">
    <img id='del-btn' src="assets/bin.png" alt="Delete Button">
    <span>${todoText}</span>`
    task.appendChild(todoInput);
    input.value = '';

    todoInput.querySelector('#del-btn').addEventListener('click',()=>{
        todoInput.remove();
    })

}

addBtn.addEventListener('click',addTsk);
input.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        addTsk()
    }
})


