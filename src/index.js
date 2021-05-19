document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', function(event){
    //Prevents default submit function
    event.preventDefault(); 
    //Creates ToDo item
    const toDo = document.createElement('li') 
    //Access unordered list of ToDos
    const toDosContainer = document.getElementById('tasks') 
    //Appends the ToDo item to the unordered list of ToDos
    const appendToDo = toDosContainer.appendChild(toDo) 
    //Access the Textbox
    const inputText = document.getElementById('new-task-description') 
    //Creates closing button to remove ToDo
    const closingButton = document.createElement('button')
    //Add the textbox value to the appended ToDo item
    appendToDo.innerHTML = inputText.value + '   ' 
    //Append closing button to the ToDo item
    appendToDo.appendChild(closingButton).innerHTML = 'X'
    //Array of all the closing buttons
    const buttonList = document.querySelectorAll('button')
    //Resets the textbox value
    inputText.value = '' 
    //When click to closing button, the toDo list will be removed
    for (const button of buttonList) {
      button.addEventListener('click', function() {
        button.parentElement.remove()
      })
    }
  })
}) 