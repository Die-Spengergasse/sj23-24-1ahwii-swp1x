# Praktische Leistungsfeststellung #3

## Klasse 1AHWII / 25. 1. 2024 / Lehrer: GRG

### Thema Klassen, Attribute und Methoden

## Aufgabe Klasse Person

```plantuml
class Person {
+ name : String
+ gender: String
+ groesseM : Number
+ gewichtKG : Number
+ groesseCM() : Number
+ vorName(): String
+ nachName(): String
+ toString() : String
+ getBmi() : Number
+ getGewichtType(): String
}
```

Die Aufgabe ist es, die Datei `plf.js` soweit zu implementieren, dass der Aufruf
von `node test` möglichst viele positive Tests ergibt.

Grundsätzlich sollte dies als Angabe reichen, denn die Funktionsweise der Tests
liegt in der Datei `test.js` ja vor.

### Hinweise zu den Tests

Gender darf nur "m" oder "f" sein, ansonsten `throw new Error('wrong gender')`

Vorname und Nachname können mit `split(' ')` aus dem Namen ermittelt werden.

100cm sind 1m.

Das BMI wird ermittelt aus gewichtKG / (groesseM²)

Frauen sind normalgewichtig, wenn BMI >= 19 und BMI <= 24 ist, Männer wenn der
BMI >=20 und <= 25 ist.

Die Strings, die von getGewichtType() zu returnen sind, lauten 'Untergewicht',
'Normalgewicht' und 'Übergewicht'

### Hinweise zur Arbeit

Wenn Du `node --inspect test` aufrufst, so wird der debug-modus gestartet,
sodass Du das laufende Programm untersuchen kannst.

## Gutes Gelingen!
