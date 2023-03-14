const images = new Map();
images.set(0, "boy.jpg");
images.set(1, "girl.jpg");
images.set(2, "boy.jpg");
images.set(3, "girl.jpg");
images.set(4, "boy.jpg");
images.set(5, "girl.jpg");
images.set(6, "girl.jpg");
images.set(7, "girl.jpg");
images.set(8, "boy.jpg");

var allIds = [];

function turn_card(button) {
    var id = parseInt(button.id)
    button.style.backgroundImage = "url('media/" + images.get(id) + "')";
    end_game(id)
}

function power_switch_buttons(bool) {
    var myButton;
    for (var i=0 ; i<10 ; i++)
    {
        myButton = document.getElementById(i);
        if(bool) {
            myButton.removeEventListener('click',turn_card);
            myButton.disabled = bool;
        }
        else {
            myButton.EventListener('click',turn_card);
            myButton.disabled = bool;
        }
    }
}

function end_game(id) {
    switch(id) {
        case 0:
        case 4:
        case 8:
            allIds.push(id);
            break;
        default:
            break;
    }
    if(allIds.length === 3){
        show_baby();
    }
}

function show_baby() {
    var imageURL = "media/manoah.jpg";
    var windowWidth = 400;
    var windowHeight = 400;
    var windowProperties = "width=" + windowWidth + ",height=" + windowHeight;
    window.open(imageURL, "Image Popup", windowProperties);
}

function main() {
    var myButton;
    allIds = [];
    for (var i=0 ; i<10 ; i++)
    {
        myButton = document.getElementById(i);
        myButton.style.backgroundImage = "url('media/girl-boy.jpg')";
        myButton.style.backgroundSize = "cover";
        myButton.style.width = "150px";
        myButton.style.height = "150px";
    }
}

main(); 

