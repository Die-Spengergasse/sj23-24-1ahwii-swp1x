const { fakerDE } = require('@faker-js/faker');

class Person {
    #name;
    #gender;
    #groesseM;
    #gewichtKG;

    constructor(name, gender, groesseM, gewichtKG) {
        this.name = name;
        this.#gender = gender;
        this.#groesseM = groesseM;
        this.#gewichtKG = gewichtKG;

        if (this.#gender !== 'm' && this.#gender !== 'f') {
            throw new Error('Wrong gender');
        }
    }

    set name(name) {
        if (typeof name !== 'string' || name.length < 3) {
            throw new Error('Name must be a string with at least 3 characters');
        }
        this.#name = name;
    }
    #groesseCM() {
        return this.#groesseM * 100;
    }
    xy() {
        return this.#groesseCM();
    }

    get vorName() {
        const names = this.#name.split(' ');
        return names[0];
    }

    get nachName() {
        const names = this.#name.split(' ');
        return names.slice(1).join(' ');
    }

    toString() {
        return `${this.#name} (${this.#groesseCM()}cm, ${this.#gewichtKG}kg)`;
    }

    get bmi() {
        const bmi = this.#gewichtKG / this.#groesseM ** 2;
        return bmi;
    }

    get gewichtType() {
        const bmi2 = this.getBmi();
        if (this.#gender === 'f' && bmi2 >= 19 && bmi2 <= 24) {
            return 'Normalgewichtig';
        } else if (this.#gender === 'm' && bmi2 >= 20 && bmi2 <= 25) {
            return 'Normalgewichtig';
        } else if (bmi2 < 19) {
            return 'Untergewichtig';
        } else {
            return 'Übergewichtig';
        }
    }
}

const mensch1 = new Person(3.14, 'm', 1.86, 89);
console.log(mensch1.toString());
console.log();
// const Physiker = new Person('Albrecht Einstein', 'm', 1.6, 65);
// const Mensch3 = new Person('Isaac Newton', 'm', 1.7, 54);
// const fakeman = new Person(
//     fakerDE.person.firstName('male') + ' ' + fakerDE.person.lastName('male'),
//     fakerDE.person.sex().at(0),
//
//     1.8,
//     80
// );
//
// console.log(mensch1.toString());
// console.log(mensch1.getGewichtType());
// console.log('Bmi:', mensch1.getBmi());
//
// console.log(Physiker.toString());
// console.log(Physiker.getGewichtType());
// console.log('Bmi:', Physiker.getBmi());
//
// console.log(Mensch3.toString());
// console.log(Mensch3.getGewichtType());
// console.log('Bmi:', Mensch3.getBmi());
//
// console.log(fakeman.toString());
// console.log(fakeman.getGewichtType());
// console.log('Bmi:', fakeman.getBmi());
