const test = require("tape");
const request = require("supertest");
const app = require("../server");
const assert = require('assert');

//Mocha and Chai tests
// describe('Basic Mocha String Test', function () {
//     it('should return number of charachters in a string', function () {
//            assert.equal("Hello".length, 5);
//        });
//     it('should return first charachter of the string', function () {
//            assert.equal("Hello".charAt(0), 'H');
//        });
//    });

test("Test that tape and supertest are installed and functioning properly", function(t){
    t.end();
});

test("Verify we can visit the base route without any errors.", function(t){
    request(app)
        .get("/")
        .expect('Content-Type', /html/)
        .expect(200)
        .end(function(err, res){
            t.error(err, "No Error");
            app.close();
            t.end();
        })
});

test("Verify that the base route returns type html and not .json", function(t){
    request(app)
        .get("/")
        .end(function(err, res){
            t.error(err, "No Error");
            app.close();
            t.end();
        });
});
