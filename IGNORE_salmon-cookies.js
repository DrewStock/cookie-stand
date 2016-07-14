var salmonCookieStores = function(customerMin, customerMax, customerCookieAvg) {
  this.customerMin = customerMin;
  this.customerMax = customerMax;
  this.customerCookieAvg = customerCookieAvg;
}

var pioneerSquare = new salmonCookieStores(17, 88, 5.2);
var portlandAirport = new salmonCookieStores(6, 24, 1.2);
var washingtonSquare = new salmonCookieStores(11, 38, 1.9);
var sellwood = new salmonCookieStores(20, 48, 3.3);
var pearlDistrict = new salmonCookieStores(3, 24, 2.6);

salmonCookieStores.prototype.generateRandom = function(customerMin, customerMax) {
  return Math.floor(Math.random() * (customerMax - customerMin)) + customerMin;
}

salmonCookieStores.prototype.cookiesPerHour = function (){
var customersPerHour = this.generateRandom(this.customerMin, this.customerMax);
return Math.round(customersPerHour * this.customerCookieAvg);
}

salmonCookieStores.prototype.dailyCookies = function (){
  var arr = [];
  for (i = 0; i < 8; i++) {
  arr.push(this.cookiesPerHour());
  console.log(arr);
  }
}


// salmonCookieStores.prototype.dailyCookies = function (){
//
// }
//
// var arr = [];
// for (i = 0, i < 5, i++) {
//   arr[i] = [];
// }

//
// var pS = []
//
// for (i = 0; i < 8; i++) {
//   pS.push(pioneerSquare.cookiesPerHour());
// }
//
// var pA = [];
//
// for (i = 0; i < 8; i++) {
//   pA.push(portlandAirport.cookiesPerHour());
// }
//
// console.log(pS);
// console.log(pA);


// console.log(pioneerSquare.generateRandom(17,88));
//
// console.log(pioneerSquare.cookiesPerHour());
