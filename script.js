// script.js

// Selecionar elementos
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Função para adicionar uma nova tarefa
function addTask() {
  const taskText = taskInput.value.trim(); // Remove espaços extras
  if (taskText !== '') {
    const li = document.createElement('li'); // Cria um novo item da lista
    li.textContent = taskText; // Define o texto da tarefa
    taskList.appendChild(li); // Adiciona o item à lista
    taskInput.value = ''; // Limpa o campo de entrada
  }
}

// Evento para o botão de adicionar tarefa
addTaskButton.addEventListener('click', addTask);
