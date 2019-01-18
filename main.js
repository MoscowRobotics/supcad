"use strict";
function Calculate() {
    // Set up variables
    var RetailPrice = document.getElementById("RetailPrice").value;
    var DutyTariff = document.getElementById("RetailPrice").value * 0.18;
    var Tax = RetailPrice * 0.12;
    var shippingCost = 20;
    var totalCost = parseFloat(RetailPrice) + parseFloat(DutyTariff) + parseFloat(Tax) + parseFloat(shippingCost);
    // Log data to console
    console.log("Subtotal: $" + RetailPrice);
    console.log("Duty: " + DutyTariff);
    console.log("Tax: " + Tax);
    console.log("Total cost: " + totalCost);
    // Insert data onto page
    document.getElementById("subTotal").innerHTML = "$" + RetailPrice;
    document.getElementById("dutyTariffs").innerHTML = "$" + DutyTariff.toFixed(2);
    document.getElementById("provincialTax").innerHTML = "$" + Tax.toFixed(2);
    document.getElementById("totalAllIn").innerHTML = "$" + totalCost.toFixed(2);
}