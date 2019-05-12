class Weapon {  

    constructor (name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;   
        
        this.percentStrength = this.durability * 0.3;
    }   

    takeDamage(damage) {   
        const startDurability = this.durability;     
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

class improvedWeapon extends Weapon {
    
};

class Arm extends Weapon {
};

class Bow extends Weapon {
};

class Sword extends Weapon {
};

class Knife extends Weapon {
};

class Staff extends Weapon {
};

class improvedBow extends Bow {
    constructor (name, heirName, attack, durability, range) {
        super(name, heirName, attack, durability, range)
        this.heirName = heirName;
        this.name = name;        
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }
};

class improvedSword extends Sword {
    constructor (name, heirName, attack, durability, range) {
        super(name, heirName, attack, durability, range)
        this.heirName = heirName;
        this.name = name;        
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }
};

class improvedKnife extends Knife {
    constructor (name, heirName, attack, durability, range) {
        super(name, heirName, attack, durability, range)
        this.heirName = heirName;
        this.name = name;        
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }
};

class improvedStaff extends Staff {
    constructor (name, heirName, attack, durability, range) {
        super(name, heirName, attack, durability, range)
        this.heirName = heirName;
        this.name = name;        
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }
};

const arm = new Arm('Рука', 1, Infinity, 1);
const bow = new Bow('Лук', 10, 200, 3);
const sword = new Sword('Меч', 25, 500, 1);
const knife = new Knife('Нож', 5, 300, 1);
const staff = new Staff('Посох', 8, 300, 2);

const longBow = new improvedBow('Длинный лук', 'Лук', 15, 200, 4);
const longSword = new improvedSword('Секира', 'Меч', 27, 800, 1);
const longStaff = new improvedStaff('Посох Бури', 'Посох', 10, 300, 3);

// задание 3

class StudentLog {
    constructor (name) {
        this.name = name;  
        this.academicPerformance = {
            subject: '',
            grades: []
        };      
    }
 
    getName () {
        return this.name;        
    }

    addGrade(grade, subject) {        
        this.academicPerformance.grades.push(grade);
        this.academicPerformance.subject = subject;
    }

    getAverageBySubject() {
        if ( this.academicPerformance.grades.length === 0 ) {
            return 0;
        }
        let sum = 0;
      
        for (let rating of this.academicPerformance.grades) {
            sum += rating;
        }
        return sum / this.academicPerformance.grades.length;            
    }
}

const Natasha = new StudentLog('Наталья Чернышева');

Natasha.getName();
Natasha.addGrade(5, 'Математика');
Natasha.addGrade(4, 'Математика');
Natasha.addGrade(3, 'Математика');
Natasha.addGrade(2, 'Математика');

// Как создать новый объект academicPerformance при изменении предмета? 
// Если я пишу Natasha.addGrade(2, 'Фра'); то соответственно значение subject перезаписывается

