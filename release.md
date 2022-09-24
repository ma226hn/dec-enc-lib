# Mall för inlämning laboration 1, 1dv610

## Checklista
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [x] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - [x] Koden är objektorienterad
  - [x] Jag har skrivit en modul som riktar sig till programmerare

## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - [x] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [x] De flesta testfall fungerar
    - [x] Koden är förberedd på Återanvändning
    - [x] All kod samt historik finns i git 
    - [x] Kodkvaliterskraven är ifyllda
    - [x] Reflektion är skriven utifrån bokens kapitel 
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [x] Samtliga testfall är skrivna    
    - [x] Testfall är automatiserade
    - [x] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [ ] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 

Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 

## Återanvändning
Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda din modul. Om du skrivit instruktioner för din användare, länka till dessa. Om inte, beskriv här hur någon skall göra för att använda din modul.
- jag har beskrivt allt om återanvändning  i readme file 
<a href="README.md">README<a>

## Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå.
Beskriv hur du kommit fram till om din kod fungerar.
- Jag har 4 modules 
#### Encryption 
 - Denna modul tar en text som ett argument och ändrar karaktärer till andra karaktärer enligt ersättningsmatrisen och unicode table
#### Decryption 
Denna modul tar en krypterad text som ett argument och ändrar karaktärer till ursprungliga karaktärer enligt ersättningsmatrisen och unicode table
#### PassEncryption
denna modul har två functioner 
- ExtraEncryption: Den tar text som ett argument och använder Encception-modulen för att ändra karaktärer till andra karaktärerenligt ersättningsmatrisen och Unicode-tabellen. Lägg till extra slumpmässiga karaktärer enligt lösenord
- ExtraDecryption : Denna modul tar en krypterad text som ett argument och tar bort alla slumpmässiga tecken enligt lösenordet och ändrar sedan karaktärer till de ursprungliga karaktärer genom avkodaren

#### ObjectAlgorathem 
denna modul har två functioner 
- ObjectEncryption: Denna enhet tar (objekt) som ett argument och använder (json .stringfy) för att konvertera det till text och använder sedan (Encryption -module) för att hämta krypterad text.
- objectDecryption :Denna enhet tar (krypterad text ) som ett argument och använder (decryption -module) för att hämta ursprungliga karaktärer och använder sedan (Json.parse) för ätt konvertera det till (object).

![Alt text](images/diagram.PNG "diagram")


### Testfall
Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. Om ni använder vertyg för testning kan ni ha en bild här med testrapporten. Tänk på att kommunicera till mig. Vad fungerar?, vad fungerar inte? Hur är det testat? Vilka delar testas inte?

| Vad testas      | input | output | utfall PASS/FAIL |
| --------- | --------- | ------ | ------- |
|           |           |        |         |


## Kodkvalitetskrav

**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.

### Namngivning

| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|                      |                                              |

### Funktioner

| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|                      |                                              |

## Laborationsreflektion
Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. 
