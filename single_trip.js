module.exports = function(records, numbers) {
    var amount = 0;

    records.forEach(function(k) {
        if (k.RegistrationNumber === numbers) {
            amount = amount + k.Trips;
        }
    });
    return amount;
}