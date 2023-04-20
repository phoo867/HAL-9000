// page loading time for footer
$(document).ready(function() {
  var loadTime = new Date();
  var hours = loadTime.getHours().toString().padStart(2, '0');
  var minutes = loadTime.getMinutes().toString().padStart(2, '0');
  var seconds = loadTime.getSeconds().toString().padStart(2, '0');
  var timeString = hours + ":" + minutes + ":" + seconds;
  $("#page-load-time").html(timeString);
});

// get the current year
$(document).ready(function() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  const currentYearSpan = $("#currentYear");
  if (currentYearSpan.length) {
    currentYearSpan.text(getCurrentYear());
  }
});