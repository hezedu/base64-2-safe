const base64ToSafe = require('../index');

// -------------------------------------------------
// normalFn source: https://github.com/crypto-utils/uid-safe/blob/52edb678aebda31723ddc90048df07315408256b/index.js
var EQUAL_END_REGEXP = /=+$/
var PLUS_GLOBAL_REGEXP = /\+/g
var SLASH_GLOBAL_REGEXP = /\//g
function normalFn (str) {
  return str.replace(EQUAL_END_REGEXP, '')
    .replace(PLUS_GLOBAL_REGEXP, '-')
    .replace(SLASH_GLOBAL_REGEXP, '_')
}
// -------------------------------------------------
const map = {
  normalFn,
  base64ToSafe
  
  
}

const MAX = 100000;
function tests(key){
  let i = 0;
  let test = map[key];
  let time;
  console.log(key, 'start');
  const now = Date.now();
  for(; i < MAX; i++){
    test('abc=');
    test('abc==');
    test('a/bc==');
    test('ab+c==');
    test('a/b+c==');
    test('a/sfsdfstwetewrtadsfsdgdagbqqqzxxx+c==');
  }
  time = Date.now() - now;
  console.log(key, 'end', time);
}

let arr = Object.keys(map)
arr.forEach(k => {
  tests(k);
});
arr.reverse();
arr.forEach(k => {
  tests(k)
});