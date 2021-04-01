class Food{
    constructor(){
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/10;
        this.height = this.spriteHeight/10;
        this.x = Math.floor(Math.random() * 20)*25;
        this.y = Math.floor(Math.random() * 20)*25;
    }
    draw(){
        // alert('drawFood');

        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
    isEaten(){
        this.x = Math.floor(Math.random() * 20)*25;
        this.y = Math.floor(Math.random() * 20)*25;
    }

}

const food = new Food();

function handleFood(){
    // console.log(this.x)
    let foodObject = {x:food.x,y:food.y};
    if(collision(snake,foodObject)){
        snake.size += 1;
        food.isEaten();
    }
}
