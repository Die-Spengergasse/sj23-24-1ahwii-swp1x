class Feuer {
    temperatur;
    constructor(initialTemperatur) {
        this.temperatur = initialTemperatur;
        console.log('constructor aufgerufen');
    }
}
a = new Feuer(800);
b = new Feuer(36.6);
console.log(a, b);
