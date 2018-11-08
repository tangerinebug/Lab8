"use strict";
exports.__esModule = true;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, Age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
    }
    Customer.prototype.GetAge = function () {
        console.log("Your age is: " + this.Age);
    };
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("John", "Smith", 10);
customer.greeter();
