//Fetch de la API de Unsplash para mostrar imagenes acordes a la tematica
let clientID = "X8yrly2QKNloMyYD9cty4N_XMnZ6pywv3DVxx3hiJWQ";
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;
let measureImage = document.querySelector("#measureImage");

fetch(endpoint)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonData) {
        measureImage.src = "https://source.unsplash.com/1600x900/?math";

    })

//configuracion del conversor
let valor = document.getElementById("valor");
valor.addEventListener('keyup', conversion);
let conversionResult = document.getElementById("result");

unit1 = document.getElementById("unit1");
unit1.addEventListener('change', conversion);

unit2= document.getElementById("unit2");
unit2.addEventListener('change', conversion);

let result;

//funcion de conversion, donde vemos las medidas y codigo/equivalencias a ejecutar segun sea requerido
function conversion(){
    if(valor.value==''){
        return;
    }
    number = valor.value;
    number = parseFloat(number);

    if(unit1.value=="kilometer" && unit2.value=="kilometer"){
        result = number * 1;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(2) + " " + unit2.value;
    }

    if(unit1.value=="kilometer" && unit2.value=="meter"){
        result = number * 1000;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(2) + " " + unit2.value;
    }

    if(unit1.value=="kilometer" && unit2.value=="centimeter"){
        result = number * 10000;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(2) + " " + unit2.value;
    }

    if(unit1.value=="centimeter" && unit2.value=="centimeter"){
        result = number * 1;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(2) + " " + unit2.value;
    }

    if(unit1.value=="centimeter" && unit2.value=="meter"){
        result = number / 100;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(3) + " " + unit2.value;
    }

    if(unit1.value=="centimeter" && unit2.value=="kilometer"){
        result = number / 1000;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(4) + " " + unit2.value;
    }

    if(unit1.value=="meter" && unit2.value=="meter"){
        result = number * 1;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(2) + " " + unit2.value;
    }
    
    if(unit1.value=="meter" && unit2.value=="centimeter"){
        result = number * 100;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(2) + " " + unit2.value;
    }

    if(unit1.value=="meter" && unit2.value=="kilometer"){
        result = number / 1000;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(3) + " " + unit2.value;
    }

    if(unit1.value=="miles" && unit2.value=="miles"){
        result = number * 1;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(2) + " " + unit2.value;
    }

    if(unit1.value=="miles" && unit2.value=="kilometer"){
        result = number * 1.60934;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(2) + " " + unit2.value;
    }

    if(unit1.value=="miles" && unit2.value=="centimeter"){
        result = number / 0.0000062137;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(2) + " " + unit2.value;
    }

    if(unit1.value=="miles" && unit2.value=="meter"){
        result = number / 0.00062137;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(2) + " " + unit2.value;
    }

    if(unit1.value=="meter" && unit2.value=="miles"){
        result = number * 0.00062137;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(2) + " " + unit2.value;
    }
    
    if(unit1.value=="centimeter" && unit2.value=="miles"){
        result = number * 0.0000062137;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(4) + " " + unit2.value;
    }
    
    if(unit1.value=="kilometer" && unit2.value=="miles"){
        result = number / 0.62137;
        conversionResult.innerHTML = number.toFixed(2) + ' ' + unit1.value + " equivalen a " + result.toFixed(2) + " " + unit2.value;
    }
}

//funcion para anotar valores temporalmente
let saveConvertion = document.getElementById("saveValue");
saveConvertion.addEventListener('click', saveValue);
let savedValue = document.getElementById("storedValues");

function saveValue(){
    if(valor.value==''){
        return Swal.fire({
            icon: 'error',
            title: 'Oh no!',
            text: 'Parece que no has convertido nada aun',
        })

    }
    
    if(conversionResult.textContent.includes(' ')){
        savedValue.classList.remove('invisible');
        localStorage.setItem("convertion", conversionResult.innerHTML);
        savedValue.innerHTML = localStorage.getItem("convertion");
    }   
}
//levantar el valor previamente guardado
savedValue.innerHTML = localStorage.getItem("convertion");


//manipulacion del formulario para evitar el comportamiento por defecto de refrescar
const form = document.getElementById('contactForm');
form.addEventListener('submit', sendForm);

function sendForm(event){
    event.preventDefault();

    Swal.fire({
        icon: 'success',
        title: 'Muchas gracias!',
        text: 'Tu comentario ha sido enviado',
    })

}