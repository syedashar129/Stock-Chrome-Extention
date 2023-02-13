const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e61c6e0a4amsh8e68294138edcdbp1a218bjsnc53422fa49bd',
        'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
    }
};

let financialData;

async function getFinance (){
    const res = await fetch('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL/asset-profile', options)
    const data = await res.json();
    financialData = data;
    chrome.runtime.sendMessage({financialData})
    console.log(data);
}

getFinance();
// chrome.runtime.sendMessage({getData})
