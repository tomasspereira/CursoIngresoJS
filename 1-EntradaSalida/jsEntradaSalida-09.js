/* Tomas Pereira DIV D grupo 2
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
   var sueldo;
   var porcentajeDeAumento;
   var totalConAumento;
   
 sueldo = document.getElementById("txtIdSueldo").value;
 sueldo = parseFloat(sueldo);

 porcentajeDeAumento = sueldo * 0.1;

 totalConAumento = sueldo + porcentajeDeAumento;

 document.getElementById("txtIdResultado").value = totalConAumento;

}
/*
txtIdSueldo
txtIdResultado
*/