module.exports = function(smallest) {
    var small = 1000;

    smallest.forEach(function(money) {

        if (money.Trips < small) {
            small = money.Trips;
        }

    })
    return small;
}