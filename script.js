document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    var todoInput = document.getElementById('todo-input');
    var todoList = document.getElementById('todo-list');
  
    if (todoInput.value === '') {
      alert('Please enter a task.');
      return;
    }
  
    var listItem = document.createElement('li');
    listItem.innerText = todoInput.value;
    todoList.appendChild(listItem);
     // check Box implementtatino
    var x = document.createElement("input");
    x.setAttribute("type", "checkbox");
    todoList.appendChild(x);
    

    
  
    todoInput.value = ''; // Clear input field
  });
  