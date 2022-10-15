import { shuffelArray, replacementArray } from './ReplecementArray.js'

export function Decrypt (message) {
  const replacementArrayCopy = [...replacementArray]
  if ((!message) || (typeof message !== 'string')) { throw new TypeError('not valid argument') }

  const rearrangedmessage = rearrngeMessageChar(message)

  const arrayFromMessageChar = rearrangedmessage.split('')

  const arrayOfString = convertMessageToArrayOfString(arrayFromMessageChar)

  const valueOfLastElment = replacementArray.findIndex(element => element === arrayOfString[arrayOfString.length - 1])
  arrayOfString.pop()// delete the last elment (this elment is the value oh the message and not a char in the message)
  const sumValueOfAllCharsInMessage = valueOfLastElment

  const replacementValueArray = findRplacementvalue(arrayOfString, sumValueOfAllCharsInMessage, replacementArrayCopy)

  const arrayOfChars = findCharCorrespondingDecimelValue(replacementValueArray)

  let messagText = (arrayOfChars.join(''))
  messagText = messagText.replaceAll('//', ' ')
  return messagText
}



function rearrngeMessageChar (message) {
  let i = 0
  let j = message.length / 2
  let rearrangedmessage = ''
  while (j < message.length) {
    rearrangedmessage += `${message[i]}${message[j]}`
    i++
    j++
  }
  return rearrangedmessage
}


function convertMessageToArrayOfString (message) {
  let buffer = ''
  const arrayOfString = []

  for (let i = 0; i < message.length; i += 4) {
    for (let j = 0; j < 4; j++) {
      buffer += message[i + j]
    }
    arrayOfString.push(buffer)
    buffer = ''
  }
  return arrayOfString
}


function findRplacementvalue (message, mValue, matrix) {
  let index
  const valueArray = []

  message.forEach(member => {
    shuffelArray(matrix, mValue)

    index = matrix.findIndex(element => element === member)
    valueArray.push(String.fromCharCode(index))
  })
  return valueArray
}



function findCharCorrespondingDecimelValue (message) {
  const decimelValueArray = convertHexStringToDecimalArray(message)

  const charArray = decimelValueArray.map(elemnt => { return String.fromCharCode(elemnt) })

  return charArray
}


function convertHexStringToDecimalArray (message) {
  const decimelValueArray = []
  for (let i = 0; i < message.length; i += 4) { decimelValueArray.push(parseInt((message.slice(i, i + 4)).join(''), 16)) }
  return decimelValueArray
}
