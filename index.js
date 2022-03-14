var myMusic = document.getElementById("music");

//for zipper method
document.getElementById("btn_id").onclick = () => {
    myMusic.play();
    document.getElementById("zip").classList.add("chain_open");
    setTimeout(function() {
        document.getElementById("upper_triangle_id").style.transform = "translateX(-1600px)";
        document.getElementById("lower_triangle_id").style.transform = "translateX(1600px)";
        document.getElementById("zip").style.display = "none";
        document.getElementById("chain").style.display = "none";
        document.body.style.overflowY = "auto";
        document.body.className = "get";
        document.getElementById("first_id").style.zIndex = "-1";
        document.getElementById("first_id").style.transition = "z-index 4s";

    }, 4000);
}

//for sound part
document.getElementById("on_off").onclick = () => {
    var a = document.getElementById("on_off");
    if (a.innerText === "OFF") {
        a.innerText = "ON";
        myMusic.muted = false;
        document.getElementById("icon_sound").style.color = "rgb(148, 241, 148)";
        a.style.color = "rgb(148, 241, 148)";
    } else {
        a.innerText = "OFF";
        myMusic.muted = true;
        document.getElementById("icon_sound").style.color = "rgb(241, 129, 189)";
        a.style.color = "rgb(241, 129, 189)";
    }
}
var items = document.getElementById("nav_bar_id");
document.getElementById("menu").onclick = function() {
    if (items.style.minWidth == "0px") {
        items.style.minWidth = "50vh";
    } else {
        items.style.minWidth = "0px";
    }
    return false;
}

//smooth effect
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

document.getElementById("con_btn2").onmouseover = () => {
    $(document).ready(function() {
        $(".upper-eyelid").css("background-color", "rgba(7, 7, 7, 1)");
        $(".lower-eyelid").css("background-color", "rgba(7, 7, 7, 1)");
        $(".iris").css("display", "flex");
        $(".sclera").css({ "border-top": "10px solid rgba(7, 7, 7, 1)", "background-color": "rgba(255, 255, 255, 0.8)" });
        $(".moving-talk").css("display", "none");
        $(".mouth").css("height", "80px", );

        // $(".pupil").css(" background-color", "white");
    });
    var style = document.body.style;
    style.setProperty('--after', 'transparent');
}
document.getElementById("con_btn2").onmouseout = () => {
    $(document).ready(function() {
        $(".upper-eyelid").css("background-color", "transparent");
        $(".lower-eyelid").css("background-color", "transparent");
        $(".iris").css("display", "none");
        $(".sclera").css({ "border-top": "10px solid transparent", "background-color": "transparent" });
        $(".mouth").css("height", "30px", );
        // $(".pupil").css(" background-color", "white");
        $(".moving-talk").css("display", "block");
    });
    var style = document.body.style;
    style.setProperty('--after', 'rgba(58, 48, 75, 0.3)');

}