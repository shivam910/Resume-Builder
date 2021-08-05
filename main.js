const inputfield = document.querySelector(".input-fields");
let inputshow = true;

function toggle() {
    if (inputshow == true) {
        inputfield.style.display = "none";
        inputshow = false;
    }
    else{
    }
}

const btn = document.querySelector("button");
btn.style.cursor= "pointer";