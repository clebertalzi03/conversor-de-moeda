const convertButton = document.querySelector(".convert-button")
const convertToday = document.querySelector(".conver-today")

function convertValues() {
    const inputValue = document.querySelector(".currency").value
    const originValue = document.querySelector(".valor")
    const convertingValue = document.querySelector(".valor-dois")


    const dolarToday = 5.5
    const euroToday = 6.3

    
if(convertToday.value == "dolar") {
    
    convertingValue.innerHTML = new Intl.NumberFormat("en-US",
        {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
}


if(convertToday.value == "euro"){
    convertingValue.innerHTML = new Intl.NumberFormat("de-DE",
    {
        style: "currency",
        currency: "EUR"
    }).format(inputValue / euroToday)
}




    originValue.innerHTML = new Intl.NumberFormat("pt-br",
        {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)



}

convertButton.addEventListener("click", convertValues)