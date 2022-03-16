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
  if (
    index1 === 5 ||
    index1 === 5 + 7 ||
    index1 === 5 + 14 ||
    index1 === 5 + 21
  ) {
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
// termina aqui numero 1

// Numero 2 - Adicionar botão Feriados.

let text = "Feriados";
const paiDoBtn = document.querySelector(".buttons-container");

function btnFeriados(text) {
  const buttonName = text;
  const button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerHTML = buttonName;

  paiDoBtn.appendChild(button);
}
btnFeriados(text);
// termina aqui numero 2

// Numero 3 - Adicionar evento de click ao botão feriados

function createClickEventForButton() {
  const button = document.querySelector("#btn-holiday");
  button.addEventListener("click", clickedButton);
}

function clickedButton(evento) {
  const feriados = document.querySelectorAll(".holiday");
  if (feriados[0].style.backgroundColor === "red") {
    for (let i = 0; i < feriados.length; i += 1) {
      feriados[i].style.backgroundColor = "rgb(238,238,238)";
    }
  } else {
    for (let i = 0; i < feriados.length; i += 1) {
      feriados[i].style.backgroundColor = "red";
    }
  }
}
createClickEventForButton();

// termina numero 3 aqui