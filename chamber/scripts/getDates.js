
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const cr = '&copy'
    document.getElementById('copyrightYear').innerHTML = `${cr}; ${currentYear}`;
}


function updateLastModifiedDate() {
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `lastModified: ${lastModifiedDate}`;
}


updateCopyrightYear();
updateLastModifiedDate();
