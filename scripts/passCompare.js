const ps1 = document.querySelector('#ps1');
const ps2 = document.querySelector('#ps2');
const message = document.querySelector('#formmessage');

ps2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    // console.log("ps1", ps1)
    // console.log("ps2", ps2)
    if (ps1.value !== ps2.value) {
        console.log("Password do not match")
        message.textContent = "❗Password DO NOT MATCH!";
        message.style.visibility = "show";
        ps2.style.backgroundColor = "#fff0f3";
        ps2.value = "";
        ps1.value = "";
        ps1.focus();
    } else {
        message.style.display = "none";
        ps2.style.backgroundColor = "#fff";
        ps2.style.color = "#000";
    }
}
