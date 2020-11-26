$(Document).ready(function() {
    const momentDate = moment().format("(M/D/YYYY)"); // current day
    const inputEl = $("#city"); // search input field
  
    // maine content
    const titleEl = $("h3.city-title"); // title of main content
    const dateEl = $("h5.date");
    const titleTemp = $("p.title-temp");
    const titleHum = $("p.title-hum");
    const titleWind = $("p.title-wind");
    const titleUv = $("p.title-uv");
  
    // forecast cards
  
    // Function to get
    function getCoordinates() {
      const inputName = inputEl.val();
      const queryURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        inputName +
        "&apikey=287d0d4287a1503fd8b1b61024160e0a";

  
      $.get(queryURL).then(function (response) {
        const lat = response.coord.lat;
        const lon = response.coord.lon;
  
        console.log(lat);
        console.log(lon);
  
        // creating button below search bar
        var newLocationDiv = $("<a>").addClass("collection-item").text(inputName);
        $(".collection").prepend(newLocationDiv);
  
        titleEl.text(inputName); 
        dateEl.text(momentDate); 
      });
    }
  
    let savedCities = [];
  
    $(".searchBtn").on("click", function () {
      var cityInput = inputEl.val();
  
      localStorage.setItem("savedCities", JSON.stringify(cityInput));
  
      savedCities.push(cityInput);
  
      getCoordinates();
  
      console.log(savedCities);
  
      inputEl.val(""); // clearing searchbar text
  
    });
  
    function recentSearches() {
      $.each(storedCities, function (i) {
        // creating button below search bar
        var newLocationDiv = $("<a>").addClass("collection-item").text(storedCities[i]);
        $(".collection").prepend(newLocationDiv);
      });
  
    }
  
});