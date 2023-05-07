const testimonialsData = [
  {
    stars: 5,
    text: "Amelia's recipe blog is a culinary gem! Her creative and diverse recipes, along with clear instructions, have expanded my cooking skills. I love how she incorporates her travel experiences into her dishes, adding a unique touch. Thanks to her blog, I've become the go-to chef among my friends!",
    imageUrl: "../images/TestimonialImages/Profile1.jpg",
    name: "Saul Goodman"
  },
  {
    stars: 5,
    text: "Amelia's recipe blog is my go-to resource for all things food-related. Her easy-to-follow recipes, coupled with personal stories of her travel adventures, make cooking feel like a journey itself. I trust her guidance every step of the way.",
    imageUrl: "../images/TestimonialImages/Profile2.jpg",
    name: "Sara Wilsson"
  },

  {
    stars: 5,
    text: "Amelias recipe blog is a culinary treasure trove! From gluten-free to vegan options, her diverse recipes cater to various dietary preferences. Her passion for travel shines through, taking my taste buds on an international adventure. Her organized blog makes it easy to find the perfect recipe for any occasion.",
    imageUrl: "../images/TestimonialImages/Profile3.jpg",
    name: "Olivia Parker"
  },

  {
    stars: 5,
    text: "Amelias recipe blog is a game-changer! Her creative and detailed recipes make cooking approachable. I love how her travel-inspired dishes add a sense of adventure to my everyday meals. Her blog is a constant source of inspiration. Highly recommended!",
    imageUrl: "../images/TestimonialImages/Profile4.jpg",
    name: "Ava Reynolds"
  },

  {
    stars: 5,
    text: "Amelia Johnsons blog has become my go-to source for culinary inspiration. Her recipes are not only incredibly delicious but also accessible for home cooks like myself. I love how she infuses her passion for travel into her dishes, transporting me to different corners of the world through flavors and ingredients!'",
    imageUrl: "../images/TestimonialImages/testimonials-2.jpg",
    name: "Sophia Bennett"
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


function populateTestimonial() {
  // Iterate over the testimonialsData array and generate HTML for each testimonial object
  return testimonialsData
    .map((testimonial) => {  //.map() allows you to iterate over each element in the array and apply a function to each element, creating a new array with the results of the function applied to the original elements.
      // Generate the stars HTML using the testimonial's stars property
      const starsHTML = '<i class="bi bi-star-fill"></i>'.repeat(testimonial.stars);

      // Return the HTML string for each testimonial, using the data from the testimonial object
      return `
        <div class="swiper-slide">
          <div class="testimonial-item">
            <div class="stars">${starsHTML}</div> <!-- Insert the stars HTML -->
            <p>${testimonial.text}</p> <!-- Insert the testimonial text -->
            <div class="profile mt-auto">
              <img src="${testimonial.imageUrl}" class="testimonial-img" alt=""> <!-- Insert the testimonial image URL -->
              <h3>${testimonial.name}</h3> <!-- Insert the testimonial author's name -->
            </div>
          </div>
        </div>`;
    })
    // Join the generated HTML strings into a single string
    .join("");
}

// function populateTestimonial() {
//   const testimonialsContainer = document.getElementById('swiper-wrapper');

//   const length = reviewArray.length;

//   for (let i = 0; i < length; i++) {
//     const testimonial = reviewArray[i];

//     const starsHtml = '<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>';
//     const testimonialHtml = `
//       <div class="swiper-slide">
//         <div class="testimonial-item">
//           <div class="stars">
//             ${starsHtml}
//           </div>
//           <p>
//             "${testimonial.comment}"
//           </p>
//           <div class="profile mt-auto">
//             <img src="${testimonial.image}" class="testimonial-img" alt="">
//             <h3>${testimonial.name}</h3>
//           </div>
//         </div>
//       </div>
//     `;

//     testimonialsContainer.innerHTML += testimonialHtml;
//   }
//}
