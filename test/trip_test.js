var trips = require("../trip");
var minimum = require("../minimum");
var assert = require("assert");

var capeTownTaxis = [{
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Bellville",
    "Fare": 13,
    "Trips": 9
}, {
    "RegistrationNumber": "CA 234 567",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
}, {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
}, {
    "RegistrationNumber": "CA 345 678",
    "Route": "Cape Town - Langa",
    "Fare": 8,
    "Trips": 13
}, {
    "RegistrationNumber": "CA 345 678",
    "Route": "Cape Town - Cape Town",
    "Fare": 13,
    "Trips": 10
}];

describe("Testing trips", function() {
    it("should find the total of one attribute in a list", function() {
        var result = trips(capeTownTaxis);
        assert.equal(result, 54);
    })
})

describe("find minimun", function(){
	it("should find the minimum of one attribute in a list", function(){
      var result = minimum(capeTownTaxis);
      assert.equal(result, 9);
    })
})