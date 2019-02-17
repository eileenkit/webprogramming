var greatSpeech = [
	{
		author: "Churchill", 
		year: "1940",
		bce: false,
	},
	{
		author: "Ghandi",
		year: "1942",
		bce: false,
	},
	{
		author: "Demosthenes",
		year: "342",
		bce: true,
	}];
var yearDifference = greatSpeech[1].year-greatSpeech[0].year;

console.log("Ghandi's speech and Churchill's speech are " + yearDifference + " years apart.");


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are " + greatSpeech.length + " speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log("This speech was written by " + greatSpeech[0].author + " in " + greatSpeech[0].year + ". It is " + greatSpeech[0].bce + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log("This speech was written by " + greatSpeech[1].author + " in " + greatSpeech[1].year + ". It is " + greatSpeech[1].bce + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log("This speech was written by " + greatSpeech[2].author + " in " + greatSpeech[2].year + ". It is " + greatSpeech[2].bce + " that this year is B.C.E.");
});

