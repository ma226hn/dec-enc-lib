

import { Decryption } from "../Decryption.js"
import { Encryption } from "../Encryption.js"
import { ExtraEncryption,ExtraDecryption } from "../PassEncDec.js"

import { objectDecryption, objectEncryption } from "../ObjectAlgorathem.js"

const ERROR_MESSAGE_NOT_OBJECT= ' the inserted value is not object'
const ERROR_NOT_VALID_ARGUMENT ='not valid argument'

/**
 * Tests the argument (exceptions and side effects).
 *
 */
const testArgument = (func) => {

  describe('exceptions', () => {
    it(`passing en valid value  throw TypeError with the custom message  '${ERROR_NOT_VALID_ARGUMENT }'`, () =>
    testArgumentvalue (func))
  })
}
  const testExtraEncryArgument = (func) => {
    describe('exceptions', () => {
   it(`Passing en empty password  or password should throw TypeError with the custom message  '${ERROR_NOT_VALID_ARGUMENT}'`, () =>
   testArgumentEmptypassword(func))
  })
}
  const testObjectArgument = (func) => {
    describe('exceptions', () => {
     it(`Passing an  a wrong message type (not object) should throw TypeError with the custom message '${ERROR_MESSAGE_NOT_OBJECT}'`, () =>
     testArgumentNotObject(func))

    })
  }



const testArgumentvalue = (func) => {
 
  expect(() => {
    func('')
    func(undefined)
    func({})
    func(null)
  }).toThrow(new TypeError(ERROR_NOT_VALID_ARGUMENT))
}

const testArgumentEmptypassword = (func) => {
 
  expect(() => {
    func('hello','')
    func('','k1m2')
    func('','')

  }).toThrow(new TypeError(ERROR_NOT_VALID_ARGUMENT))
}


const testArgumentNotObject = (func) => {
  expect(() => func('hello')).toThrow(
    new Error(ERROR_MESSAGE_NOT_OBJECT)
  )
}



describe('Encryption', () => {
  describe('argument', () => testArgument(Encryption))

  describe('return value', () => {
    it('passing _hello_ should return _qay7u%i8pöå8åähf100of3pö88w65fgaö17öåä64år5cjmjmknajät7y=g2sgpsoufetdvhb?&ha5l3q4fä9', () => {
      expect(Encryption('hello')).toBe('qay7u%i8pöå8åähf100of3pö88w65fgaö17öåä64år5cjmjmknajät7y=g2sgpsoufetdvhb?&ha5l3q4fä9')
    })

    it('passing (manar alibrahim) should return (wsikikfhåeåäh%10f2d0soåäajo42låä2+zlzkfhdvs4a1xholpöpgdrf#9f12dm6422q9jhl57ö1å5åzffhfisja1rgt2olpgå5å3jh9mjio8sjrf2ki8o06äxfxsaj9m1c#z*c3gä01öxh2s6uj1d67y6mhwje3qäp8o7i3gefedce0j1q9aökhfzp90t33t4frwjc>yöi5l5w0äsr3g@oujce7nhn#rökäuäo>ygj0m6j2h<5hvhkgr+y9g0d6mgj)', () => {
      const argument = 'manar alibrahim'

      const returnValue = 'wsikikfhåeåäh%10f2d0soåäajo42låä2+zlzkfhdvs4a1xholpöpgdrf#9f12dm6422q9jhl57ö1å5åzffhfisja1rgt2olpgå5å3jh9mjio8sjrf2ki8o06äxfxsaj9m1c#z*c3gä01öxh2s6uj1d67y6mhwje3qäp8o7i3gefedce0j1q9aökhfzp90t33t4frwjc>yöi5l5w0äsr3g@oujce7nhn#rökäuäo>ygj0m6j2h<5hvhkgr+y9g0d6mgj'

      expect(Encryption(argument)).toBe(returnValue)
    })
  })
})
describe('Decryption', () => {
  describe('argument', () => testArgument(Decryption))

  describe('return value', () => {
    it('passing _qay7u%i8pöå8åähf100of3pö88w65fgaö17öåä64år5cjmjmknajät7y=g2sgpsoufetdvhb?&ha5l3q4fä9_ should return _hello', () => {
      expect(Decryption('qay7u%i8pöå8åähf100of3pö88w65fgaö17öåä64år5cjmjmknajät7y=g2sgpsoufetdvhb?&ha5l3q4fä9')).toBe('hello')
    })

    it('passing (wsikikfhåeåäh%10f2d0soåäajo42låä2+zlzkfhdvs4a1xholpöpgdrf#9f12dm6422q9jhl57ö1å5åzffhfisja1rgt2olpgå5å3jh9mjio8sjrf2ki8o06äxfxsaj9m1c#z*c3gä01öxh2s6uj1d67y6mhwje3qäp8o7i3gefedce0j1q9aökhfzp90t33t4frwjc>yöi5l5w0äsr3g@oujce7nhn#rökäuäo>ygj0m6j2h<5hvhkgr+y9g0d6mgj) should return (manar Alibrahim)', () => {
      const argument = 'wsikikfhåeåäh%10f2d0soåäajo42låä2+zlzkfhdvs4a1xholpöpgdrf#9f12dm6422q9jhl57ö1å5åzffhfisja1rgt2olpgå5å3jh9mjio8sjrf2ki8o06äxfxsaj9m1c#z*c3gä01öxh2s6uj1d67y6mhwje3qäp8o7i3gefedce0j1q9aökhfzp90t33t4frwjc>yöi5l5w0äsr3g@oujce7nhn#rökäuäo>ygj0m6j2h<5hvhkgr+y9g0d6mgj'

      const returnValue = 'manar alibrahim'
      expect(Decryption(argument)).toBe(returnValue)
    })
  })
})

describe('ExtraEncryption', () => {
  describe('argument', () => testExtraEncryArgument(ExtraEncryption))

})
describe('ExtraDecryption', () => {
  describe('argument', () => testExtraEncryArgument(ExtraDecryption))

})
describe('ObjectDecryption', () => {
  describe('argument', () => testArgument(objectDecryption))

  
})
describe('object Encryption', () => {
  describe('argument', () => testObjectArgument(objectEncryption))

  
})