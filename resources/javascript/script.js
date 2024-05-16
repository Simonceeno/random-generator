// Initializing variables
let card = document.querySelector(".cardbox")
let frontCard = document.querySelector(".front-card")
let backCard = document.querySelector(".back-card")
let paragraph = document.getElementById("quote")
let quotations = ["The only true wisdom is in knowing you know nothing. - Socrates, from Plato's dialogues", "Happiness depends upon ourselves. - Aristotle, from Nicomachean Ethics", "You are never too old to set another goal or to dream a new dream. - C.S. Lewis, from The Weight of Glory", "Change your thoughts and you change your world. - Norman Vincent Peale, from The Power of Positive Thinking"]

// Flipping card effect function (adding and removing a class)
flipCard = () =>{
frontCard.classList.toggle("hidden");
backCard.classList.toggle("display");
/* card.style.transition = "transform 1500ms";
card.style.transform = "rotateY(180deg)";
card.style.transformStyle = "preserve-3d"; */
}

card.addEventListener("click", flipCard);

// Quotation randomizer function
randomizer = () =>{
    let randomNum = Math.floor(Math.random()*quotations.length);
    paragraph.innerText = quotations[randomNum];
}

card.addEventListener("click", randomizer);