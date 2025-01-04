const display1 = document.getElementById('input-display2')
const display2 = document.getElementById('input-display')

//BOTONES .number-button

const numero7 = document.getElementById('numero7')
const numero8 = document.getElementById('numero8')
const numero9 = document.getElementById('numero9')
const numero4 = document.getElementById('numero4')
const numero5 = document.getElementById('numero5')
const numero6 = document.getElementById('numero6')
const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const numero3 = document.getElementById('numero3')
const numero0 = document.getElementById('numero0')

//BOTONES .sign-button

const borrar = document.getElementById('borrar')
const parentesis = document.getElementById('parentesis')
const cociente = document.getElementById('residuo')
const divide = document.getElementById('divide')
const multipli = document.getElementById('multiplicacion')
const resta = document.getElementById('resta')
const suma = document.getElementById('suma')
const punto = document.getElementById('punto')


//Asignamos los addEventListener


numero7.addEventListener('click',()=> {
    display2.value += '7'
});

numero8.addEventListener('click',()=> {
    display2.value += '8'
});

numero9.addEventListener('click',()=> {
    display2.value += '9'
});

numero4.addEventListener('click',()=> {
    display2.value += '4'
});

numero5.addEventListener('click',()=> {
    display2.value += '5'
});

numero6.addEventListener('click',()=> {
    display2.value += '6'
});

numero1.addEventListener('click',()=> {
    display2.value += '1'
});

numero2.addEventListener('click',()=> {
    display2.value += '2'
});

numero3.addEventListener('click',()=> {
    display2.value += '3'
});




let num1 = null; 
let operador = ''

const operadorSuma = document.getElementById('suma')
operadorSuma.addEventListener('click',()=>{
    num1 = parseFloat(display2.value)
    operador = '+'
    display2.value = ''
});

const operadorResta = document.getElementById('resta')
operadorResta.addEventListener('click',()=>{
    num1 = parseFloat(display2.value)
    operador = '-'
    display2.value = ''
});

const operadorMultipli = document.getElementById('multipli')
operadorMultipli.addEventListener('click',()=>{
    num1 = parseFloat(display2.value)
    operador = 'x'
    display2.value = ''
});

const operadorDivide = document.getElementById('divide')
operadorDivide.addEventListener('click',()=>{
    num1 = parseFloat(display2.value)
    operador = '÷'
    display2.value = ''
});

const operadorResiduo = document.getElementById('residuo')
operadorResiduo.addEventListener('click',() =>{
    num1 = parseFloat(display2.value)
    operador ='%'
    display2.value = ''

})



const botonBorrar = document.getElementById('borrar')
botonBorrar.addEventListener('click', ()=>{
    display2.value = ''
    num1 = ''
    operador = null
    display1.value = ''
});



const botonIgual = document.getElementById('igual')
botonIgual.addEventListener('click', ()=>{
    let num2 = parseFloat(display2.value);
    let resultado;
    display1.value = num1 + operador + num2


if (operador === '+'){
    resultado = num1 + num2;
}else if (operador === '%'){
    resultado = num1 % num2;
}else if ( operador === '-'){
    resultado = num1 - num2;
} else if ( operador === 'x'){
    resultado = num1 * num2;
} else if ( operador === '÷'){
    if (num2 !== 0){
        resultado = num1 / num2;
    } else {
        resultado = 'Error'
    }
    
};

display2.value = resultado;
num1 = null;
operador = '';
});
