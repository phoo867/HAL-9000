$(document).ready(function() {
  
  /**
   * Hero carousel indicators
   */
  let homeCarouselIndicators = $("#home-carousel-indicators");
  let homeCarouselItems = $("#homeCarousel .carousel-item");
  
  homeCarouselItems.each((index, item) => {
    if (index === 0) {
      homeCarouselIndicators.append("<li data-bs-target='#homeCarousel' data-bs-slide-to='" + index + "' class='active'></li>");
    } else {
      homeCarouselIndicators.append("<li data-bs-target='#homeCarousel' data-bs-slide-to='" + index + "'></li>");
    }
  });

})()
 