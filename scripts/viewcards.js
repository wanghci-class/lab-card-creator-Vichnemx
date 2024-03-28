let cards = JSON.parse(localStorage.getItem("cards"));
let template = document.querySelector("#card-template");
let cardList = document.querySelector("#card-list");

for ( let i = 0; i< cards.length; i++){
    let card = cards[i];
    console.log(card);

    let cardView = template.content.cloneNode(true);


    let titleText = cardView.querySelector(".title-text");
    titleText.textContent = card.title;
    cardView.querySelector(".subtitle-text").textContent = card.subtitle;
    cardView.querySelector(".to-text").textContent = card.to;
    cardView.querySelector(".message-text").textContent =  card.message;
    cardView.querySelector(".from-text").textContent = card.from;

//todo rest of things


    let deleteBtn = cardView.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function(){
        console.log(i);
        cards.splice(i,1);
        localStorage.setItem("cards", JSON.stringify(cards));
        location.reload();
    });
    cardList.appendChild(cardView)

}