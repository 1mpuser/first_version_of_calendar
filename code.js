"use strict";
function checkDate(year,month,day){
    let flag=true;
    let date=new Date(year,month,day);
    if (year!=date.getFullYear()) flag=false;
    if (month!=date.getMonth()) flag=false;
    if (day!=date.getDate()) flag=false;
    return flag;
}
let arrOfRussianMonths=['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'];
let indexOfMonth;
let divYear;
let nowDay;
let nowYear;
let nowMonth;
let MonthNYear=document.getElementById('MonthNYear');
let cellsDiv=document.getElementById('cellsDiv');
findNowDay();
indexOfMonth=nowMonth;
divYear=nowYear;
MonthNYear.innerText=arrOfRussianMonths[indexOfMonth]+' '+divYear;
creatingCellsOfMonthAndYear(nowMonth, nowYear);
let buttons=document.querySelectorAll('button');
buttons[1].addEventListener('click', addingTheMonth);
buttons[0].addEventListener('click', subtractTheMonth);






















function addingTheMonth(){
    if (indexOfMonth >= 11) {
        indexOfMonth = 0;
        divYear++;
    }
    else indexOfMonth++;
    MonthNYear.innerText=arrOfRussianMonths[indexOfMonth]+' '+divYear;
    creatingCellsOfMonthAndYear(indexOfMonth, divYear);
}


function subtractTheMonth(){
    if (indexOfMonth <= 0){
        indexOfMonth = 11;
        divYear--;
    }
    else indexOfMonth--;
    MonthNYear.innerText=arrOfRussianMonths[indexOfMonth]+' '+divYear;
    creatingCellsOfMonthAndYear(indexOfMonth, divYear);
}






























function creatingCellsOfMonthAndYear(month, year){
    let oldCells=cellsDiv.querySelectorAll('div');
    for (let cell of oldCells) cellsDiv.removeChild(cell);
    for (let i=0;i<32;i++){
        if (checkDate(year, month, i)){
            let cell=document.createElement('div');
            cell.innerText=i;
            cell.className="cell";
            if (isItNowDay(year, month, i)) cell.classList.add("nowDay");
            cellsDiv.appendChild(cell);
        }
    }
}
function findNowDay(){
    let now=new Date();
    nowDay=now.getDate();
    nowYear=now.getFullYear();
    nowMonth=now.getMonth();
}
function isItNowDay(year, month, day){
    if (day == nowDay && month == nowMonth && year == nowYear) return true;
    else return false;
}