//store number of clicks
var count = 0;


//call events
addEvent();


function addEvent() {

	//attach event to button
	document.querySelector('button').addEventListener('click', startGame);

	//attach event to body
	document.body.addEventListener('click', Scorecounter);

}


function startGame() {

	//call function
	gameFunctionality()

}


function gameFunctionality() {




	//get element from dom
	var getDomElem = document.querySelectorAll('.mole-container');
	var time = document.querySelector('.min');
	var zero = document.querySelector('.zero');
	var message = document.querySelector('.gameOver-container h2');

	//get length
	var getDomLength = getDomElem.length;

	//set coutdowm value
	time.textContent = 59;

	//hide message
	message.style.visibility = 'hidden';

	var timer = setInterval(function () {

		//call randomNumber function and store in variable
		var random = randomNumber(getDomLength);

		//add class
		getDomElem[random].classList.add('mole-wrapper');

		//show element
		getDomElem[random].style.visibility = 'visible';

		//setTImout hides element
		setTimeout(function () {

			//hide element
			getDomElem[random].style.visibility = 'hidden';

			//remove class from element
			getDomElem[random].classList.remove('mole-wrapper');

		}, 1300);

		//start countdown
		countDown(time, timer, zero, message);

	}, 1600);


	//deactivate button
	deactivateButton();
}


//generate random number
function randomNumber(num) {

	var random = Math.floor(Math.random() * num);

	return random;
}


//click counter
function Scorecounter(e) {

	//get dom element
	var score = document.querySelector('.score');

	//increment count if mole is clicked
	if (e.target.classList.contains('mole')) {
		
		count++;
		
		//show whack picture
		e.target.nextElementSibling.style.display = 'inline-block';
		
		//hide mole picture
		e.target.style.display = 'none';
		
		//delay 
		setTimeout(function () {

			//show mole picture
			e.target.style.display = 'inline-block';
			
			//hide wack picture
			e.target.nextElementSibling.style.display = 'none';
			
			
			
		}, 700);

	}

	//set score value
	score.textContent = count;

	//reset score
	if (e.target.classList.contains('button')) {
		count = 0;
		score.textContent = count;
	}


}

//countdown timer
function countDown(time, timer, zero, message) {


	if (time.textContent > 10) {

		//set element to empty string
		zero.textContent = '';


	} else {

		//set element value
		zero.textContent = 0;

	}


	if (time.textContent == 1) {
		//set element to empty string
		zero.textContent = '';

		//stop setInterval
		clearInterval(timer);

		//reactive start button
		activateButton();


		setTimeout(function () {

			time.textContent += '0';

			//show message
			message.style.visibility = 'visible';

		}, 1000);

	}

	//decreement time
	time.textContent--;

}

function deactivateButton() {
	document.querySelector('button').disabled = true;
}

function activateButton() {
	document.querySelector('button').disabled = false;
}