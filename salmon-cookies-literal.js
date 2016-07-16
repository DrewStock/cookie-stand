
// Created an object for each cookie store using Literal Notation

// Create 'storeOne' object
var storeOne = {
  name: 'Pioneer Square',
  customerMin: 17,
  customerMax: 88,
  customerCookieAvg: 5.2,
  arr: [],
  total: 0,
  generateRandom: function(customerMin, customerMax) {
    return Math.floor(Math.random() * (customerMax - customerMin)) + customerMin;
  },
  cookiesPerHour: function() {
    var customersPerHour = this.generateRandom(this.customerMin, this.customerMax);
    return Math.round(customersPerHour * this.customerCookieAvg);
  },
  dailyCookies: function() {
    for (i = 0; i < 8; i++) {
      this.arr.push(this.cookiesPerHour());
    }
  },
  addInfo:  function() {
    var store = document.getElementById("storePS");
    var storeName = this.name;
    store.innerHTML += storeName;
    this.dailyCookies();
    var hour = document.getElementById("hourPS");
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
    var sum = document.getElementById("hourPS");
    var total = this.total;
    sum.innerHTML += "<li>" + "Total: " + total + "</li>";
  }
}

// Create 'storeTwo' object
var storeTwo = {
  name: 'Portland Airport',
  customerMin: 6,
  customerMax: 24,
  customerCookieAvg: 1.2,
  arr: [],
  total: 0,
  generateRandom: function(customerMin, customerMax) {
    return Math.floor(Math.random() * (customerMax - customerMin)) + customerMin;
  },
  cookiesPerHour: function() {
    var customersPerHour = this.generateRandom(this.customerMin, this.customerMax);
    return Math.round(customersPerHour * this.customerCookieAvg);
  },
  dailyCookies: function() {
    for (i = 0; i < 8; i++) {
      this.arr.push(this.cookiesPerHour());
    }
  },
  addInfo:  function() {
    var store = document.getElementById("storePA");
    var storeName = this.name;
    store.innerHTML += storeName;
    this.dailyCookies();
    var hour = document.getElementById("hourPA");
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
    var sum = document.getElementById("hourPA");
    var total = this.total;
    sum.innerHTML += "<li>" + "Total: " + total + "</li>";
  }
}

// Create 'storeThree' object
var storeThree = {
  name: 'Washington Square',
  customerMin: 11,
  customerMax: 38,
  customerCookieAvg: 1.9,
  arr: [],
  total: 0,
  generateRandom: function(customerMin, customerMax) {
    return Math.floor(Math.random() * (customerMax - customerMin)) + customerMin;
  },
  cookiesPerHour: function() {
    var customersPerHour = this.generateRandom(this.customerMin, this.customerMax);
    return Math.round(customersPerHour * this.customerCookieAvg);
  },
  dailyCookies: function() {
    for (i = 0; i < 8; i++) {
      this.arr.push(this.cookiesPerHour());
    }
  },
  addInfo:  function() {
    var store = document.getElementById("storeWS");
    var storeName = this.name;
    store.innerHTML += storeName;
    this.dailyCookies();
    var hour = document.getElementById("hourWS");
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
    var sum = document.getElementById("hourWS");
    var total = this.total;
    sum.innerHTML += "<li>" + "Total: " + total + "</li>";
  }
}

// Create 'storeFour' object
var storeFour = {
  name: 'Sellwood',
  customerMin: 20,
  customerMax: 48,
  customerCookieAvg: 3.3,
  arr: [],
  total: 0,
  generateRandom: function(customerMin, customerMax) {
    return Math.floor(Math.random() * (customerMax - customerMin)) + customerMin;
  },
  cookiesPerHour: function() {
    var customersPerHour = this.generateRandom(this.customerMin, this.customerMax);
    return Math.round(customersPerHour * this.customerCookieAvg);
  },
  dailyCookies: function() {
    for (i = 0; i < 8; i++) {
      this.arr.push(this.cookiesPerHour());
    }
  },
  addInfo:  function() {
    var store = document.getElementById("storeSW");
    var storeName = this.name;
    store.innerHTML += storeName;
    this.dailyCookies();
    var hour = document.getElementById("hourSW");
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
    var sum = document.getElementById("hourSW");
    var total = this.total;
    sum.innerHTML += "<li>" + "Total: " + total + "</li></ul>";
  }
}

// Create 'storeFive' object
var storeFive = {
  name: 'Pearl District',
  customerMin: 3,
  customerMax: 24,
  customerCookieAvg: 2.6,
  arr: [],
  total: 0,
  generateRandom: function(customerMin, customerMax) {
    return Math.floor(Math.random() * (customerMax - customerMin)) + customerMin;
  },
  cookiesPerHour: function() {
    var customersPerHour = this.generateRandom(this.customerMin, this.customerMax);
    return Math.round(customersPerHour * this.customerCookieAvg);
  },
  dailyCookies: function() {
    for (i = 0; i < 8; i++) {
      this.arr.push(this.cookiesPerHour());
    }
  },
  addInfo:  function() {
    var store = document.getElementById("storePD");
    var storeName = this.name;
    store.innerHTML += storeName;
    this.dailyCookies();
    var hour = document.getElementById("hourPD");
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
    var sum = document.getElementById("hourPD");
    var total = this.total;
    sum.innerHTML += "<li>" + "Total: " + total + "</li>";
  }
}

// Created an array to store the cookie store objects, then looped through the array to call the function that adds each store's information into the page
var chain = [storeOne, storeTwo, storeThree, storeFour, storeFive];

for (var index = 0; index < chain.length; index++) {
    var currentStore = chain[index];
    currentStore.addInfo();
  }
