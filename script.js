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
const porcentaje = document.getElementById('porcentaje')
const divide = document.getElementById('divide')
const multipli = document.getElementById('multiplicacion')
const resta = document.getElementById('resta')
const suma = document.getElementById('suma')
const decimal = document.getElementById('decimal')


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

numero0.addEventListener('click',()=>{
    display2.value += '0'
});



//PUNTO DECIMAL 

decimal.addEventListener('click', ()=>{
    if (display2.value && !display1.value.includes('.') && !isNaN(display2.value)) {
        display2.value += '.';  // Agregar el punto decimal
    }
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

const operadorPorcentaje = document.getElementById('porcentaje')
operadorPorcentaje.addEventListener('click', () => {
    num1 = parseFloat(display2.value)
    operador = '%'
    display2.value = ''  // Limpia la pantalla para esperar el siguiente número

    if (!isNaN(num1)) {
        // Muestra el porcentaje calculado directamente en display2
        display2.value = num1 / 100;
        display1.value = num1 + operador; // Muestra la operación en display1
    } else {
        display2.value = ''
    }
});


const botonBorrar = document.getElementById('borrar')
botonBorrar.addEventListener('click', ()=>{
    if (display2.value.length > 0){
        display2.value = display2.value.slice(0, -1);
        display1.value = ''
        num1 = ''
        operador = null
    }
});

const botonIgual = document.getElementById('igual')
botonIgual.addEventListener('click', ()=>{
    let num2 = parseFloat(display2.value);
    let resultado;
    

    if (!['+', '-', 'x', '÷', '%'].includes(operador)) {
        display1.value = 'Error';
        return;
    }
    if (operador === '+'){
        resultado = num1 + num2;
    }else if (operador === '%'){
        resultado = (num1 * num2) / 100;
    }else if ( operador === '-'){
        resultado = num1 - num2;
    }else if ( operador === 'x'){
        resultado = num1 * num2;
    }else if ( operador === '÷'){
        if (num2 !== 0){
            resultado = num1 / num2;
        } else {
            resultado = 'Error'
        }   
    }
    
    if (!isNaN(num1) && operador && !isNaN(num2)) {
        display1.value = num1 + operador + num2
    } else {
        display1.value = 'Error';
    }


display2.value = !isNaN(resultado) && Number.isFinite(resultado) ? parseFloat(resultado.toFixed(2)) : resultado;
num1 = null;
operador = '';
});
