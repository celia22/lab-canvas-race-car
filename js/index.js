const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


window.onload = () => { 
  let button = document.getElementById('start-button')
  button.onclick = function() {
    console.log('startGame button is clicked');
    startGame();
  }    
  
};

function startGame() {
  document.getElementById("road").style.visibility = "visible";  

};


class Car {
  constructor() {
    this.x = 250;
    this.y = 250;   
    const img = new Image();
    img.addEventListener('load', () => {
      this.img = img;
      this.draw();
    });
    img.src = "./images/car.png";
  }
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 150, 150);
  }
}


/*
class blueCar extends Car {
  constructor(x,y) {
      
  }

  draw() {
    this.img = new Image();
    this.img.src = "./images/car.png";
    this.ctx.drawImage(this.img,this.x, this.y, 150, 150);
  }
}
*/



document.addEventListener('keydown', event => {
  console.log("eventL")
  switch (event.code) {   
    case "ArrowLeft":     
      blueCar.moveLeft();
      console.log('left');
      break;
    case "ArrowRigth":
      blueCar.moveRight();
      console.log('right');
      break;
  }
  updateCanvas();
});

function updateCanvas() {
  ctx.clearRect(0, 0, 500, 700);
  blueCar.draw();
};

