import Validation from "./Validation.js";

export default class Validator extends Validation {
    static items = {};
    static validatedItems = {}
    static customValidator = []

    static validate(items) {
        this.items = items

        Object.keys(this.items).forEach((key) => {
            this.validatedItems[key] = this.#validateItem(key, this.items[key])
        })

        return this.validatedItems
    }

    static register(key, validator) {
        this.customValidator.push({
            "key": key,
            validator: validator
        })
    }

    static #validateItem(key, value) {
        const item = this.customValidator.filter(pilot => pilot.key === key)[0];
        if (item) {
            return eval(`Validator.${item.validator}(value)`)
        } else {
            switch (key) {
                case 'gender':
                    return Validator.validateEnum(value, ['male', 'female'])
                case 'name':
                case 'legalName':
                case 'firstname':
                case 'lastname':
                case 'company':
                case 'accountName':
                    return Validator.validateName(value)
                case 'street':
                    return Validator.validateStreet(value)
                case 'zip':
                    return Validator.validateZip(value)
                case 'place':
                case 'city':
                    return Validator.validateCity(value)
                case 'country':
                    return Validator.validateCountryCode(value)
                case 'ipaddress':
                    return Validator.validatePublicIpAddress(value)
                case 'email':
                    return Validator.validateEmail(value)
                case 'password':
                    return Validator.validatePassword(value)
                case 'otp':
                    return Validator.validateOTP(value)
                case 'permission':
                    return Validator.validatePermission(value)
                case 'permissions':
                    return Validator.validatePermissions(value)
                case 'role':
                    return Validator.validateRole(value)
                case 'roles':
                    return Validator.validateRoles(value)
                case 'phone':
                    return Validator.validatePhone(value)
                case 'balance':
                case 'shippingFee':
                case 'price':
                case 'amount':
                case 'outstanding':
                    return Validator.validateNumber(value, 0)
                case 'shipping':
                    return Validator.validateEnum(value, ['email', 'male'])
                case 'website':
                    return Validator.validateURL(value)
                case 'referralcode':
                case 'category':
                    return Validator.validateAlphanumeric(value)
                case 'attempts':
                case 'fraud':
                case 'quantity':
                case 'sku':
                case 'addressId':
                case 'id':
                    return Validator.validateInt(value)
                case 'accountClass':
                    return Validator.validateInt(value, 1, 9)
                case 'accountMainGroup':
                    return Validator.validateInt(value, 10, 99)
                case 'accountGroup':
                    return Validator.validateInt(value, 100, 999)
                case 'accountNumber':
                case 'should':
                case 'have':
                case 'contraAccount':
                    return Validator.validateInt(value, 1000, 9999)
                case 'accountCategory':
                    return Validator.validateEnum(value, ['asset', 'liability', 'expense', 'income'])
                case 'online':
                case 'verified':
                case 'enabled':
                    return Validator.validateBoolean(value)
                case 'iban':
                case 'qrIban':
                    return Validator.validateIBAN(value)
                case 'besrId':
                    return Validator.validateBESRID(value)
                case 'title':
                case 'snippet':
                case 'description':
                case 'comment':
                case 'reference':
                case 'filename':
                case 'header':
                case 'footer':
                    return Validator.validateAscii(value)
                case 'term':
                    return Validator.validateEnum(value, ['month', 'months', 'year', 'years', 'flatRare'])
                case 'valueDate':
                case 'expiration':
                case 'payableTo':
                case 'paidAt':
                    return Validator.validateAscii(value)
                case 'paymentMethod':
                    return Validator.validateEnum(value, ['INV'])
                case 'fulfilmentStatus':
                    return Validator.validateEnum(value, ['draft', 'unfulfilled', 'partial', 'fulfilled', 'canceled'])
                case 'paymentStatus':
                    return Validator.validateEnum(value, ['draft', 'open', 'pending', 'completed', 'canceled', 'refunded', 'paymentReminder', 'firstReminder', 'secondReminder', 'debtCollectionOrder', 'requestForContinuation', 'lossCertificate'])
                default:
                    throw new Error(`${key} could not be validated`)
            }
        }
    }
}