// The function which convert Fahrenheit to celsius
function ConvertFahrenheitToCelsius(fahrenheit_temp) {
    // create variable and assign Fahrenheit to Celsius to it.
    let celsius_temp = (fahrenheit_temp - 32) * 5/9;
    // return the result.
    return celsius_temp;
}

// The function which will calculate return on investment
function ReturnOnInvestment(revenue, cost) {
    // create variable and assign ROI formula to it.
  let roi = ((revenue - cost) / cost) * 100;
  // return result
  return roi;
}

// The function which calculates the compound interest
function CalculateCompoundInterest(principal, rate, timesPerYear, years) {
    // Define total amount variable and assign the result of compound interest formula to it (A = P(1 + r/n)^(nt))
    let totalamount = principal * Math.pow(1 + rate / timesPerYear, timesPerYear * years);
    // Define interest variable and assign the result of subtracting the principal from the total amount
    let interest = totalamount - principal;
    // Round the interest to 2 decimal places using the toFixed() method
    interest = parseFloat(interest.toFixed(2));
    // Return the calculated interest
    return interest;
  }
  

  
// Converts a passed through Celsius temp to Fahrenheit
function ConvertCelsiusToFahrenheit(temp){
    let fahrenheit = (temp * 9/5) + 32;
    // return the result.
    return fahrenheit.toFixed(2);
}

// returns the percentage of people who made a purchase at a website
function ConversionRate(total_vistited, total_customers){
    // Divide the purchases by the amount of people visited, then multiply by 100 to get a percentage.
    let conversion = (total_customers / total_vistited) * 100;

    // Return the result.
    return conversion.toFixed(2);
}

// Adds all the prices in an array.
function calculatePrice(cartItems, discountPercent, taxRate) {
    let subtotal = 0;
    // Loops through the cartItems array and adds the cost of each item multiplied by its quantity to the subtotal.
    for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    subtotal += item.cost * item.quantity;
    }
    
    // Calculates the discount amount and subtracts it from the subtotal.
    const discountAmount = subtotal * (discountPercent / 100);
    subtotal -= discountAmount;

    // Calculates the tax amount and adds it to the subtotal.
    const taxAmount = subtotal * (taxRate / 100);
    subtotal += taxAmount;

    // Rounds the total cart amount to two decimal places and returns it.
    const total = subtotal.toFixed(2);
    return total;
}


