// Define getCurrentYear function
function getCurrentYear() {
  return new Date().getFullYear();
}

// Wait for the document to be ready
$(document).ready(function() {
  const currentYearSpan = $("#currentYear");
  if (currentYearSpan.length) {
    currentYearSpan.text(getCurrentYear());
  } else {
    $("body").append(`<span id="currentYear">${getCurrentYear()}</span>`);
  }
});

// Define QUnit test
QUnit.test("getCurrentYear function returns the current year", function(assert) {
  // Ensure that the current year span is on the page
  const currentYearSpan = $("#currentYear");
  assert.ok(currentYearSpan.length, "Current year span exists on the page");

  // Get the current year from the span
  const currentYearFromSpan = parseInt(currentYearSpan.text(), 10);

  // Get the current year using the getCurrentYear() function
  const currentYearFromFunction = getCurrentYear();

  // Assert that the two values are equal
  assert.equal(currentYearFromFunction, currentYearFromSpan, "getCurrentYear function returns the current year");

  // Remove the current year span from the page
  currentYearSpan.remove();
});
