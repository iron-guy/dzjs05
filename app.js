const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro");


const convert = (elem, target, target2) => {
    elem.addEventListener("input", () => {
        const reqest = new XMLHttpRequest();
        reqest.open("GET", "data.json");
        reqest.setRequestHeader("Content-type", "application/json");
        reqest.send();
        reqest.addEventListener("load", () => {
            const response = JSON.parse(reqest.response);
            if (elem === som) {
                target.value = (elem.value / response.usd).toFixed(2);
                target2.value = (elem.value / response.euro).toFixed(2);
            } else if (elem === usd) {
                target.value = (elem.value * response.usd).toFixed(2);
                target2.value = (elem.value * response.usd / response.euro).toFixed(2);

            } else if (elem === euro) {
                target.value = (elem.value * response.euro).toFixed(2);
                target2.value = (elem.value * response.euro / response.usd ).toFixed(2);
            }
            elem.value === "" ? (target.value = "") : null,
            elem.value === "" ? (target2.value = "") : null
        });
    });
};

convert(som, usd, euro, 12);
convert(euro, som, usd);
convert(usd, som, euro)