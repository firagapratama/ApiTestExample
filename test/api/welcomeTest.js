const assert = require('chai').assert;
const app = require('../../assert')

describe('Welcome Test', function(){
    it('app should return welcome message', function(){
        assert.equal(app(), "Automation testing API with JavaScript")
    })
})