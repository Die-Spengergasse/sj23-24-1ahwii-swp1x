const fragen = require('./fragen'); // bleibt in 1. Zeile
//const Frage = undefined;  // Aufgabe 1, wird Klasse

class Frage {
    #frage;
    #antwort;
    #optionen;
    constructor(obj) {
        debugger;
        this.obj = obj;
        this.#frage = this.obj.frage;
        this.#antwort = this.obj.antwort;
        this.#optionen = this.obj.optionen;
    }
    isRichtig(versuch) {
        if (versuch == this.#antwort) {
            return true;
        } else {
            return false;
        }
    }
    get frage() {
        return this.obj.frage;
    }
    get optionen() {
        return this.obj.optionen;
    }
}

//const eulerZahl = undefined;  // Aufgabe 2, wird Function

function eulerZahl() {
    //return Math.E;
    let divider = 1;
    let eulerZahl = 1;
    for (let i = 1; i <= 20; i++) {
        divider *= i;
        eulerZahl += 1 / divider;
        console.log(eulerZahl);
    }
    return eulerZahl;
}

module.exports = { Frage, eulerZahl }; // bleibt am Ende des Programms
