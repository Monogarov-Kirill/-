var foldBtns = document.getElementsByClassName("fold-button");
for (var i = 0; i < foldBtns.length; i++){
    foldBtns[i].addEventListener("click",
function(e) {
        if (e.target.className == "fold-button folded") {
            e.target.innerHTML = "Cвернуть";
            e.target.className = "fold-button";
            var displayState = "block";
        }
        else{
            e.target.innerHTML = "Развернуть";
            e.target.className = "fold-button folded";
            var displayState = "none";
        }
        e.target
            .parentElement
            .getElementsByClassName('article-info')[0]
            .style.display = displayState;
        e.target
            .parentElement
            .getElementsByClassName('article-text')[0]
            .style.display = displayState;


});
}


