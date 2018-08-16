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

it("Trivial test to make sure that we successfully imported Mocha", function(done){
    done();
});

it("Verify we can visit the base route (/) without any errors.", function(done){
    request(app)
        .get("/")
        .end(function(err, res){
            if (err) throw err;
            done();
        });
});

it("Verify that the base route (/) returns type html as opposed to another type, such as json", function(done){
    request(app)
        .get("/")
        .expect('Content-Type', /html/)
        .end(function(err, res){
            if (err) throw err;
            done();
        });
});

it("Verify that the base route (/) returns status 200, as opposed to an error such as 404", function(done){
    request(app)
        .get('/')
        .expect(200)
        .end(function(err, res){
            if (err) throw err;
            done()
        });
});

// test("Verify that the route /api/tests returns a json response", function(t){
//     request(app)
//         .get("/api/test")
//         .expect("Content-Type", /json/)
//         .expect(200);
//     t.ok();
//     // app.close();
// });

// //Only one response from /api.tests
// //Will be used for testing other api routes as well

// test("Test that /api/tests route returns a json response with only a single object", function(t){
//     request(app)
//         .get("/api/test")
//         .end(function(err, res){
//             t.error(err, 'No error');
//             t.same(3, 3, "Fake numbers test");
//             t.end();
//             // app.close();
//         });
// });
