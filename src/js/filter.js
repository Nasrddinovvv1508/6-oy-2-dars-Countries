let searchFormEl = document.querySelector(`.search`);

searchFormEl.search.addEventListener(`input`, () => {
    let searchvalue = searchFormEl.search.value.toLowerCase();
    console.log(searchvalue);
})