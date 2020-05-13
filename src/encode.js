// const ab2str = require('arraybuffer-to-string')
const {Base64} = require('js-base64')
const StringView = require('../module/stringview')

function str2abWithUint8 (str) {
	var array = new Uint8Array(str.length);
	for(var i = 0; i < str.length; i++) {
		array[i] = str.charCodeAt(i);
	}
	return array.buffer
}

function str2abWithUint16(str) {
    var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i=0, strLen=str.length; i<strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }
/**
 * str -> base64 -> binary string -> array-buffer
 * @param {string} str 
 */
function encodeWithBinaryString (str) {
    const b64Str = Base64.encode(str)
    const binStr = Base64.atob(b64Str)
    const encoded = str2abWithUint8(binStr)
    return encoded;
}

function encodeJustWithCharCode (str) {
    const encoded = str2abWithUint16(str);
    return encoded
}

function encodeWithStringView (str) {
    const encoded = new StringView(str);
    return encoded.buffer
}

module.exports = {
    encodeWithBinaryString,
    encodeJustWithCharCode,
    encodeWithStringView
}