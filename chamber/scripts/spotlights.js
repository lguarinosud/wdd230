async function fetchData() {
    const baseURL = "https://lguarinosud.github.io/wdd230/";

    const linksURL = "https://lguarinosud.github.io/wdd230/chamber/data/members.json";

    const linksURL1 = "http://127.0.0.1:5500/chamber/data/members.json";




    // get the data //
    const response = await fetch(linksURL1);
    const data = await response.json();

    const { spot1, spot2, spot3 } = getRamdonSpots(data);

    console.log("1", spot1);
    console.log("2", spot2);
    console.log("3", spot3);

    console.log("data:", data.companies[0]);

    const title1 = data.companies[spot1].name;
    const title2 = data.companies[spot2].name;
    const title3 = data.companies[spot3].name;

    const slogan1 = data.companies[spot1].additional_info;
    const slogan2 = data.companies[spot2].additional_info;
    const slogan3 = data.companies[spot3].additional_info;

    const mobile1 = data.companies[spot1].phone;
    const mobile2 = data.companies[spot2].phone;
    const mobile3 = data.companies[spot3].phone;

    const address1 = data.companies[spot1].address;
    const address2 = data.companies[spot2].address;
    const address3 = data.companies[spot3].address;

    const website1 = data.companies[spot1].website;
    const website2 = data.companies[spot2].website;
    const website3 = data.companies[spot3].website;

    const logo1 = data.companies[spot1].image;
    const logo2 = data.companies[spot2].image;
    const logo3 = data.companies[spot3].image;
    // Call the function to create three spotlight elements

    createSpotlight(1, title1, slogan1, mobile1, address1, website1, logo1);
    createSpotlight(2, title2, slogan2, mobile2, address2, website2, logo2);
    createSpotlight(3, title3, slogan3, mobile3, address3, website3, logo3);

};


function createSpotlight(id, title, slogan, phone, address, website, logo) {

    const spotlightsContainer = document.querySelector('.spotlights-container');
    // Create the main container div
    // Create the main container div
    const spotContainer = document.createElement('div');
    spotContainer.id = `spot-${id}`;
    spotContainer.className = 'spotlights';


    const img = document.createElement('img');
    const logoUrl = `http://127.0.0.1:5500/chamber/images/logos/${logo}`;
    img.src = logoUrl;
    console.log("logo", logoUrl)
    img.alt = title;
    spotContainer.appendChild(img);

    // Create the h2 element
    const brandTitle = document.createElement('h2');
    brandTitle.textContent = title;

    // Create the p element for the slogan
    const sloganParagraph = document.createElement('p');
    sloganParagraph.textContent = slogan;

    // Create the nested div
    const infoDiv = document.createElement('div');

    // Create paragraphs for name, email, phone, and address

    const phoneParagraph = document.createElement('p');
    phoneParagraph.innerHTML = `Phone: <span itemprop="telephone">${phone}</span>`;

    const addressParagraph = document.createElement('p');
    addressParagraph.innerHTML = `Address: <span itemprop="address">${address}</span>`;

    const websiteLink = document.createElement('a');
    websiteLink.href = website; // Replace with the actual URL
    websiteLink.textContent = website;

    // Append elements to the respective parent containers
    spotContainer.appendChild(brandTitle);
    spotContainer.appendChild(sloganParagraph);
    infoDiv.appendChild(phoneParagraph);
    infoDiv.appendChild(addressParagraph);
    spotContainer.appendChild(infoDiv);
    spotContainer.appendChild(websiteLink);



    spotlightsContainer.appendChild(spotContainer);
    //document.body.appendChild(spotContainer);

}

function getRamdonSpots(data) {
    const comp_list = data.companies;
    const spot_list = [];

    comp_list.forEach((company, index) => {
        const membershipLevel = company.membership_level;
        if (membershipLevel === 'Gold' || membershipLevel === 'Silver' || membershipLevel === 'Platinum') {
            spot_list.push(index);
        }
    });
    console.log(spot_list);
    const spot1 = getRandomElementAndRemove(spot_list);
    const spot2 = getRandomElementAndRemove(spot_list);
    const spot3 = getRandomElementAndRemove(spot_list);

    return { spot1, spot2, spot3 };
}

function getRandomElementAndRemove(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomValue = array.splice(randomIndex, 1)[0];
    console.log("ramdon:", randomValue);
    return randomValue;
}


fetchData();

