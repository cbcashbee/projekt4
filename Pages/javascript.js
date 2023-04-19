var news = [
    { title: "UCL søger nye personalemedlemmer til Årsfesten ", content: "Er godt humør, fælleskab og planlægning noget du brænder for? Så meld dig ind i Festudvalget. Klik her." },
    { title: "Fredagsbaren", content: "Tilbud på alt drikkelse til fredagsbaren ved fremvisning af brugeroprettelse." },
    { title: "En god nyhed for dig som studerende", content: "Der er en masse fordele på vej til dig. Stuierabat, resscourser og meget mere. Klik her for at læse mere." },
  ];
  
  var currentNewsIndex = 0; // Variabel til at holde styr på den aktuelle nyhed
  var button = document.querySelector(".newsletter-button");
  var isActive = false; // Variabel til at holde styr på om knappen er aktiveret eller ej
  
  // Function to get next news item
  function getNextNews() {
    var newsItem = news[currentNewsIndex];
    currentNewsIndex = (currentNewsIndex + 1) % news.length;
    return newsItem;
  }
  
  // Add click event listener to the button
  button.addEventListener("click", toggleNewsletter);
  
  // Function to toggle newsletter
  function toggleNewsletter() {
    isActive = !isActive; // Toggle boolean value
  
    if (isActive) {
      generateNews();
    } else {
      document.querySelector(".newsletter").innerHTML = "";
    }
  }
  
  // Function to generate news
  function generateNews() {
    var newsletter = document.querySelector(".newsletter");
    var newsContent = "";
  
    // Generer nyheder i rækkefølge, så titel og indhold passer sammen
    for (var i = 0; i < 3; i++) {
      var newsItem = getNextNews();
      newsContent += `<h2>${newsItem.title}</h2>`;
      newsContent += `<p>${newsItem.content}</p>`;
    }
  
    newsletter.innerHTML = newsContent;
  }
  
  
  