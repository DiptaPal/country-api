const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = (countries) =>{
    const countryContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country','bg-light');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital? country.capital[0] : 'No capital'}</p>
        <button onclick = "loadCountriesFlag('${country.cca2}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">View Flag</button>
        `
        countryContainer.appendChild(countryDiv)
    });
};
const loadCountriesFlag = code =>{
    console.log(code);
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesFlag(data[0]))
}

const displayCountriesFlag = (countries) =>{
    const modalTitle= document.getElementById('exampleModalLabel');
    modalTitle.innerText = `${countries.name.common}`;
    const countryModal = document.getElementById('modal-body');
    countryModal.innerHTML = `
        <img src = '${countries.flags.png}'>
    `
    
}
loadCountries();