const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = ()=> {
    if(input.value.trim() === ''){
        return alert('Нельзя вводить пустоту или пробелы')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')
    const divButtons = document.createElement('div')
    divButtons.setAttribute('class', 'div_button')
    const text = document.createElement('h3')
    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')
    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')

    deleteButton.innerHTML = 'DELETE'
    editButton.innerHTML = 'EDIT'

    text.innerHTML = input.value
    divButtons.append(deleteButton, editButton)
    div.append(text, divButtons)
    todoList.prepend(div)
    input.value =  ''

    text.addEventListener('click', () => text.classList.toggle('toggle'))
}
createButton.onclick = () => createTodo()
window.onkeydown = (event) => {
    if (event.code === 'Enter'){
        createTodo()
    }
}