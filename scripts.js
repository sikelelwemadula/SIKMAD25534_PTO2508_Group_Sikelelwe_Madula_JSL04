import { initialTasks } from "./initialData.js"; 

// DOM Elements
//function createTaskElement(task) {
//  const taskDiv = document.createElement("div");
  //taskDiv.className = "task-div";
 // taskDiv.textContent = task.title;
 // taskDiv.dataset.taskId = task.id; // Store the task ID in a data attribute

 // const modal = document.getElementById('task-modal');

  //taskDiv.addEventListener("click", () => { 
  //If open, close it; otherwise, open it with the task details
  //if (modal.open) {
   //   modal.close();
 //   } else {
      // Pass task data to fill the modal before opening
 //     openTaskModal(task); 
 //     modal.showModal(); // Or modal.show()
 //   }
 // });

//  return taskDiv;
//}

// Get modal elements
const modal = document.getElementById('task-modal');
const closeBtn = document.getElementById('close-modal-btn');
const modalTitle = document.getElementById('task-title');
const modalDesc = document.getElementById('task-desc');
const taskStatus = document.getElementById('task-status');

// Get all task divs
const tasks = document.querySelectorAll('.task-div');

tasks.forEach(task => {
  task.addEventListener('click', () => {
    // Fill modal with clicked task data
    modalTitle.value = task.textContent.trim(); // Get task text
    
    // Optional: Get description from data attribute if you added it
    modalDesc.value = task.dataset.desc || ""; 
    
    // Set current column status
    const columnStatus = task.closest('.column-div').dataset.status;
    taskStatus.value = columnStatus;

    // Show modal
    modal.showModal(); 
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.close();
});



