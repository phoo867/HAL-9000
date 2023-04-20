// Takes an array of words, and concatenates them together to form a sentence.
function ConcatArrayOfWords(words) {

}

// Takes an array of words, reverses them, and concatenates them together to form a sentence.
function ConcatAndReverseArrayOfWords(words) {

}

// Checks to see if a word exists within a sentence.
function CheckForWordInSentence(sentence, word) {

}

// Tests if a number's square root is a whole number.
function TestIfSquareRootIsWholeNumber(number) {

}

// Returns the sum of an array of numbers passed-in.
function AddArrayOfNumbers(numbers) {

}

// Gets a random whole number between 0 and the number passed in (maxNumber).
function GetRandomInteger(maxNumber) {

}

//This Qunit will check the ConvertFahrenheitToCelsius Functiion
QUnit.test("ConvertFahrenheitToCelsius", function(assert) {
    //Test case 1: 32°F should be 0°C
    assert.equal(ConvertFahrenheitToCelsius(32), 0, "32°F should be 0°C");
    //Test case 1: 50°F should be 10°C
    assert.equal(ConvertFahrenheitToCelsius(50), 10, "50°F should be 10°C");
    //Test case 1: 68°F should be 20°C
    assert.equal(ConvertFahrenheitToCelsius(68), 20, "68°F should be 20°C");
    //Test case 1: 86°F should be 30°C
    assert.equal(ConvertFahrenheitToCelsius(86), 30, "86°F should be 30°C");
    //Test case 1: 104°F should be 40°C
    assert.equal(ConvertFahrenheitToCelsius(104), 40, "104°F should be 40°C");
  });
  
//This Qunit will check the ReturnOnInvestment Functiion
QUnit.test("ReturnOnInvestment", function(assert) {
  // Test case 1: revenue = 100, cost = 50, ROI should be 100%
  assert.equal(ReturnOnInvestment(100, 50), 100, "ROI should be 100%");
  // Test case 2: revenue = 90, cost = 80, ROI should be -20%
  assert.equal(ReturnOnInvestment(90, 80), 12.5, "ROI should be 12.5%");
  // Test case 3: revenue = 0, cost = 0, ROI should be NaN
  assert.ok(isNaN(ReturnOnInvestment(0, 0)), "ROI should be NaN");
  // Test case 4: revenue = 0, cost = 100, ROI should be -100%
  assert.equal(ReturnOnInvestment(0, 100), -100, "ROI should be -100%");
});

//This Qunit will check the ReturnOnInvestment Functiion
QUnit.test("CalculateCompoundInterest", function(assert) {
   // Test case 1: principal = 1000, rate = 0.05, timesPerYear = 12, years = 10, interest should be 647.01
   assert.equal(CalculateCompoundInterest(1000, 0.05, 12, 10), 647.01, "Interest should be 647.01");
   // Test case 2: principal = 5000, rate = 0.02, timesPerYear = 4, years = 5, interest should be 524.48
  assert.equal(CalculateCompoundInterest(5000, 0.02, 4, 5), 524.48, "Interest should be 524.48");
  // Test case 3: principal = 0, rate = 0.01, timesPerYear = 1, years = 1, interest should be 0
  assert.equal(CalculateCompoundInterest(0, 0.01, 1, 1), 0, "Interest should be 0");

});

//Qunit test for the convert celsius to fahrenheit.
QUnit.test("ConvertCelsiusToFahrenheit", function(assert){
  // Test case 1: 0 degrees should be 32 in fahrenheit
  assert.equal(ConvertCelsiusToFahrenheit(0), 32, "Answer should be 32°F")
  // Test case 2: 10 degrees should be 50
  assert.equal(ConvertCelsiusToFahrenheit(10), 50, "Answer should be 50°F")
  // Test case 3: Test if the formula works for decimals
  assert.equal(ConvertCelsiusToFahrenheit(1), 33.8, "Answer should be 33.8°F")
  // Test case 4: Test if the formula works for decimals
  assert.equal(ConvertCelsiusToFahrenheit(5.63), 42.13, "Answer should be 42.13°F")
  // Test case 5: Test if the formula works for negative numbers
  assert.equal(ConvertCelsiusToFahrenheit(-32), -25.6, "Answer should be -25.6°F")
});

// Qunit test for the conversion rate
QUnit.test("ConversionRate", function(assert) {
  // Tests for a perfect conversion rate
  assert.equal(ConversionRate(10, 10), 100, "The rate of conversion should be 100%")
  // Tests for a half conversion rate
  assert.equal(ConversionRate(8, 4), 50, "The rate of conversion should be 50%")
  // Tests for a conversion rate greater than 100%, just in case
  assert.equal(ConversionRate(17, 32), 188.24, "The conversion rate should be 188.24%")
  // Tests for a number with a decimal, although its highly unlikely .8 of a person clicked your site.
  assert.equal(ConversionRate(37, 32.8), 88.65, "The conversion rate should be 88.65%")
});

// Qunit test for the price calculation
QUnit.test("calculatePrice", function(assert) {
  // Test case 1: No items in the cart, no discount, no tax.
  // arrange
  var expected, actual;
  const cartItems1 = [];
  const discountPercent1 = 0;
  const taxRate1 = 0;
  // act
  actual = calculatePrice(cartItems1, discountPercent1, taxRate1);
  expected = "0.00";
  // assert
  assert.equal(actual, expected, "Empty cart returns 0");
  
  // Test case 2: One item in the cart, no discount, no tax.
  // arrange
  var expected, actual;
  const cartItems2 = [{cost: 10, quantity: 1}];
  const discountPercent2 = 0;
  const taxRate2 = 0;
  // act
  actual = calculatePrice(cartItems2, discountPercent2, taxRate2);
  expected = "10.00";
  // assert
  assert.equal(actual, expected, "One item in cart returns correct subtotal");
  
  // Test case 3: Multiple items in the cart, with discount and tax.
  const cartItems3 = [{cost: 10, quantity: 2}, {cost: 5, quantity: 3}];
  const discountPercent3 = 20;
  const taxRate3 = 10;
  assert.equal(calculatePrice(cartItems3, discountPercent3, taxRate3), "30.80", "Multiple items in cart with discount and tax returns correct total");
  });