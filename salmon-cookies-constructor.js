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
  // Function call to create new elements ('table','tr','th','td') and text nodes, then add new elements and text nodes into document using DOM manipulation
  this.addInfo = function() {
    var positionSS = document.getElementById("stores-section");
    var newTable = document.createElement("table");
    newTable.id = this.storeId;
    positionSS.appendChild(newTable);
    // Add Table Header
    var table = document.getElementById(this.storeId);
    var tableHeader = document.createElement("tr");
    var tableHeaderCell = document.createElement("th");
    tableHeaderCell.setAttribute("colspan", "2");
    var storeNameHeader = document.createTextNode(this.storeName);
    tableHeaderCell.appendChild(storeNameHeader);
    tableHeader.appendChild(tableHeaderCell);
    table.appendChild(tableHeader);
    // Add Column Headers
    var tableHeaderRow = document.createElement("tr");
    var tableHeaderCell = document.createElement("th");
    var tableHeaderData = document.createTextNode("Timeslot")
    tableHeaderCell.appendChild(tableHeaderData);
    tableHeaderRow.appendChild(tableHeaderCell);
    tableHeaderCell = document.createElement("th");
    tableHeaderData = document.createTextNode("Cookies Sold")
    tableHeaderCell.appendChild(tableHeaderData);
    tableHeaderRow.appendChild(tableHeaderCell);
    var positionRow = document.getElementById(this.storeId);
    positionRow.appendChild(tableHeaderRow);
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
      var positionRow = document.getElementById(this.storeId);
      positionRow.appendChild(newCookieRow);
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
    positionRow.appendChild(totalRow);
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
