function visitCounter() {

    const visitsDisplay = document.querySelector(".visits");


    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


    if (numVisits !== 0) {
        console.log("CountVisit:", numVisits)
        visitsDisplay.textContent = `Number of Visits: ${numVisits}`;
    } else {
        visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
    }


    numVisits++;

    localStorage.setItem("numVisits-ls", numVisits);
}

visitCounter();