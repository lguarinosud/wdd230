const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const card = document.querySelectorAll(".card");
const a = document.querySelectorAll("a");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "🔆";

        card.forEach(card => {
            card.style.background = "#000";
            card.style.color = "#fff";

        });

        a.forEach(a => {
            a.style.color = "white";
        });



    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        modeButton.textContent = "🕶️";

        card.forEach(card => {
            card.style.background = " #f0f0f0";
            card.style.color = "black";
        });

        a.forEach(a => {
            a.style.removeProperty("color");
        });

    }
});
