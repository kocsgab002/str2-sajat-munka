let country = document.querySelector('#country');
let state = document.querySelector('#state');

const funn = () => {
    country.value === 'Magyarország' ? hu() : usa();
};
country.addEventListener("click", funn);
const hu = () => {
    state.innerHTML = "";
    const humegyek = ['Baranya', 'Bács-Kiskun', 'Békés',
        'Borsod-Abaúj-Zemplén', 'Csongrád', 'Fejér', 'Győr-Moson-Sopron',
        'Hajdú-Bihar', 'Heves', 'Jász-Nagykun-Szolnok', 'Komárom-Esztergom',
        'Nógrád', 'Pest', 'Somogy', 'Szabolcs-Szatmár-Bereg', 'Tolna', 'Vas', 'Veszprém', 'Zala']
    for (let i = 0; i < humegyek.length; i++) {
        state.insertAdjacentHTML('beforeend', `<option>${humegyek[i]}</option>`);
    };
};
const usa = () => {
    state.innerHTML = "";
    let states = ["Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", " North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"]

    for (let i = 0; i < states.length; i++) {
        state.insertAdjacentHTML('beforeend', `<option>${states[i]}</option>`);
    };
};