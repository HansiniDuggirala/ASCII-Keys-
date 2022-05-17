canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
    img_imgTag = new Image(); //defining a variable with a new image
    img_imgTag.onload = uploadimg; // setting a function, onloading this variable
    img_imgTag.src = img_image; // load image
}

function uploadimg() {

    ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if ((keyPressed <= 65 && keyPressed >= 90) || (keyPressed <= 97 && keyPressed >= 122))

    function my_keydown(e) {
        keyPressed = e.keyCode;
        console.log(keyPressed); {
            aplhabetkey();
            document.getElementById("d1").innerHTML = "YOU Pressed Alphabet Key ";
            console.log("alphabet key");
        }
    }

    if ((keyPressed = 17 && keyPressed = 18) || (keyPressed = 27 && keyPressed = 18))

    function my_keydown(e) {
        keyPressed = e.keyCode;
        console.log(keyPressed); {
            specialkey();
            document.getElementById("d1").innerHTML = "YOU Pressed special Key ";
            console.log("special key");
        }
    }


    if ((keyPressed = 37 && keyPressed = 38) || (keyPressed = 39 && keyPressed = 40))

    function my_keydown(e) {
        keyPressed = e.keyCode;
        console.log(keyPressed); {
            arrowkey();
            document.getElementById("d1").innerHTML = "YOU Pressed arrow Key ";
            console.log("arrow key");
        }
    }


    if ((keyPressed = 48 && keyPressed = 49) || (keyPressed = 50 && keyPressed = 51) || (keyPressed = 52 && keyPressed = 23) || (keyPressed = 54 && keyPressed = 55) || (keyPressed = 56 && keyPressed = 57))

    function my_keydown(e) {
        keyPressed = e.keyCode;
        console.log(keyPressed); {
            numberkey();
            document.getElementById("d1").innerHTML = "YOU Pressed number Key ";
            console.log("number key");
        }
    }


    function aplhabetkey() {
        img_image = "Alpkey.png"
        add();
    }

    function numberkey() {
        img_image = "numkey.png"
        add();
    }

    function arrowkey() {
        img_image = "arrkey.png"
        add();
    }

    function specialkey() {
        img_image = "spkey.png"
        add();
    }

    function otherkey() {
        img_image = "otherkey.png";
        add();
    }
