import Validator from "../src/Validator";

describe('Validator', () => {
    describe('validateAlphanumeric', () => {
        it('should be valid alphanumeric character ["John"]', () => {
            expect(Validator.validateAlphanumeric("John")).toBe("John")
        });
        it('should be valid alphanumeric characters [1]', () => {
            expect(Validator.validateAlphanumeric(1)).toBe(1)
        });
        it('should be valid alphanumeric characters ["1"]', () => {
            expect(Validator.validateAlphanumeric("1")).toBe("1")
        });
        it('should throw an error when validating non alphanumeric character [" "]', () => {
            expect(() => {
                Validator.validateAlphanumeric(" ")
            }).toThrowError()
        });
        it('should throw an error when validating non alphanumeric character ["@"]', () => {
            expect(() => {
                Validator.validateAlphanumeric("@")
            }).toThrowError()
        });
        it('should throw an error when validating non alphanumeric character [null]', () => {
            expect(() => {
                Validator.validateAlphanumeric(null)
            }).toThrowError()
        });
        it('should throw an error when validating non alphanumeric character [undefined]', () => {
            expect(() => {
                Validator.validateAlphanumeric(undefined)
            }).toThrowError()
        });
    })

    describe('validateAscii', () => {
        it('should be valid ascii character [123456]', () => {
            expect(Validator.validateAscii(123456)).toBe(123456)
        });
        it('should be valid ascii character ["123456"]', () => {
            expect(Validator.validateAscii("123456")).toBe("123456")
        });
        it('should be valid ascii character ["John"]', () => {
            expect(Validator.validateAscii("John")).toBe("John")
        });
        it('should be valid ascii character ["#"]', () => {
            expect(Validator.validateAscii("#")).toBe("#")
        });
        it('should be valid ascii character ["ø"]', () => {
            expect(Validator.validateAscii("ø")).toBe("ø")
        });
        it('should be valid ascii character ["§"]', () => {
            expect(Validator.validateAscii("§")).toBe("§")
        });
        it('should be valid ascii character [" "]', () => {
            expect(Validator.validateAscii(" ")).toBe(" ")
        });
        it('should throw an error when validating non ascii character ["⇒"]', () => {
            expect(() => {
                Validator.validateAscii("⇒")
            }).toThrowError()
        });
        it('should throw an error when validating non ascii character [null]', () => {
            expect(() => {
                Validator.validateAscii(null)
            }).toThrowError()
        });
        it('should throw an error when validating non ascii character [undefined]', () => {
            expect(() => {
                Validator.validateAscii(undefined)
            }).toThrowError()
        });
    })

    describe('validateBase64', () => {
        it('should be valid base64 character ["John"]', () => {
            expect(Validator.validateBase64("John")).toBe("John")
        });
        it('should be valid base64 character ["J"]', () => {
            expect(Validator.validateBase64("J")).toBe("J")
        });
        it('should be valid base64 character ["a"]', () => {
            expect(Validator.validateBase64("a")).toBe("a")
        });
        it('should be valid base64 character ["+"]', () => {
            expect(Validator.validateBase64("+")).toBe("+")
        });
        it('should be valid base64 character ["/"]', () => {
            expect(Validator.validateBase64("/")).toBe("/")
        });
        it('should throw an error when validating non base64 character ["@"]', () => {
            expect(() => {
                Validator.validateBase64("@")
            }).toThrowError()
        });
        it('should throw an error when validating non base64 character ["#"]', () => {
            expect(() => {
                Validator.validateBase64("#")
            }).toThrowError()
        });
        it('should throw an error when validating non base64 character [null]', () => {
            expect(() => {
                Validator.validateBase64(null)
            }).toThrowError()
        });
        it('should throw an error when validating non base64 character [undefined]', () => {
            expect(() => {
                Validator.validateBase64(undefined)
            }).toThrowError()
        });
    })

    describe('validateBESRID', () => {
        it('should be valid beserId character [567890]', () => {
            expect(Validator.validateBESRID(567890)).toBe(567890)
        });
        it('should be valid beserId character ["123456"]', () => {
            expect(Validator.validateBESRID("123456")).toBe("123456")
        });
        it('should throw an error when validating non beserId character ["John"]', () => {
            expect(() => {
                Validator.validateBESRID("John")
            }).toThrowError()
        });
        it('should throw an error when validating non beserId character ["abcdef"]', () => {
            expect(() => {
                Validator.validateBESRID("abcdef")
            }).toThrowError()
        });
        it('should throw an error when validating non beserId character ["@"]', () => {
            expect(() => {
                Validator.validateBESRID("@")
            }).toThrowError()
        });
        it('should throw an error when validating non beserId character ["#"]', () => {
            expect(() => {
                Validator.validateBESRID("#")
            }).toThrowError()
        });
        it('should throw an error when validating non beserId character [null]', () => {
            expect(() => {
                Validator.validateBESRID(null)
            }).toThrowError()
        });
        it('should throw an error when validating non beserId character [undefined]', () => {
            expect(() => {
                Validator.validateBESRID(undefined)
            }).toThrowError()
        });
    })

    describe('validateBoolean', () => {
        it('should be valid boolean [true]', () => {
            expect(Validator.validateBoolean(true)).toBe(true)
        });
        it('should be valid boolean [false]', () => {
            expect(Validator.validateBoolean(false)).toBe(false)
        });
        it('should throw an error when validating non boolean ["123456"]', () => {
            expect(() => {
                Validator.validateBoolean("123456")
            }).toThrowError()
        });
        it('should throw an error when validating non boolean ["John"]', () => {
            expect(() => {
                Validator.validateBoolean("John")
            }).toThrowError()
        });
        it('should throw an error when validating non boolean ["a"]', () => {
            expect(() => {
                Validator.validateBoolean("a")
            }).toThrowError()
        });
        it('should throw an error when validating non boolean ["@"]', () => {
            expect(() => {
                Validator.validateBoolean("@")
            }).toThrowError()
        });
        it('should throw an error when validating non boolean ["#"]', () => {
            expect(() => {
                Validator.validateBoolean("#")
            }).toThrowError()
        });
        it('should throw an error when validating non boolean [null]', () => {
            expect(() => {
                Validator.validateBoolean(null)
            }).toThrowError()
        });
        it('should throw an error when validating non boolean [undefined]', () => {
            expect(() => {
                Validator.validateBoolean(undefined)
            }).toThrowError()
        });
    })

    describe('validateCity', () => {
        it('should be valid city [Zürich]', () => {
            expect(Validator.validateCity("Zürich")).toBe("Zürich")
        });
        it('should be valid city ["Berlin"]', () => {
            expect(Validator.validateCity("Berlin")).toBe("Berlin")
        });
        it('should be valid city ["New York"]', () => {
            expect(Validator.validateCity("New York")).toBe("New York")
        });
        it('should be valid city ["Yverdon-les-Bains"]', () => {
            expect(Validator.validateCity("Yverdon-les-Bains")).toBe("Yverdon-les-Bains")
        });
        it('should throw an error when city is invalid ["@"]', () => {
            expect(() => {
                Validator.validateCity("@")
            }).toThrowError()
        });
        it('should throw an error when city is invalid ["#"]', () => {
            expect(() => {
                Validator.validateCity("#")
            }).toThrowError()
        });
        it('should throw an error when city is invalid [null]', () => {
            expect(() => {
                Validator.validateCity(null)
            }).toThrowError()
        });
        it('should throw an error when city is invalid [undefined]', () => {
            expect(() => {
                Validator.validateCity(undefined)
            }).toThrowError()
        });
    })

    describe('validateCountryCode', () => {
        it('should be valid alpha-2 country code [CH]', () => {
            expect(Validator.validateCountryCode("CH")).toBe("CH")
        });
        it('should be valid alpha-2 country code [AT]', () => {
            expect(Validator.validateCountryCode("AT")).toBe("AT")
        });
        it('should be valid alpha-2 country code [DE]', () => {
            expect(Validator.validateCountryCode("DE")).toBe("DE")
        });
        it('should throw an error when alpha-2 country code is invalid ["USA"]', () => {
            expect(() => {
                Validator.validateCountryCode("USA")
            }).toThrowError()
        });
        it('should throw an error when alpha-2 country code is invalid ["DD"]', () => {
            expect(() => {
                Validator.validateCountryCode("DD")
            }).toThrowError()
        });
        it('should throw an error when alpha-2 country code is invalid [1]', () => {
            expect(() => {
                Validator.validateCountryCode(1)
            }).toThrowError()
        });
        it('should throw an error when alpha-2 country code is invalid ["#"]', () => {
            expect(() => {
                Validator.validateCountryCode("#")
            }).toThrowError()
        });
        it('should be valid alpha-3 country code [DZA]', () => {
            expect(Validator.validateCountryCode("DZA", "alpha-3")).toBe("DZA")
        });
        it('should be valid alpha-3 country code [BWA]', () => {
            expect(Validator.validateCountryCode("BWA", "alpha-3")).toBe("BWA")
        });
        it('should be valid alpha-3 country code [KNA]', () => {
            expect(Validator.validateCountryCode("KNA", "alpha-3")).toBe("KNA")
        });
        it('should throw an error when alpha-3 country code is invalid ["CH"]', () => {
            expect(() => {
                Validator.validateCountryCode("CH", "alpha-3")
            }).toThrowError()
        });
        it('should throw an error when alpha-3 country code is invalid ["AT"]', () => {
            expect(() => {
                Validator.validateCountryCode("AT", "alpha-3")
            }).toThrowError()
        });
        it('should throw an error when alpha-3 country code is invalid [1]', () => {
            expect(() => {
                Validator.validateCountryCode(1, "alpha-3")
            }).toThrowError()
        });
        it('should throw an error when alpha-3 country code is invalid ["#"]', () => {
            expect(() => {
                Validator.validateCountryCode("#", "alpha-3")
            }).toThrowError()
        });
        it('should be valid numeric country code [10]', () => {
            expect(Validator.validateCountryCode(10, "numeric")).toBe("10")
        });
        it('should be valid numeric country code ["4"]', () => {
            expect(Validator.validateCountryCode("4", "numeric")).toBe("4")
        });
        it('should be valid numeric country code ["533"]', () => {
            expect(Validator.validateCountryCode("533", "numeric")).toBe("533")
        });
        it('should be valid numeric country code [120]', () => {
            expect(Validator.validateCountryCode("120", "numeric")).toBe("120")
        });
        it('should throw an error when numeric country code is invalid ["CH"]', () => {
            expect(() => {
                Validator.validateCountryCode("CH", "numeric")
            }).toThrowError()
        });
        it('should throw an error when numeric country code is invalid ["AUT"]', () => {
            expect(() => {
                Validator.validateCountryCode("AT", "numeric")
            }).toThrowError()
        });
        it('should throw an error when numeric country code is invalid ["#"]', () => {
            expect(() => {
                Validator.validateCountryCode("#", "numeric")
            }).toThrowError()
        });
        it('should throw an error when caseSensitive is active ["ch"]', () => {
            expect(() => {
                Validator.validateCountryCode("ch", "alpha-2", true)
            }).toThrowError()
        });
        it('should throw an error when set is not supported ["alpha-4"]', () => {
            expect(() => {
                Validator.validateCountryCode("CH", "alpha-4")
            }).toThrowError()
        });
    })

    describe('validateCurrencyCode', () => {
        it('should be valid currency code [CHF]', () => {
            expect(Validator.validateCurrencyCode("CHF")).toBe("CHF")
        });
        it('should be valid city ["USD"]', () => {
            expect(Validator.validateCurrencyCode("USD")).toBe("USD")
        });
        it('should be valid city ["CAD"]', () => {
            expect(Validator.validateCurrencyCode("CAD")).toBe("CAD")
        });
        it('should be valid city ["EUR"]', () => {
            expect(Validator.validateCurrencyCode("EUR")).toBe("EUR")
        });
        it('should throw an error when currency code is invalid ["HHH"]', () => {
            expect(() => {
                Validator.validateCurrencyCode("@")
            }).toThrowError()
        });
        it('should throw an error when currency code is invalid ["@"]', () => {
            expect(() => {
                Validator.validateCurrencyCode("@")
            }).toThrowError()
        });
        it('should throw an error when when currency code is invalid ["#"]', () => {
            expect(() => {
                Validator.validateCurrencyCode("#")
            }).toThrowError()
        });
        it('should throw an error when currency code is invalid [null]', () => {
            expect(() => {
                Validator.validateCurrencyCode(null)
            }).toThrowError()
        });
        it('should throw an error when currency code is invalid [undefined]', () => {
            expect(() => {
                Validator.validateCurrencyCode(undefined)
            }).toThrowError()
        });
        it('should throw an error when caseSensitive is active ["usd"]', () => {
            expect(() => {
                Validator.validateCountryCode("usd", "alpha-2", true)
            }).toThrowError()
        });
    })
    describe('validateDate', () => {
        it('should be valid date ["2022-11-12"]', () => {
            expect(Validator.validateDate("2022-11-12")).toBe("2022-11-12")
        });
        it('should be valid date ["12.11.2022"]', () => {
            expect(Validator.validateDate("12.11.2022", "dd.mm.yyyy")).toBe("12.11.2022")
        });
        it('should throw an error when date format is invalid ["11-12-2022"]', () => {
            expect(() => {
                Validator.validateDate("11-12-2022")
            }).toThrowError()
        });
        it('should throw an error when date format is invalid ["@"]', () => {
            expect(() => {
                Validator.validateDate("@")
            }).toThrowError()
        });
        it('should throw an error when date format is invalid ["#"]', () => {
            expect(() => {
                Validator.validateDate("#")
            }).toThrowError()
        });
        it('should throw an error when date format is invalid [null]', () => {
            expect(() => {
                Validator.validateDate(null)
            }).toThrowError()
        });
        it('should throw an error when date format is invalid [undefined]', () => {
            expect(() => {
                Validator.validateDate(undefined)
            }).toThrowError()
        });
        it('should throw an error when date format is not supported ["yyyy.mm.dd"]', () => {
            expect(() => {
                Validator.validateDate("2022.11.12", "yyyy.mm.dd",)
            }).toThrowError()
        });
    });

    describe('validateDomain', () => {
        it('should be valid domain ["example.com"]', () => {
            expect(Validator.validateDomain("example.com")).toBe("example.com")
        });
        it('should be valid date ["example.org"]', () => {
            expect(Validator.validateDomain("example.org")).toBe("example.org")
        });
        it('should throw an error when domain is invalid ["sub.example.com"]', () => {
            expect(() => {
                Validator.validateDomain("sub.example.com")
            }).toThrowError()
        });
        it('should throw an error when domain is invalid ["www.example.com"]', () => {
            expect(() => {
                Validator.validateDomain("www.example.com")
            }).toThrowError()
        });
        it('should throw an error when domain is invalid ["https://example.com"]', () => {
            expect(() => {
                Validator.validateDomain("https://example.com")
            }).toThrowError()
        });
        it('should throw an error when domain is invalid ["@"]', () => {
            expect(() => {
                Validator.validateDomain("@")
            }).toThrowError()
        });
        it('should throw an error when domain is invalid ["#"]', () => {
            expect(() => {
                Validator.validateDomain("#")
            }).toThrowError()
        });
        it('should throw an error when domain is invalid [null]', () => {
            expect(() => {
                Validator.validateDomain(null)
            }).toThrowError()
        });
        it('should throw an error when domain is invalid [undefined]', () => {
            expect(() => {
                Validator.validateDomain(undefined)
            }).toThrowError()
        });
    })

    describe('validateEmail', () => {
        it('should be valid email ["john.doe@example.com"]', () => {
            expect(Validator.validateEmail("john.doe@example.com")).toBe("john.doe@example.com")
        });
        it('should be valid email ["jane@example.com"]', () => {
            expect(Validator.validateEmail("jane@example.com")).toBe("jane@example.com")
        });
        it('should be valid email ["jane-doe@example.com"]', () => {
            expect(Validator.validateEmail("jane-doe@example.com")).toBe("jane-doe@example.com")
        });
        it('should throw an error when email is invalid ["example.com"]', () => {
            expect(() => {
                Validator.validateEmail("example.com")
            }).toThrowError()
        });
        it('should throw an error when email is invalid ["john.example.com"]', () => {
            expect(() => {
                Validator.validateEmail("john.example.com")
            }).toThrowError()
        });
        it('should throw an error when email is invalid ["@example.com"]', () => {
            expect(() => {
                Validator.validateEmail("@example.com")
            }).toThrowError()
        });
        it('should throw an error when domain is invalid ["@"]', () => {
            expect(() => {
                Validator.validateEmail("@")
            }).toThrowError()
        });
        it('should throw an error when email is invalid ["#"]', () => {
            expect(() => {
                Validator.validateEmail("#")
            }).toThrowError()
        });
        it('should throw an error when email is invalid [null]', () => {
            expect(() => {
                Validator.validateEmail(null)
            }).toThrowError()
        });
        it('should throw an error when email is invalid [undefined]', () => {
            expect(() => {
                Validator.validateEmail(undefined)
            }).toThrowError()
        });
    })

    describe('validateEnum', () => {
        it('should be valid enum ["apple"]', () => {
            expect(Validator.validateEnum("apple", ["apple", "orange"])).toBe("apple")
        });
        it('should be valid enum ["orange"]', () => {
            expect(Validator.validateEnum("orange", ["apple", "orange"])).toBe("orange")
        });
        it('should throw an error when value is not valid enum ["banana"]', () => {
            expect(() => {
                expect(Validator.validateEnum("banana", ["apple", "orange"])).toBe("banana")
            }).toThrowError()
        });
        it('should throw an error when value is not valid enum ["@"]', () => {
            expect(() => {
                expect(Validator.validateEnum("@", ["apple", "orange"])).toBe("banana")
            }).toThrowError()
        });
        it('should throw an error when value is not valid enum ["#"]', () => {
            expect(() => {
                expect(Validator.validateEnum("#", ["apple", "orange"])).toBe("banana")
            }).toThrowError()
        });
        it('should throw an error when value is not valid enum [null]', () => {
            expect(() => {
                expect(Validator.validateEnum(null, ["apple", "orange"])).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when value is not valid enum [undefined]', () => {
            expect(() => {
                expect(Validator.validateEnum(undefined, ["apple", "orange"])).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateNumber', () => {
        it('should be valid number [1]', () => {
            expect(Validator.validateNumber(1)).toBe(1)
        });
        it('should be valid number [1.11]', () => {
            expect(Validator.validateNumber(1.11)).toBe(1.11)
        });
        it('should throw an error when number is invalid ["1"]', () => {
            expect(() => {
                expect(Validator.validateNumber("1")).toBe("1")
            }).toThrowError()
        });
        it('should throw an error when number is invalid ["1.11"]', () => {
            expect(() => {
                expect(Validator.validateNumber("1.11")).toBe("1.11")
            }).toThrowError()
        });
        it('should throw an error when number is invalid ["aaa"]', () => {
            expect(() => {
                expect(Validator.validateNumber("aaa")).toBe("aaa")
            }).toThrowError()
        });
        it('should throw an error when number is invalid ["@"]', () => {
            expect(() => {
                expect(Validator.validateNumber("@")).toBe("@")
            }).toThrowError()
        });
        it('should throw an error when number is invalid ["#"]', () => {
            expect(() => {
                expect(Validator.validateNumber("#")).toBe("#")
            }).toThrowError()
        });
        it('should throw an error when number is invalid [null]', () => {
            expect(() => {
                expect(Validator.validateNumber(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when number is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateNumber(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateIBAN', () => {
        it('should be valid IBAN [DE12500105170648489890]', () => {
            expect(Validator.validateIBAN("DE12500105170648489890")).toBe("DE12500105170648489890")
        });
        it('should be valid IBAN [CH3908704016075473007]', () => {
            expect(Validator.validateIBAN("CH3908704016075473007")).toBe("CH3908704016075473007")
        });
        it('should throw an error when IBAN is invalid ["DE1250010517064848989000"]', () => {
            expect(() => {
                expect(Validator.validateIBAN("DE1250010517064848989000")).toBe("DE1250010517064848989000")
            }).toThrowError()
        });
        it('should throw an error when IBAN is invalid ["DE12500105170648489890aa"]', () => {
            expect(() => {
                expect(Validator.validateIBAN("DE12500105170648489890aa")).toBe("DE12500105170648489890aa")
            }).toThrowError()
        });
        it('should throw an error when IBAN is invalid [null]', () => {
            expect(() => {
                expect(Validator.validateIBAN(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when IBAN is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateIBAN(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateInt', () => {
        it('should be valid Int [1]', () => {
            expect(Validator.validateInt(1)).toBe(1)
        });
        it('should be valid Int [99]', () => {
            expect(Validator.validateInt(99)).toBe(99)
        });
        it('should be valid Int [-1]', () => {
            expect(Validator.validateInt(-1, -100)).toBe(-1)
        });
        it('should be valid Int [101]', () => {
            expect(Validator.validateInt(101, 0, 200)).toBe(101)
        });
        it('should throw an error when Int is to small [-1]', () => {
            expect(() => {
                expect(Validator.validateInt(-1)).toBe(-1)
            }).toThrowError()
        });
        it('should throw an error when Int is to large [101]', () => {
            expect(() => {
                expect(Validator.validateInt(101, 0, 100)).toBe(101)
            }).toThrowError()
        });
        it('should throw an error when Int is to large [2147483648]', () => {
            expect(() => {
                expect(Validator.validateInt(2147483648)).toBe(2147483648)
            }).toThrowError()
        });
        it('should throw an error when Int has decimal [1.1]', () => {
            expect(() => {
                expect(Validator.validateInt(1.1)).toBe(1.1)
            }).toThrowError()
        });
        it('should throw an error when Int is invalid [null]', () => {
            expect(() => {
                expect(Validator.validateInt(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when Int is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateInt(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateOTP', () => {
        it('should be valid OTP [123456]', () => {
            expect(Validator.validateOTP(123456)).toBe(123456)
        });
        it('should be valid OTP ["123456"]', () => {
            expect(Validator.validateOTP("123456")).toBe("123456")
        });
        it('should throw an error when OTP is invalid [1234567"]', () => {
            expect(() => {
                expect(Validator.validateOTP(1234567)).toBe(1234567)
            }).toThrowError()
        });
        it('should throw an error when OTP is invalid ["aaa"]', () => {
            expect(() => {
                expect(Validator.validateOTP("aaa")).toBe("aaa")
            }).toThrowError()
        });
        it('should throw an error when OTP is invalid [null]', () => {
            expect(() => {
                expect(Validator.validateOTP(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when OTP is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateOTP(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateObjectId', () => {
        it('should be valid OTP [112345679065574883030833]', () => {
            expect(Validator.validateObjectId("112345679065574883030833")).toBe("112345679065574883030833")
        });
        it('should be valid OTP ["FFFFFFFFFFFFFFFFFFFFFFFF"]', () => {
            expect(Validator.validateObjectId("FFFFFFFFFFFFFFFFFFFFFFFF")).toBe("FFFFFFFFFFFFFFFFFFFFFFFF")
        });
        it('should be valid OTP ["45cbc4a0e4123f6920000002"]', () => {
            expect(Validator.validateObjectId("45cbc4a0e4123f6920000002")).toBe("45cbc4a0e4123f6920000002")
        });
        it('should throw an error when objectId is invalid [FFFFFFFFFFFFFFFFFFFFFFFFaaa"]', () => {
            expect(() => {
                expect(Validator.validateObjectId("FFFFFFFFFFFFFFFFFFFFFFFFaaa")).toBe("FFFFFFFFFFFFFFFFFFFFFFFFaaa")
            }).toThrowError()
        });
        it('should throw an error when objectId is invalid ["aaa"]', () => {
            expect(() => {
                expect(Validator.validateObjectId("aaa")).toBe("aaa")
            }).toThrowError()
        });
        it('should throw an error when objectId is invalid [null]', () => {
            expect(() => {
                expect(Validator.validateObjectId(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when objectId is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateObjectId(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validatePublicIpAddress', () => {
        it('should be valid public IP ["64.215.166.144"]', () => {
            expect(Validator.validatePublicIpAddress("64.215.166.144")).toBe("64.215.166.144")
        });
        it('should be valid public IP ["241.185.181.146"]', () => {
            expect(Validator.validatePublicIpAddress("241.185.181.146")).toBe("241.185.181.146")
        });
        it('should throw an error when public IP is invalid ["192.168.0.100"]', () => {
            expect(() => {
                expect(Validator.validatePublicIpAddress("192.168.0.100")).toBe("192.168.0.100")
            }).toThrowError()
        });
        it('should throw an error when public IP is invalid ["aaa.bbb.ccc.ddd"]', () => {
            expect(() => {
                expect(Validator.validatePublicIpAddress("aaa.bbb.ccc.ddd")).toBe("aaa.bbb.ccc.ddd")
            }).toThrowError()
        });
        it('should throw an error when public IP is invalid [null]', () => {
            expect(() => {
                expect(Validator.validatePublicIpAddress(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when public IP is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validatePublicIpAddress(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateLanguageCode', () => {
        it('should be valid language code ["DE"]', () => {
            expect(Validator.validateLanguageCode("DE")).toBe("DE")
        });
        it('should be valid language code ["EN"]', () => {
            expect(Validator.validateLanguageCode("EN")).toBe("EN")
        });
        it('should throw an error when language code is invalid ["ENN""]', () => {
            expect(() => {
                expect(Validator.validateLanguageCode("ENN")).toBe("ENN")
            }).toThrowError()
        });
        it('should throw an error when language code is invalid [1]', () => {
            expect(() => {
                expect(Validator.validateLanguageCode(1)).toBe(1)
            }).toThrowError()
        });
        it('should throw an error when language code is invalid [null]', () => {
            expect(() => {
                expect(Validator.validateLanguageCode(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when language code is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateLanguageCode(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateName', () => {
        it('should be valid name ["John"]', () => {
            expect(Validator.validateName("John")).toBe("John")
        });
        it('should be valid name ["John Marvin"]', () => {
            expect(Validator.validateName("John Marvin")).toBe("John Marvin")
        });
        it('should be valid name ["John-Marvin"]', () => {
            expect(Validator.validateName("John-Marvin")).toBe("John-Marvin")
        });
        it('should be valid name ["Héloise"]', () => {
            expect(Validator.validateName("Héloise")).toBe("Héloise")
        });
        it('should throw an error when name is invalid ["J@hn"]', () => {
            expect(() => {
                expect(Validator.validateName("J@hn")).toBe("J@hn")
            }).toThrowError()
        });
        it('should throw an error when name is invalid ["漢"]', () => {
            expect(() => {
                expect(Validator.validateName("漢")).toBe("漢")
            }).toThrowError()
        });
        it('should throw an error when name is invalid [null]', () => {
            expect(() => {
                expect(Validator.validateName(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when name is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateName(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validatePassword', () => {
        it('should be valid password ["Hallo%123"]', () => {
            expect(Validator.validatePassword("Hallo%123")).toBe("Hallo%123")
        });
        it('should throw an error when password only contains numbers [1234567"]', () => {
            expect(() => {
                expect(Validator.validatePassword(1234567)).toBe(1234567)
            }).toThrowError()
        });
        it('should throw an error when password is to short ["Hal%12"]', () => {
            expect(() => {
                expect(Validator.validatePassword("Hal%12")).toBe("Hal%12")
            }).toThrowError()
        });
        it('should throw an error when password contains no uppercase letters [aaaaa%123]', () => {
            expect(() => {
                expect(Validator.validatePassword("aaaaa%123")).toBe("aaaaa%123")
            }).toThrowError()
        });
        it('should throw an error when password contains no lowercase letters [AAAAAAAA%123]', () => {
            expect(() => {
                expect(Validator.validatePassword("aaaaa%123")).toBe("aaaaa%123")
            }).toThrowError()
        });
        it('should throw an error when password contains not mixture of letters and numbers [aaaaaaaa%]', () => {
            expect(() => {
                expect(Validator.validatePassword("aaaaa%123")).toBe("aaaaa%123")
            }).toThrowError()
        });
        it('should throw an error when password contains not at least one special character [Hallo1234]', () => {
            expect(() => {
                expect(Validator.validatePassword("aaaaa%123")).toBe("aaaaa%123")
            }).toThrowError()
        });
        it('should throw an error when password is invalid [null]', () => {
            expect(() => {
                expect(Validator.validatePassword(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when OTP is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validatePassword(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validatePermission', () => {
        it('should be valid permission ["read:any_user"]', () => {
            expect(Validator.validatePermission("read:any_user")).toBe("read:any_user")
        });
        it('should be valid OTP ["read:own_user"]', () => {
            expect(Validator.validatePermission("read:own_user")).toBe("read:own_user")
        });
        it('should throw an error when permission is invalid ["read-own_user""]', () => {
            expect(() => {
                expect(Validator.validatePermission("read-own_user")).toBe("read-own_user")
            }).toThrowError()
        });
        it('should throw an error when permission is invalid ["read_own_user"]', () => {
            expect(() => {
                expect(Validator.validatePermission("read_own_user")).toBe("read_own_user")
            }).toThrowError()
        });
        it('should throw an error when permission is invalid [null]', () => {
            expect(() => {
                expect(Validator.validatePermission(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when permission is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validatePermission(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validatePermissions', () => {
        it('should be valid permissions ["read:any_user"]', () => {
            expect(Validator.validatePermissions(["read:any_user"])).toStrictEqual(["read:any_user"])
        });
        it('should be valid permissions ["read:own_user"]', () => {
            expect(Validator.validatePermissions(["read:any_user", "read:own_user"])).toStrictEqual(["read:any_user", "read:own_user"])
        });
        it('should throw an error when permissions is invalid ["read-own_user""]', () => {
            expect(() => {
                expect(Validator.validatePermissions(["read-own_user"])).toBe(["read-own_user"])
            }).toThrowError()
        });
        it('should throw an error when permissions is invalid ["read_any_user", "read:own_user"]', () => {
            expect(() => {
                expect(Validator.validatePermissions(["read_any_user", "read:own_user"])).toBe(["read_any_user", "read:own_user"])
            }).toThrowError()
        });
        it('should throw an error when permissions is invalid [null]', () => {
            expect(() => {
                expect(Validator.validatePermissions(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when permissions is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validatePermissions(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateRole', () => {
        it('should be valid role ["admin"]', () => {
            expect(Validator.validateRole("admin")).toBe("admin")
        });
        it('should be valid OTP ["user"]', () => {
            expect(Validator.validateRole("user")).toBe("user")
        });
        it('should throw an error when role is caseSensitive ["Admin"]', () => {
            expect(() => {
                expect(Validator.validateRole("Admin")).toBe("Admin")
            }).toThrowError()
        });
        it('should throw an error when role does not only contain letters ["admin1"]', () => {
            expect(() => {
                expect(Validator.validateRole("admin1")).toBe("admin1")
            }).toThrowError()
        });
        it('should throw an error when role is invalid [null]', () => {
            expect(() => {
                expect(Validator.validateRole(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when role is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateRole(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateRoles', () => {
        it('should be valid roles ["admin"]', () => {
            expect(Validator.validateRoles(["admin"])).toStrictEqual(["admin"])
        });
        it('should be valid roles ["admin", "user"]', () => {
            expect(Validator.validateRoles(["admin", "user"])).toStrictEqual(["admin", "user"])
        });
        it('should be valid roles when caseSensitive is false ["Admin", "user"]', () => {
            expect(Validator.validateRoles(["Admin", "user"], false)).toStrictEqual(["Admin", "user"])
        });
        it('should throw an error when roles are caseSensitive is true ["Admin", "user"]', () => {
            expect(() => {
                expect(Validator.validateRoles(["Admin", "user"])).toBe(["Admin", "user"])
            }).toThrowError()
        });
        it('should throw an error when roles does not only contain letters ["user", "admin1"]', () => {
            expect(() => {
                expect(Validator.validateRoles(["user", "admin1"])).toBe(["user", "admin1"])
            }).toThrowError()
        });
        it('should throw an error when roles are invalid [null]', () => {
            expect(() => {
                expect(Validator.validateRoles(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when roles are invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateRoles(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validatePhone', () => {
        it('should be valid phone number from switzerland ["+41 44 520 11 11"]', () => {
            expect(Validator.validatePhone("+41 44 520 11 11")).toBe("+41 44 520 11 11")
        });
        it('should be valid phone number from switzerland ["0041 44 520 11 11"]', () => {
            expect(Validator.validatePhone("0041 44 520 11 11")).toBe("0041 44 520 11 11")
        });
        it('should be valid phone number from switzerland ["044 520 11 11"]', () => {
            expect(Validator.validatePhone("0041 44 520 11 11")).toBe("0041 44 520 11 11")
        });
        it('should be valid phone number from lichtenstein ["+423 445 20 11"]', () => {
            expect(Validator.validatePhone("+423 445 20 11", "LI")).toBe("+423 445 20 11")
        });
        it('should be valid phone number from lichtenstein ["00423 445 20 11"]', () => {
            expect(Validator.validatePhone("00423 445 20 11", "LI")).toBe("00423 445 20 11")
        });
        it('should throw an error when phone number is invalid ["041 111 11 111"]', () => {
            expect(() => {
                expect(Validator.validateOTP("041 111 11 111")).toBe("041 111 11 111")
            }).toThrowError()
        });
        it('should throw an error when phone number is invalid ["+41 51 10 11"]', () => {
            expect(() => {
                expect(Validator.validatePhone("+41 51 10 11")).toBe("+41 51 10 11")
            }).toThrowError()
        });
        it('should throw an error when phone number is invalid [null]', () => {
            expect(() => {
                expect(Validator.validatePhone(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when phone number is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validatePhone(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateStreet', () => {
        it('should be valid street ["Via Vigizzi 90"]', () => {
            expect(Validator.validateStreet("Via Vigizzi 90")).toBe("Via Vigizzi 90")
        });
        it('should be valid street ["Tösstalstrasse 86"]', () => {
            expect(Validator.validateStreet("Tösstalstrasse 86")).toBe("Tösstalstrasse 86")
        });
        it('should be valid street ["Töss-Weg 86"]', () => {
            expect(Validator.validateStreet("Töss-Weg 86")).toBe("Töss-Weg 86")
        });
        it('should throw an error when street is invalid [1234567"]', () => {
            expect(() => {
                expect(Validator.validateStreet("@Via Camischolas sura 45")).toBe("@Via Camischolas sura 45")
            }).toThrowError()
        });
        it('should throw an error when street is invalid ["111"]', () => {
            expect(() => {
                expect(Validator.validateStreet("111")).toBe("111")
            }).toThrowError()
        });
        it('should throw an error when street is invalid [null]', () => {
            expect(() => {
                expect(Validator.validateStreet(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when street is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateStreet(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateString', () => {
        it('should be valid string ["ABCdef"]', () => {
            expect(Validator.validateString("ABCdef")).toBe("ABCdef")
        });
        it('should be valid string ["123456"]', () => {
            expect(Validator.validateString("123456")).toBe("123456")
        });
        it('should throw an error when sting is to short ["a"]', () => {
            expect(() => {
                expect(Validator.validateString("a", 10)).toBe("a")
            }).toThrowError()
        });
        it('should throw an error when sting is to long ["aaaaaa"]', () => {
            expect(() => {
                expect(Validator.validateString("aaaaaa", 1, 5)).toBe("aaaaaa")
            }).toThrowError()
        });
        it('should throw an error when string is number [111]', () => {
            expect(() => {
                expect(Validator.validateString(111)).toBe(111)
            }).toThrowError()
        });
        it('should throw an error when string is invalid [null]', () => {
            expect(() => {
                expect(Validator.validateString(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when string is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateString(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateURL', () => {
        it('should be valid url ["https://example.com"]', () => {
            expect(Validator.validateURL("https://example.com")).toBe("https://example.com")
        });
        it('should be valid url ["http://example.com"]', () => {
            expect(Validator.validateURL("http://example.com")).toBe("http://example.com")
        });
        it('should be valid url ["https://www.example.com"]', () => {
            expect(Validator.validateURL("https://www.example.com")).toBe("https://www.example.com")
        });
        it('should be valid url ["http://www.example.com"]', () => {
            expect(Validator.validateURL("http://www.example.com")).toBe("http://www.example.com")
        });
        it('should be valid url ["example.com"]', () => {
            expect(Validator.validateURL("example.com")).toBe("example.com")
        });
        it('should be valid url ["sub.example.com"]', () => {
            expect(Validator.validateURL("sub.example.com")).toBe("sub.example.com")
        });
        it('should throw an error when url is invalid [example"]', () => {
            expect(() => {
                expect(Validator.validateURL("example")).toBe("example")
            }).toThrowError()
        });
        it('should throw an error when url is invalid [null]', () => {
            expect(() => {
                expect(Validator.validateURL(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when url is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateURL(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })

    describe('validateZip', () => {
        it('should be valid zip code from switzerland ["8000"]', () => {
            expect(Validator.validateZip("8000", "CH")).toBe("8000")
        });
        it('should be valid zip code from switzerland [8000]', () => {
            expect(Validator.validateZip(8000, "CH")).toBe(8000)
        });
        it('should be valid zip code from lichtenstein ["9412"]', () => {
            expect(Validator.validateZip("9412", "LI")).toBe("9412")
        });
        it('should be valid zip code ["20001"]', () => {
            expect(Validator.validateZip("20001")).toBe("20001")
        });
        it('should throw an error when zip is invalid ["@1234567"]', () => {
            expect(() => {
                expect(Validator.validateZip("@1234567")).toBe("@1234567")
            }).toThrowError()
        });
        it('should throw an error when zip is invalid [""]', () => {
            expect(() => {
                expect(Validator.validateZip("")).toBe("")
            }).toThrowError()
        });
        it('should throw an error when zip is invalid [" "]', () => {
            expect(() => {
                expect(Validator.validateZip(" ")).toBe(" ")
            }).toThrowError()
        });
        it('should throw an error when zip is invalid [null]', () => {
            expect(() => {
                expect(Validator.validateZip(null)).toBe(null)
            }).toThrowError()
        });
        it('should throw an error when zip is invalid [undefined]', () => {
            expect(() => {
                expect(Validator.validateZip(undefined)).toBe(undefined)
            }).toThrowError()
        });
    })
})