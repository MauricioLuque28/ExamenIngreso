/* 
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/
function mostrar()
{
	var nombreProducto;
	var tipoProducto;
	var precioProducto;
	var cantidadUnidades;
	var tipoInflamable;
	var marcaProducto;
	var contadorAlcohol;
	var contadorIAC;
	var contadorQUAT;
	var acumuladorAlcohol;
	var acumuladorIAC;
	var acumuladorQUAT;
	var promedioAlcohol;
	var promedioIAC;
	var promedioQUAT;
	var acumuladorIgnifugo;
	var acumuladorCombustible;
	var acumuladorExplosivo;
	var contadorIACBarato;
	var flagProductos;
	var marcaMasCaro;
	var tipoMasCaro;
	var precioMasCaro;

	contadorAlcohol = 0;
	contadorIAC = 0;
	contadorQUAT = 0;
	acumuladorAlcohol = 0;
	acumuladorIAC = 0;
	acumuladorQUAT = 0;
	acumuladorIgnifugo = 0;
	acumuladorCombustible = 0;
	acumuladorExplosivo = 0;
	contadorIACBarato = 0;
	flagProductos = 0;


	for (var i=0; i<3; i++) {
		
		nombreProducto = prompt ("Ingrese nombre del producto:");
		while (isNaN(nombreProducto) ==false) {
			nombreProducto = prompt ("INVALIDO, reingrese nombre del producto:");
		};

		tipoProducto = prompt ("Ingrese tipo de producto:")
		while (tipoProducto != "alcohol" && tipoProducto != "iac" && tipoProducto != "quat") {
			tipoProducto = prompt ("INVALIDO, reingrese tipo de producto:")
		};

		precioProducto = prompt ("Ingrese precio del producto:");
		precioProducto = parseInt (precioProducto);
		while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300) {
			precioProducto = prompt ("INVALIDO, reingrese precio del producto:");
			precioProducto = parseInt (precioProducto);
		};

		cantidadUnidades = prompt ("Ingrese cantidad de unidades:");
		cantidadUnidades = parseInt (cantidadUnidades);
		while (isNaN(cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 1000) {
			cantidadUnidades = prompt ("INVALIDO, reingrese cantidad de unidades:");
			cantidadUnidades = parseInt (cantidadUnidades);
		};

		tipoInflamable = prompt ("Ingrese tipo de inflamable:");
		while (tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo") {
			tipoInflamable = prompt ("INVALIDO, reingrese tipo de inflamable:");
		};
		
		marcaProducto = prompt ("Ingrese marca del producto");
		while (isNaN(marcaProducto) ==false) {
			marcaProducto = prompt ("INVALIDO, reingrese marca del producto");
		};

		switch (tipoProducto) {
			case "Alcohol":
				contadorAlcohol++;
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
				break;
			case "IAC":
				contadorIAC++;
				acumuladorIAC = acumuladorIAC + cantidadUnidades;
				if (precioProducto < 201) {
					contIACBarato++;
				}
				break;
			case "QUAT":
				contadorQUAT++;
				acumuladorQUAT = acumuladorQUAT + cantidadUnidades;
				break;
		}

		switch (tipoInflamable) {
			case "combustible":
				acumuladorCombustible = acumuladorCombustible + cantidadUnidades;
				break;
			case "explosivo":
				acumuladorExplosivo = acumuladorExplosivo + cantidadUnidades;
				break;
			case "ignifugo":
				acumuladorIgnifugo = acumuladorIgnifugo + cantidadUnidades;
				break;
		}
		
		if(flagProductos == 0){
			tipoMasCaro = tipoProducto;
			marcaMasCaro = marcaProducto;
			precioMasCaro = precioProducto;
			flagProductos++;
		}
		else if (precioProducto > precioMasCaro){
			tipoMasCaro = tipoProducto;
			marcaMasCaro = marcaProducto;
			precioMasCaro = precioProducto;
		}
	}

	if (contadorAlcohol != 0) {
		promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
		document.write("El promedio de cantidad del producto de tipo Alcohol es :" + promedioAlcohol + "<br>");
	}
	else if (contadorIAC != 0) {
		promedioIAC = acumuladorIAC / contadorIAC;
		document.write("El promedio de cantidad del producto de tipo IAC es :" + promedioIAC + "<br>");
	}
	else if (contadorQUAT != 0) {
		promedioQUAT = acumuladorQUAT / contadorQUAT;
		document.write("El promedio de cantidad del producto de tipo QUAT es :" + promedioQUAT + "<br>");
	}

	if (acumuladorIgnifugo > acumuladorCombustible && acumuladorIgnifugo > acumuladorExplosivo) {
		document.write("El tipo de inflamable con mas unidades en total de la compra es: Ignifugo <br>");
	}
	else if (acumuladorCombustible > acumuladorIgnifugo && acumuladorCombustible > acumuladorExplosivo) {
		document.write ("El tipo de inflamable con mas unidades en total de la compra es: Combustible <br>");
	}
	else if (acumuladorExplosivo > acumuladorCombustible && acumuladorExplosivo > acumuladorIgnifugo) {
		document.write ("El tipo de inflamable con mas unidades en total de la compra es: Explosivo <br>");
	}

	if (contadorIACBarato != 0) {
		document.write ("La cantidad de unidades IAC es :"+ contadorIACBarato +"<br>");
	}

	if (flagProductos != 0) {
		document.write ("El producto mas caro es, la marca :"+ marcaMasCaro +" y el tipo :"+ tipoMasCaro);
	}
}
