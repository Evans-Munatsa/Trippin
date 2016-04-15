module.exports = function(record, number) {
    var amount = 0;

    record.forEach(function(k) {
        if (k.RegistrationNumber === number) {
            amount = amount + k.Trips;
        }
    });
    return amount;
}