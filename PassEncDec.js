import { Decryption } from "./Decryption.js";
import { Encryption } from "./Encryption.js";


// count the sum of all the chars in the password.
function countStringValue(message)
{ 
   
   let sum = 0
   message.forEach(element => {
           sum += element.charCodeAt(0)
        });
        return sum
}

// encryption with password.

export function  ExtraEncryption (message,password)
{
   if((!message)||(!password)||(typeof message !== 'string')||(typeof password !== 'string'))
   { 
     
      throw new TypeError('not valid argument') 
   }

   let length = countStringValue(password.split(''))
  
   length = (length % (password.length)) +1

message =  Encryption(message)

let newMessage =''

let i=0
while (i< message.length)

{
   
   newMessage+= message.slice(i,i+length)
    i=i+length
    newMessage +=Math.random().toString(16).substr(2, 8);


}
return newMessage
}


// Decryption with password.

 export function   ExtraDecryption( message,password)
 {
   if((!message)||(!password)||(typeof message !== 'string')||(typeof password !== 'string'))
   { 
      throw new TypeError('not valid argument') 
   }

   let length = countStringValue(password.split(''))
   
   length = (length % (password.length)) +1
    let newMessage = ''
    let i=0
    while (i< message.length)

{
    
   newMessage+= message.slice(i,i+length)
    i=i+length +8
   


}
newMessage = Decryption(newMessage)

return newMessage
 }