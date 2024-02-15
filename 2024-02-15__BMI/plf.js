class Person {
    constructor(name, gender, groesseM, gewichtKG) {
        if (gender !== 'm' && gender !== 'f') {
            throw new Error('wrong gender');
        }
        this.name = name;
        this.gender = gender;
        this.groesseM = groesseM;
        this.gewichtKG = gewichtKG;
    }
    groesseCM() {
        return this.groesseM * 100;
    }
    vorName() {
        return this.name.split(' ')[0];
    }
    nachName() {
        return this.name.split(' ')[1];
    }
    toString() {
        return `${this.name} (${this.groesseCM()}cm, ${this.gewichtKG}kg)`;
    }

    getBmi() {
        return this.gewichtKG / this.groesseM / this.groesseM;
    }
    getGewichtType() {
        if (this.gender == 'f') {
            if (this.getBmi() < 19) return 'Untergewicht';
            if (this.getBmi() > 24) return 'Übergewicht';
            return 'Normalgewicht';
        } else {
            if (this.getBmi() < 20) return 'Untergewicht';
            if (this.getBmi() > 25) return 'Übergewicht';
            return 'Normalgewicht';
        }
    }
}

export { Person };
