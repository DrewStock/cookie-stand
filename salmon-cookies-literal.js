
// Created an object for each cookie store using Literal Notation

// Create 'storeOne' object
var storeOne = {
  name: "Pioneer Square",
  customerMin: 17,
  customerMax: 88,
  customerCookieAvg: 5.2,
  // Create array 'arr' to store cookie sales for each hour of the business day
  arr: [],
  total: 0,
  // Create array 'time' to store business hours
  time: ["10:00 AM ","11:00 AM ","12:00 PM ","1:00 PM ","2:00 PM ","3:00 PM ","4:00 PM ","5:00 PM "],
  // Function call to generate random number of customers per hour
  generateRandom: function(customerMin, customerMax) {
    return Math.floor(Math.random() * (customerMax - customerMin)) + customerMin;
  },
  // Function call to generate cookie sales per hour
  cookiesPerHour: function() {
    var customersPerHour = this.generateRandom(this.customerMin, this.customerMax);
    return Math.round(customersPerHour * this.customerCookieAvg);
  },
  // Function call to push hourly cookie sales into array 'arr'
  dailyCookies: function() {
    for (i = 0; i < 8; i++) {
      this.arr.push(this.cookiesPerHour());
    }
  },
  // Function call to create new elements ('h3','ul','li') and text nodes, then add new elements and text nodes into document using DOM manipulation
  addInfo:  function() {
    var newNameElement = document.createElement("h3");
    var newNameText = document.createTextNode(this.name);
    newNameElement.appendChild(newNameText);
    var positionName = document.getElementById("PS");
    positionName.appendChild(newNameElement);
    this.dailyCookies();
    var newUl = document.createElement("ul");
    var positionUl = document.getElementById("PS");
    positionUl.appendChild(newUl);
    var getUl = document.getElementById("PS").firstChild.nextSibling.nextSibling;
    getUl.id = "hourPS";
    for (var j = 0; j < this.arr.length; j++) {
      var newHourElement = document.createElement("li");
      var newHourText = document.createTextNode(this.time[j] + ": " + this.arr[j] + " cookies");
      newHourElement.appendChild(newHourText);
      var positionHour = document.getElementById("hourPS");
      positionHour.appendChild(newHourElement);
      this.total += this.arr[j];
    }
    var totalElement = document.createElement("li");
    var total = document.createTextNode("Total Daily Sales : " + this.total + " cookies");
    totalElement.appendChild(total);
    positionHour.appendChild(totalElement);
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
  time: ["10:00 AM ","11:00 AM ","12:00 PM ","1:00 PM ","2:00 PM ","3:00 PM ","4:00 PM ","5:00 PM "],
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
    var newNameElement = document.createElement("h3");
    var newNameText = document.createTextNode(this.name);
    newNameElement.appendChild(newNameText);
    var positionName = document.getElementById("PA");
    positionName.appendChild(newNameElement);
    this.dailyCookies();
    var newUl = document.createElement("ul");
    var positionUl = document.getElementById("PA");
    positionUl.appendChild(newUl);
    var getUl = document.getElementById("PA").firstChild.nextSibling.nextSibling;
    getUl.id = "hourPA";
    for (var j = 0; j < this.arr.length; j++) {
      var newHourElement = document.createElement("li");
      var newHourText = document.createTextNode(this.time[j] + ": " + this.arr[j] + " cookies");
      newHourElement.appendChild(newHourText);
      var positionHour = document.getElementById("hourPA");
      positionHour.appendChild(newHourElement);
      this.total += this.arr[j];
    }
    var totalElement = document.createElement("li");
    var total = document.createTextNode("Total Daily Sales : " + this.total + " cookies");
    totalElement.appendChild(total);
    positionHour.appendChild(totalElement);
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
  time: ["10:00 AM ","11:00 AM ","12:00 PM ","1:00 PM ","2:00 PM ","3:00 PM ","4:00 PM ","5:00 PM "],
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
    var newNameElement = document.createElement("h3");
    var newNameText = document.createTextNode(this.name);
    newNameElement.appendChild(newNameText);
    var positionName = document.getElementById("WS");
    positionName.appendChild(newNameElement);
    this.dailyCookies();
    var newUl = document.createElement("ul");
    var positionUl = document.getElementById("WS");
    positionUl.appendChild(newUl);
    var getUl = document.getElementById("WS").firstChild.nextSibling.nextSibling;
    getUl.id = "hourWS";
    for (var j = 0; j < this.arr.length; j++) {
      var newHourElement = document.createElement("li");
      var newHourText = document.createTextNode(this.time[j] + ": " + this.arr[j] + " cookies");
      newHourElement.appendChild(newHourText);
      var positionHour = document.getElementById("hourWS");
      positionHour.appendChild(newHourElement);
      this.total += this.arr[j];
    }
    var totalElement = document.createElement("li");
    var total = document.createTextNode("Total Daily Sales : " + this.total + " cookies");
    totalElement.appendChild(total);
    positionHour.appendChild(totalElement);
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
  time: ["10:00 AM ","11:00 AM ","12:00 PM ","1:00 PM ","2:00 PM ","3:00 PM ","4:00 PM ","5:00 PM "],
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
    var newNameElement = document.createElement("h3");
    var newNameText = document.createTextNode(this.name);
    newNameElement.appendChild(newNameText);
    var positionName = document.getElementById("SW");
    positionName.appendChild(newNameElement);
    this.dailyCookies();
    var newUl = document.createElement("ul");
    var positionUl = document.getElementById("SW");
    positionUl.appendChild(newUl);
    var getUl = document.getElementById("SW").firstChild.nextSibling.nextSibling;
    getUl.id = "hourSW";
    for (var j = 0; j < this.arr.length; j++) {
      var newHourElement = document.createElement("li");
      var newHourText = document.createTextNode(this.time[j] + ": " + this.arr[j] + " cookies");
      newHourElement.appendChild(newHourText);
      var positionHour = document.getElementById("hourSW");
      positionHour.appendChild(newHourElement);
      this.total += this.arr[j];
    }
    var totalElement = document.createElement("li");
    var total = document.createTextNode("Total Daily Sales : " + this.total + " cookies");
    totalElement.appendChild(total);
    positionHour.appendChild(totalElement);
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
  time: ["10:00 AM ","11:00 AM ","12:00 PM ","1:00 PM ","2:00 PM ","3:00 PM ","4:00 PM ","5:00 PM "],
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
    var newNameElement = document.createElement("h3");
    var newNameText = document.createTextNode(this.name);
    newNameElement.appendChild(newNameText);
    var positionName = document.getElementById("PD");
    positionName.appendChild(newNameElement);
    this.dailyCookies();
    var newUl = document.createElement("ul");
    var positionUl = document.getElementById("PD");
    positionUl.appendChild(newUl);
    var getUl = document.getElementById("PD").firstChild.nextSibling.nextSibling;
    getUl.id = "hourPD";
    for (var j = 0; j < this.arr.length; j++) {
      var newHourElement = document.createElement("li");
      var newHourText = document.createTextNode(this.time[j] + ": " + this.arr[j] + " cookies");
      newHourElement.appendChild(newHourText);
      var positionHour = document.getElementById("hourPD");
      positionHour.appendChild(newHourElement);
      this.total += this.arr[j];
    }
    var totalElement = document.createElement("li");
    var total = document.createTextNode("Total Daily Sales : " + this.total + " cookies");
    totalElement.appendChild(total);
    positionHour.appendChild(totalElement);
  }
}

// Created an array to store the cookie store objects, then looped through the array to call the function that adds each store's information into the page
var chain = [storeOne, storeTwo, storeThree, storeFour, storeFive];

for (var index = 0; index < chain.length; index++) {
    var currentStore = chain[index];
    currentStore.addInfo();
  }
