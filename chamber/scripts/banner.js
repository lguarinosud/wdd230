document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("banner");

    // Check if today is Monday, Tuesday, or Wednesday
    const today = new Date().getDay();
    if (today >= 1 && today <= 3) {
        // Show the banner
        banner.classList.remove("hidden");
    }

    // Function to close the banner
    window.closeBanner = function () {
        banner.classList.add("hidden");
    };
});