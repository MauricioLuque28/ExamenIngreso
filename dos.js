/*
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, 
los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
d) El promedio de nota por sexo
f) La edad y nombre del que cursa mas materias que no sean en forma remota
*/
function mostrar()
{
  var nombre;
  var tipoCursada;
  var cantidadMaterias;
  var sexo;
  var notaPromedio;
  var edad;
  var continuar = true;
  var flag1;
	var nombreMejorPromedio;
	var mejorPromedioFemoNB;
	var flag2;
	var nombreJoven;
	var edadMasJoven;
	var acumuladorNotaMasculino;
	var acumuladorNotaFemenino;
	var acumuladorNotaNB;
	var contadorMasculino;
	var contadorFemenino;
	var contadorNB;
	var promedio;
	var flag3;
	var mayorCantidadMaterias;
	var edadMayorCantidadMaterias;
	var nombreMayorCantidadMaterias;

  flag1 = 0;
  flag2 = 0;
  acumuladorNotaMasculino = 0;
	acumuladorNotaFemenino = 0;
	acumuladorNotaNB = 0;
	contadorMasculino = 0;
	contadorFemenino = 0;
	contadorNB = 0;
  flag3 = 0;

  do {
      do {
        nombre = prompt ("Ingrese el nombre del alumno:");
      }  while (isNan(nombre) ==false);

      do {
        tipoCursada = prompt ("Ingrese cursada:");
      }  while (tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota");

		  do {
        cantidadMaterias = prompt("Ingrese cantidad de materias:");
        cantidadMaterias = parseInt (cantidadMaterias);
      }  while (isNaN(cantidadMaterias) || cantidadMaterias < 0 || cantidadMaterias > 8);

		  do {
        sexo = prompt ("Ingrese sexo:");
      } while (sexo != "femenino" && sexo != "masculino" && sexo != "no binario");
		
		  do {
        notaPromedio = prompt("Ingrese nota entre 0 y 10");
        notaPromedio = parseInt (notaPromedio);
      } while (isNaN(notaPromedio)|| notaPromedio < 0 || notaPromedio > 10);

		  do {
        edad = prompt ("Ingrese edad");
        edad = parseInt (edad);
      } while (isNaN (edad) || edad < 18 || edad > 50);

      switch (sexo) {
			  case "masculino":
			  	contadorMasculino++;
				  acumuladorNotaMasculino = acumuladorNotaMasculino + notaPromedio;
			  	break;
			  case "no binario":
			  	contadorNB++;
			  	acumuladorNotaNB = acumuladorNotaNB + notaPromedio;
			  	break;
			  case "femenino":
				  contadorFemenino++;
				  acumuladorNotaFemenino = acumuladorNotaFemenino + notaPromedio;
				  break;		
	  	}

    if (flag1 == 0 && sexo != "masculino"){
			flag1++;
			mejorPromedioFemoNB = notaPromedio;
			nombreMejorPromedio = nombre;
		}
		else if (notaPromedio > mejorPromedioFemoNB && sexo != "masculino"){
			mejorPromedioFemoNB = notaPromedio;
			nombreMejorPromedio = nombre;
		}

		if (flag2 == 0 && tipoCursada == "libre"){
			flag2++;
			nombreJoven = nombre;
			edadMasJoven = edad;
		}
		else if (edad < edadMasJoven && tipoCursada == "libre"){
			nombreJoven = nombre;
			edadMasJoven = edad;
		}

		if (flag3 == 0 && tipoCursada != "remota"){
			flag3++;
			edadMayorCantidadMaterias = edad;
			nombreMayorCantidadMaterias = nombre;
			mayorCantidadMaterias = cantidadMaterias;
		}
		else if (cantidadMaterias > mayorCantidadMaterias && tipoCursada != "remota"){
			edadMayorCantidadMaterias = edad;
			nombreMayorCantidadMaterias = nombre;
			mayorCantidadMaterias = cantidadMaterias;
		}
  }
  while (continuar = confirm ("Desea ingresar otro dato?"));

  if (flag1 > 0) {
		document.write ("El mejor promedio no masculino es :"+ nombreMejorPromedio +"<br>");
	}

	if (flag2 > 0) {
		document.write ("El nombre del mas joven que dan libre es :"+ nombreJoven +"<br>");
	}

	if(contadorMasculino > 0){
		promedio = acumuladorNotaMasculino / contadorMasculino;
		document.write ("El promedio por nota del sexo masculino es :"+ promedio +"<br>");
	}
	else if (contadorFemenino > 0) {
		promedio = acumuladorNotaFemenino / contadorFemenino;
		document.write ("El promedio por nota del sexo femenino es :"+ promedio +"<br>");
	}
	else if (contadorNB > 0) {
		promedio = acumuladorNotaNB / contadorNB;
		document.write ("El promedio por nota del sexo no binario es :"+ promedio +"<br>");
	}
}
