var SalmonCookieStore = function(storeName, storeId, customerMin, customerMax, customerCookieAvg) {
  this.storeName = storeName;
  this.storeId = storeId;
  this.customerMin = customerMin;
  this.customerMax = customerMax;
  this.customerCookieAvg = customerCookieAvg;
  // Create array 'cookiesSoldEachHour' to store cookie sales for each hour of the business day
  this.cookiesSoldEachHour = [];
  this.cookiesSoldEachDay = 0;
  // Create array 'hourlyTimeSlot' to store business hours
  this.hourlyTimeSlot = ["10:00 AM ","11:00 AM ","12:00 PM ","1:00 PM ","2:00 PM ","3:00 PM ","4:00 PM ","5:00 PM "];
  // Function to generate random number of customers per hour
  this.generateRandom = function() {
    return Math.floor(Math.random() * (this.customerMax - this.customerMin)) + this.customerMin;
  };
  // Function to generate cookie sales per hour
  this.cookiesPerHour = function() {
    var customersPerHour = this.generateRandom();
    return Math.round(customersPerHour * this.customerCookieAvg);
  };
  // Function to push hourly cookie sales into array 'cookiesSoldEachHour'
  this.dailyCookies = function() {
    for (i = 0; i < 8; i++) {
      this.cookiesSoldEachHour.push(this.cookiesPerHour());
    }
  };
  // Function call to create new elements ('h3','ul','li') and text nodes, then add new elements and text nodes into document using DOM manipulation
  this.addInfo = function() {
    var positionSS = document.getElementById("stores-section");
    var newNameElement = document.createElement("h3");
    var newNameText = document.createTextNode(this.storeName);
    newNameElement.appendChild(newNameText);
    positionSS.appendChild(newNameElement);
    var newUl = document.createElement("ul");
    newUl.id = this.storeId;
    positionSS.appendChild(newUl);
    for (var j = 0; j < this.cookiesSoldEachHour.length; j++) {
      var newHourElement = document.createElement("li");
      var newHourText = document.createTextNode(this.hourlyTimeSlot[j] + ": " + this.cookiesSoldEachHour[j] + " cookies");
      newHourElement.appendChild(newHourText);
      var positionLi = document.getElementById(this.storeId);
      positionLi.appendChild(newHourElement);
      this.cookiesSoldEachDay += this.cookiesSoldEachHour[j];
    }
    var totalElement = document.createElement("li");
    var total = document.createTextNode("Total Daily Sales : " + this.cookiesSoldEachDay + " cookies");
    totalElement.appendChild(total);
    positionLi.appendChild(totalElement);
  };
};

var chain = [
  new SalmonCookieStore("Pioneer Square", "PS", 17, 88, 5.2),
  new SalmonCookieStore("Portland Airport", "PA", 6, 24, 1.2),
  new SalmonCookieStore("Washington Square", "WS", 11, 38, 1.9),
  new SalmonCookieStore("Sellwood", "SW", 20, 48, 3.3),
  new SalmonCookieStore("Pearl District", "PD", 3, 24, 2.6),
];

for (var index = 0; index < chain.length; index++) {
    var currentStore = chain[index];
    currentStore.generateRandom();
    currentStore.cookiesPerHour();
    currentStore.dailyCookies();
    currentStore.addInfo();
};

// console.log(currentStore);
