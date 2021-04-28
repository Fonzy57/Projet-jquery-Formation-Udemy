var bg = $("#particles-js");

$(document).keydown(function(){
    $(bg).css("background-color", getRandomColor);
});

$(".img").on("click", function(){
    //Changer le texte du titre avec le nom du chanteur
    var name = $(this).attr("name");
    const initiale = name.charAt(0).toUpperCase();
    const nameCapitalized = initiale + name.slice(1);
    $("#titre").text(nameCapitalized);

    //Faire une animation sur la photo lorsqu'on clique dessus
    $(this).toggleClass("flash");

    //Jouer la musique lorsqu'on clique sur une image
    var music = name + ".mp3";
    playMusic(music);
});

$("#btn").click(function(event){
    var artist = $("#input").val();
    var music = artist + ".mp3";
    playMusic(music);
});

function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function playMusic(music){
    var audio = new Audio(music);
    audio.play();
}