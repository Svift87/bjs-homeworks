"use strict"

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let x,
        D,
        xOne,
        xTwo;

    a * x**2 + b * x + c == 0;

    D = b ** 2 - 4*a*c;

    if (D > 0) {
        xOne = -b + Math.sqrt(D)/2*a;
        xTwo = -b - Math.sqrt(D)/2*a;

        x = 'x1 = ' + xOne + '; x2 = ' + xTwo;
    } else if (D == 0) {
        x = -b / 2 * a; 
    } else {
        x = 'Уровенение не имее корней';
    }

    return x;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let age = new Date(),
        result,
        resultAge;

    resultAge = age.getFullYear() - dateOfBirthday.getFullYear();
    if (resultAge >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}?, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }

    console.log(result)
    return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){    
    let averageMark = 0;

    if (marks.length > 5) {
        console.log('Оценок больше 5');        
    }

    let marksSumm = marks.splice(',', 5);

    for (let i=0; marksSumm.length > i; i++) {
        averageMark += marksSumm[i];
    }
    
    return averageMark = averageMark / marksSumm.length;
}

let d = function(nums, k) {  
    for (let i = 0; nums.length > i; i++) {
        for (let b = 0; nums.length > b; b++) {
            if (nums[i] + nums[b] == k) {
                return;
            }                   
        }
    }
 }

 d([10, 15, 3, 7], 17);

let a = function merge(nums1, m, nums2, n) {
   let test = nums1.splice(0, m).concat(nums2);
   test.sort();
   console.log(test);
}

a([46,55,88,0,0,0,0], 3, [18,29,80,90], 4);
