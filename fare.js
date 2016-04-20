module.exports = function(fare, plate) {
    var total = 0;

    fare.forEach(function(k) {
        if (k.RegistrationNumber === plate) {
            total = total + k.Fare;
        }
    });
    return total;
}