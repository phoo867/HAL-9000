$(document).ready(function () {
    showQuote();
    changeReview();
});

// An array holding all of the possible header quotes.
var possibleQuotes = [
    'Play is our brains favorite way of learning. - Diane Ackerman',
    'Toys are not just playthings. They are the building blocks of a childs future. - Kay Redfield Jamison',
    'The most effective kind of education is that a child should play amongst lovely things. - Plato',
    'The creation of something new is not accomplished by the intellect, but by the play instinct. - Carl Jung',
    'Play is often talked about as if it were a relief from serious learning. But for children, play is serious learning. - Mr. Rogers'
];

function showQuote() {
    // Get a random quote from the quote array.
    var randomQuote = possibleQuotes[Math.floor(Math.random() * 5)];

    // Put the quote into the quote container element on the page.
    document.getElementById('quoteContainer').innerHTML = randomQuote;
}

// List of reviews
var review = [
    'I recently purchased a set of building blocks from this toy company and I was blown away by the quality! The blocks are made of sturdy materials and are perfect for my childs little hands. The best part is that they come in different shapes and sizes, allowing my child to build endless creations. I highly recommend this toy company for anyone looking for quality toys that promote creativity and imagination!',
    'I bought a remote-controlled car for my sons birthday from this toy company and he absolutely loves it! The car is easy to control and has provided endless hours of fun for my son. The customer service was also fantastic - the staff were friendly and helpful in answering all my questions about the product.',
    'My daughter received a dollhouse from this toy company as a gift, and it has quickly become her favorite toy. The attention to detail on the dollhouse is impressive, and my daughter loves arranging the furniture and playing with the little figurines. I appreciate that the toy is made from eco-friendly materials and is built to last.',
    'I recently purchased a board game from this toy company and I was impressed with how fun and engaging it was. The game was easy to learn and provided hours of entertainment for my family. The quality of the materials was also top-notch and I appreciated that the game was made in an eco-friendly manner.',
    'I bought a set of puzzles for my son from this toy company and I couldnt be happier with my purchase. The puzzles are challenging enough to keep my son engaged, but not so difficult that he gets frustrated. The designs are colorful and eye-catching, making them fun to put together. I would highly recommend this toy company for anyone looking for quality puzzles that promote cognitive development.'
  ];
  
  let index = 0;
  const interval = 10000; // 10 seconds
  
// Swiches the review being displayed.
  function changeReview() {
    const quoteElement = document.getElementById('reviews');
    quoteElement.innerText = review[index];
    
    index = (index + 1) % review.length; // Fixed the variable name
    setTimeout(changeReview, interval);
  }

// Added Call the function to start the reviews switching
changeReview();


