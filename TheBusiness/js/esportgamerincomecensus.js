// Specify the API endpoint URL
const endpointUrl = "https://api.census.gov/data/2018/acs/acs1?get=NAME,B19013_001E&for=us:1";
      
// Fetch the data from the API endpoint
fetch(endpointUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the median household income value from the API response
    const medianIncome = parseInt(data[1][1]);

    // Estimate the median income of an esports gamer based on the median income of the overall population
    const esportsIncome = Math.round(medianIncome * 1.5);

    // Display the median income of an esports gamer on the webpage
    const esportsIncomeElem = document.getElementById("esports-income");
    esportsIncomeElem.textContent = `$${esportsIncome} (USD)`;
  })
  .catch(error => console.error(error));