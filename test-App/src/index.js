import { Encrypt} from 'dec-enc-lib/src/Encryption.js'
import {Decrypt} from 'dec-enc-lib/src/Decryption.js'
import {DecryptWithPass,EncryptWithPass } from 'dec-enc-lib/src/PassEncDec.js'
import {DecryptObj, EncryptObj} from 'dec-enc-lib/src/ObjectEncDec.js'

 import readline from 'readline'
 var message =' منار'
 var password =''
 
 console.log('__________________________________ String Encryption')
 console.log(message, ' the message ')
               message = Encrypt(message)
             console.log(message , '     ( the message efter encryption)')
             console.log(Decrypt(message),'    :    the message efter decryption')
             console.log('')

 let encryptionStr =''
const testObject = {
    name :'manar',
    age :34,
    children : ['jory','horeya','shams']
}

console.log(' the object :   ', testObject)
 encryptionStr= EncryptObj(testObject)
 console.log('encrypted text ___________________')
 console.log(encryptionStr ,)
 console.log('decrypted text ___________________')
 console.log(DecryptObj(encryptionStr))

    const rLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        });
        rLine.question(`ensert your message?` , function (answer) {
            console.log('__________________________________ String Encryption')
               message = Encrypt(answer)
             console.log(message , '     ( the message efter encryption)')
             console.log(Decrypt(message),'    :    the message efter decryption')
             console.log('')
             console.log('__________________________________ String Encryption withpassword')
             rLine.question("ensert your message? ", function (answer) {
                        message =answer
                       
                        rLine.question("ensert your password? ", function (answer) {
                            password = answer
                            message = EncryptWithPass(message,password)
                console.log(message ,'   ( the message efter encryption)')
                console.log(DecryptWithPass(message,password),'    :    the message efter decryption')
                
                rLine.close()
                
                            })
                            
                
                         
                    
                })
         
           
            
             });
             




            

         
    

    

   
    

