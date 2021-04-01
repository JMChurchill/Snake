class Snake{
    constructor(){
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/10;
        this.height = this.spriteHeight/10;
        let startX = canvas.width/2 - this.width;
        let startY = canvas.height/2 - this.height;

        this.moving = false;
        this.size = 10;
        this.body = [{x:startX, y:startY},{x:(startX + this.width), y:startY},{x:(startX + this.width*2), y:startY}]

        
        this.x = this.body[this.body.length-1].x;
        this.y = this.body[this.body.length-1].y;
    }
    update(){
        let tempY = this.body[this.body.length-1].y;
        let tempX = this.body[this.body.length - 1].x;

        if(keys[38]){//up
            if(this.moving == false && this.y > canvas.height - canvas.height){
                let newOb = {x:tempX, y:(tempY -= grid)};

                if(newOb.x != this.body[this.body.length - 2].x || newOb.y != this.body[this.body.length - 2].y){
                    this.moveS(newOb);
                }
            }else if(this.moving == false){
                this.dead();
            }
        }
        if(keys[40]){//down
            if(this.y < canvas.height - this.height && this.moving == false){
                let newOb = {x:tempX, y:(tempY += grid)};
                if(newOb.x != this.body[this.body.length - 2].x || newOb.y != this.body[this.body.length - 2].y){
                    this.moveS(newOb);
                }
            }else if(this.moving == false){
                this.dead();
            }
        }
        if(keys[37]){//left
            if(this.x > 0 && this.moving == false){
                let newOb = {x:(tempX -= grid), y:tempY};
                if(newOb.x != this.body[this.body.length - 2].x || newOb.y != this.body[this.body.length - 2].y){
                    this.moveS(newOb);
                }
            }else if(this.moving == false){
                this.dead();
            }
        }
        if(keys[39]){//right
            if(this.x < canvas.width - this.width && this.moving == false){
                let newOb = {x:(tempX += grid), y:tempY};
                if(newOb.x != this.body[this.body.length - 2].x || newOb.y != this.body[this.body.length - 2].y){
                    this.moveS(newOb);
                }
            }else if(this.moving == false){
                this.dead();
            }
        }
    }
    draw(){
        // alert('drawSnake');
        for (let i = 0; i < this.body.length; i++) {
            ctx.fillStyle = 'green';
            ctx.fillRect(this.body[i].x,this.body[i].y,this.width,this.height);            
        }
    }
    moveS(newOb){
        if(!this.checkIfBody(newOb)){
            this.body.push(newOb);

            if(this.body.length > this.size){
                this.body.shift();
            }
    
            console.log(this.body);
            this.makeHead(newOb.x,newOb.y);
            this.moving = true;
        }

    }
    makeHead(x,y){
        this.x = x;
        this.y = y;
    }
    checkIfBody(newOb){
        for (let i = 1; i < this.body.length; i++) {
            console.log('checking');
            if(collision(newOb,this.body[i])){
                this.dead();
                return 1;
            }
        }
        return 0;
    }
    dead(){
        ctx.fillStyle = 'red';
        for (let i = 0; i < this.body.length; i++) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.body[i].x,this.body[i].y,this.width,this.height);
            resetGame();            
        }
    }
}

const snake = new Snake();
