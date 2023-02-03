/* Tomas Pereira DIV D grupo 2 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var unNumero;
var otroNumero;
var suma;	

   unNumero = document.getElementById("txtIdNumeroUno").value;
   otroNumero = document.getElementById("txtIdNumeroDos").value;

   unNumero = parseFloat(unNumero);
   otroNumero = parseFloat(otroNumero);

   suma = unNumero + otroNumero;

   alert("la suma es " + suma);
}

function restar()
{
    var unNumero;
    var otroNumero;
    var resta;	
    
    unNumero = document.getElementById("txtIdNumeroUno").value;
    otroNumero = document.getElementById("txtIdNumeroDos").value;

    unNumero = parseFloat(unNumero);
    otroNumero = parseFloat(otroNumero);

    resta = unNumero - otroNumero;

    alert("la resta es " + resta);
}

function multiplicar()
{ 
	var unNumero;
    var otroNumero;
    var multiplicacion;
    
    unNumero = document.getElementById("txtIdNumeroUno").value;
    otroNumero = document.getElementById("txtIdNumeroDos").value;

    unNumero = parseFloat(unNumero);
    otroNumero = parseFloat(otroNumero);

    multiplicacion = unNumero * otroNumero;

    alert("la multiplicacion es " + multiplicacion);
}

function dividir()
{
	var unNumero;
    var otroNumero;
    var division;

    unNumero = document.getElementById("txtIdNumeroUno").value;
    otroNumero = document.getElementById("txtIdNumeroDos").value;

    unNumero = parseFloat(unNumero);
    otroNumero = parseFloat(otroNumero);

    division = unNumero / otroNumero;

    alert("la division es " + division);
}

