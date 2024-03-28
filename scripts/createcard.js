document.getElementById("preview").addEventListener("click", function(){
    document.getElementsByClassName("title-text")[0].innerText  = document.getElementById("title").value
    document.getElementsByClassName("subtitle-text")[0].innerText  = document.getElementById("subtitle").value
    document.getElementsByClassName("to-text")[0].innerText  = document.getElementById("to").value
    document.getElementsByClassName("message-text")[0].innerText  = document.getElementById("message").value
    document.getElementsByClassName("from-text")[0].innerText  = document.getElementById("from").value

});

document.getElementsByClassName("card-form")[0].addEventListener("submit", function(){
    var cards = JSON.parse(localStorage.getItem("cards")) || [];;        
    cards.push({
        to: document.getElementById("to").value,
        from: document.getElementById("from").value,
        title: document.getElementById("title").value,
        subtitle: document.getElementById("subtitle").value,
        message: document.getElementById("message").value
    });
    localStorage.setItem("cards", JSON.stringify(cards));
});

