ScrumBoard
==========

Diese Applikation wurde im Modul "Web Technologies & Engineering 2" an der [ZHAW](http://www.zhaw.ch/de.html) selbständig programmiert.

Funktionalitäten
----------------
Das ScrumBoard besteht aus einer Tafel mit den 3 verschiedenen Spalten "todo","in progress" und "done" und bietet folgende Funktionalitäten:

* In jeder dieser Spalten können verschiedene Karten hängen
* Eine Karte enthalten einen Titel, eine Beschreibung, eine Aufwandschätzung (Eine Zahl aus 1,2,3,5,8) und den Namen einer verantwortlichen Person
* Es können neue Karten erzeugt werden
* Bestehende Karten können gelöscht werden
* Karten können von einer Spalte in die nächste geschoben werden
* Die Informationen einer Karte können editiert werden

Technologien
------------
Die Applikation setzt auf folgende Technologien

* Web / API Server mit node.js
* REST API
* Frontend Anwendung mit Backbone und jQuery

Der Webserver mit der REST API wurde auf der Basis von [expressjs](http://expressjs.com) entwickelt und unterstützt die standard CRUD (Create, Read, Update, Delete) Operationen. Als zusätzliche Middleware für den Webserver wurde das [body-parser](https://github.com/expressjs/body-parser) NPM und das [compression](https://github.com/expressjs/compression) NPM verwendet. Das body-parser NPM wird benötigt, um die mittels HTTP PUT und HTTP POST übermittelten Daten zu verarbeiten. Das compression NPM ist für die Kompression der Kommunikation zwischen Client und Server zuständig. Das Frontend wurde aus einer Kombination von [backbonejs](http://backbonejs.org), [jQuery](https://jquery.com) und [jQuery UI](https://jqueryui.com) entwickelt. Jquery UI wird für die Drag&Drop Funktionalität verwendet. Die zwei anderen Komponenten sind für die Darstellung und Verarbeitung der Daten im Browser des Clients zuständig.

Installieren und Starten
------------------------
Die Applikation kann mittels den folgenden Befehlen installiert werden:

1. Das Git Repository klonen: `git clone https://github.engineering.zhaw.ch/schledom/ScrumBoard.git`
2. In das Verzeichnis wechseln: `cd ScrumBoard`
3. Alle Abhängigkeiten installieren: `npm install`

Um die Applikation zu starten muss noch der folgende Befehl eingegeben werden: `npm start`

Tests
-----
Für einige grundlegende Tests wurde die Testsuite [jasmine](http://jasmine.github.io) verwendet. Um die Applikation zu testen müssen folgende Operationen ausgeführt werden:

1. Starte den Webserver `nodemon app.js`
2. Öffne den Browser mit der folgenden URL `http://127.0.0.1:8080/SpecRunner.html`

Alternativ können die Tests auch auf Heroku durchgeführt werden: [https://mighty-crag-5397.herokuapp.com/SpecRunner.html][https://mighty-crag-5397.herokuapp.com/SpecRunner.html]

Aufwand
-------
Für diese Projektarbeit wurde deutlich mehr Aufwand betrieben, als die vorgegebenen 8 bis 10 Stunden. Dies liegt daran, dass die Verwendeten Javascript Technologien für mich neu waren. Obwohl bereits gewisses Grundwissen über Javascript vorhanden war, wurde noch nie eine komplette Applikation mittels Javascript realisiert. Deshalb beläuft sich der Gesamtaufwand auf geschätzte 25 Stunden.

Heroku
------
Diese Applikation wurde auf [Heroku](https://www.heroku.com) deployed und kann unter der folgenden URL aufgerufen werden: [https://mighty-crag-5397.herokuapp.com/][https://mighty-crag-5397.herokuapp.com/]

Persistenz der Daten
--------------------
Die Applikation verwendet keinen Persistenzlayer. Die Daten werden vom Express-Server im Memory gehalten und jegliche Änderungen gehen bei einem Neustart verloren.