alert("Loved it don't forget to like it on github adi2655911");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors= document.getElementById("scissors");
const image = document.querySelector("img");
const btn = document.getElementsByClassName("btn");
const para = document.getElementById("para");
const result = document.querySelector("h2");


const backup = ()=>{
  setTimeout(()=>{
    para.textContent = "Computer"
    result.textContent = "";
    image.src = "laughing8.gif";
  },2500);
}



let cnf = confirm("can you beat me in impossible mode");
if(cnf==true){
  
  rock.addEventListener("click",()=>{
  image.src = "paper.webp";
  para.textContent= "";
  result.textContent = "You lose the game!"
  backup()
});
  paper.addEventListener("click",()=>{
  image.src = "scissors.webp";
  para.textContent= "";
  result.textContent = "You lose the game!"
  backup()
});
  scissors.addEventListener("click",()=>{
  image.src = "rock.webp";
  para.textContent= "";
  result.textContent = "You lose the game!"
  backup()
});
}
else{
  
  const index =()=>{
    let num= Math.floor(Math.random()*3);
    console.log(num);
    return num;
    
  }

  rock.addEventListener("click",()=>{
  if(index()==0){
    image.src = "paper.webp";
    para.textContent= "";
    result.textContent = "You lose the game!"
    backup()
  }
  else if(index()==1){
    image.src = "scissors.webp";
    para.textContent= "";
    result.textContent = "You won the game!"
    backup()
  }
  else if(index()==2){
    image.src = "rock.webp";
    para.textContent= "";
    result.textContent = "Tie!"
    backup()
  }
  else{
    result.textContent= 'server down';
    backup()
  }
  
});
  paper.addEventListener("click",()=>{
  
  if(index()==0){
    image.src = "paper.webp";
    para.textContent= "";
    result.textContent = "Tie!"
    backup()
  }
  else if(index()==1){
    image.src = "scissors.webp";
    para.textContent= "";
    result.textContent = "You lose the game!"
    backup()
  }
  else if(index()==2){
    image.src = "rock.webp";
    para.textContent= "";
    result.textContent = "You won the game!"
    backup()
  }
  else{
    result.textContent= 'server down';
    backup()
  }
});
  scissors.addEventListener("click",()=>{
  
  if(index()==0){
    image.src = "paper.webp";
    para.textContent= "";
    result.textContent = "You won the game!"
    backup()
  }
  else if(index()==1){
    image.src = "scissors.webp";
    para.textContent= "";
    result.textContent = "Tie!"
    backup()
  }
  else if(index()==2){
    image.src = "rock.webp";
    para.textContent= "";
    result.textContent = "You lose the game!"
    backup()
  }
  else{
    result.textContent= 'server down';
    backup()
  }
});

}
