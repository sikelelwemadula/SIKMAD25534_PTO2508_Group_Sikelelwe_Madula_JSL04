// 1. Get references to the modal and form elements
const taskModal = document.getElementById('task-modal');
const taskForm = document.getElementById('task-form');
const closeModalBtn = document.getElementById('close-modal-btn');

// 2. Function to populate and open the modal
function openTaskModal(task) {
    // Populate form fields with task data
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-desc').value = task.description || '';
    document.getElementById('task-status').value = task.status || 'todo';
    
    // Show the modal
    taskModal.showModal();
}

// 3. Close modal functionality
closeModalBtn.addEventListener('click', () => {
    taskModal.close();
});

// 4. Close modal if clicking outside the form
taskModal.addEventListener('click', (e) => {
    if (e.target === taskModal) {
        taskModal.close();
    }
});
 

new code example 
// Select the modal and relevant buttons
const taskModal = document.getElementById("task-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const taskForm = document.getElementById("task-form");

// Function to open the modal
function openTaskModal(task) {
  // Populate the form fields with existing task data if a task object is provided
  if (task) {
    document.getElementById("task-title").value = task.title || "";
    document.getElementById("task-desc").value = task.description || "";
    document.getElementById("task-status").value = task.status || "todo";
    // You might also store the task ID for updates
  } else {
    // Clear the form for a new task
    taskForm.reset();
  }
  
  // Display the modal
  taskModal.showModal();
}

// Function to close the modal
function closeTaskModal() {
  taskModal.close();
}

// Add event listeners
// 1. Close button functionality
closeModalBtn.addEventListener("click", closeTaskModal);

// 2. Form submission handling
taskForm.addEventListener("submit", (event) => {
  // Prevent default submission if you want to handle it with AJAX or custom logic
  // event.preventDefault(); 
  
  // Get form data
  const formData = new FormData(taskForm);
  const taskData = Object.fromEntries(formData.entries());
  
  console.log("Task data submitted:", taskData);

  // You would typically process this data here (e.g., save to a database, add to a list)
  // ... your logic here ...
  
  // The dialog form with method="dialog" will close automatically on submit, 
  // but if you prevented default, you'd manually call closeTaskModal()
});


// Your existing function with the integrated openTaskModal call
function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id; // Store the task ID in a data attribute

  taskDiv.addEventListener("click", () => {
    // When the div is clicked, open the modal and pass the specific task data
    openTaskModal(task);
    });
  
    return taskDiv;
}

// --- Example Usage ---

// Example task data
const sampleTask = {
    id: 1,
    title: "Review Project Proposal",
    description: "Go over the Q3 proposal and provide feedback.",
    status: "doing"
};

// Example of creating the element and adding it to the body (for demonstration)
// document.body.appendChild(createTaskElement(sampleTask));

// Example of how to call openTaskModal() to create a NEW task from another button (e.g., a "New Task" button)
// document.getElementById("new-task-btn").addEventListener('click', () => openTaskModal(null));
