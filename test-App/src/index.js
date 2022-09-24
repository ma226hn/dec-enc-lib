import { Encryption} from 'dec-enc-lib/Encryption.js'
import {Decryption} from 'dec-enc-lib/Decryption.js'
import {ExtraEncryption,ExtraDecryption} from 'dec-enc-lib/PassEncDec.js'
import {objectEncryption,objectDecryption} from 'dec-enc-lib/ObjectAlgorathem.js'

import readline from 'readline'
var message =''
var password =''
let encryptionStr =''
const testObject = {
    name :'manar',
    age :34,
    children : ['jory','horeya','shams']
}

console.log(' the object :   ', testObject)
 encryptionStr= objectEncryption(testObject)
 console.log('encrypted text ___________________')
 console.log(encryptionStr ,)
 console.log('decrypted text ___________________')
 console.log(objectDecryption(encryptionStr))

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        });
      rl.question(`ensert your message?` , function (answer) {
            console.log('__________________________________ String Encryption')
               message = Encryption(answer)
             console.log(message , '     ( the message efter encryption)')
             console.log(Decryption(message),'    :    the message efter decryption')
             console.log('')
             console.log('__________________________________ String Encryption withpassword')
             rl.question("ensert your message? ", function (answer) {
                        message =answer
                       
                        rl.question("ensert your password? ", function (answer) {
                            password = answer
                            message = ExtraEncryption(message,password)
                console.log(message ,'   ( the message efter encryption)')
                console.log(ExtraDecryption(message,password),'    :    the message efter decryption')
                
                rl.close()
                
                            })
                            
                
                         
                    
                })
         
           
            
             });
             



//  message = await getInput('message')
//    console.log('__________________________________ String Encryption')
//                message = Encryption(message)
//              console.log(message , '     ( the message efter encryption)')
//              console.log(Decryption(message),'    :    the message efter decryption')
//              console.log('')

//     rl.question("ensert your message? ", function (answer) {
//         message =answer
//         rl.close()
//         rl.question("ensert your password? ", function (answer) {
//             password = answer
//             message = ExtraEncryption(message,password)
// console.log(message ,'   ( the message efter encryption)')
// console.log(ExtraDecryption(message,password),'    :    the message efter decryption')

               
// rl.close()
//             })
            

         
    
// })

    

   
    

