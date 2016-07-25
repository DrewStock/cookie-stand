
// Object constructor function
var SalmonCookieStore = function(storeName, customerMin, customerMax, customerCookieAvg) {
  this.storeName = storeName;
  this.customerMin = customerMin;
  this.customerMax = customerMax;
  this.customerCookieAvg = customerCookieAvg;
  // Create array 'cookiesSoldEachHour' to store cookie sales for each hour of the business day
  this.cookiesSoldEachHour = [];
  this.cookiesSoldEachDay = 0;
  // Create array 'hourlyTimeSlot' to store business hours
  this.hourlyTimeSlot = ["10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"];
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
  // Function to create new elements ('table','tr','th','td') and text nodes, then add new elements and text nodes into document using DOM manipulation
  this.addInfo = function() {
    var positionSS = document.getElementById("stores-section");
    var newTable = document.createElement("table");
    newTable.id = this.storeName;
    positionSS.appendChild(newTable);
    // Creates table header
    var table = document.getElementById(this.storeName);
    var tableHeader = document.createElement("tr");
    var tableHeaderCell = document.createElement("th");
    tableHeaderCell.setAttribute("colspan", "2");
    var storeNameHeader = document.createTextNode(this.storeName);
    tableHeaderCell.appendChild(storeNameHeader);
    tableHeader.appendChild(tableHeaderCell);
    table.appendChild(tableHeader);
    // Creates column headers
    var tableHeaderRow = document.createElement("tr");
    tableHeaderCell = document.createElement("th");
    var tableHeaderData = document.createTextNode("Timeslot")
    tableHeaderCell.appendChild(tableHeaderData);
    tableHeaderRow.appendChild(tableHeaderCell);
    tableHeaderCell = document.createElement("th");
    tableHeaderData = document.createTextNode("Cookies Sold")
    tableHeaderCell.appendChild(tableHeaderData);
    tableHeaderRow.appendChild(tableHeaderCell);
    table.appendChild(tableHeaderRow);
    // Creates table rows and table data cells for store object, then adds hourly timeslots, cookies sold per hour and daily total
    for (var j = 0; j < this.cookiesSoldEachHour.length; j++) {
      var newCookieRow = document.createElement("tr");
      var timeCell = document.createElement("td");
      var timeCellData = document.createTextNode(this.hourlyTimeSlot[j]);
      timeCell.appendChild(timeCellData);
      newCookieRow.appendChild(timeCell);
      var cookieCell = document.createElement("td");
      var cookieCellData = document.createTextNode(this.cookiesSoldEachHour[j]);
      cookieCell.appendChild(cookieCellData);
      newCookieRow.appendChild(cookieCell);
      table.appendChild(newCookieRow);
      this.cookiesSoldEachDay += this.cookiesSoldEachHour[j];
    }
    var totalRow = document.createElement("tr");
    var totalTextCell = document.createElement("td");
    var totalTextCellData = document.createTextNode("Daily Sales");
    totalTextCell.appendChild(totalTextCellData);
    totalRow.appendChild(totalTextCell);
    var totalNumberCell = document.createElement("td");
    var totalNumberCellData = document.createTextNode(this.cookiesSoldEachDay);
    totalNumberCell.appendChild(totalNumberCellData);
    totalRow.appendChild(totalNumberCell);
    table.appendChild(totalRow);
  };
};

// Function to create new SalmonCookieStore from user data inputted into form. Function is called by onclick event of form input button, "Create New Store"
function userForm(formData) {
  var userAdd = new SalmonCookieStore(formData.store.value, parseInt(formData.minimum.value), parseInt(formData.maximum.value), parseInt(formData.average.value));
  console.log(userAdd);
  userAdd.generateRandom();
  userAdd.cookiesPerHour();
  userAdd.dailyCookies();
  userAdd.addInfo();
};

// Create array 'chain' to store the properties of each store location
var chain = [
  new SalmonCookieStore("Pioneer Square", 17, 88, 5.2),
  new SalmonCookieStore("Portland Airport", 6, 24, 1.2),
  new SalmonCookieStore("Washington Square", 11, 38, 1.9),
  new SalmonCookieStore("Sellwood", 20, 48, 3.3),
  new SalmonCookieStore("Pearl District", 3, 24, 2.6),
];

// Loop through the 'chain' array to call functions
for (var index = 0; index < chain.length; index++) {
    var currentStore = chain[index];
    currentStore.generateRandom();
    currentStore.cookiesPerHour();
    currentStore.dailyCookies();
    currentStore.addInfo();
};
