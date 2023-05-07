// this js will include overall functions for all pages

//preloader js 
//set up an event listener for when DOMContent is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  //use the method to find the preloader element using "preloader" ID 
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    //sets up an event listener for when the entire page is fully loaded.
    window.addEventListener('load', () => {
      //adds a CSS class to the preloader element after a 1 second delay, which could hide the preloader or display a loading animation.
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      // removes the preloader element from the DOM after a 2.8 second delay
      setTimeout(() => {
        preloader.remove();
      }, 2800);
    });
  }

  /**
   * Mobile nav toggle
   */
    // Use document.querySelector to find elements from the page with the class ".mobile-nav-show" and '.mobile-nav-hide', assign them to the variables
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  //uses the method to find all elements on the page with the class .mobile-nav-toggle and loop through each element using forEach() method 
  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    //sets up an event listener for each toggle element. When a click event is detected, it prevents the default behavior (i.e. following a link or submitting a form), and calls the mobileNavToogle() function.
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
  //uses the document.querySelector() method to find the <body> element and toggles the CSS class .mobile-nav-active on or off depending on whether it is currently present.
  document.querySelector('body').classList.toggle('mobile-nav-active');
  // toggles the CSS class .d-none on or off for the mobileNavShow element, which could hide or display it.
  mobileNavShow.classList.toggle('d-none');
  // toggles the CSS class .d-none on or off for the mobileNavHide element, which could hide or display it.
  mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  // use the method to find the element ID "navbar a" and loop through each element using forEach and assign it to navbarlink variable
  document.querySelectorAll('#navbar a').forEach(navbarlink => {
    //checks whether the current navbarlink element has a hash property. If it does not have a hash property, the function returns early and does not execute the remaining code for this element.
    if (!navbarlink.hash) return;
    // use the method to find the element ID in navbarlink's hash property. If no such element exists, the function returns early and does not execute the remaining code for this element.
    let section = document.querySelector(navbarlink.hash);
    if (!section) return;
    //sets up an event listener for when the navbarlink element is clicked.
    navbarlink.addEventListener('click', () => {
      //checks whether the .mobile-nav-active class is present on the <body> element. If it is, it calls the mobileNavToogle() function to close the mobile navigation menu.
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  // use the method to find 'a' element then assign it to the navDropdowns variable.
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
     //sets up an event listener for when the el element is clicked.
    el.addEventListener('click', function(event) {
      // prevents the default action of clicking the el element, which would normally follow its href attribute.
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();

        // use the classList.toggle() method to add or remove the classes active and dropdown-active to the el element
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        // use the method to find the element, it use 'classList.toggle' to switch between the two elements 'up and down'.
        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    //declares a function named togglescrollTop that will be used to add or remove the active class from the scrollTop element based on the scroll position.
    const togglescrollTop = function() {
      //check whether the scrollY property of the window object is greater than 100. If it is, it adds the active class to the scrollTop element, otherwise it removes it.
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    // add event listener to window and document objects to call the function whether the page loads or scrolls.
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    // add event listener to scrollTop element to listen to click event. When click it called method
    scrollTop.addEventListener('click', window.scrollTo({
      // the objects containing in the method.
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  // create the variable and assign it to the new instance of the class.
  const glightbox = GLightbox({
    //the selector select all element with 'glightbox' class
    selector: '.glightbox' //I use selector to select elements to be used as triggers for the light box
  });

/**
 * Init swiper slider with 1 slide at once in desktop view
 */
// initialize the new instance of the swiper class.
new Swiper('.slides-1', {
  speed: 600,
  //enables the looping of the slider. When the last slide is reached, it will start over from the beginning.
  loop: true,
  //sets up automatic playback of the slider
  autoplay: {
    delay: 3000,
    disableOnInteraction: false // prevent slider from stopping autoplay when user interacting.
  },
  //set the number of slides to display
  slidesPerView: 'auto',
  //configure pagination for the slider
  pagination: {
    el: '.swiper-pagination', // where should be display
    type: 'bullets',
    clickable: true //  clicking on the pagination bullets to navigate directly to a specific slide.
  },
  // sets up navigation arrows for the slider.
  navigation: {
    // the options will act as next and previous buttons.
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  
});


  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //break point for responsive swiper slider
    breakpoints: {
      //when viewport width is 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });


  /**
   * Animation on scroll function and init
   */
  // this function use the AOS library with specific configuration options
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,// whether it should occur once or everytime it is scrolled
      mirror: false// Whether the animation should be mirrored when scrolling back up the page
    });
  }
  // waits for window fully load
  window.addEventListener('load', () => {
    aos_init();// call the funtion after the window is fully loaded.
  });
});
