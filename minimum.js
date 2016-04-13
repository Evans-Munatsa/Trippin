module.exports = function(little) {
    var smallest = 1000;
    little.forEach(function(money) {

        if (money.Trips < smallest) {
            smallest = money.Trips;
        }

    })
    return smallest;
}