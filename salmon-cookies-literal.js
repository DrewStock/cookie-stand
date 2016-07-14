var storeUno = {
  name: 'Pioneer Square',
  customerMin: 17,
  customerMax: 88,
  customerCookieAvg: 5.2,
  arr: [],
  total: 0,
  generateRandom: function(customerMin, customerMax) {
    return Math.floor(Math.random() * (customerMax - customerMin)) + customerMin;
  },
  cookiesPerHour: function (){
  var customersPerHour = this.generateRandom(this.customerMin, this.customerMax);
  return Math.round(customersPerHour * this.customerCookieAvg);
},
  dailyCookies: function (){
  for (i = 0; i < 8; i++) {
    this.arr.push(this.cookiesPerHour());
    }
  },
  addInfo:  function() {
    var store = document.getElementById("store");
    var storeName = this.name;
    store.innerHTML += storeName;
    this.dailyCookies();
    var hour = document.getElementById("hour");
    var unitsPerHour = "<li>" + "10am: " + this.arr[0] + " cookies" + "</li>";
    unitsPerHour += "<li>" + "11am: " + this.arr[1] + " cookies" + "</li>";
    unitsPerHour += "<li>" + "12pm: " + this.arr[2] + " cookies" + "</li>";
    unitsPerHour += "<li>" + "1pm: " + this.arr[3] + " cookies" + "</li>";
    unitsPerHour += "<li>" + "2pm: " + this.arr[4] + " cookies" + "</li>";
    unitsPerHour += "<li>" + "3pm: " + this.arr[5] + " cookies" + "</li>";
    unitsPerHour += "<li>" + "4pm: " + this.arr[6] + " cookies" + "</li>";
    unitsPerHour += "<li>" + "5pm: " + this.arr[7] + " cookies" + "</li>";
    hour.innerHTML += unitsPerHour;
    for (var i = 0; i < this.arr.length; i++) {
      this.total += this.arr[i];
    }
    var sum = document.getElementById("sum");
    var total = this.total;
    sum.innerHTML += "<li>" + "Total: " + total + "</li>";
  }
}

// storeUno.addInfo();

var chain = [storeUno];

for (var index = 0; index < chain.length; index++) {
    var currentStore = chain[index];
    currentStore.addInfo();
  }
