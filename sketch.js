var pessoa
function setup() {
  createCanvas(400,400);
  pessoa = createSprite(30,200,10,14);
}

function draw() 
{
  background("purple");
if(keyDown("d")){
  pessoa.x = pessoa.x +2;
}
if(keyDown("a")){
  pessoa.x = pessoa.x -2;
}

drawSprites()
}




