const photos = [
    "../Images/Arrangementer/olstafet.png", //0
  
    "../Images/Arrangementer/campusfest.png", //1
  
    "../Images/Arrangementer/vandkamp.png", //2
  
    "../Images/Arrangementer/Stranden.png", //3
  
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