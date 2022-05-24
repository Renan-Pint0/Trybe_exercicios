function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
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
  //Item 1 - 
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (const num in dezDaysList) {
      const day = document.createElement('li');
      day.innerHTML = dezDaysList[num];
      day.className = 'day';
      if (dezDaysList[num] === 24 || dezDaysList[num] === 25 || dezDaysList[num] === 31) {
          day.className = day.className + ' holiday';
      }
      if (dezDaysList[num] === 4 || dezDaysList[num] === 11 || dezDaysList[num] === 18 || dezDaysList[num] === 25) {
        day.className = day.className + ' friday';
    }
      document.getElementById('days').appendChild(day);
  }
  //Item 2 -
  function createHolidayButton(buttonName) {
      let buttonDad = document.querySelector('.buttons-container');
      let buttonId = 'btn-holiday';
      let newButton = document.createElement('button');

      newButton.innerHTML = buttonName;
      newButton.id = buttonId;
      buttonDad.appendChild(newButton);
  }

  createHolidayButton('Feriados');
//Item 3 -
function changeHolidayColor(event) {
   let holidayButton = document.querySelector('#btn-holiday');
   let holidays =document.querySelectorAll('.holiday');
   let bColor = 'rgb(238,238,238)';
   let newColor = 'red';

    holidayButton.addEventListener('click', function(){
        for(let index = 0; index < holidays.length; index+=1){
            if (holidays[index].style.backgroundColor === newColor) {
                holidays[index].style.backgroundColor = bColor;
            }else{
                holidays[index].style.backgroundColor = newColor;
            }
        }
    })
}
changeHolidayColor();
//Item 4 -
function createFridayButton(buttonName) {
    let buttonDad = document.querySelector('.buttons-container');
    let buttonId = 'btn-friday';
    let newButton = document.createElement('button');

    newButton.innerHTML = buttonName;
    newButton.id = buttonId;
    buttonDad.appendChild(newButton);
}

createFridayButton('Sexta-Feira');
//Item 5 -
function changeFridayText(event) {
    let fridayButton = document.querySelector('#btn-friday');
    let fridays =document.querySelectorAll('.friday');
    let newText = 'Sextinha';
 
     fridayButton.addEventListener('click', function(){
         for(let index = 0; index < fridays.length; index+=1){
             if (fridays[index].innerHTML === newText) {
                 fridays[index].innerHTML = fridayArray[index] ;
             }else{
                 fridays[index].innerHTML = newText
             }
         }
     })
 }
 let fridayArray = [4,11,18,25];
 changeFridayText();
 //item 6 -
 function dayMouseOver() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  };
  
  function dayMouseOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };
  
  dayMouseOver();
  dayMouseOut()