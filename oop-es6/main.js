class Weapon {  

    constructor (name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        const startDurability = this.durability;
    }   

    takeDamage(damage) {
        
        if (this.durability < 0) {
            return this.durability = 0;
        }

        return this.durability -= damage;
    }

    getDamage() {        
        let percentStrength = this.startDurability * 0.3;
        if (this.durability >= percentStrength) {
            return this.attack;
        } else if (this.durability = 0) {
            return 0;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}

class improvedWeapon extends Weapon {
    constructor (name, heirName, attack, durability, range) {
        super(name, heirName, attack, durability, range)
        
        this.name = name;
        this.heirName = heirName;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }
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

class improvedBow extends improvedWeapon {
};

class improvedSword extends improvedWeapon {
};

class improvedKnife extends improvedWeapon {
};

class improvedStaff extends improvedWeapon {
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
        this.grade = [];
    }
 
    getName () {
        console.log(this.name);        
    }

    addGrade(grade, subject) {           
        this.grade.push(grade);
        this.subject = subject;
        for (let i = 0; this.grade.length > i; i++) {
            if (this.grade[i] < 1 && this.grade[i] > 5 || this.grade[i] == String) {            
                console.log(`Вы пытались поставить оценку ${this.grade[i]} по предмету ${this.subject}. Допускаются только числа от 1 до 5.`);
                this.grade.splice(i-1, 1);
            }
        }    

        console.log(this.grade.length);        
    }

    getAverageBySubject(subject) {
        if ( this.grade.length === 0 ) {
            console.log(0);
        }
        let sum = 0;
      
        for (let rating of this.grade) {
            sum += rating;
        }
        console.log(sum / this.grade.length);
            
    }
}

const Natasha = new StudentLog('Наталья Чернышева');

Natasha.getName();
Natasha.addGrade(5, 'Математика');
Natasha.addGrade(4, 'Математика');
Natasha.addGrade(3, 'Математика');
Natasha.addGrade(2, 'Математика');

Natasha.addGrade(5, 'фра');
Natasha.addGrade(5, 'фра');
Natasha.addGrade(5, 'фра');
Natasha.addGrade(5, 'фра');


// Гдето что то пошло не так и я запутался, возможно стоит послностью переписать задачу, но если поможете разобраться будет лучше