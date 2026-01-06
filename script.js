function addTask() {
    // Отримуємо поле вводу і список
    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Читаємо значення
    const taskText = input.value.trim();

    // Перевірка на порожнє поле
    if (taskText === "") {
        alert("Введіть завдання!");
        return;
    }

    // Створюємо елемент списку
    const li = document.createElement("li");
    li.textContent = taskText;

    // Кнопка Complete
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };

    // Кнопка Remove
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Додаємо кнопки до li
    li.appendChild(completeBtn);
    li.appendChild(removeBtn);

    // Додаємо завдання до списку
    taskList.appendChild(li);

    // Очищаємо поле вводу
    input.value = "";
}
