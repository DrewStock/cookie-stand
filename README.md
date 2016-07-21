# Cookie Stand - coded by [Drew Stock] (https://github.com/DrewStock)
==================================================
Cookie Stand is an exercise in domain modeling. The application models customer activity for a chain of stores that sell salmon cookies. Yep, you heard that right. Salmon cookies.
==================================================
## Version history
* Version 1.0
  * Used literal notation to create a JavaScript object for each cookie store location
    * Object properties
      * store name
      * minimum number of customers per hour
      * maximum number of customers per hour
      * average number of cookies purchased per customer
    * Object methods
      * Generate random number of customers per hour using min/max properties
      * Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random   number of customers generated
      * Store the results for each location in a separate array
      * Display the values of each array as unordered lists in the browser
* Version 1.1
  * Created style-guide.html to list the styles that are to be used for the Cookie Stand document
  * Refactored salmon-cookies-literal.js to create new elements and text nodes and then add these into the document using DOM manipulation
* Version 1.2
  * Created new JavaScript file, salmon-cookies-constructor.js
    * As the name implies, salmon-cookies-constructor.js uses an object constructor function to create each store object
    
