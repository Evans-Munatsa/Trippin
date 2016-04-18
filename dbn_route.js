module.exports = function(location, route) {
    var arr = [];
    location.forEach(function(k) {
        if (k.RegistrationNumber === route) {
            arr.push(k.Route);
        }
    });
    return arr;
}