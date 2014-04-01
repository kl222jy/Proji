#Vision
Ett projekthanteringssystem som f�renklar samarbete och skapande av dokumentation f�r projekt.

##Definitioner
* Dokumentation - h�nvisar h�r till projektdokumentation i form av text och kalkylblad.
* Projektledare - ledaren f�r ett projekt i systemet
* Projektmedlem - samtliga medlemmar i ett projekt i systemet
* Informationsfl�de - projektets samlade information eller delar av denna, informationsm�ngd, datam�ngd

##Bakgrund och problembeskrivning
Utan att anv�nda sig av n�got system f�r att hantera dokumentation �r det omst�ndligt att samarbeta och strukturera upp informationen �versk�dligt.
Systemet �r t�nkt att fungera som en centralisering av dokumentation med hj�lpmedel f�r att skapa och �verblicka denna. 
Projektets medlemmar ska kunna hj�lpas �t att h�lla denna uppdaterad och funktioner ska finnas f�r att l�ttare kunna �verblicka informationsfl�det.
Systemet ska g�ra processen effektivare samtidigt som det f�renklar den.

##Teknik
Mina huvudsakliga m�l med kursen �r att l�ra mig angular, testning, bli b�ttre p� javascript och bekanta mig med utvecklingsverktyg. Jag skulle hemskt g�rna vilja bekanta mig med mongodb och express, men jag tror inte jag hinner detta och har d�rf�r valt firebase som datalagring. F�rhopppningen �r att kunna s�tta mig in i dessa under en sommarkurs. F�r mer specificerade listor, se bower.json och package.json.
* Spr�k: Javascript, CSS, HTML
* Ramverk: Angular
* Tj�nst: Firebase
* Hosting: Binero
* Verktyg: Yeoman, Bower, Grunt, Travis CI(om jag hinner)
* Testning: Karma, Jasmine, Angular Scenario Runner/Protractor

##Anv�ndargrupper/Akt�rer

###Oerfaren Projektledare
Har troligen en del erfarenhet av arbete i projektform och n�gorlunda kunskaper inom projektteknik

###Erfaren Projektledare
V�lutbildad inom projektteknik, god vana av att styra projekt

###Oerfaren Projektmedlem
Bristande utbildning i projektteknik, troligen inte s�rskilt van vid att arbeta i grupp

###Erfaren Projektmedlem
V�lutbildad inom projektteknik, har god vana av att arbeta i grupp.

###Projektkund
Skiftande datorvana, b�r ha viss insyn i projektet.

Samtliga anv�ndargrupper har ocks� ett intresse f�r effektiviseringen detta system inneb�r gentemot normalfallet.

##Intressenter
* Kristoffer Lind - Grundare - kristoffer@krad.se
* Linn�universitetet, 1dv404 - Kvalitetskontroll, dokumentation
* Linn�universitetet, 1dv430 - Kvalitetskontroll, projekt
* Github - Koppling f�r kodkontroller
* W3C - Kodstandard
* WCAG - Tillg�nglighetsanpassning

##Liknande system
* freedcamp.com - ingen m�jlighet att skapa filer p� plats, snarare ett community med m�jlighet att ladda upp filer.
* basecamp.com - klientvisning med restriktioner, sociala kopplingar f�r att fr�mja diskussion i stora projekt, m�jlighet att skapa textfiler - ingen hj�lp.

##Baskrav
* BK1 - Projektmedlemmar ska enkelt och effektivt kunna hj�lpas �t att h�lla dokumentationen i toppskick
* BK2 - Kommunikation mellan projektmedlemmar ska fr�mjas
* BK3 - Projektmedlemmar ska kunna f� ut sina id�er i ett samlat format �ven om det f�r stunden kanske inte riktigt passar in i n�gon befintlig dokumentation
* BK4 - Det finns kontroller som hj�lper till att minska risken f�r misslyckade projekt(ex. tendeser mot arbete i vattenfallsmodell)
* BK5 - Projektmedlemmar ska kunna f� en f�rb�ttrad �verblick �ver projektet
* BK6 - Automatiska utskick av h�ndelser f�r att h�lla konservativa medlemmar uppdaterade
