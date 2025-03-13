// Declare customerName in global scope
var customerName = "bob"; // Ensure it stays lowercase initially

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Modify the global customerName variable
}

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = "not bob"; // Declare globally without `var`, `let`, or `const` (test expects it)
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob"; // Assign new value
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = "someone";

// Function that attempts to change leastFavoriteCustomer (should fail)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "another person"; // Throws an error since `const` cannot be reassigned
}
