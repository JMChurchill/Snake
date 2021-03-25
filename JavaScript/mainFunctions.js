var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var snakeWidth = 10;
var snakeHeight = 10;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if (e.key == "Up" || e.key == "ArrowUp") {
        leftPressed = true;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if (e.key == "Up" || e.key == "ArrowUp") {
        leftPressed = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        leftPressed = false;
    }
}


function drawSnake() {
    ctx.beginPath();
    ctx.rect(canvas.width, canvas.height - snakeHeight, snakeWidth, snakeHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


function draw() {
    ctx.clearReact(0,0,canvas.width,canvas.height);
    drawSnake();
}


draw();