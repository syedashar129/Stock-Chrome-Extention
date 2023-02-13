let Stock = document.getElementById("stocks")

chrome.runtime.onMessage.addListener((request) => {
    let stockProfile = request.financialData?.assetProfile?.city;
    console.log(stockProfile);
    let li = document.createElement("li");
    li.innerText = stockProfile;
    Stock.appendChild(li);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e61c6e0a4amsh8e68294138edcdbp1a218bjsnc53422fa49bd',
            'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
        }
    };



    fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL/asset-profile', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


})