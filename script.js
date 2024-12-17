const display = document.getElementById('input-display')

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
const cociente = document.getElementById('cociente')
const divide = document.getElementById('divide')
const multipli = document.getElementById('multiplicacion')
const resta = document.getElementById('resta')
const suma = document.getElementById('suma')
const punto = document.getElementById('punto')


//Asignamos los addEventListener


numero7.addEventListener('click',()=> {
    display.value += '7'
});

numero8.addEventListener('click',()=> {
    display.value += '8'
});

numero9.addEventListener('click',()=> {
    display.value += '9'
});

numero4.addEventListener('click',()=> {
    display.value += '4'
});

numero5.addEventListener('click',()=> {
    display.value += '5'
});

numero6.addEventListener('click',()=> {
    display.value += '6'
});

numero1.addEventListener('click',()=> {
    display.value += '1'
});

numero2.addEventListener('click',()=> {
    display.value += '2'
});

numero3.addEventListener('click',()=> {
    display.value += '3'
});



let num1 = null; 
let operador = ''

const operadorSuma = document.getElementById('suma')
operadorSuma.addEventListener('click',()=>{
    num1 = parseFloat(display.value)
    operador = '+'
    display.value = ''
});

const operadorResta = document.getElementById('resta')
operadorResta.addEventListener('click',()=>{
    num1 = parseFloat(display.value)
    operador = '-'
    display.value = ''
});

const operadorMultipli = document.getElementById('multipli')
operadorMultipli.addEventListener('click',()=>{
    num1 = parseFloat(display.value)
    operador = '*'
    display.value = ''
});

const operadorDivide = document.getElementById('divide')
operadorDivide.addEventListener('click',()=>{
    num1 = parseFloat(display.value)
    operador = '÷'
    display.value = ''
});



const botonBorrar = document.getElementById('borrar')
botonBorrar.addEventListener('click', ()=>{
    display.value = ''
    num1 = ''
    operador = null
});



const botonIgual = document.getElementById('igual')
botonIgual.addEventListener('click', ()=>{
    let num2 = parseFloat(display.value);
    let resultado;


if (operador === '+'){
    resultado = num1 + num2;
} else if ( operador === '-'){
    resultado = num1 - num2;
} else if ( operador === '*'){
    resultado = num1 * num2;
} else if ( operador === '÷'){
    if (num2 !== 0){
        resultado = num1 / num2;
    } else {
        resultado = 'Error'
    }
    
};

display.value = resultado;
num1 = null;
operador = '';
});
