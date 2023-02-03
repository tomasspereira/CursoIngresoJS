/* Tomas Pereira DIV D grupo 2
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentajeDeDescuento;
	var totalConDescuento;

  importe = document.getElementById("txtIdImporte").value;
  importe = parseFloat(importe);
 
  porcentajeDeDescuento = importe * 0.25;

  totalConDescuento = importe - porcentajeDeDescuento

   document.getElementById("txtIdResultado").value = totalConDescuento;
}



/*
txtIdImporte
txtIdResultado
*/

/* Tomas Pereira DIV D grupo 2 
Ejercicio integrador clase 2: se ingresará por id el valor de una compra de productos para el hogar. 
Se deberá agregar el iva (21%) y  luego se deberá restar el 5% en concepto de compra mayorista. 
El programa deberá mostrar por alert importe bruto, el iva, el importe con iva, el valor del descuento 
y el total a pagar.
*/

function mostrarAumento()
{
  var compraConIva;
  var compra;
  var iva;
  var descuento;
  var total;
  compra = document.getElementById("txtIdImporte").value;
  compra = parseFloat(compra);

  iva = compra * 0.21;
  compraConIva = compra + iva;

  descuento = compra * 0.05;

  descuento = compra - descuento;

  total = compraConIva - descuento
  
  alert("Importe Bruto: " + compra + " El iva es: " + iva + " La compra con iva: " + compraConIva + 
       " Descuento " + descuento + " El total es " + total);
}