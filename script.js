const convertButton = document.querySelector(".convert-button")
const beforeConvert = document.querySelector(".convert-from")
const convertToday = document.querySelector(".conver-today")


function convertValues() {
    const inputValue = document.querySelector(".currency").value
    const originValue = document.querySelector(".valor")
    const convertingValue = document.querySelector(".valor-dois")

    const libraToday = 6.7
    const bitcoinToday = 70.000
    const dolarToday = 5.5
    const euroToday = 6.3


    if (convertToday.value == "dolar") {

        convertingValue.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(inputValue / dolarToday)
    }


    if (convertToday.value == "euro") {
        convertingValue.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(inputValue / euroToday)
    }

    if (convertToday.value == "libra") {
        convertingValue.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(inputValue / libraToday)
    }


    originValue.innerHTML = new Intl.NumberFormat("pt-br",
        {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
}

function changeCurrency() {
    const currencyNAme = document.getElementById("currency-two")
    const currencyImg = document.querySelector(".moeda-img")

    if (convertToday.value == "dolar") {
        currencyNAme.innerHTML = "Dólar americano"
        currencyImg.src = "./Assets/Dólar.png"
    }

    if (convertToday.value == "euro") {
        currencyNAme.innerHTML = "Euro"
        currencyImg.src = "./Assets/Euro.png"
    }

    if (convertToday.value == "libra") {
        currencyNAme.innerHTML = "Libra"
        currencyImg.src = "./Assets/libra 1.png"
    }

    
    convertValues()

}

convertToday.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)