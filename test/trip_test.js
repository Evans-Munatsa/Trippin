var trips = require("../trip");
var dubs = require("../dbn_trips");
var minimum = require("../minimum");
var dubs_min = require("../dbn_min");
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


var durbanTaxis = [{
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 14
}, {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
}, {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 14
}, {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
}, {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 9
}, {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 18
}, {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 15
}, {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 9
}, {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 20
}];


describe("Testing trips", function() {
    it("should find the total of one attribute in a list", function() {
        var result = trips(capeTownTaxis);
        assert.equal(result, 54);
    })

    it("should find the minimum of one attribute in a list", function() {
        var result = minimum(capeTownTaxis);
        assert.equal(result, 9);
    })

    it("should find records maytching CA 123 456", function(){
       
    })
})


describe("Durban transport", function() {
    it("should show how many trips did all the taxis make", function() {
        var result = dubs(durbanTaxis);
        assert.equal(result, 117);
    })

    it("should the lowest number of trips that any taxi in Durban made", function() {
        var result = dubs_min(durbanTaxis);
        assert.equal(result, 9);
    })
})