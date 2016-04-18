var trips = require("../trip");
var dubs = require("../dbn_trips");
var minimum = require("../minimum");
var dubs_min = require("../dbn_min");
var records = require("../records");
var records2 = require("../dbn_records")
var trip1 = require("../single_trip")
var trip2 = require("../single_trip_2")
var cpt_route = require("../cpt_route");
var cpt_totals = require("../cpt_totals")
var cpt_fare = require("../cpt_fare")
var dbn_route = require("../dbn_route");
var dbn_fare = require("../dbn_fare")
var dbn_totals = require("../dbn_totals")
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
                var cape = [{
                        Earnigs: 117,
                        RegistrationNumber: "CA 123 456"
                    },{
                        Earnigs: 132,
                        RegistrationNumber: "CA 234 567"
                    },{
                        Earnigs: 132,
                        RegistrationNumber: "CA 123 456"
                    },{
                        Earnigs: 104,
                        RegistrationNumber: "CA 345 678"
                    },{
                        Earnigs: 130,
                        RegistrationNumber: "CA 345 678"
                    }]
                    assert.deepEqual(cpt_totals(capeTownTaxis), cape)
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

        assert.deepEqual(records2(durbanTaxis, "ND 123 456"), numbers);
    })

    it("should return how many trips ND 234 567 did", function() {
        assert.equal(trip2(durbanTaxis, "ND 234 567"), 36)
    })

    it("finds names of all the routes that ND 345 678 took", function() {
        var route = ["Durban - Umbilo", "Durban - University of KZN", "Durban - Umlazi Station"]
        assert.deepEqual(dbn_route(durbanTaxis, "ND 345 678"), route);
    })

    it("returns the total earnings for ND 345 678", function() {
        assert.equal(dbn_fare(durbanTaxis, "ND 345 678"), 29)
    })

    it("returns the total earnings for each taxi", function() {
        var result = [{
            Earnigs: 98,
            RegistrationNumber: "ND 123 456"
        }, {
            Earnigs: 126,
            RegistrationNumber: "ND 234 567"
        }, {
            Earnigs: 112,
            RegistrationNumber: "ND 345 678"
        }, {
            Earnigs: 126,
            RegistrationNumber: "ND 234 567"
        }, {
            Earnigs: 63,
            RegistrationNumber: "ND 234 567"
        }, {
            Earnigs: 126,
            RegistrationNumber: "ND 345 678"
        }, {
            Earnigs: 120,
            RegistrationNumber: "ND 123 456"
        }, {
            Earnigs: 72,
            RegistrationNumber: "ND 234 567"
        }, {
            Earnigs: 280,
            RegistrationNumber: "ND 345 678"
        }]
        assert.deepEqual(dbn_totals(durbanTaxis), result)
    })
})