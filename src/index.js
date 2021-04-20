document.addEventListener("DOMContentLoaded", () => {



  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault()
    const taskRequest = document.getElementById('new-task-description')
    const userInput = taskRequest.value;
    const ul = document.getElementById('tasks')
    const li = document.createElement('LI')
    li.innerHTML = userInput;
    ul.appendChild(li)
    taskRequest.value = ""
    const deleteBtn = document.createElement("BUTTON")
    deleteBtn.innerText = "x"
    deleteBtn.className = "delete-btn"
    li.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", function(e) {
      li.remove()
    })

  })



});
