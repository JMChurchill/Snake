function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // alert('test');
    snake.draw();
    snake.update();
    food.draw();
    handleFood();
    handleScoreBoard();
    frame++;
    requestAnimationFrame(animate);
}
animate();

//event listeners
window.addEventListener('keydown',function(e){
    keys = [];
    keys[e.keyCode] = true;
    // if(keys[37] || keys[38] || keys[39] || keys[40]){
    //     frogger.jump();
    // }
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
