ScrumBoard
==========

Diese Applikation wurde im Modul "Web Technologies & Engineering 2" an der [ZHAW](http://www.zhaw.ch/de.html) selbständig programmiert.

Funktionalitäten
----------------
Das ScrumBoard besteht aus einer Tafel mit den 3 verschiedenen Spalten "todo", "in progress" und "done" und bietet folgende Funktionalitäten:

* In jeder dieser Spalten können verschiedene Karten hängen
* Eine Karte enthalten 
  * einen Titel
  * eine Beschreibung
  * eine Aufwandschätzung (Eine Zahl aus 1,2,3,5,8) 
  * und den Namen einer verantwortlichen Person
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

Alternativ können die Tests auch auf Heroku durchgeführt werden: [https://mighty-crag-5397.herokuapp.com/SpecRunner.html](https://mighty-crag-5397.herokuapp.com/SpecRunner.html)


Dokumentation Backend
---------------------
Das [nodeJS](https://nodejs.org) Backend wurde auf der Basis von [expressjs](http://expressjs.com) geschrieben. Die Grundkonfiguration der Applikation wird in der Datei `app.js` durchgeführt, welche die expressjs Komponenten initialisiert und startet. Die Backend-Applikation basiert auf einem Model und einem Router. Im Model wurde definiert, wie eine ScrumBoard-Karte auszusehen hat. Zum einen wurden hier die verschiedenen Attribute `id`, `title`, `descr`, `rating`, `responsible` und `stage` definiert, zum anderen wurde die Standard `save()` Methode überschrieben. Die neue angepasste `save()` Methode speichert lediglich die übermittelten Werte ab, anstatt eine komplette Instanz eines Models zu überschreiben. Der Router definiert hingegen, welche HTTP Methoden auf der jeweiligen Ressource ausgeführt werden kann. Als erstes wurde im Router ein Parameter für die ID einer ScrumBoard-Karte definiert. Danach wurde die Route auf das Root Objekt `/` definiert. Auf das Root Objekt dürfen die HTTP Methoden GET und POST ausgeführt werden. Ein HTTP GET auf `/` liefert alle gespeicherten ScrumBoard-Karten als JSON Objekt zurück. Der POST erstellt eine neue Karte und speichert diese. Die zweite Route verwendet den zuvor definierten ID Parameter einer ScrumBoard-Karte. Wird `/:card_id` aufgerufen, so wird lediglich das Objekt mit der übermittelten ID als JSON Objekt zurück geliefert. Ein PUT Request auf diese Ressource editiert die vorhanden Werte und speichert diese ab. Zuletzt wird der DELETE auf die Ressource definiert, welche logischerweise die Karte mit der überlieferten ID löscht.


Dokumentation Frontend
----------------------
Das Frontend basiert auf [backbonejs](http://backbonejs.org). Alle für das Frontend verwendete Dateien befinden sich im Ordner `public`. Die Datei `index.html` wird vom Server als erstes ausgeliefert und enthält den Grundaufbau der HTML Seite und die HTML Templates für eine Karte. In dieser Datei werden auch die zusätzlich benötigten Libraries geladen welche sich im Verzeichnis `public/js/lib/` befinden. Im `public` Ordner befinden sich Unterordner für die Grafiken `img` sowie für die CSS Dateien `stylesheets`, welche das Aussehen der Seite definieren. 

Die Frontend Applikation wird durch das Laden der Datei `public/js/app.js` initialisiert. Es wird als erstes eine Collection erstellt, welche später alle Instanzen des Models enthaltet. Danach wird ebenfalls auf der Clientseite ein Router erstellt, welcher die verschiedenen Ressourcen mit den dazugehörigen Views verbindet. Beim erstellen der `CardsView` wird die Collection übergeben. Während der Initialisierung der Hauptseite werden dann die Daten des Servers abgerufen und in der Collection gespeichert. Schliesslich wird dann für jedes Element in der Collection eine eigene CardView erstellt und gerendert.

Neben den zwei Backbone Views für die Hauptseite und die Karten existiert auch noch eine View für das Erstellen, und eine für das Editieren von Elementen. Diese Views werden vom Router aufgerufen, falls die `#create` Seite respektive die `#edit/:card_id` Seite aufgerufen wird. Für das Löschen eine Karte wurde bewusst auf eine einzelne View verzichtet. Stattdessen initialisiert der Router beim Aufruf der Seite `#delete/:card_id` selbst gleich den Löschvorgang und lädt die Hauptseite neu.

Aufwand
-------
Für diese Projektarbeit wurde deutlich mehr Aufwand betrieben, als die vorgegebenen 8 bis 10 Stunden. Dies liegt daran, dass die verwendeten Javascript Technologien für mich neu waren. Obwohl bereits gewisses Grundwissen über Javascript vorhanden war, wurde noch nie eine komplette Applikation mittels Javascript realisiert. Deshalb beläuft sich der Gesamtaufwand auf geschätzte 25 Stunden.

Heroku
------
Diese Applikation wurde auf [Heroku](https://www.heroku.com) deployed und kann unter der folgenden URL aufgerufen werden: [https://mighty-crag-5397.herokuapp.com/](https://mighty-crag-5397.herokuapp.com/)

Persistenz der Daten
--------------------
Die Applikation verwendet keinen Persistenzlayer. Die Daten werden vom Express-Server im Memory gehalten und jegliche Änderungen gehen bei einem Neustart verloren.
