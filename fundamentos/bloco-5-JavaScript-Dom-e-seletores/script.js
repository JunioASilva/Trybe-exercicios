// const firstLi = document.getElementById('first-li');
// const secondLi = document.getElementById('second-li');
// const thirdLi = document.getElementById('third-li');
// const input = document.getElementById('input');
// const myWebpage = document.getElementById('mySpotrybefy');

// function ClassTech (event) {
//   const elementTech = document.querySelector(".tech");
//   elementTech.classList.remove("tech");
//   event.target.classList.add("tech");
//   input.value = "";
  

// }

// firstLi.addEventListener("click", ClassTech);
// secondLi.addEventListener("click", ClassTech);
// thirdLi.addEventListener("click", ClassTech);


// input.addEventListener("input", function(event){
//   const elementTech = document.querySelector(".tech");
//   elementTech.innerText = event.target.value;
  
// });

// function resetText(event) {
//   event.target.innerText = 'Opção reiniciada';
// }

//   firstLi.addEventListener('dblclick', resetText);
//   secondLi.addEventListener("dblclick", resetText);
//   thirdLi.addEventListener("dblclick", resetText);

//   myWebpage.addEventListener("dblclick", function(){
//     window.location.replace("https://www.linkedin.com/in/junio-alves-da-silva-b795a2217/");

//   });

//   myWebpage.addEventListener("mouseover", function(event){
//     event.target.style.color = "red";
//   });

//   myWebpage.addEventListener("mouseout", function(event){
//     event.target.style.color = "unset";
//   });

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// function createDaysMonth (){
//   let getDayList = document.querySelector("#days");

//   for (let index = 0; index < dezDaysList.length; index += 1) {
//     let day = dezDaysList[index];
//     let dayItem = document.createElement("li");

//   if(day === 24 || day ===31){
//     dayItem.className = "day holiday";
//     dayItem.innerHTML = day;
//     getDayList.appendChild(dayItem);
//   } else if (day === 4 || day === 11 || day === 18 || day === 25){
//     dayItem.className = "day friday";
//     dayItem.innerHTML = day;
//     getDayList.appendChild(dayItem);
//   } else if (day === 25){
//     dayItem.className = "day holiday friday";
//     dayItem.innerHTML = day;
//     getDayList.appendChild(dayItem);
//   } else {
//     dayItem.innerHTML = day;
//     dayItem.className = "day";
//     getDayList.appendChild(dayItem);
//     }
//   };
// };
// createDaysMonth();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysMonth(){
  let getDayList = document.querySelector("#days");

  for(let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement("li");

    if(day === 24 || day === 31){
      dayItem.className = "day-holiday";
      dayItem.innerHTML = day;
      getDayList.appendChild(dayItem);
    }else if(day === 4 || day === 11 || day === 18){
      dayItem.className = "day friday";
      dayItem.innerHTML = day;
      getDayList.appendChild(dayItem);
    }else if(day === 25){
      dayItem.className = "day-holiday friday";
      dayItem.innerHTML = day;
      getDayList.appendChild(dayItem);
    }else {
      dayItem.innerHTML = day;
      dayItem.className = "day";
      getDayList.appendChild(dayItem);
    }
  };
};
createDaysMonth();

function CreateButton(Feriados){
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  let newButtonID = "btn-holiday";

  newButton.innerHTML = Feriados;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};
CreateButton("Feriados");

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.day-holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};
displayHolidays();  
