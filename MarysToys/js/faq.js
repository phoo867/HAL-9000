$(".faq-page").click(function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    $(this).toggleClass("active");
  
    /* Toggle between hiding and showing the active panel */
    var body = $(this).next();
    if (body.is(":visible")) {
      body.hide();
    } else {
      body.show();
    }
  });
