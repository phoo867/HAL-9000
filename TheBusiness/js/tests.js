// Test getCurrentYear function
QUnit.test("getCurrentYear function returns the current year", function(assert) {
    const currentYear = new Date().getFullYear();
    assert.equal(getCurrentYear(), currentYear, "getCurrentYear function returns the current year");
  });