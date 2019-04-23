let startTime = new Date().getTime();

const img1 = "url(img/bananas.png)";
const img2 = "url(img/carrot.png)";
const img3 = "url(img/broccoli.png)";
const img4 = "url(img/lemon.png)";
const img5 = "url(img/watermelon.png)";
const img6 = "url(img/tomato.png)";
const img7 = "url(img/plum.png)";
const img8 = "url(img/raspberry.png)";
const img9 = "url(img/cucumber.png)";
const img10 = "url(img/grapes.png)";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

let cards = document.querySelectorAll("div");
cards = [...cards];
const button = document.getElementById("start");

let arr = [];
let activeCard = "";
const guessedCards = [];


		//ukrywanie kart po losowaniu
function hideCards() {
	cards.forEach(card => {
		card.classList.add("hidden");
	})
}
		
		//losowanie kart
function assignImages() {
	button.style.display = "none";
	cards.forEach(card => {
		const arr = images;
		const randomNum = Math.floor(Math.random() * arr.length);	
		card.style.backgroundImage = arr[randomNum];
		card.classList.add("fruit");
		arr.splice(randomNum, 1);
	})
	
	setTimeout(hideCards, 3000);
}
		
		//zakrycie nieodgatniętych / zatwierdzenie odgadniętych
function getHide() {
	const card1 = document.getElementById(arr[0]);
	const card2 = document.getElementById(arr[1]);
	const card1Url = card1.style.backgroundImage;
	const card2Url = card2.style.backgroundImage;
	
	if (card1Url === card2Url) {
		card1.classList.add("guessed");
		card2.classList.add("guessed");
		guessedCards.push(card1);
		guessedCards.push(card2);
		arr = [];
		if (guessedCards.length === 20){
			const endTime = new Date().getTime();
			const duringTime = (endTime - startTime).toLocaleString();
			alert(`Gratulations! Your time: ${duringTime} ms!`)
			window.location.reload();
		}
	} else {
		card1.classList.add("hidden");
		card2.classList.add("hidden");
	arr = [];
	}
}

		//odkrycie klikniętej karty => następnie zakrycie
function showCard(){
	if (!this.classList.contains("hidden")){
		return;
	}
	if (arr.length < 2) {
		activeCard = this.id;
		arr.push(activeCard);
		this.classList.remove("hidden");
	}
	if (arr.length === 2) {
		setTimeout(getHide, 500);
	}
}

cards.forEach(e => e.addEventListener("click", showCard));

button.addEventListener("click", assignImages);


