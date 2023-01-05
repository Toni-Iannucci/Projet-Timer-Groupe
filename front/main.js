var raw = "";

var requestOptions = {
  method: 'GET',
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/project", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  // CODE POUR LE TIMER
  let taskRunning = false;
  let taskStartTime;
  let taskEndTime;

  const startTaskButton = document.getElementById('startTaskButton');
  const stopTaskButton = document.getElementById('stopTaskButton');
  const taskDurationElement = document.getElementById('taskDuration');

  function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }

  function updateTaskDuration() {
    if (taskRunning) {
      const currentTime = Date.now();
      const taskDurationInMilliseconds = currentTime - taskStartTime;
      const taskDurationInSeconds = taskDurationInMilliseconds / 1000;
      const taskDurationInMinutes = taskDurationInSeconds / 60;
      const taskDurationMinutes = Math.floor(taskDurationInMinutes);
      const taskDurationSeconds = Math.round((taskDurationInMinutes - taskDurationMinutes) * 60);
      taskDurationElement.textContent = `${pad(taskDurationMinutes)}:${pad(taskDurationSeconds)}`;
    }
  }

  startTaskButton.addEventListener('click', () => {
    taskRunning = true;
    startTaskButton.disabled = true;
    stopTaskButton.disabled = false;
    taskStartTime = Date.now();

    // Code de la tâche à exécuter (si nécessaire)
  });

  stopTaskButton.addEventListener('click', () => {
    taskRunning = false;
    startTaskButton.disabled = false;
    stopTaskButton.disabled = true;
    taskEndTime = Date.now();
  });

  setInterval(updateTaskDuration, 1000);