const base64ToSafe = require('../index');

function test(str){
console.log(str, '->', base64ToSafe(str));
}

test('abc=');
test('abc==');
test('a/bc==');
test('ab+c==');
test('a/b+c==');