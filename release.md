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
  
### Installing

```shell
npm i dec-enc-lib
```
### Decryption and Encryption string


#### Example

```javascript
// For string
import { Encryption} from 'dec-enc-lib/Encryption.js'
import {Decryption} from 'dec-enc-lib/Decryption.js'

const text = 'Hello there!';
const encrypted = Encryption(text);
console.log('encrypted: ', encrypted);
const decrypted = Decryption(encrypted);
console.log('decrypted: ', decrypted);
```

### Decryption and Encryption object


#### Example


```javascript
// For object
import {objectEncryption,objectDecryption} from 'dec-enc-lib/ObjectEncDec.js'

const object = { name :'manar' , age : 34 , children :['jory','horeya','shams']};
const encrypted = objectEncryption(object);
console.log('encrypted: ', encrypted);
const decrypted = objectDecryption(encrypted);
console.log('decrypted: ', decrypted);
```

###  Extra Decryption and Encryption for string with password


#### Example


```javascript
// With password
import {ExtraEncryption,ExtraDecryption} from 'dec-enc-lib/PassEncDec.js'

const message = ' my name is Manar Alibrahim';
const password = 'key88';
const encrypted = ExtraEncryption(message,password);
console.log('encrypted: ', encrypted);
const decrypted = ExtreDecryption(encrypted, password);
console.log('decrypted: ', decrypted);
```
## Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå.
Beskriv hur du kommit fram till om din kod fungerar.
- Jag har 4 modules 
#### Encryption 
 - Denna modul tar en text som ett argument och ändrar karaktärer till andra karaktärer enligt ersättningsmatrisen och unicode table
#### Decryption 
Denna modul tar en krypterad text som ett argument och ändrar karaktärer till ursprungliga karaktärer enligt ersättningsmatrisen och unicode table
#### PassEncDec
denna modul har två functioner 
- ExtraEncryption: Den tar text som ett argument och använder Encreption-modulen för att ändra karaktärer till andra karaktärerenligt ersättningsmatrisen och Unicode-tabellen. Lägg till extra slumpmässiga karaktärer enligt lösenord
- ExtraDecryption : Denna modul tar en krypterad text som ett argument och tar bort alla slumpmässiga tecken enligt lösenordet och ändrar sedan karaktärer till de ursprungliga karaktärer genom avkodaren

#### ObjectEncDec
denna modul har två functioner 
- ObjectEncryption: Denna enhet tar (objekt) som ett argument och använder (json .stringfy) för att konvertera det till text och använder sedan (Encryption -module) för att hämta krypterad text.
- objectDecryption :Denna enhet tar (krypterad text ) som ett argument och använder (decryption -module) för att hämta ursprungliga karaktärer och använder sedan (Json.parse) för ätt konvertera det till (object).

![diagram](image/diagram.PNG "diagram")


### Testfall
Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. Om ni använder vertyg för testning kan ni ha en bild här med testrapporten. Tänk på att kommunicera till mig. Vad fungerar?, vad fungerar inte? Hur är det testat? Vilka delar testas inte?
#### automatiska enhetstester
##### Testing

```shell
npm test
```
| Vad testas      | input | output | utfall PASS/FAIL | 
| --------- | --------- | ------ | ------- |
|      (Encryption/Decryption function)  error when insert invaild value for the message     | input = ('')or(undefined)or(notstring)or(null)  )  |  Error       |    pass     |
|    ( ExtraEncryption/ ExtraDecryption function )error when insert invaild value for the message or the password    |  input(message or password) = ('')or(undefined)or(notstring)or(null)  )   |  Error       |    pass     |
|     ( objectEncryption )  error when insert value not of type object | input = not object  |  Error  (invaild argumrnt )     |    pass     |
|      (objectDecryption) error when insert invaild value for the message     | input = ('')or(undefined)or(notstring)or(null)  )  |  Error  (invaild argumrnt )     |    pass     |
#### test-app
| Vad testas      | input | output | utfall PASS/FAIL | image|
| --------- | --------- | ------ | ------- |-----|
|     skriv in text koda och avkoda den     | "My name is manar"  |  My name is manr        |    pass     |![testFall1](image/testFall1.PNG "testfall1")|
|    skriv in text och password koda och avkoda den      |  message = 'hello' , password =' key'   | hello     |    pass     |![testFall2](image/testfall2.PNG "testfall2")|
|      skriv in object koda och avkoda den    | { name : 'manar' , age : 34 , children : ['jory','horeya','shams']}  |   { name : 'manar' , age : 34 , children : ['jory','horeya','shams']}    |    pass     | ![testFall3](image/testFall3.PNG "testfall3")|

