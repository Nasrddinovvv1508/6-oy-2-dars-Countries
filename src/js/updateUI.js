export const createCountries = (countries) => {
    countries.forEach(country => {
        let commonName = country.name.common;
        let population = country.population;
        let region = country.region;
        let capital = country.capital[0] ? country.capital[0] : `No Capital`;
    });
};