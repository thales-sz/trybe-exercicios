function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();
// Numero 1 - Adicionar os dias do mes de dezembro no calendario
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const dezDays = document.querySelector("#days");

for (let index1 = 0; index1 < dezDaysList.length; index1 += 1) {
  const day = dezDaysList[index1];
  const dayItem = document.createElement("li");
  dayItem.className = "day";
  if (index1 === 5 || index1 === 5 + 7 || index1 === 5 + 14) {
    dayItem.className = "day friday";
  }
  if (day === 24 || day === 31) {
    dayItem.className = "day holiday";
  }
  if (day === 25) {
    dayItem.className = "day friday holiday";
  }
  dayItem.innerHTML = day;

  dezDays.appendChild(dayItem);
}

// Numero 2 - Adicionar botão Feriados.

let text = "Feriados";
const paiDoBtn = document.querySelector(".buttons-container");

function btnFeriados() {
  const button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerHTML = text;

  paiDoBtn.appendChild(button);
}
btnFeriados(text);

// Numero 3 - Adicionar evento de click ao botão feriados

function createClickEventForButton() {
  const button = document.querySelector("#btn-holiday");
  button.addEventListener("click", clickedButton);
}

function clickedButton(evento) {
  const feriados = document.querySelectorAll(".holiday");
  if (feriados[0].style.backgroundColor === "yellow") {
    for (let i = 0; i < feriados.length; i += 1) {
      feriados[i].style.backgroundColor = "rgb(238,238,238)";
    }
  } else {
    for (let i = 0; i < feriados.length; i += 1) {
      feriados[i].style.backgroundColor = "yellow";
    }
  }
}
createClickEventForButton();

// Numero 4 - Adicionar botão sexta-feira

let text1 = "Sexta-feira";

function createBtnFriday() {
  const fridayBtn = document.createElement("button");
  fridayBtn.id = "btn-friday";
  fridayBtn.innerText = text1;
  paiDoBtn.appendChild(fridayBtn);
}
createBtnFriday(text1);

// Numero 5 - Adicionar evento de click no botão sexta-feira

function addClickEventForFridayBtn() {
  const button = document.querySelector("#btn-friday");
  button.addEventListener("click", clickedFridayBtn);
}

function clickedFridayBtn() {
  const friday = document.querySelectorAll(".friday");
  let sextas = [4, 11, 18, 25];
  if (friday[0].innerHTML === "SEXTOU!") {
    for (let i = 0; i < friday.length; i += 1) {
      friday[i].innerHTML = sextas[i];
    }
  } else {
    for (let i = 0; i < friday.length; i += 1) {
      friday[i].innerHTML = "SEXTOU!";
    }
  }
}
addClickEventForFridayBtn();

// Numero 6 - 2 funções com efeito de zoom

function zoomEventIn() {
  const diaDaSemanaZoom = document.querySelectorAll(".day");
  for (let i = 0; i < diaDaSemanaZoom.length; i += 1) {
    diaDaSemanaZoom[i].addEventListener("mouseover", mouseOverZoomEffectIn);
  }
}
function mouseOverZoomEffectIn(event) {
  event.target.style.fontSize = "50px";
}
zoomEventIn();

function zoomEffectOut() {
  const diaDaSemanaZoom = document.querySelectorAll(".day");
  for (let i = 0; i < diaDaSemanaZoom.length; i += 1) {
    diaDaSemanaZoom[i].addEventListener("mouseleave", mouseLeaveZoomEffectOut);
  }
}
function mouseLeaveZoomEffectOut(event) {
  event.target.style.fontSize = "20px";
}
zoomEffectOut();

// Numero 7 - Função que adiciona tarefas

const paiDaTask = document.querySelector(".my-tasks");
let task = "Caminhada";

function createTasks(task) {
  const tarefaCriada = document.createElement("span");
  tarefaCriada.innerHTML = task;
  paiDaTask.appendChild(tarefaCriada);
}
createTasks(task);

// Numero 8 - Legenda com cor para a tarefa

let cor = "blue";

function addTaskColor(cor) {
  const taskColor = document.createElement("div");
  taskColor.className = "task";
  console.log(taskColor);
  taskColor.style.backgroundColor = cor;
  paiDaTask.appendChild(taskColor);
}
addTaskColor(cor);

// Numero 9 - Adicionar evento que implementa tag na tarefa
