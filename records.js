module.exports = function(records, number) {
    var arr = [];
    records.forEach(function(k) {
        if (k.RegistrationNumber === number) {
            arr.push(k);
        }
    });
    return arr;
}