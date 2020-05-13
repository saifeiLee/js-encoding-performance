const {
    encodeWithBinaryString,
    encodeJustWithCharCode,
    encodeWithStringView
} = require('./encode')
const {
    ab2strWithBuffer,
    ab2strWithCharCode,
    ab2strWithStringView
} = require('./decode')

const StringView = require('../module/stringview')


const fs = require('fs')

let encoded
let decoded

function testEncodeWithBinaryString (str) {
    console.time('encodeWithBinaryString')
    for (let i = 100; i > 0; --i) {
        encoded = encodeWithBinaryString(str)
        ab2strWithBuffer(encoded)
    }
    console.timeEnd('encodeWithBinaryString')
}

function testEncodeJustWithCharCode (str) {
    console.time('encodeJustWithCharCode')
    for (let i = 100; i > 0; --i) {
        encoded = encodeJustWithCharCode(str)
        ab2strWithCharCode(encoded)
    }
    console.timeEnd('encodeJustWithCharCode')    
}

function testEncodeWithStringView (str) { 
    console.time('encodeWithStringView')
    for (let i = 100; i > 0; --i) {
        encoded = encodeWithStringView(str)
        decoded = new StringView(encoded).toString()
    }
    console.timeEnd('encodeWithStringView')
}

fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) throw err
    const inputStr = data

    testEncodeWithBinaryString(inputStr)

    testEncodeJustWithCharCode(inputStr)

    testEncodeWithStringView(inputStr)

})