'use strict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let summaBank = amount - contribution;

    date = Date.parse(date) - Date.parse(new Date());

    let dateMonth = Math.floor(date/1000/60/60/24/30); // Нашел количество месяц с текущей даты

    let percentMonth = percent / 12 / 100; // Нашел процент за месяц

    let totalAmount = summaBank * ( percentMonth + percentMonth / (Math.pow((1 + percentMonth), dateMonth) - 1) );

    // Помогите не могу понять где я ошибся в формуле?? 

    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name == '' || name == 'null' || name == 'undefined') {
        name = 'Аноним';
    }

    let greeting = `Привет, мир! Меня зовут ${name}`;
    
    return greeting;
}