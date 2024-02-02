
document.addEventListener('DOMContentLoaded', function () {
    var currentDate = new Date();
    var lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        displayMessage("Welcome! Let us know if you have any questions.");
    } else {
        lastVisit = new Date(lastVisit);
        var timeDifference = currentDate - lastVisit;
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            displayMessage("Back so soon! Awesome!");
        } else {
            var message = "You last visited " + (daysDifference === 1 ? "1 day" : daysDifference + " days") + " ago.";
            displayMessage(message);
        }
    }

    localStorage.setItem('lastVisit', currentDate.toString());

    function displayMessage(message) {
        var sidebarContent = document.querySelector('.sidebar-content');
        sidebarContent.textContent = message;

        // Display the welcome message
        var welcomeMessage = document.getElementById('wel-message');
        welcomeMessage.style.display = 'block';

        // Set a flag in localStorage to indicate that the welcome message has been displayed
        localStorage.setItem('welcomeMessageDisplayed', 'true');

        // Hide the welcome message after 10 seconds
        setTimeout(function () {
            welcomeMessage.style.opacity = 0;

            setTimeout(function () {
                welcomeMessage.style.display = 'none';
            }, 500); //fade-out duration is 0.5 seconds
        }, 10000);
    }
});
