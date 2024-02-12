
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=fdb0d99bde2c1855d75221ef2bb4b98a';


async function apifetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            console.log("temp", data.main.temp);
            console.log("icon", data.weather[0].icon);
            console.log("desc", data.weather[0].description);
            displayResults(data);

        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }



}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp} Celcius degrees`;

    const srcIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

    const description = `${data.weather[0].description}`;

    console.log(srcIcon)
    weatherIcon.setAttribute('src', srcIcon);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = `${description}`;




};

apifetch();

