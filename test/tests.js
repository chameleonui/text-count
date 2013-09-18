var assert = require('assert');
var TextCount = require('text-count');

describe('TextCount', function(){
    describe('chars(string)', function(){
      it('should return number of characters in string', function(){
        assert(TextCount(" 12345 67890 ").chars() == 13);
      })
    })

    describe('words(string)', function(){
      it('should return number of words in string', function(){
        assert(TextCount(" Šrum  šruma   šrumajdá  ").words() == 3);
      })
    })

    describe('sentences(string)', function(){
      it('should return number of words in string', function(){
        assert(TextCount("Každá, věta. Bude? započena... pouze; a jen. Jednou!").sentences() == 4);
      })
    })
})