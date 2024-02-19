
const weatherCard = document.querySelector('#weather-card')


//const url = 'https://api.openweathermap.org/data/2.5/weather?lat=53.96&lon=-1.08&units=metric&appid=fdb0d99bde2c1855d75221ef2bb4b98a';

//const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=53.96&lon=-1.08&units=metric&appid=fdb0d99bde2c1855d75221ef2bb4b98a';
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=53.96&lon=1.08&units=metric&cnt=25&appid=fdb0d99bde2c1855d75221ef2bb4b98a';
console.log("url: ", url);

//https://pro.openweathermap.org/data/2.5/forecast/hourly
async function apifetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const firstTemp = data.list[0].main.temp;
            const secondTemp = data.list[8].main.temp;
            const thirdTemp = data.list[16].main.temp;
            console.log("FirstTemp:", firstTemp);
            console.log("SecondTemp:", secondTemp);
            console.log("third:", thirdTemp);

            console.log("data:", data);
            //console.log("temp", data.main.temp);
            //console.log("icon", data.weather[0].icon);
            //console.log("desc", data.weather[0].description);
            displayResultsThreeDays(data);

        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }



}

// function displayResults(data) {

//     data.main.array.forEach(period => {


//     });

//     currentTemp.innerHTML = `${data.main.temp}°C    `;

//     const srcIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

//     const description = `${data.weather[0].description}`;

//     console.log(srcIcon)
//     weatherIcon.setAttribute('src', srcIcon);
//     weatherIcon.setAttribute('alt', description);
//     captionDesc.textContent = `${description}`;




// };

function displayResultsThreeDays(data) {
    const firstDay = data.list[0];
    const secondDay = data.list[8];
    const thirdDay = data.list[16];



    const data_list = data.list;

    data_list.forEach((day, index) => {
        console.log('index:', index);
        if (index === 0) {
            console.log('indexIn:', 0);
            // Create div container //
            const divContainer = document.createElement('div');
            divContainer.classList.add('weather');
            weatherCard.appendChild(divContainer);

            // create h3 with the date //
            const h3 = document.createElement('h3');
            const dateObject = new Date(day.dt_txt);
            const formattedDate = `${dateObject.getDate()}/${dateObject.getMonth() + 1}`;
            h3.textContent = `Now`;
            divContainer.appendChild(h3);

            // create img icon //
            const img = document.createElement('img');
            img.id = 'weather-icon';
            const srcIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
            const description = `${day.weather[0].description}`;
            img.setAttribute('src', srcIcon);
            console.log('icon:', srcIcon);
            img.setAttribute('alt', description);
            divContainer.appendChild(img);



            // Create P //
            const p = document.createElement('p');
            p.id = 'current-temp';
            p.innerHTML = `${day.main.temp}°C    `;
            divContainer.appendChild(p);

            // Create figcaption //
            const captionDesc = document.createElement('figcaption');
            captionDesc.textContent = `${description}`;
            divContainer.appendChild(captionDesc);

            weatherCard.appendChild(divContainer);
        } else if (index === 8) {
            console.log('indexIn:', 0);
            // Create div container //
            const divContainer = document.createElement('div');
            divContainer.classList.add('weather');
            weatherCard.appendChild(divContainer);

            // create h3 with the date //
            const h3 = document.createElement('h3');
            const dateObject = new Date(day.dt_txt);
            const options = { weekday: 'long' };
            const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(dateObject);;
            h3.textContent = dayOfWeek;
            divContainer.appendChild(h3);

            // create img icon //
            const img = document.createElement('img');
            img.id = 'weather-icon';
            const srcIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
            const description = `${day.weather[0].description}`;
            img.setAttribute('src', srcIcon);
            console.log('icon:', srcIcon);
            img.setAttribute('alt', description);
            divContainer.appendChild(img);

            // Create P //
            const p = document.createElement('p');
            p.id = 'current-temp';
            p.innerHTML = `${day.main.temp}°C    `;
            divContainer.appendChild(p);

            // Create figcaption //
            const captionDesc = document.createElement('figcaption');
            captionDesc.textContent = `${description}`;
            divContainer.appendChild(captionDesc);

            weatherCard.appendChild(divContainer);
        } else if (index === 16) {
            console.log('indexIn:', 0);
            // Create div container //
            const divContainer = document.createElement('div');
            divContainer.classList.add('weather');
            weatherCard.appendChild(divContainer);

            // create h3 with the date //
            const h3 = document.createElement('h3');
            const dateObject = new Date(day.dt_txt);
            const options = { weekday: 'long' };
            const dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(dateObject);;
            h3.textContent = dayOfWeek;
            divContainer.appendChild(h3);

            // create img icon //
            const img = document.createElement('img');
            img.id = 'weather-icon';
            const srcIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
            const description = `${day.weather[0].description}`;
            img.setAttribute('src', srcIcon);
            console.log('icon:', srcIcon);
            img.setAttribute('alt', description);
            divContainer.appendChild(img);

            // Create P //
            const p = document.createElement('p');
            p.id = 'current-temp';
            p.innerHTML = `${day.main.temp}°C    `;
            divContainer.appendChild(p);

            // Create figcaption //
            const captionDesc = document.createElement('figcaption');
            captionDesc.textContent = `${description}`;
            divContainer.appendChild(captionDesc);

            weatherCard.appendChild(divContainer);
        }



    });

};

apifetch();

