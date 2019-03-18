//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

var consoleDisplay = document.getElementById('ConsoleDisplay');
var oldest = speechesArray[0].year,
    newest = speechesArray[0].year;

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

 
  //function to display author name and year
  function getAuthorYearAndString(speeches){
    consoleDisplay.innerHTML = "This speech was written by " + speeches.author + " in " + speeches.year;
  }

  //function to display BCE value
  function displayBCEString(speeches){
    if (speeches.yearIsBCE ===true){
      consoleDisplay.innerHTML += '<br>This speech took place before the common era.';
    }else{
      consoleDisplay.innerHTML += '<br>This speech took place during the common era.';
         }
  };
    
  //for loop determining oldest and youngest speech
  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  //function to get oldest or youngest speech
  function getOldestOrYoungestString(speeches){
  if(speeches.year === oldest){
    consoleDisplay.innerHTML += '<br>This is the oldest speech on the page.';
  }
  if(speeches.year === newest){
    consoleDisplay.innerHTML += '<br>This is the most recent speech on the page.';
  }
}
  

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
    getAuthorYearAndString(speechesArray[0]);
    displayBCEString(speechesArray[0]);
    getOldestOrYoungestString(speechesArray[0]);
  });

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
    getAuthorYearAndString(speechesArray[1]);
    displayBCEString(speechesArray[1]);
    getOldestOrYoungestString(speechesArray[1]);
  });

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
    getAuthorYearAndString(speechesArray[2]);
    displayBCEString(speechesArray[2]);
    getOldestOrYoungestString(speechesArray[2]);
  });