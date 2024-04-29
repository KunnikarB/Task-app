// Create a task manager object
const taskManager = {
  
  tasks : [],
  idTask : 1,
  // Function to add a task
  addTask : function()  {
    const taskDescription = prompt("Please add task description :");
    if (taskDescription.trim() === "") {
      alert("Task description can not be empty!");
      return;
    } 
      // Create a new task object
      const newTask = {
        id: this.idTask++,
        description: taskDescription,
        completed: false
      } 
      // Push the task object to the tasks array
      this.tasks.push(newTask) 
      alert('Task added!')    
  },

  // Function to complete a task
  completeTask : function() {
    const taskId = parseInt(prompt('Enter the task ID that your what to complete'));
    // Find the task by its ID
    const myTask = this.tasks.find(myTask => myTask.id === taskId)
    // Check if the task is not found then alert the user
    if (!myTask) {
      alert("Task not found!");
      return;
    } 
    // Set the task completed to true and alert the user
    myTask.completed = true;
    alert(`Task ID : ${taskId} Completed!`)
  },

  // Function to list all tasks
  listAllTasks : function() {
    console.log("All Task :")
    // Loop through the tasks array and display the task details
    this.tasks.forEach(task => {
      console.log('ID: ' + task.id + ' Description: ' + task.description + ' Completed: ' + task.completed);
      });
    
  },
  // Function to list all completed tasks
  listCompletedTasks : function() {
    // Filter the tasks array and return the completed tasks
    const taskCompleted = this.tasks.filter(myTask => myTask.completed);
    console.log('Completed Tasks:')
    // Loop through the completed tasks and display the task details
    taskCompleted.forEach(myTask => {
      console.log('ID: ' + myTask.id + ' Description: ' + myTask.description);
    });
  }
};

// Function to display the menu and get the user choice
function menu() {
  const choice = parseInt(prompt(`Select an option :
   1. Add a task 
   2. Complete a task 
   3. List all tasks 
   4. List completed tasks
   5. Quit Task Manager`));

  switch (choice) {
    case 1 : 
      taskManager.addTask();
      break;
    case 2 : 
      taskManager.completeTask();
      break;
    case 3 : taskManager.listAllTasks();
      break;
    case 4 : taskManager.listCompletedTasks();
      break;  
    case 5 : return;
    default :
      alert('Invalid option! Please shoose between 1-5 : ');
      break;
  }
  // call the menu function again to display the menu
  menu();
}

// function to ask the user name
function askUserName() {
  const userName = prompt('What is your name?');
  // Check if the user name is empty or a number
  if ((userName === '') || (!isNaN(userName))) {
    alert('User name should not be empty or a number!');
    askUserName();
  } else {
    alert('Hello ' + userName);
    menu();
  }
  
}
// Call the askUserName function to start the application
askUserName();