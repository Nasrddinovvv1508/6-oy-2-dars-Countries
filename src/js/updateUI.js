let cardsEl = document.querySelector(`.cards`);

export const createCountries = (countries) => {
    countries.forEach(country => {
        let commonName = country.name.common;
        let population = country.population;
        let region = country.region;
        let capital = country.capital ? country.capital[0] : `No Capital`;
        let flag = country.flags.svg;

        // li
        let li = document.createElement(`li`);
        li.classList.add(`cards__item`);
        li.innerHTML = `
        <a href="./about.html">
            <img src=${flag} alt="flag" width="267" height="160">
            <div class="cards__item-inner">
                <h3 class="cards__title">${commonName}</h3>
                <p class="population">Population: <span>${population}</span></p>
                <p class="region">Region: <span>${region}</span></p>
                <p class="capital">Capital: <span>${capital}</span></p>
            </div>
        </a>
        `

        // ul
        cardsEl.append(li);
    });
};

/* 
    <a href="./about.html">
                        <img src="./images/jpg/germany-flag.jpg" alt="germany-flag" width="267" height="160">
                        <div class="cards__item-inner">
                            <h3 class="cards__title">Germany</h3>
                            <p class="population">Population: <span>81,770,900</span></p>
                            <p class="region">Region: <span>Europe</span></p>
                            <p class="capital">Capital: <span>Berlin</span></p>
                        </div>
                    </a>
*/