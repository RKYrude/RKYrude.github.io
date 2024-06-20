document.addEventListener("click", () => {
    let min=1, max=7;

    let randint=Math.floor(Math.random() * (max-min))+min;
    let randimg= "./images/dice"+ randint +".png";                    
    
    document.querySelectorAll("img")[0].setAttribute("src",randimg);
    
    let randint2=Math.floor(Math.random() * (max-min))+min;
    let randimg2= "./images/dice"+ randint2 +".png";                    
    
    document.querySelectorAll("img")[1].setAttribute("src",randimg2);
    
    if (randint > randint2) {
        document.querySelector("h1").innerHTML="player 1 Wins";
    } 
    else if (randint < randint2){
        document.querySelector("h1").innerHTML="player 2 Wins";
    }
    else{
        document.querySelector("h1").innerHTML="Draw";
    }

});