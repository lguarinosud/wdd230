const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        //console.table(data); // Logging data to console in table format
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        const card = document.createElement('section');

        // Create an h2 element for fullName
        const fullName = document.createElement('h2');

        // Create an img element for portrait
        const portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.Name} ${prophet.lastName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);

        // Append img element to the section (card)
        card.appendChild(portrait);

        // Append the card to the #cards container
        cards.appendChild(card);


    });
}


getProphetData();


