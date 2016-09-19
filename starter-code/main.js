var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
/* if(cardTwo === cardFour)
	alert("Sorry try again");
else if (cardTwo === cardThree)
	alert("sorry try again");
else (cardTwo === cardOne);
	alert("You found a match!");   */

var board = document.getElementById('game-board');

var createBoard = function(){

	for(i=0; i< cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
	}
}

var isMatch = function(cards){
	if(cards[0] === cards[1])
		console.log("Match!");
	else
		console.log("Not match!");
}

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
	if(this.getAttribute('data-card') == "king"){
		this.innerHTML = "<img class=\"card\" src='http://i.imgur.com/bnuv5Im.png'>";
	}else{
		this.innerHTML = "<img class=\"card\" src='http://i.imgur.com/v6buNt2.png'>";
	}


	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		
		setTimeout(function() {unflipAll();},5000);
	}
}
var unflipAll = function(){
	var allCards= document.getElementsByClassName('card');
	for(i=0;i<allCards.length;i++){
		allCards[i].innerHTML = "";
	}
	cardsInPlay = [];
}


createBoard();