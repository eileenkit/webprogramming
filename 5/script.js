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
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

var yourName = window.prompt("What is your name?");
 
if (yourName ==="") {
  console.log("Ok, I'll just call you User.");
  yourName = "User";
  } else {console.log("Hi "+ yourName + "!");
  }


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var text;
  var favoriteAuthor = window.prompt("Who is your favorite author?");

  switch (favoriteAuthor){
    case "Churchill":
    window.alert(churchillSpeech.author + " was " + churchillSpeech.authorAge + " during this speech.");
    break;

    case "Ghandi":
    window.alert(ghandiSpeech.author + " was " + ghandiSpeech.authorAge + " during this speech.");
    break;

    case "Demosthenes":
    window.alert(demosthenesSpeech.author + " was " + demosthenesSpeech.authorAge + " during this speech.");
    break;

    default:
    window.alert("Hmm, it looks like you didn't enter an appropriate name. Make sure you have spelled your favorite author's name correctly and capitalized the first letter.");
    break;
  }

});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  window.alert("This speech was written by " + churchillSpeech.author + " in " + churchillSpeech.year + ".");
  if (churchillSpeech.yearIsBCE === true) {
    console.log("This speech took place before the common era.")
  }
    else {
  console.log("This speech took place after the common era.")}

  if (churchillSpeech.year > ghandiSpeech.year && churchillSpeech.year > demosthenesSpeech.year){
  window.alert("This is the most recent speech on the page.")
  }
  if (churchillSpeech.year < ghandiSpeech.year && churchillSpeech.year < demosthenesSpeech.year){
    window.alert("This is the oldest speech on the page.")
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  window.alert("This speech was written by " + ghandiSpeech.author + " in " + ghandiSpeech.year + ".");
  if (ghandiSpeech.yearIsBCE === true) {
    console.log("This speech took place before the common era.")
  }
    else {
  console.log("This speech took place after the common era.")}

  if (ghandiSpeech.year > churchillSpeech.year && ghandiSpeech.year > demosthenesSpeech.year){
  window.alert("This is the most recent speech on the page.")
  }
  if (ghandiSpeech.year < churchillSpeech.year && ghandiSpeech.year < demosthenesSpeech.year){
    window.alert("This is the oldest speech on the page.")
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  window.alert("This speech was written by " + demosthenesSpeech.author + " in " + demosthenesSpeech.year + ".");
  if (demosthenesSpeech.yearIsBCE === true) {
    console.log("This speech took place before the common era.")
  }
    else {
  console.log("This speech took place after the common era.")}

  if (demosthenesSpeech.year > churchillSpeech.year && demosthenesSpeech.year > ghandiSpeech.year){
  window.alert("This is the most recent speech on the page.")
  }
  if (demosthenesSpeech.year < churchillSpeech.year && demosthenesSpeech.year < ghandiSpeech.year){
    window.alert("This is the oldest speech on the page.")
  }

});














