for (var i=0; i<document.querySelectorAll(".piano").length; i++){
    document.querySelectorAll(".piano")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML.toLowerCase(); /*innerHTML Check Is Case-Sensitive: convert html to lowercase*/ 
        switch (buttonInnerHTML) {
            case "c":
                var audio = new Audio("piano_sound/c6-102822.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("piano_sound/d6-82020.mp3");
                audio.play();
                break;

            case "e":
                var audio = new Audio("piano_sound/e6-82016.mp3");
                audio.play();
                break;
    
            case "f":
                var audio = new Audio("piano_sound/f6-102819.mp3");
                audio.play();
                break;

            case "g":
                var audio = new Audio("piano_sound/g6-82013.mp3");
                audio.play();
                break;
        
            case "a":
                var audio = new Audio("piano_sound/a6-102820.mp3");
                audio.play();
                break;
            
            case "b":
                var audio = new Audio("piano_sound/b6-82017.mp3");
                audio.play();
                break;

            case "v":
                var audio = new Audio("piano_sound/c7-36252.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("piano_sound/c6_sharp-82019.mp3");
                audio.play();
                break;
                
            case "l":
                var audio = new Audio("piano_sound/d6_sharp-82018.mp3");
                audio.play();
                break;
            
            case "m":
                var audio = new Audio("piano_sound/g6_sharp-82014.mp3");
                audio.play();
                break;
                  
            case "n":
                var audio = new Audio("piano_sound/g6_sharp-82014.mp3");
                audio.play();
                break;
                    
            case "p":
                var audio = new Audio("piano_sound/a6_sharp-82015.mp3");
                audio.play();
                break;   
        
            default:
                break;
        }
        buttonAnimation(buttonInnerHTML);      
    });
}

document.addEventListener("keydown",function(event){
    makeSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
}); /*makeSound(event.key) function listens for lowercase keypresses: Convert event.key to lowercase*/

function makeSound(key){
    switch (key) {
        case "c":
            var audio = new Audio("piano_sound/c6-102822.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("piano_sound/d6-82020.mp3");
            audio.play();
            break;

        case "e":
            var audio = new Audio("piano_sound/e6-82016.mp3");
            audio.play();
            break;

        case "f":
            var audio = new Audio("piano_sound/f6-102819.mp3");
            audio.play();
            break;

        case "g":
            var audio = new Audio("piano_sound/g6-82013.mp3");
            audio.play();
            break;
    
        case "a":
            var audio = new Audio("piano_sound/a6-102820.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("piano_sound/b6-82017.mp3");
            audio.play();
            break;
      
        case "v":
            var audio = new Audio("piano_sound/c7-36252.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("piano_sound/c6_sharp-82019.mp3");
            audio.play();
            break;
        
        case "l":
            var audio = new Audio("piano_sound/d6_sharp-82018.mp3");
            audio.play();
            break;
    
        case "m":
            var audio = new Audio("piano_sound/g6_sharp-82014.mp3");
            audio.play();
            break;
          
        case "n":
            var audio = new Audio("piano_sound/g6_sharp-82014.mp3");
            audio.play();
            break;
            
        case "p":
            var audio = new Audio("piano_sound/a6_sharp-82015.mp3");
            audio.play();
            break;   
            
        default:
            break;
    }      
}

function buttonAnimation(key) {
    var buttons = document.querySelectorAll(".piano");
    buttons.forEach(btn => {
        if (btn.innerHTML.toLowerCase() === key) {
            btn.classList.add("pressed");
            setTimeout(() => btn.classList.remove("pressed"), 100);
        }
    });
}
