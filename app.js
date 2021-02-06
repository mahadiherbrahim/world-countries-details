fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data))


const displayCountry = countries => {
    const parentDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryName = country.name
        const countryFlag = country.flag
        const countryCapital = country.capital
        const countryDiv = document.createElement('div')
        countryDiv.className = 'country';
        countryDiv.innerHTML = `
        <h3>${countryName}</h3>
        <p>${countryCapital}</p>
        <button onclick="displayCountryDetails('${countryName}')">Details</button>
        `
        parentDiv.appendChild(countryDiv);
    });
}


const displayCountryDetails = cName => {
    fetch(`https://restcountries.eu/rest/v2/name/${cName}`)
        .then(res => res.json())
        .then(data => countryDetails(data[0]))
}


const countryDetails = country => {
    const parentCountryDetails = document.getElementById('countries-details')
    parentCountryDetails.innerHTML = `
    <img src="${country.flag}">
        <h2>${country.name} (${country.altSpellings[0]})</h2>
        <h3>Area : ${country.area}</h3>
        <h3>Population : ${country.population}</h3>
        <h3>Region : ${country.region}</h3>
        <h3>Currencies : ${country.currencies[0].name}</h3>
    `
    console.log(country);
}