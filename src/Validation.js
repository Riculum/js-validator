export  default class Validation {
    static validateAlphanumeric(alphanumeric, minLength = 1, maxLength = 255) {
        if (alphanumeric.length < minLength) throw new Error(`${alphanumeric} must be at least ${minLength} characters long`)
        if (alphanumeric.length > maxLength) throw new Error(`${alphanumeric} must not be longer than ${maxLength} characters`)

        const regex = new RegExp("^[A-Za-z0-9+\\/=]+$")
        if (!regex.test(alphanumeric)) throw new Error(`${alphanumeric} are not valid alphanumeric characters`)

        return alphanumeric
    }

    static validateAscii(ascii, minLength = 1, maxLength = 255) {
        if (ascii.length < minLength) throw new Error(`${ascii} must be at least ${minLength} characters long`)
        if (ascii.length > maxLength) throw new Error(`${ascii} must not be longer than ${maxLength} characters`)

        const regex = new RegExp("^[\x20-\x7E\x80-\xFF]+$")
        if (!regex.test(ascii)) throw new Error(`${ascii} are not valid ascii characters`)

        return ascii
    }

    /**
     * Standard: RFC 4648
     */
    static validateBase64(base64, minLength = 1, maxLength = 255) {
        if (base64.length < minLength) throw new Error(`${base64} must be at least ${minLength} characters long`)
        if (base64.length > maxLength) throw new Error(`${base64} must not be longer than ${maxLength} characters`)

        const regex = new RegExp("^[A-Za-z0-9+\\/=]+$")
        if (!regex.test(base64)) throw new Error(`${base64} are not valid base64 characters`)

        return base64
    }

    static validateBESRID(besrId) {
        const regex = new RegExp("^[0-9]{6}$")
        if (!regex.test(besrId)) throw new Error(`${besrId} is not a BESRID`)

        return besrId
    }

    static validateBoolean(boolean) {
        if (typeof boolean != "boolean") throw new Error(`${boolean} is not a valid boolean`)

        return boolean
    }

    static validateCity(city, minLength = 1, maxLength = 50) {
        if (city.length < minLength) throw new Error(`${city} must be at least ${minLength} characters long`)
        if (city.length > maxLength) throw new Error(`${city} must not be longer than ${maxLength} characters`)

        const regex = new RegExp("^[a-zA-ZàáâäèéêëòóôöõøùúûüçîÀÁÂÄÈÉÊËÒÓÔÖÕØÙÚÛÜÇß0-9-.'\\/ ]+$")
        if (!regex.test(city)) throw new Error(`${city} is not a valid city`)

        return city
    }

    /**
     * ISO: 3166-1 alpha-2 or alpha-3
     */
    static validateCountryCode(countryCode, set = 'alpha-2', caseSensitive = false) {
        let regex
        switch (set) {
            case "alpha-2":
                regex = "^(AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|CV|KH|CM|CA|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|SZ|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MK|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW)$"
                break
            case "alpha-3":
                regex = "^(AFG|ALA|ALB|DZA|ASM|AND|AGO|AIA|ATA|ATG|ARG|ARM|ABW|AUS|AUT|AZE|BHS|BHR|BGD|BRB|BLR|BEL|BLZ|BEN|BMU|BTN|BOL|BES|BIH|BWA|BVT|BRA|IOT|BRN|BGR|BFA|BDI|CPV|KHM|CMR|CAN|CYM|CAF|TCD|CHL|CHN|CXR|CCK|COL|COM|COG|COD|COK|CRI|CIV|HRV|CUB|CUW|CYP|CZE|DNK|DJI|DMA|DOM|ECU|EGY|SLV|GNQ|ERI|EST|SWZ|ETH|FLK|FRO|FJI|FIN|FRA|GUF|PYF|ATF|GAB|GMB|GEO|DEU|GHA|GIB|GRC|GRL|GRD|GLP|GUM|GTM|GGY|GIN|GNB|GUY|HTI|HMD|VAT|HND|HKG|HUN|ISL|IND|IDN|IRN|IRQ|IRL|IMN|ISR|ITA|JAM|JPN|JEY|JOR|KAZ|KEN|KIR|PRK|KOR|KWT|KGZ|LAO|LVA|LBN|LSO|LBR|LBY|LIE|LTU|LUX|MAC|MDG|MWI|MYS|MDV|MLI|MLT|MHL|MTQ|MRT|MUS|MYT|MEX|FSM|MDA|MCO|MNG|MNE|MSR|MAR|MOZ|MMR|NAM|NRU|NPL|NLD|NCL|NZL|NIC|NER|NGA|NIU|NFK|MKD|MNP|NOR|OMN|PAK|PLW|PSE|PAN|PNG|PRY|PER|PHL|PCN|POL|PRT|PRI|QAT|REU|ROU|RUS|RWA|BLM|SHN|KNA|LCA|MAF|SPM|VCT|WSM|SMR|STP|SAU|SEN|SRB|SYC|SLE|SGP|SXM|SVK|SVN|SLB|SOM|ZAF|SGS|SSD|ESP|LKA|SDN|SUR|SJM|SWE|CHE|SYR|TWN|TJK|TZA|THA|TLS|TGO|TKL|TON|TTO|TUN|TUR|TKM|TCA|TUV|UGA|UKR|ARE|GBR|USA|UMI|URY|UZB|VUT|VEN|VNM|VGB|VIR|WLF|ESH|YEM|ZMB|ZWE)$"
                break
            case "numeric":
                regex = "^(4|248|8|12|16|20|24|660|10|28|32|51|533|36|40|31|44|48|50|52|112|56|84|204|60|64|68|535|70|72|74|76|86|96|100|854|108|132|116|120|124|136|140|148|152|156|162|166|170|174|178|180|184|188|384|191|192|531|196|203|208|262|212|214|218|818|222|226|232|233|748|231|238|234|242|246|250|254|258|260|266|270|268|276|288|292|300|304|308|312|316|320|831|324|624|328|332|334|336|340|344|348|352|356|360|364|368|372|833|376|380|388|392|832|400|398|404|296|408|410|414|417|418|428|422|426|430|434|438|440|442|446|450|454|458|462|466|470|584|474|478|480|175|484|583|498|492|496|499|500|504|508|104|516|520|524|528|540|554|558|562|566|570|574|807|580|578|512|586|585|275|591|598|600|604|608|612|616|620|630|634|638|642|643|646|652|654|659|662|663|666|670|882|674|678|682|686|688|690|694|702|534|703|705|90|706|710|239|728|724|144|729|740|744|752|756|760|158|762|834|764|626|768|772|776|780|788|792|795|796|798|800|804|784|826|840|581|858|860|548|862|704|92|850|876|732|887|894|716)$"
                break
            default:
                throw new Error("Set for country code not supported")
        }

        if (!caseSensitive) countryCode = String(countryCode).toUpperCase()
        if (!new RegExp(regex).test(String(countryCode))) throw new Error(`${countryCode} is not a valid country code`)

        return countryCode
    }

    /**
     * ISO: 4217
     */
    static validateCurrencyCode(currencyCode, caseSensitive = false) {
        const regex = new RegExp("^(ADP|AED|AFA|AFN|ALK|ALL|AMD|ANG|AOA|AOK|AON|AOR|ARA|ARP|ARS|ARY|ATS|AUD|AWG|AYM|AZM|AZN|BAD|BAM|BBD|BDT|BEC|BEF|BEL|BGJ|BGK|BGL|BGN|BHD|BIF|BMD|BND|BOB|BOP|BOV|BRB|BRC|BRE|BRL|BRN|BRR|BSD|BTN|BUK|BWP|BYB|BYN|BYR|BZD|CAD|CDF|CHC|CHE|CHF|CHW|CLF|CLP|CNY|COP|COU|CRC|CSD|CSJ|CSK|CUC|CUP|CVE|CYP|CZK|DDM|DEM|DJF|DKK|DOP|DZD|ECS|ECV|EEK|EGP|ERN|ESA|ESB|ESP|ETB|EUR|FIM|FJD|FKP|FRF|GBP|GEK|GEL|GHC|GHP|GHS|GIP|GMD|GNE|GNF|GNS|GQE|GRD|GTQ|GWE|GWP|GYD|HKD|HNL|HRD|HRK|HTG|HUF|IDR|IEP|ILP|ILR|ILS|INR|IQD|IRR|ISJ|ISK|ITL|JMD|JOD|JPY|KES|KGS|KHR|KMF|KPW|KRW|KWD|KYD|KZT|LAJ|LAK|LBP|LKR|LRD|LSL|LSM|LTL|LTT|LUC|LUF|LUL|LVL|LVR|LYD|MAD|MDL|MGA|MGF|MKD|MLF|MMK|MNT|MOP|MRO|MTL|MTP|MUR|MVQ|MVR|MWK|MXN|MXP|MXV|MYR|MZE|MZM|MZN|NAD|NGN|NIC|NIO|NLG|NOK|NPR|NZD|OMR|PAB|PEH|PEI|PEN|PES|PGK|PHP|PKR|PLN|PLZ|PTE|PYG|QAR|RHD|ROK|ROL|RON|RSD|RUB|RUR|RWF|SAR|SBD|SCR|SDD|SDG|SDP|SEK|SGD|SHP|SIT|SKK|SLL|SOS|SRD|SRG|SSP|STD|SUR|SVC|SYP|SZL|THB|TJR|TJS|TMM|TMT|TND|TOP|TPE|TRL|TRY|TTD|TWD|TZS|UAH|UAK|UGS|UGW|UGX|USD|USN|USS|UYI|UYN|UYP|UYU|UZS|VEB|VEF|VNC|VND|VUV|WST|XAF|XAG|XAU|XBA|XBB|XBC|XBD|XCD|XDR|XEU|XFO|XFU|XOF|XPD|XPF|XPT|XRE|XSU|XTS|XUA|XXX|YDD|YER|YUD|YUM|YUN|ZAL|ZAR|ZMK|ZMW|ZRN|ZRZ|ZWC|ZWD|ZWL|ZWN|ZWR)$")
        if (!caseSensitive) currencyCode = currencyCode.toUpperCase()
        if (!regex.test(currencyCode)) throw new Error(`${currencyCode} is not a valid currency code`)

        return currencyCode
    }

    static validateDate(date, format = "yyyy-mm-dd") {
        let regex
        switch (format) {
            case "yyyy-mm-dd":
                regex = new RegExp("^\\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$")
                break
            case "dd.mm.yyyy":
                regex = new RegExp("^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[0-2]).[0-9]{4}$")
                break
            default:
                throw new Error("Format for date not supported")
        }

        if (!regex.test(date)) throw new Error(`${date} is not a valid date format`)

        return date
    }

    static validateDomain(domain) {
        let regex = new RegExp("^[A-z0-9äöüÄÖÜ][A-z0-9-_äöüÄÖÜ]{1,61}[.][A-z]{2,12}$")
        if (!regex.test(domain)) throw new Error(`${domain} is not a valid domain`)

        return domain
    }

    static validateEmail(email) {
        const regex = new RegExp("^[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,6}$")
        if (!regex.test(email)) throw new Error(`${email} is not a valid email address`)

        return email.toLowerCase().trim();
    }

    static validateEnum(item, allowedItems) {
        if (!allowedItems.includes(item)) throw new Error(`${item} is not a valid value`)

        return item
    }

    static validateNumber(number, minimum = 0.0, maximum = null) {
        if (typeof number != "number") throw new Error(`${number} is not a valid number`)

        if (number < minimum) throw new Error(`${number} cannot be smaller than ${minimum}`)
        if (maximum !== null) if (number > maximum) throw new Error(`${number} cannot be lager thab ${maximum}`)

        return number
    }

    static validateIBAN(iban) {
        const regex = new RegExp("^[A-Z]{2}(?:[ ]?[0-9]){18,20}$")
        if (!regex.test(iban)) throw new Error(`${iban} is not a IBAN`)

        return iban
    }

    static validateInt(int, minimum = 0, maximum = 100) {
        if (!Number.isInteger(int)) throw new Error(`${int} is not a valid integer`)

        if (int < minimum) throw new Error(`${int} cannot be smaller than ${minimum}`)
        if (int > maximum) throw new Error(`${int} cannot be lager than ${maximum}`)

        return int
    }

    static validateOTP(otp) {
        const regex = new RegExp("^[0-9]{6}$")
        if (!regex.test(otp)) throw new Error(`${otp} is not a valid OTP`)

        return otp
    }

    static validatePublicIpAddress(ipaddress) {
        let regex = new RegExp("^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(?<!172\\.(16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31))(?<!127)(?<!^10)(?<!^0)\\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(?<!192\\.168)(?<!172\\.(16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31))\\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")
        if (!regex.test(ipaddress)) throw new Error(`${ipaddress} is not a valid public ip address`)

        return ipaddress
    }

    static validateLanguageCode(languageCode) {
        let regex = new RegExp("^(AA|AB|AE|AF|AK|AM|AN|AR|AS|AV|AY|AZ|BA|BE|BG|BH|BM|BI|BN|BO|BR|BS|CA|CE|CH|CO|CR|CS|CU|CV|CY|DA|DE|DV|DZ|EE|EL|EN|EO|ES|ET|EU|FA|FF|FI|FJ|FO|FR|FY|GA|GD|GL|GN|GU|GV|HA|HE|HI|HO|HR|HT|HU|HY|HZ|IA|ID|IE|IG|II|IK|IO|IS|IT|IU|JA|JV|KA|KG|KI|KJ|KK|KL|KM|KN|KO|KR|KS|KU|KV|KW|KY|LA|LB|LG|LI|LN|LO|LT|LU|LV|MG|MH|MI|MK|ML|MN|MR|MS|MT|MY|NA|NB|ND|NE|NG|NL|NN|NO|NR|NV|NY|OC|OJ|OM|OR|OS|PA|PI|PL|PS|PT|QU|RM|RN|RO|RU|RW|SA|SC|SD|SE|SG|SI|SK|SL|SM|SN|SO|SQ|SR|SS|ST|SU|SV|SW|TA|TE|TG|TH|TI|TK|TL|TN|TO|TR|TS|TT|TW|TY|UG|UK|UR|UZ|VE|VI|VO|WA|WO|XH|YI|YO|ZA|ZH|ZU)$")
        if (!regex.test(languageCode)) throw new Error(`${languageCode} is not a valid language code`)

        return languageCode
    }

    static validateName(name, minLength = 1, maxLength = 50) {
        if (name.length < minLength) throw new Error(`${name} must be at least ${minLength} characters long`)
        if (name.length > maxLength) throw new Error(`${name} must not be longer than ${maxLength} characters`)

        const regex = new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð ,.'-]+$")
        if (!regex.test(name)) throw new Error(`${name} is not a valid name`)

        return name
    }

    /**
     * A password must be at least 8 characters long (default)
     * A mixture of both uppercase and lowercase letters
     * A mixture of letters and numbers
     * Including of at least one special character (~ ! @ # $ % ^ * - _ = + [ { ] } / ; : , . ?) --> spaces counts not as special char
     */
    static validatePassword(password, minLength = 8, maxLength = 250, mixUpperLow = true, mixLetterNumber = true, mixSpecialChar = true) {
        if (password.length < minLength) throw new Error(`The password must be at least ${minLength} characters long`)
        if (password.length > maxLength) throw new Error(`The password must not be longer than ${maxLength} characters`)

        if (mixUpperLow) {
            let regex = new RegExp("(?=.*[a-z])(?=.*[A-Z])")
            if (!regex.test(password)) throw new Error(`The password must be a mixture of both uppercase and lowercase letters`)
        }

        if (mixLetterNumber) {
            let regex = new RegExp("(?=.*[a-zA-Z])(?=.*[0-9])")
            if (!regex.test(password)) throw new Error(`The password must be a mixture of letters and numbers`)
        }

        if (mixSpecialChar) {
            let regex = new RegExp("(?=.*[~!@#$%^*\\-_=+\\[{\\]}\\/;:,.?])")
            if (!regex.test(password)) throw new Error(`Your password must include at least one special character`)
        }

        return password
    }

    static validatePermission(permission) {
        let regex = new RegExp("^[a-z]+:[a-z_]+$")
        if (!regex.test(permission)) throw new Error(`${permission} is not a valid permission`)

        return permission
    }

    static validatePermissions(permissions) {
        let regex = new RegExp("^[a-z]+:[a-z_]+$")

        permissions.forEach((permission) => {
            if (!regex.test(permission)) throw new Error(`${permission} is not a valid permission`)
        })

        return permissions
    }

    static validateRole(role, caseSensitive = true) {
        let regex
        if (caseSensitive) {
            regex = new RegExp("^[a-z]+$")
        } else {
            regex = new RegExp("^[A-z]+$")
        }

        if (role === null || role === undefined) throw new Error(`${role} is not a valid role`)

        if (!regex.test(role)) throw new Error(`${role} is not a valid role`)

        return role
    }


    static validateRoles(roles, caseSensitive = true) {
        let regex
        if (caseSensitive) {
            regex = new RegExp("^[a-z]+$")
        } else {
            regex = new RegExp("^[A-z]+$")
        }
        roles.forEach((role) => {
            if (!regex.test(role)) throw new Error(`${role} is not a valid role`)
        })

        return roles
    }

    static validatePhone(phone, countryCode = "CH") {
        let regex
        switch (countryCode) {
            case 'CH':
                regex = "(\\b(0041|0)|\\B\\+41)(\\s?\\(0\\))?(\\s)?[1-9]{2}(\\s)?[0-9]{3}(\\s)?[0-9]{2}(\\s)?[0-9]{2}\\b"
                break
            case 'LI':
                regex = "(\\b(00423|0)|\\B\\+423)(\\s?\\(0\\))?(\\s)?[1-9]{3}(\\s)?[0-9]{2}(\\s)?[0-9]{2}\\b"
                break
            default:
                break
        }

        if (!new RegExp(regex).test(phone)) throw new Error(`${phone} is not a phone number`)

        return phone
    }

    static validateStreet(street, minLength = 1, maxLength = 100) {
        if (street.length < minLength) throw new Error(`${street} must be at least ${minLength} characters long`)
        if (street.length > maxLength) throw new Error(`${street} must not be longer than ${maxLength} characters`)

        const regex = new RegExp("^[a-zA-ZàáâäèéêëòóôöõøùúûüçÀÁÂÄÈÉÊËÒÓÔÖÕØÙÚÛÜÇ ,.'-]+[0-9a-zA-Z]+$")
        if (!regex.test(street)) throw new Error(`${street} is not a street`)

        return street
    }

    static validateString(string, minLength = 1, maxLength = 50) {
        if (string.length < minLength) throw new Error(`${string} must be at least ${minLength} characters long`)
        if (string.length > maxLength) throw new Error(`${string} must not be longer than ${maxLength} characters`)
        if (typeof string != "string") throw new Error(`${string} is not a valid string`)

        return string
    }

    static validateURL(url) {
        const regex = new RegExp("^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w.-]+)+[\\w\\-._~:\\/?#[\\]@!$&'()*+,;=]+$")
        if (!regex.test(url)) throw new Error(`${url} is not a valid url`)

        return url
    }

    static validateZip(zip, countryCode = "") {
        let regex
        if (zip === null || zip === undefined) throw new Error(`${zip} is not a valid zip code`)
        switch (countryCode) {
            case 'CH':
                regex = "^[0-9]{4}"
                break
            case 'LI':
                regex = "^94[0-9]{2}$"
                break
            default:
                regex = "^[a-zA-Z0-9- ]+$"
                break
        }

        if (!new RegExp(regex).test(String(zip).trim())) throw new Error(`${zip} is not a zip code`)

        return zip
    }
}