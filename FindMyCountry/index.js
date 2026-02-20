const searchBar = document.getElementById("searchBar");
const search = document.querySelector(".search");
const countryInfo = document.querySelector(".countryInfo");
const flagClass = document.querySelector(".flagClass");
const errorDisplay = document.getElementById("errorMessage");


search.addEventListener("submit", async (event) => {
    event.preventDefault();

    errorDisplay.style.display = "none";
    errorDisplay.textContent = "";


    const country = searchBar.value.trim();

    if(!country) {
        displayError(`Type in a valid country`);
        searchBar.value = "";
    }
    else {


        try {
            const countryData = await getUserCountry(country);
            // console.log(countryData);
            if(countryData.statuscode > 400 && countryData.statuscode < 511) {
                displayError(`ERROR 404`);
                searchBar.value = "";
            }
            else{
            countryInfo.innerHTML = "";
            flagClass.innerHTML = "";
            searchBar.value = "";
            displaycountryInfo(countryData);
            }

        }
        catch(error) {
         displayError(`${searchBar.value} is not a valid country`);
        
        }
    }




}); 





async function getUserCountry(country) {
    try {
        let apiKey = `https://countries-api-abhishek.vercel.app/countries/${country}`;
        const response = await fetch(apiKey);
    if(!response.ok) {
        throw new Error("Could not fetch!");
    }
    return await response.json();
    }
    catch(error) {
        console.error(error);
    }

    // const data = await response.json();
    // console.log(data);
}




function displaycountryInfo(data) {
    console.log(data);
    let {name: country,
        capital: capitalName,
        currency: currencyValue, 
        region: regionArea, 
        flag: flags, 
        languages: language,
        timezones: timezone,
        } = data.data;

    searchBar.value = "";

    const countryName = document.createElement("p");
    const countryCapital = document.createElement("p");
    const countryCurrency = document.createElement("p");
    const countryRegion = document.createElement("p");
    const countryFlag = document.createElement("img");
    const countryLanguage = document.createElement("p");
    const countryTimezone = document.createElement("p");
    
    countryName.textContent = `Country Name: ${country}`;
    countryCapital.textContent = `Country Capital: ${capitalName}`;
    countryCurrency.textContent = `Currency: ${currencyValue}`;
    countryRegion.textContent = `Region: ${regionArea}`;
    countryLanguage.textContent = `Language: ${language}`;
    countryTimezone.textContent = `Timezone: ${timezone}`;
    countryFlag.src = flags;

    //add them to a classlist here
    countryName.classList.add("countryParagraph");
    countryCapital.classList.add("countryParagraph");
    countryCurrency.classList.add("countryParagraph");
    countryRegion.classList.add("countryParagraph");
    countryLanguage.classList.add("countryParagraph");
    countryTimezone.classList.add("countryParagraph");
        

    countryInfo.appendChild(countryName);
    countryInfo.appendChild(countryCapital);
    countryInfo.appendChild(countryCurrency);
    countryInfo.appendChild(countryRegion);
    countryInfo.appendChild(countryLanguage);
    countryInfo.appendChild(countryTimezone);
    flagClass.appendChild(countryFlag);

    
    
} 


function displayError(message) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    errorDisplay.style.display = "flex";
    errorDisplay.appendChild(errorMessage);
}