## Kodkvalitetskrav

**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.

### Namngivning

| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|          **Decryption** - **Encryption**      the name of the modules        |  they are perfect  **class name should have a noun or noun phrase names**  - **use Intention revealing names** |
| **passEncDec** |The name is not the best and does not match the rule **use pronounceable names**|
| **objectEncDec**   | I made a mistake when I chose this name because it doesn't follow the rules **Use intention revealing names**|
|**mixmessage** the name of method in encryption module | Name is appropriate and  it follow the rules **use Intention revealing names** - **method name should have a verb or verb phrase names**  |
|**CodingMatrix** the name of the array which used to replace the characters in the message | the name follow the rules **Avoid disinformaion names** - **add meaningful context** | 
|**shuffelMatrix**  function  used in decryption and encryption modules | the name follow the rules **use Intention revealing names** - **method name should have a verb or verb phrase names** 


### Funktioner

| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|       shuffelMatrix /Encryption module              |       **small**  10 line code  -- **mondic function** there is just one argument -- **Do one thing** it shuffle the array  - **have no side effect** becuse it shffle the copy of the orginal array- but it dose not follow the rule **Do not repeat your self** because i write it  in decryption  module and in Encryption module |                                        |
|converToHex /encryption module  | follow the rules **use descriptive names** - **mondic function** -- **do one thing** |
| countStringValue / used in encryption and passEncDec module  | it dose not follow the rule **Do not repeat your self** because i write it  in Encryption  module and in passEncDec module -   **small**  8 line code  |
| Decryption  function in Decryption module |  **mondic function** there is just one argument  - **prefer Exptions to returning Error code** |
| Encryption function in Encryption module | **mondic function** there is just one argument  - **prefer Exptions to returning Error code** - **use descriptive names** |
|divideMessage /in Decryption module  |  **mondic function** - **use descriptive names** - **do one thing** it divide the message | 
## Laborationsreflektion
Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. 


- Det var en nyttig uppgift eftersom vi måste vara försiktiga med variabelnamn och funktionslängd. Jag har bytt namn på modulerna flera gånger och försökt hitta meningsfulla namn.
Problemet är att alla modulerna gör samma sak. De krypterar och dekrypterar texten eller objektet, så det var svårt att hitta namnet med en meningsfull skillnad. Jag använde  variabelnamnen som är (Pronuncable) (message, password, index, Encrption, decryption).
Alla funktioner i projektet (small) och de flesta av dem (Monadic), förutom krypteringsfunktioner med lösenord de är (Dyadic) och detta överensstämmer med principen (Reducing the number of arguments) .
Problemet är att det finns några vanliga funktioner mellan moduler(countStringValue -shuffelMatrix) som jag har skrivit två gonger  , och detta  motsatta principen (do not repeate your  self). Jag borde ha  lagt dem i en separat module , men jag gjorde ett misstag och upprepade dem . Jag kommer att modifiera projektet i framtiden och fixa det.
(Objekt encryption) behöver mer testning, men andra funktioner är väl testade. Jag testade dem  på (arabiska - engelska - slumpmässiga tecken) och det fungerar bra. 
- men med arabiska tecken är result felaktigt skriven( Samma bokstäver men separata och inte sammankopplade)   . jag tror att problemet i vs console
![test](image/bug22.PNG "arbiska bokstaver")
![test](image/bug2.PNG "arbiska bokstaver")