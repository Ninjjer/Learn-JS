var itemCardSac = document.querySelector(".card-sac");
var btnCardSac = itemCardSac.querySelector("button");



btnCardSac.addEventListener("click", function(){
    itemCardSac.classList.toggle("ativo");
});


var itemcardall = document.querySelectorAll(".card-all");

itemcardall.forEach(card => {
    card.querySelector("Button").addEventListener("click", function(){
        card.classList.toggle("ativo");
    });
});


