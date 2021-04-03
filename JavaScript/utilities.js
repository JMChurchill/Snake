function animate(){
    // console.log(count);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // alert('test');
    snake.draw();
    // snake.update();
    snake.move();
    food.draw();
    handleFood();
    handleScoreBoard();
    frame++;
    // sleep(2000);
    // console.log("Waited 2s");
    count++;
    // requestAnimationFrame(animate);
    // if(count == 4){
    //     pauseGame();
    //     // console.log(bang);
    // }
}
// animate();
intervalTime = gameSpeed * 1000;
count = 0;
interval = setInterval(animate,intervalTime);
// function checkBtn(){
// //event listeners
//     window.addEventListener('keydown',function(e){
//         keys = [];
//         keys[e.keyCode] = true;
//         // if(keys[37] || keys[38] || keys[39] || keys[40]){
//         //     frogger.jump();
//         // }
//     });

//     window.addEventListener('keyup',function(e){
//         delete keys[e.keyCode];
//         snake.moving = false;
//         snake.frameX = 0;
//     });
// }
//event listeners
window.addEventListener('keydown',function(e){
    keys = [];
    keys[e.keyCode] = true;
    // if(keys[37] || keys[38] || keys[39] || keys[40]){
    //     frogger.jump();
    // }
    if(keys[38]){//up
        snake.direction = 0;
    }
    if(keys[40]){//down
        snake.direction = 1;
    }
    if(keys[37]){//left
        snake.direction = 2;
    }
    if(keys[39]){//right
        snake.direction = 3;
    }
    console.log('directoin'+snake.direction);

});

window.addEventListener('keyup',function(e){
    delete keys[e.keyCode];
    snake.moving = false;
    snake.frameX = 0;
});


function scored(){
    score++;
    gameSpeed += 0.05;
    snake.x = canvas.width/2 - snake.width/2;
    snake.y = canvas.height - snake.height - 40;
}
function handleScoreBoard(){
    ctx.fillStyle = 'black';
    ctx.font = '25px Verdana';
    ctx.fillText('Score: '+score, 5, 30);
}


// Collision detection between two rectangles
function collision(first, second){
    // console.log('first: '+ first.x + ', '+ first.y);
    // console.log('second: '+ second.x + ', '+ second.y);
    
    return (first.x == second.x && first.y == second.y );
}

function resetGame(){
    // alert('dead');

    let startX = canvas.width/2 - snake.width;
    let startY = canvas.height/2 - snake.height;

    snake.body = [{x:startX, y:startY},{x:(startX + snake.width), y:startY},{x:(startX + snake.width*2), y:startY}]
    snake.x = snake.body[snake.body.length-1].x;
    snake.y = snake.body[snake.body.length-1].y;

    food.move();

    // collisionsCount++;
    score = 0;
    gameSpeed = 1;

}

function sleep(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds);
}
function pauseGame(){
    interval = clearInterval(interval);
    // handleGameOver();
}

// function handleGameOver(){
//     ctx2.fillStyle = 'black';
//     ctx2.font = '50px Verdana';
//     ctx2.fillText('Game Over', 110, canvas2.height/2);
//     ctx2.fillStyle = 'black';
//     ctx2.font = '45px Verdana';
//     ctx2.fillText('Score: '+score, 160, canvas2.height/2 + 50);


//     ctx2.beginPath();
//     ctx2.rect(rect.x - rect.width/2, rect.y, rect.width, rect.height); 
//     ctx2.fillStyle = '#FFFFFF'; 
//     ctx2.fillStyle = 'rgba(225,225,225,0.5)';
//     ctx2.fillRect(rect.x - rect.width/2, rect.y, rect.width, rect.height);
//     ctx2.fill(); 
//     ctx2.lineWidth = 2;
//     ctx2.strokeStyle = '#000000'; 
//     ctx2.stroke();
//     ctx2.closePath();
//     ctx2.font = '40pt Kremlin Pro Web';
//     ctx2.fillStyle = '#000000';
//     ctx2.fillText('Start', rect.width/2 + 100, 415);
// }
// // document.addEventListener("mousemove", getMousePos, false);

// function getMousePos(canvas2, event) {
//     var rect = canvas2.getBoundingClientRect();
//     return {
//         x: event.clientX - rect.left,
//         y: event.clientY - rect.top
//     };
// }
// //Function to check whether a point is inside a rectangle
// function isInside(pos, rect){
//     return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
// }

// //The rectangle should have x,y,width,height properties
// var rect = {
//     x:canvas2.width/2,
//     y:350,
//     width:200,
//     height:100
// };
// //Binding the click event on the canvas
// canvas2.addEventListener('click', function(evt) {
//     var mousePos = getMousePos(canvas2, evt);

//     if (isInside(mousePos,rect)) {
//         alert('clicked inside rect');
//     }else{
//         alert('clicked outside rect');
//     }   
// }, false);


