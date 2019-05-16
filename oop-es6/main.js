class Weapon {  

    constructor (name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;   
        
        this.percentStrength = this.durability * 0.3;
    }   

    takeDamage(damage) {  
        this.durability -= damage;

        if (this.durability < 0) {
            return this.durability = 0;
        }

        return this.durability;
    }

    getDamage() {                  
        if (this.durability >= this.percentStrength) {
            return this.attack;
        } else if (this.durability <= this.percentStrength && this.durability > 0) {
            return this.attack / 2;
        } else {
            return 0;
        }
    }

    isBroken() {

        return this.durability == 0;
    }
}

class Arm extends Weapon {
    constructor() {
        super('Рука', 1, Infinity, 1);   
    } 
};

class Bow extends Weapon {
    constructor() {
        super('Лук', 10, 200, 3);   
    }  
};

class Sword extends Weapon {
    constructor() {
        super('Меч', 25, 500, 1);   
    } 
};

class Knife extends Weapon {
    constructor() {
        super('Нож', 5, 300, 1);   
    } 
};

class Staff extends Weapon {
    constructor() {
        super('Посох', 8, 300, 21);   
    } 
};

class improvedBow extends Bow {
    constructor() {
        super();   
        this.name = 'Длинный лук';    
        this.versionWeapon = 'Лук';  
        this.attack = 15;
        this.range = 4;   
    }
};

class improvedSword extends Sword {
    constructor() {
        super();   
        this.name = 'Секира';    
        this.versionWeapon = 'Меч';  
        this.attack = 27;
        this.durabilityInitial = 800;
    }
};

class improvedStaff extends Staff {
    constructor() {
        super();   
        this.name = 'Посох Бури';    
        this.versionWeapon = 'Посох';  
        this.attack = 10;
        this.range = 3;     
    }  
};

const arm = new Arm('Рука', 1, Infinity, 1);
const bow = new Bow('Лук', 10, 200, 3);
const sword = new Sword('Меч', 25, 500, 1);
const knife = new Knife('Нож', 5, 300, 1);
const staff = new Staff('Посох', 8, 300, 2);

const longBow = new improvedBow('Длинный лук', 'Лук', 15, 4);
const longSword = new improvedSword('Секира', 'Меч', 27, 800);
const longStaff = new improvedStaff('Посох Бури', 'Посох', 10, 3);

// задание 3

class StudentLog {
    constructor (name) {
        this.name = name;        
        this.academicPerformance = {

        }; 
    }
 
    getName () {
        return this.name;        
    }

    addGrade(grade, subject) {          
        this.academicPerformance[subject] = [];
        this.academicPerformance[subject].push(grade) // Почему не хочет записывать все оценки?
    }

    getAverageBySubject(subject) {
        if ( this.academicPerformance[subject].length === 0 ) {
            return 0;
        }
        let sum = 0;
        
        for (let rating of this.academicPerformance[subject]) {
            sum += rating;
        }
        return sum / this.scores.length;                     
    }
}

const Natasha = new StudentLog('Наталья Чернышева');

Natasha.getName();
Natasha.addGrade(5, 'Математика');
Natasha.addGrade(4, 'Математика');
Natasha.addGrade(3, 'Математика');
Natasha.addGrade(4, 'Математика');
Natasha.addGrade(2, 'Фра');
Natasha.addGrade(5, 'Фра');
Natasha.addGrade(5, 'Фра');

