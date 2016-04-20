module.exports = function(money) {
    var total = {};
    money.forEach(function(k) {

        var RegistrationNumber = k.RegistrationNumber;
        var earnings = k.Fare * k.Trips;

        if (total[RegistrationNumber] === undefined) {
            total[RegistrationNumber] = 0;

        };

        total[RegistrationNumber] = total[RegistrationNumber] + earnings;
    });

    console.log(total);
    return total;
}