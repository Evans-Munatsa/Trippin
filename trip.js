module.exports = function(taxiNames) {
    var total = 0;
    taxiNames.forEach(function(taxi) {
        total = total + taxi.Trips;
    });
    return total;
};

