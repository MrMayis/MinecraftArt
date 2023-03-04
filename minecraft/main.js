
var canvas = new fabric.Canvas('milienzo');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";
 
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_image_object);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
if(keyPressed == '38')
{
    up();
    console.log("up");
}
if(keyPressed == '40')
{
    down();
    console.log("down");
}
if(keyPressed == '37')
{
    left();
    console.log("left");
}
if(keyPressed == '39')
{
    right();
    console.log(right);
}
if(keyPressed=='65'){
    new_image('yellow_wall.jpg');
}
if(keyPressed=='a'){
    new_image('yellow_wall.jpg');
    
}
if(keyPressed=='76'){
    new_image('wall.jpg');
}  
if(keyPressed=='l'){
    new_image('wall.jpg');
}
if(keyPressed=='85'){
    new_image('unique.png');
}
if(keyPressed=='u'){
    new_image('unique.png');
}
if(keyPressed=='84'){
    new_image('trunk.jpg');
}
if(keyPressed=='t'){
    new_image('trunk.jpg');
}
if(keyPressed=='78'){
    new_image('roof.jpg');
}
if(keyPressed=='n'){
    new_image('roof.jpg');
}
if(keyPressed=='83'){
    new_image('light_green.png');
}
if(keyPressed=='s'){
    new_image('light_green.png');
}if(keyPressed=='80'){
    new_image('ground.png');
}
if(keyPressed=='P'){
    new_image('ground.png');
}
if(keyPressed=='77'){
    new_image('dark_green.png');
}
if(keyPressed=='m'){
    new_image('dark_green.png');
}
if(keyPressed=='66'){
    new_image('cloud.jpg');
}
if(keyPressed=='B'){
    new_image('cloud.jpg');
}
console.log(block_image_object);}

function right(){
    if (player_x <=850){
        player_x=player_x+block_image_width;
        canvas.remove(player_object);
    }
}
function left(){
    if (player_x >0){
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
    }
}
function up(){
    if (player_y >=0){
        player_y=player_y+block_image_height;
        canvas.remove(player_object);
    }
}
function down(){
    if (player_y <=500){
        player_y=player_y-block_image_height;
        canvas.remove(player_object);
    }
}


