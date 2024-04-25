const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class Kassa {
    //Kassa = Kasse
    #geldlade;
    #gescannteArtikel;
    constructor(geldlade) {
        this.#geldlade = geldlade;
        this.#gescannteArtikel = [];
    }
    scannen(artikel) {
        this.#gescannteArtikel.push(artikel); //Artikel wird in Array gepusht
    }
    get offenerBetrag() {
        let betrag = 0;
        this.#gescannteArtikel.forEach((a) => (betrag += a.preis));
        return betrag; //returened den Preis der Artikel arrays addiert
    }
    bezahlen(geld) {
        if (geld < this.offenerBetrag) {
            throw new Error('Zu wenig Geld gegeben');
        }
        const retour = geld - this.offenerBetrag;
        this.#geldlade += this.offenerBetrag;
        return retour;
    }
    get kassenstand() {
        return this.#geldlade.toString();
    }

    get returngescannteArtikel() {
        const gescannterArtikel = this.#gescannteArtikel.map((artikel) => {
            return artikel.name;
        });
        return gescannterArtikel;
    }
}

class Produkt {
    constructor(name, preis) {
        this.preis = preis;
        this.name = name;
    }
}

//produkte
const Tomate = new Produkt('Tomate', 5);
const Brot = new Produkt('Brot', 2.49);
const Cola = new Produkt('Cola', 1.99);
const kassa = new Kassa(100, 50);

let artikelListe = [Tomate, Brot, Cola];

//readline

const userKassa = new Kassa(100, 0);

function einkaufen() {
    rl.question(
        'Was möchtest du kaufen? "done" zum beenden \n',
        (artikelInput) => {
            if (artikelInput == 'done') {
                endoutput();
                return;
            } else {
                const foundArtikel = artikelListe.find((a) => {
                    if (a.name == artikelInput) {
                        return a;
                    }
                });
                if (foundArtikel == undefined) {
                    throw new Error('Artikel nicht gefunden');
                } else {
                    userKassa.scannen(foundArtikel);
                }
                console.log(`Du hast ${foundArtikel.name} gescannt`);
                einkaufen();
            }
        }
    );
}
einkaufen();

function endoutput() {
    console.log('Du musst noch ' + userKassa.offenerBetrag + '€ zahlen');
    rl.question('Wie viel geld gibst du ihm?  \n', (geldGegebenInput) => {
        userKassa.geldGegeben = parseFloat(geldGegebenInput);
        console.log(`Du hast ${userKassa.geldGegebenKassa}€ gegeben`);
        console.log(
            'Dein Rückgeld beträgt: ' + userKassa.rueckgeld().toFixed(2) + '€'
        );
        console.log('Dein Kassenstand beträgt: ' + userKassa.kassenstand + '€');
        console.log(
            'Du hast folgende Artikel gekauft:' +
                userKassa.returngescannteArtikel
        );
        rl.close();
    }); //viel zu lange dafür gebracuht, aber es funktioniert
}

//readline
