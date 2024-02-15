const baseURL = "https://lguarinosud.github.io/wdd230/";

const linksURL = "https://lguarinosud.github.io/wdd230/chamber/data/members.json";

const linksURL1 = "http://127.0.0.1:5500/chamber/data/members.json";


let directoryData;

// function getCards() {
//     return fetch(linksURL1)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             displayCards(data);
//             directoryData = data; // store the data in the variable
//         });
// }



async function getCards() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayCards(data);

}



function displayCards(data) {
    const main = document.querySelector("section");

    // Clear main to start over //
    main.innerHTML = "";

    const companies = data.companies;
    console.log("companies", companies)

    companies.forEach(company => {
        const section = document.createElement('section');
        section.classList.add("customerCard-container");

        const imageContainer = document.createElement('div');
        imageContainer.classList.add("dic-image-container");

        const pContainer = document.createElement('div');
        pContainer.classList.add("p-container");

        const img = document.createElement('img');
        const logoUrl = `http://127.0.0.1:5500/chamber/images/logos/${company.image}`;
        img.src = logoUrl;
        console.log("logo", logoUrl)
        img.alt = company.name;
        imageContainer.appendChild(img);

        const h3 = document.createElement('h2');
        h3.textContent = `${company.name}`;
        imageContainer.appendChild(h3);

        section.appendChild(imageContainer);

        address = document.createElement('p');
        address.textContent = `${company.address}`;

        pContainer.appendChild(address);


        mobile = document.createElement('p');
        mobile.textContent = `${company.phone}`;
        pContainer.appendChild(mobile);

        const websiteP = document.createElement('p');
        const websiteLink = document.createElement('a');
        websiteLink.href = `${company.website}`;
        websiteLink.textContent = `${company.website}`;
        websiteP.appendChild(websiteLink);
        pContainer.appendChild(websiteP);

        // membership = document.createElement('p');
        // membership.textContent = `Membership: ${company.membership_level}`;
        // section.appendChild(membership)

        // info = document.createElement('p');
        // info.textContent = `${company.additional_info}`;
        // pContainer.appendChild(info);

        section.appendChild(pContainer);

        main.appendChild(section);

    });

}

function displayList(data) {
    const main = document.querySelector("section");

    // Clear main to start over //
    main.innerHTML = "";

    const companies = data.companies;
    console.log("companies", companies)
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tr = document.createElement('tr');
    thead.appendChild(tr);

    const nameHeader = document.createElement('th');
    nameHeader.textContent = "Company Name";
    tr.appendChild(nameHeader);

    const AddressHeader = document.createElement('th');
    AddressHeader.textContent = "Address";
    tr.appendChild(AddressHeader);

    const MobileHeader = document.createElement('th');
    MobileHeader.textContent = "Mobile";
    tr.appendChild(MobileHeader);

    const websiteHeader = document.createElement('th');
    websiteHeader.textContent = "Website";
    tr.appendChild(websiteHeader);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);


    companies.forEach(company => {
        const rows = document.createElement('tr');
        tbody.appendChild(rows);

        const nameCell = document.createElement('td');
        nameCell.textContent = `${company.name}`;
        rows.appendChild(nameCell);

        const AddressCell = document.createElement('td');
        AddressCell.textContent = `${company.address}`;
        rows.appendChild(AddressCell);

        const MobileCell = document.createElement('td');
        MobileCell.textContent = `${company.phone}`;
        rows.appendChild(MobileCell);

        const siteCell = document.createElement('td');
        const siteLink = document.createElement('a');
        siteLink.href = `${company.website}`;
        siteLink.textContent = `${company.website}`;
        siteCell.appendChild(siteLink);
        rows.appendChild(siteCell);

    });

    main.appendChild(table);

}

async function viewToggler() {

    // get the data //
    const response = await fetch(linksURL1);
    const data = await response.json();
    console.log(data);


    const gridbutton = document.querySelector("#dir-grid-button");
    const listbutton = document.querySelector("#dir-list-button");

    gridbutton.addEventListener("click", () => {

        displayCards(data);
        const main = document.querySelector("section");
        main.classList.add("dic-grid-container");
        main.classList.remove("dir-list-container");
        console.log("toggled to cards view")
    });

    listbutton.addEventListener("click", () => {

        displayList(data);
        const main = document.querySelector("section");
        main.classList.add("dir-list-container");
        main.classList.remove("dic-grid-container");

        const thead =
            console.log("toggled to list view")
    });
}



getCards();
viewToggler();