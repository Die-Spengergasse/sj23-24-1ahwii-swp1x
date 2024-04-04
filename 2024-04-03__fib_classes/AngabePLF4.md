# 1AHWII praktische Leistungsfestellung 21.3.2024

## Themen: Klassen, Fake-Daten, Arrays

## Aufgabe 1: Vorbereitung des Projekts, mit Internet

1. Verschiebe _alle_ Angabedateien vom Laufwerk `Z:\` auf den Desktop
2. Öffne den Ordner "PLF4" mit VS Code
3. starte ein "git bash" Terminal _in_ dem Ordner "PLF4"
4. in dem Terminal rufe `npm install` auf, dies installiert alle Abhängigkeiten
   aus dem Internet

============= ab hier wird kein Internet gebraucht =============

## Aufgabe 2: Starten der MDN Dokumentation

1. starte ein "git bash" Terminal im Verzeichnis "Desktop", dann führe das
   Kommando
2. `unzip DOC_MDN_2024-03.zip` aus.
3. Wechsle in das Verzeichnis DOC_MDN: `cd DOC_MDN`
4. Führe dort das Kommando `npm start` aus und warte etwas.
5. Öffne dann im Browser den URL `http://localhost:5042/'

## Aufgabe 3: Klasse `Tier` erstellen

```plantuml
class FakeTier {
+ constructor()
+ name : String
+ art: String
+ rasse: String
+ toString(): String
}
```

Im Konstruktor der Klasse sollen `name`, `art` und `rasse` mit sinnvollen Werten
der faker Bibliothek gefüllt werden. Starte dafür Dein Programm im debug-Modus
um herauszufinden, wie den entsprechenden Aufrufe lauten. Für Art und Rasse
verwende die Funktionen aus `animal` sowie für den Namen den `firstName` aus
`person`. Beachte, dass Rasse und Art zusammenpassen müssen!

Beispiele für die toString() Methode:

```code
console.log(new FakeTier() + '');
Mariam is a lion, race: Northeast Congo Lion
console.log(new FakeTier() + '');
Sinja is a bird, race: Barrow's Goldeneye
console.log(new FakeTier() + '');
Eren is a horse, race: Brazilian Sport Horse
```
