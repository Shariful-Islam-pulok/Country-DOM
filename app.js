function addCountry() {
    let country = document.querySelector("#countryInput").value;
    console.log(country);
    if(country){
        let listItem = document.createElement("li");
        let countrySpan = document.createElement("span");
        countrySpan.textContent = country;
        listItem.appendChild(countrySpan);
        document.querySelector("#countryList").appendChild(listItem);
    }
}