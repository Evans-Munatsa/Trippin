module.exports = function(records, plate) {
    var arr = [];
    records.forEach(function(k) {
        if (k.RegistrationNumber === plate) {
            k = arr.push(k);
        }
    });
    return arr;
}