// Get the modal
let modal = document.getElementById("AboutModal");
let content = document.getElementById("AboutModalContent");

// Get the button that opens the modal
let btn = document.getElementById("AboutOpenButton");

// Get the <span> element that closes the modal
let span = document.getElementById("AboutModalCloseButton");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    content.style.animationName = "animate_fade_in";
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    content.style.animationName = "animate_fade_out";
    setTimeout(()=>{
        modal.style.display = "none"
    }, 300);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        content.style.animationName = "animate_fade_out";
        setTimeout(()=>{
            modal.style.display = "none"
        }, 300);
    }
}