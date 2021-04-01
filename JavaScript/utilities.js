function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // alert('test');
    snake.draw();
    snake.update();
    food.draw();
    handleFood();
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


// Collision detection between two rectangles
function collision(first, second){
    // console.log('first: '+ first.x + ', '+ first.y);
    // console.log('second: '+ second.x + ', '+ second.y);
    
    return (first.x == second.x && first.y == second.y );
}

function resetGame(){
    snake.x = canvas.width/2 - snake.width/2;
    snake.y = canvas.height - snake.height - 40;
    collisionsCount++;
    gameSpeed = 1;

}
