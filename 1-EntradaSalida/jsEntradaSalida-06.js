/* Tomas Pereira DIV D grupo 2 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

/*
 txtIdNumeroUno
txtIdNumeroDos 

operadores aritmeticos
+ - * / %
operadores relacionales 
  <  >
  operadores logicos 
  && ! 
*/