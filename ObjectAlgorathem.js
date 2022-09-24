 import { Decryption } from "./Decryption.js"
 import { Encryption } from "./Encryption.js"




  // Encryption of the object.
export function objectEncryption (object)
{

 if(typeof object !== 'object') {throw new TypeError (' the inserted value is not object')}
let  message = JSON.stringify(object)
 
   message = Encryption(message)
   return message
}



// Decryption of object
export function objectDecryption (message)
 {
  if((!message)||(typeof message !== 'string'))
  { throw new TypeError('not valid argument') }
  
  
  message = Decryption(message)

let newObject =  JSON.parse(message);



 return(newObject)
}


