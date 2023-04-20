//Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis//


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
  
  //Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis////Edis//

  //Andreas////Andreas////Andreas////Andreas////Andreas////Andreas////Andreas////Andreas////Andreas////Andreas////Andreas//
//array of photos
const photos = [
    "../Images/Arrangementer/olstafet.png", //0
  
    "../Images/Arrangementer/campusfest.png", //1
  
    "../Images/Arrangementer/vandkamp.png", //2
  
    "../Images/Arrangementer/stranden.png", //3
  
    "../Images/Arrangementer/pubcrawl.png" //3
  ];
  
  let slide = document.getElementById("slide");
  const next = document.getElementById("next");
  const previous = document.getElementById("previous");
  
  //set current index
  let i = 0;
  
  //set slide src to current index
  slide.src = photos[i];
  
  previous.onclick = function() {
    //when previous is clicked
    i++;
    //add 1 to current index
    if (i > photos.length - 1) {
      //if current index passes last photo in array
      i = 0;
      //set index back to zero
    }
    slide.src = photos[i];
    //set slide to current index
  };
  
  next.onclick = function() {
    //when btn1 is clicked
    i--;
    //minus 1 from current index
    if (i < 0) {
      //if current index goes below zero
      i = photos.length - 1;
      //set index to the last photo in array
    }
    slide.src = photos[i];
    //display current photo to #slide
  };
  
  //hent htmlelement med id=allimgs
  let allimg_element = document.getElementById("photos")
  
  for(let i = 0; i < photos.length; i++) {
  
    allimgs.innerHTML+="<img src='"+  photos[i]+"'>"
  
  }