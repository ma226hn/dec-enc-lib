# dec-enc-lib

Node.js dec-enc-lib library<br/>

* Pure JavaScript
* Encryption and decryption string
* Encryption and decryption object
* Provides additional encryption with  a user-entered password . 



## Installing

```shell
npm i dec-enc-lib
```


### Testing

```shell
npm test
```

## Work environment

This library developed and tested primary for Node.js

## licens
MIT
## Usage

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
import {objectEncryption,objectDecryption} from 'dec-enc-lib/ObjectAlgorathem.js'

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