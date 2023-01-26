console.log("Hello World!")

const input1 = document.querySelector('#inputId');
const input2 = document.querySelector('#inputId2');
const btn = document.querySelector('#botonCalcular');
const pResult = document.querySelector('#resultado');

btn.addEventListener('submit', sumarImputsValues)

function sumarImputsValues(event){
    // console.log({event});
    event.preventDefault();
    
    const result = "Resultado" + Number(input1.value) + Number(input2.value);
    pResult.innerText = result;
}
