var trips = require("../trip");
var minimum = require("../minimum");
var records = require("../records");
var trip1 = require("../single_trip")
var cpt_route = require("../route");
var cpt_totals = require("../totals")
var cpt_fare = require("../fare")
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


describe("Cpt trips", function() {
    it("should find the total of one attribute in a list", function() {
        var result = trips(capeTownTaxis);
        assert.equal(result, 54);
    })

    it("should find the minimum of one attribute in a list", function() {
        var result = minimum(capeTownTaxis);
        assert.equal(result, 9);
    })

    it("should find records matching CA 123 456", function() {
        var block = [{
            RegistrationNumber: "CA 123 456",
            Route: "Cape Town - Bellville",
            Fare: 13,
            Trips: 9
        }, {
            RegistrationNumber: "CA 123 456",
            Route: "Cape Town - Gugulethu",
            Fare: 12,
            Trips: 11
        }]

        assert.deepEqual(records(capeTownTaxis, "CA 123 456"), block)
    })

    it("returns how many trips CA 234 567 made", function() {
        assert.equal(trip1(capeTownTaxis, "CA 234 567"), 11)
    })

    it("finds names of all the routes that CA 345 678 took", function() {
        var route = ["Cape Town - Langa", "Cape Town - Cape Town"];
        assert.deepEqual(cpt_route(capeTownTaxis, "CA 345 678"), route);
    })

    it("returns the total earnings for CA 234 567", function() {
        assert.equal(cpt_fare(capeTownTaxis, "CA 234 567"), 12)
    })

    it("returns the total earnings for each taxi", function() {
        var cape = {
            "CA 123 456": 249,
            "CA 234 567": 132,
            "CA 345 678": 234
        }
        assert.deepEqual(cpt_totals(capeTownTaxis), cape)
    })
})


describe("Durban transport", function() {
    it("should show how many trips did all the taxis make", function() {
        var result = trips(durbanTaxis);
        assert.equal(result, 117);
    })

    it("should the lowest number of trips that any taxi in Durban made", function() {
        var result = minimum(durbanTaxis);
        assert.equal(result, 9);
    })

    it("should find the records matching  ND 123 456", function() {
        var numbers = [{
            "RegistrationNumber": "ND 123 456",
            "Route": "Durban - University of KZN",
            "Fare": 7,
            "Trips": 14
        }, {
            "RegistrationNumber": "ND 123 456",
            "Route": "Durban - Umbilo",
            "Fare": 8,
            "Trips": 15
        }]

        assert.deepEqual(records(durbanTaxis, "ND 123 456"), numbers);
    })

    it("should return how many trips ND 234 567 did", function() {
        assert.equal(trip1(durbanTaxis, "ND 234 567"), 36)
    })

    it("finds names of all the routes that ND 345 678 took", function() {
        var route = ["Durban - Umbilo", "Durban - University of KZN", "Durban - Umlazi Station"]
        assert.deepEqual(cpt_route(durbanTaxis, "ND 345 678"), route);
    })

    it("returns the total earnings for ND 345 678", function() {
        assert.equal(cpt_fare(durbanTaxis, "ND 345 678"), 29)
    })

    it("returns the total earnings for each taxi", function() {
        var result = {
            "ND 123 456" : 218,
            "ND 234 567" : 387,
            "ND 345 678" : 518
        }
        assert.deepEqual(cpt_totals(durbanTaxis), result)
    })
})