
let audiModels = ["Audi A1", "Audi A2", "Audi A3", "Audi A4"];
let audiModelsValue = [100000, 150000, 200000, 250000];
let hondaModels = ["Honda Accord", "Honda Civic", "Honda Pilot"];
let hondaModelsValue = [201000, 100500, 303000];
let suzukiModels = ["Suzuki Jimny", "Suzuki Samurai", "Suzuki Grand Vitara"];
let suzukiModelsValue = [200000, 100000, 300000];
let volvoModels = ["Volvo C30", "Volvo S60", "Volvo XC60"];
let volvoModelsValue = [100000, 200000, 300000];

function selectBrand(sender) {
    if (sender.options[sender.selectedIndex].value == "none")
        document.getElementById("models").style.display = "none";
    else
        document.getElementById("models").style.display = "block";

    let optionsString = '';
    if (sender.options[sender.selectedIndex].value == "audi") {
        for (let i = 0; i < audiModels.length; i++) {
            optionsString += `<option value=${audiModelsValue[i]}>${audiModels[i]}</option>`
        }
    }

    if (sender.options[sender.selectedIndex].value == "honda") {
        for (let i = 0; i < hondaModels.length; i++) {
            optionsString += `<option value=${hondaModelsValue[i]}>${hondaModels[i]}</option>`
        }
    }

    if (sender.options[sender.selectedIndex].value == "suzuki") {
        for (let i = 0; i < suzukiModels.length; i++) {
            optionsString += `<option value=${suzukiModelsValue[i]}>${suzukiModels[i]}</option>`
        }
    }

    if (sender.options[sender.selectedIndex].value == "volvo") {
        for (let i = 0; i < volvoModels.length; i++) {
            optionsString += `<option value=${volvoModelsValue[i]}>${volvoModels[i]}</option>`
        }
    }

    document.getElementById("models").innerHTML = optionsString;
}

function calcPrice() {
    let prices = document.querySelectorAll(".input");
    let sum = 0;

    for (let price of prices) {
        let currentPrice;
        if (price.type == "checkbox" || price.type == "radio") {
            if (price.checked) {
                currentPrice = Number(price.value);
            } else {
                currentPrice = 0;
            }
        }
        else {
            currentPrice = Number(price.value);
        }
        sum = sum + currentPrice;
    }
    document.getElementById("price").innerHTML = sum;
}
