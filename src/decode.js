const { Base64 } = require('js-base64')
const StringView = require('../module/stringview')

function ab2strWithBuffer (ab) {
    return Buffer.from(ab).toString();
}

function ab2strWithCharCode (buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function ab2strWithStringView (ab) {
    const sv = new StringView(ab)
    return sv.toString()
}

module.exports = {
    ab2strWithBuffer,
    ab2strWithCharCode,
    ab2strWithStringView
}