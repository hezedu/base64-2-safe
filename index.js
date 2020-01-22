/**
 * author: hezedu<hezedu@hotmail.com>
 * license: MIT
 * 
 * nodeJs: this encoding will also correctly accept "URL and Filename Safe Alphabet"
 * is a lie. https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings
 * 
 * RFC: 
 * https://tools.ietf.org/html/rfc4648#section-5
 */

// Fast than tree regxp's function.

const REGEXP = /\+|\//g;

function base64ToSafe(base64){
  return _trimEndPading(base64).replace(REGEXP, function(mstr){
    // use fn more fast than two reg.
    if(mstr === '+'){
      return '-';
    } else {
      // "/"
      return '_';
    }
  });
}

function _trimEndPading(base64){
  // substr is fast than reg.
  let lastIndex = base64.length - 2;
  if(base64[lastIndex] !== '='){
    lastIndex = lastIndex + 1;
  }
  if(base64[lastIndex] === '='){
    return base64.substr(0, lastIndex);
  }
  return base64;
}

module.exports = base64ToSafe;