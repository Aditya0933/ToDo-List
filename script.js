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
    const local_val = todoInput.value;
    // console.log(local_val)
    // console.log(typeof(local_val))
    // local_val.charAt(0).style.textTransform = "capitalize"
    // local_val[0].style.height = "50"+px
    todoList.appendChild(listItem);
     // check Box implementtatino
    var x = document.createElement("input");
    x.setAttribute("type", "checkbox");
    x.setAttribute('class','checkbox')
    listItem.appendChild(x);
    
    // localStorage.setItem(8765, todoInput.value);
  // console.log(local_val);
  // while(local_val === true){
  //   console.log("HOOOOOOOOOOOO")
  //   let i = 0
  //   localStorage.setItem(i, local_val);
  //   i++
  //   break
  // }

 

    todoInput.value = ''; // Clear input field
  });
  