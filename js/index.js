window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const board = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');


  let puntuacion= document.getElementById("score")

  function drawBoard() {
    document.getElementById("canvas").style.visibility = "visible";
    document.getElementById("score").style.visibility = "visible";
   }

 
  let car = {
    x: 225,
    y: 550,
    w: 52,
    h: 106,
    score: 0,
    moveLeft: function () { 
      if(this.x-23 >= 80 && this.x-23 <= 380){
        this.x-=40;
      }      
    },
    moveRight: function () {
      if(this.x+23 >= 80 && this.x+23 <= 380){
        this.x+=40;
      } 
    }
  };

  const carImg = new Image();
  carImg.src = './images/car.png';
  
  function drawCar(){
    ctx.drawImage(carImg, car.x, car.y, car.w, car.h);
  }
  
    document.addEventListener('keydown', event => {
          
    switch (event.code) {
      case "ArrowLeft":
        car.moveLeft();
        break;
      case "ArrowRight":
        car.moveRight();
        break;
      }
    });
  

  let obstacle = {
    x: 80,
    y: 0,
    w: 100,
    h: 20,
  };
  

  function drawObstacle () {
    ctx.fillStyle = 'red';
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
  }

  function moveObstacles (){  
    if (isCollide() === true){
      return
   }  
    
    if(obstacle.y >= 690){
      obstacle.x = 80 +Math.random()*300;
      obstacle.w = 110 +Math.random()*150;
      car.score++
    }
    obstacle.y = (obstacle.y + 10) % 700;

  };
  

  function isCollide() {
     if (car.x < obstacle.x + obstacle.w &&
      car.x + car.w/2 > obstacle.x &&
      car.y < obstacle.y + obstacle.h &&
      car.y + car.h > obstacle.y) {
      //  console.log("is collide is called"); 
      showGameOver()
      return true
    }    
  };


  function showGameOver(){
    document.getElementById("game-over").style.visibility = "visible"

  }
 

  function clearBoard() {
    ctx.clearRect(0,0,500,700);
  }

  function showScore(){
    document.getElementById("score").innerHTML = "Score: " + car.score;
  }

  function update() {
    clearBoard();    
    drawCar();
    drawObstacle();
    moveObstacles();   
    showScore();
    window.requestAnimationFrame(update);
      
  }

  function startGame() {
    drawBoard();
      
  }

  window.requestAnimationFrame(update);
};






