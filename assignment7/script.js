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
var sideNav = document.getElementById('SideNav');
var addHeading = document.createElement('h3');
var donationBig = document.createTextNode('Thank you for your generous donation!');
var donationSmall = document.createTextNode('Thank you for you donation of $45');
var donation = "";

sideNav.appendChild(addHeading);

document.getElementById('BtnDonate').addEventListener('click', function(){
  donation = window.prompt('How much would you like to donate?');
  if (donation<100){
	addHeading.appendChild(donationSmall);
	}
  else if (donation >=100){
	addHeading.appendChild(donationBig);
	addHeading.setAttribute("style", "color:red");}
for (i=0; i<speechesArray.length; i++){
	document.getElementsByTagName("article")[i].classList.add("generous-donation");}
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  document.getElementById('ConsoleDisplay').innerHTML= ('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML+=('<br>' + 'This speech took place before the common era.');
  }else{
    document.getElementById('ConsoleDisplay').innerHTML+=('<br>' + 'This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML+=('<br>' + 'This is the oldest speech on the page.');
  }
  if(speechesArray[0].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML+=('<br>' + 'This is the most recent speech on the page.');
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  document.getElementById('ConsoleDisplay').innerHTML= ('<br>' + 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML+=('<br>' + 'This speech took place before the common era.');
  }else{
    document.getElementById('ConsoleDisplay').innerHTML+=('<br>' + 'This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML+=('<br>' + 'This is the oldest speech on the page.');
  }
  if(speechesArray[1].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML+=('<br>' + 'This is the most recent speech on the page.');
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  document.getElementById('ConsoleDisplay').innerHTML= ('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML+=('<br>' + 'This speech took place before the common era.');
  }else{
    document.getElementById('ConsoleDisplay').innerHTML+=('<br>' + 'This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML+=('<br>' + 'This is the oldest speech on the page.');
  }
  if(speechesArray[2].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML+=('<br>' + 'This is the most recent speech on the page.');
  }
});