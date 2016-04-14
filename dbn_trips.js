module.exports = function(durban) {
    var total = 0;

    durban.forEach(function(taxi) {
        total = total + taxi.Trips;
    });
    return total;
}