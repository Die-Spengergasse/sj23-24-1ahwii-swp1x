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

    get bmi() {
        return this.gewichtKG / this.groesseM / this.groesseM;
    }
    get gewichtType() {
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

function getName() {
    return document.querySelector('#namensfeld').value;
}
// Function to get the value of the selected radio button
function getSelectedGender() {
    const radios = document.getElementsByName('choice');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            // Return the value of the selected radio button
            return radios[i].value;
        }
    }
}
function getGroesse() {
    return document.querySelector('#groesse').value;
}
function getGewicht() {
    return document.querySelector('#gewicht').value;
}
const anlegeButton = document.querySelector('#anlegen');
// export { Person };
const ausgabe = document.querySelector('#ausgabe');
anlegeButton.addEventListener('click', function () {
    console.log('click');
});
const name = getName;
