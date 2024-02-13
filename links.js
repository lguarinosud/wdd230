

const baseURL = "https://lguarinosud.github.io/wdd230/";

const linksURL = "https://lguarinosud.github.io/wdd230/data/links.js";

const linksURL1 = "http://127.0.0.1:5500/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data);

}

function displayLinks(data) {
    const activities = document.querySelector('#activities');
    //const actTitle = document.createElement('h2');
    const weeks = data.weeks;
    //console.log("weeks:", weeks);
    weeks.forEach((activity) => {
        const week = activity.week;
        //console.log("week:", week);
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.textContent = `${week}: `;

        ul.appendChild(li);

        activity.links.forEach((item) => {
            //console.log("item:", item);
            const url = `${item.url}`;
            const title = `${item.title}`;
            console.log("url:", url);
            console.log("title:", title);

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', url);
            a.textContent = title;

            li.appendChild(a);
            ul.appendChild(li);

        })
        // activities.appendChild(actTitle);
        activities.appendChild(ul);

    });





}

getLinks();

