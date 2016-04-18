module.exports = function(taxi) {
    var total = [];
    taxi.forEach(function(k) {
        var result = {
            RegistrationNumber: k.RegistrationNumber,
            Earnigs: (k.Fare * k.Trips)
        }
        total.push(result)
    });
    return total;
}


// var earnings = [];

// durbanTaxis.map(function(taxi){
//   var result = {
//     RegistrationNumber : taxi.RegistrationNumber,
//     Earnigs : (taxi.Fare * taxi.Trips)
//   }
//   earnings.push(result)
// })
// console.log(earnings)