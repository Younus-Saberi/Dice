var randomNumb1 =Math.floor(Math.random()*6)+1;

var imagesSources = "images/dice"+randomNumb1+".png";

var rand=document.querySelectorAll("img")[0];

rand.setAttribute("src", imagesSources);

 // second

var randomNumb2=Math.floor(Math.random()*6)+1;

var imagesSource2="images/dice"+randomNumb2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imagesSource2);

if(randomNumb1>randomNumb2){

document.querySelector("h1").innerHTML="🎉  Player 1 wins";

}
else if(randomNumb2>randomNumb1){
  document.querySelector("h1").innerHTML="Player 2 wins 🎉 ";
}
else{
  document.querySelector("h1").innerHTML="DRAW";
}
