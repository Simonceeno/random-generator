// Initializing variables
let card = document.querySelector(".cardbox")
let frontCard = document.querySelector(".front-card")
let backCard = document.querySelector(".back-card")
let paragraph = document.getElementById("quote")
let quotes = ["What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar","The best way out is always through. - Robert Frost","It is never too late to be what you might have been. - George Eliot","Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha","You must be the change you wish to see in the world. - Mahatma Gandhi","The unexamined life is not worth living. - Socrates, from Plato's Apology","He who has a why to live can bear almost any how. - Friedrich Nietzsche, from Twilight of the Idols","Out of your vulnerabilities will come your strength. - Sigmund Freud, from The Interpretation of Dreams","To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson, from Self-Reliance","The only true wisdom is in knowing you know nothing. - Socrates, from Plato's dialogues", "Happiness depends upon ourselves. - Aristotle, from Nicomachean Ethics", "You are never too old to set another goal or to dream a new dream. - C.S. Lewis, from The Weight of Glory", "Change your thoughts and you change your world. - Norman Vincent Peale, from The Power of Positive Thinking"]

// Flipping card effect function (toggling a class by adding it or removing it)
flipCard = () =>{
frontCard.classList.toggle("hidden");
backCard.classList.toggle("display");
/* Trying to add a real flipping effect
card.style.transition = "transform 1500ms";
card.style.transform = "rotateY(180deg)";
card.style.transformStyle = "revert"; 
card.classList.toggle("flipfront");
card.classList.toggle("flipback");*/
}

card.addEventListener("click", flipCard);

// Quote randomizer function
randomizer = () =>{
    let randomNum = Math.floor(Math.random()*quotes.length);
    paragraph.innerText = quotes[randomNum];
}

card.addEventListener("click", randomizer);