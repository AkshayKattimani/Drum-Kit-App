var btnLen = document.querySelectorAll(".drum").length;
for (var i = 0; i < btnLen ; i++){
    
// Detecting button press

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var sound = this.innerHTML;
        makeSound(sound);
        buttonAnimation(sound);
        

    });
}
// Detecting keyboard press

document.addEventListener("keypress", function (event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });


function makeSound(key){
    switch(key){
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;

            case "a":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
            break;
            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;
            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
            break;

            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
            break;

            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;

            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;

            default:
                alert("Use only [w,a,s,d,j,k,l] key");

        }

}


// Animation


function buttonAnimation(buttonType){
    var buttonClass = document.querySelector("."+buttonType);
    buttonClass.classList.add("pressed");


    setTimeout(function(){buttonClass.classList.remove("pressed")}, 100);

}








