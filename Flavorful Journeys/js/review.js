var reviewArray = [
  {name: 'Saul Goodman',
      image: '../images/TestimonialImages/Profile1.jpg',
      comment: 'Amelias recipe blog is a culinary gem! Her creative and diverse recipes, along with clear instructions, have expanded my cooking skills. I love how she incorporates her travel experiences into her dishes, adding a unique touch. Thanks to her blog, Ive become the go-to chef among my friends!'
      },

  {name: 'Sara Wilsson',
      image: '../images/TestimonialImages/Profile2.jpg',
      comment: 'Amelias recipe blog is my go-to resource for all things food-related. Her easy-to-follow recipes, coupled with personal stories of her travel adventures, make cooking feel like a journey itself. I trust her guidance every step of the way.'
      },

  {name: 'Olivia Parker',
      image: '../images/TestimonialImages/Profile3.jpg',
      comment: 'Amelias recipe blog is a culinary treasure trove! From gluten-free to vegan options, her diverse recipes cater to various dietary preferences. Her passion for travel shines through, taking my taste buds on an international adventure. Her organized blog makes it easy to find the perfect recipe for any occasion.'
      },

  {name: 'Ava Reynolds',
      image: '../images/TestimonialImages/Profile4.jpg',
      comment: 'Amelias recipe blog is a game-changer! Her creative and detailed recipes make cooking approachable. I love how her travel-inspired dishes add a sense of adventure to my everyday meals. Her blog is a constant source of inspiration. Highly recommended!'
      },

  {name: 'Sophia Bennett',
      image: '../images/TestimonialImages/Profile5.jpg',
      comment: 'Amelia Johnsons blog has become my go-to source for culinary inspiration. Her recipes are not only incredibly delicious but also accessible for home cooks like myself. I love how she infuses her passion for travel into her dishes, transporting me to different corners of the world through flavors and ingredients. From comforting classics to exciting new creations, her blog never fails to impress and has truly elevated my cooking game!'
      },
    ]

function submitform() {
    event.preventDefault(); // prevent the default form submission behavior
  
    // Get the review data from the form
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;
  
    
    var review = {
      name: name,
      image: '../images/TestimonialImages/Profile1.jpg',
      comment: comment
    };

    reviewArray.push(review);

    window.alert("Your review has been recieved!")
};

function populateTestimonial(){
  const testimonialsContainer = document.getElementById('swiper-wrapper');

  const length = reviewArray.length;

  for (let i = 0; i < length; i++) {
    const testimonial = reviewArray[i];
    
    const starsHtml = '<i class="bi bi-star-fill"></i>';
    const testimonialHtml = `
      <div class="swiper-slide">
        <div class="testimonial-item">
          <div class="stars">
            ${starsHtml}
          </div>
          <p>
            "${testimonial.comment}"
          </p>
          <div class="profile mt-auto">
            <img src="${testimonial.image}" class="testimonial-img" alt="">
            <h3>${testimonial.name}</h3>
          </div>
        </div>
      </div>
    `;
    
    testimonialsContainer.innerHTML += testimonialHtml;
  }
}