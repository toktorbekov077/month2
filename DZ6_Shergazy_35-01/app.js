const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')


const createTodo = ()=> {
    if (input.value.trim() === '') {
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
    input.value = ''

    text.addEventListener('click', () => text.classList.toggle('toggle'))

    const edit_list = document.querySelector('.edit_list')
    const edit = () => {
        const edit_darkBackground = document.createElement('div')
        edit_darkBackground.setAttribute('class', 'darkBackground')
        const edit_input = document.createElement('input')
        edit_input.setAttribute('class', 'edit_input')
        edit_input.setAttribute('placeholder', 'Введите изменения')
        const edit_buttons = document.createElement('div')
        edit_buttons.setAttribute('class', 'edit_buttons')
        const edit_button_ok = document.createElement('button')
        edit_button_ok.setAttribute('class', 'edit_buttonOk')
        const edit_button_cancel = document.createElement('button')
        edit_button_cancel.setAttribute('class', 'edit_button_cancel')
        const edit_div = document.createElement('div')
        edit_div.setAttribute('class', 'edit')
        edit_darkBackground.append(edit_div)
        edit_div.append(edit_input, edit_buttons)
        edit_buttons.append(edit_button_ok, edit_button_cancel)
        edit_list.append(edit_darkBackground)
        editButton.onclick = () => edit()

        edit_button_ok.innerHTML = "OK"
        edit_button_cancel.innerHTML = "ОТМЕНА"
        edit_button_cancel.onclick = () => {
            edit_darkBackground.style.display = 'none'
        }
        edit_button_ok.onclick = () => {
            if (edit_input.value.trim() === '') {
                return alert("Нельзя выводить пробелы")
            }
            text.innerHTML = edit_input.value
            edit_darkBackground.style.display = 'none'
        }
    }
    const deleteTodo = () => {
        const delete_darkBackground = document.createElement('div')
        delete_darkBackground.setAttribute('class', 'darkBackground')
        const delete_div = document.createElement('div')
        delete_div.setAttribute('class', 'delete')
        const delete_text = document.createElement('div')
        delete_text.setAttribute('class', 'delete_text')
        const delete_buttons = document.createElement('div')
        delete_buttons.setAttribute('class', 'buttons')
        const delete_button_ok = document.createElement('button')
        delete_button_ok.setAttribute('class', 'buttonOk')
        const delete_button_cancel = document.createElement('button')
        delete_button_cancel.setAttribute('class', 'button_cancel')
        delete_button_ok.innerHTML = 'УДАЛИТЬ'
        delete_button_cancel.innerHTML = 'ОТМЕНА'
        delete_text.innerHTML = 'ВЫ ДЕЙСТВИТЕЛЬНО ХОТИТЕ УДАЛИТЬ'
        delete_darkBackground.append(delete_div)
        delete_div.append(delete_text, delete_buttons)
        delete_buttons.append(delete_button_cancel,delete_button_ok)
        edit_list.append(delete_darkBackground)

        delete_button_ok.onclick=() =>{
            div.remove()
            delete_darkBackground.style.display = 'none'
        }
        delete_button_cancel.onclick =() =>{
            delete_darkBackground.style.display = 'none'
        }
    }
    editButton.onclick=() =>edit()
    deleteButton.onclick = () => deleteTodo()
}
createButton.onclick = () => createTodo()
window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
}