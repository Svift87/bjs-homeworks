function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

const now = +new Date();
console.log(now)

function checkBirthday(birthday) {
    const now = +new Date();
    birthday = +new Date(birthday);
    let diff = now - birthday;    
    age = Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12);

    if (age >= 18) {
        return 'есть 18!';
    }
}


function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    const sound = animal.sound;
    if (animal == undefined) {
        return null;
    } else {                
        return sound;
    }    
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let average = 0;

    for (let i = 0; marks.length > i; i++) {
        average += +marks[i];
    }    

    const roundedAverage = Math.round(average / marks.length);
    
    return roundedAverage;
}