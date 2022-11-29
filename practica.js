console.log("Bienvenido ya se cargo tu fichero JS");



solicitarNombre();

function solicitarNombre() {
    let nombre = prompt("Ingrese el nombre");
    console.log("Ingresaste el nombre", nombre);
    let apellido = prompt("Ingrese el apellido");
    console.log("Ingresaste el apellido", apellido);

    //if((nombre != null) && (apellido != null)) se reemplaza por la siguiente linea de cadena vacia
    if ((nombre != "") && (apellido != "")) {
        //si ingreso ambos parametros mostrar mensaje de bienvenida
        console.log("-->Bienvenida/o ", nombre, apellido);
        alert("Bienvenida/o " + nombre + " " + apellido + " que deseas realizar")
        console.log("En nuestra pagina", " podrás realizar diferentes operaciones: " + "\n\n" + "1.- Consultar Precios" + "\n" + "2.- Comprar" + "\n");
        alert("En nuestra pagina podrás realizar diferentes operaciones: " + "\n\n" + "1.- Consultar Precios" + "\n" + "2.- Comprar");
        elegirOperacion();
    } else {
        //sino menciona un error
        alert("Error: debes ingresar ambos parametros :(");
    }
}
function elegirOperacion() {
    let operacion = parseInt(prompt("Dime el numero de lo que quieres hacer"));
    switch (operacion) {
        case (1):
            console.log("-->Elegiste la operacion Consultar precios");
            alert("Elegiste la operacion Consultar precios.");
            consultarPrecio();
            break;
        case (2):
            console.log("-->Elegiste la operacion Comprar");
            alert("Elegiste la operacion Comprar.");
            comprar();
            break;
        default:
            console.log("--> Debes elegir una de las 2 opciones.");
            alert("Debes elegir una de las 2 opciones.");
            break;
    }
}

function consultarPrecio() {
    console.log("Precio Unitario:" + "\n" + "Clasicos $800" + "\n" + "Ternera $1000");
    alert("Precio Unitario:" + "\n" + "Clasicos $800" + "\n" + "Ternera $1000");
    console.log("Promociones:" + "\n" + "1-Equipate: 3 docenas(incluye una de Ternera) a $2400" + "\n" + "2-Equipa tu heladera: 6 docenas(incluye dos de Ternera) a $4300" + "\n" + "3-Con amigos y familia: 8 docenas(incluye tres de Ternera) a $5800" + "\n");
    alert("Promociones:" + "\n" + "1-Equipate: 3 docenas(incluye una de Ternera) a $2400" + "\n" + "2-Equipa tu heladera: 6 docenas(incluye dos de Ternera) a $4300" + "\n" + "3-Con amigos y familia: 8 docenas(incluye tres de Ternera) a $5800" + "\n");
}

function comprar() {
    let opcion = prompt("Que opcion deseas realizar, pedir por variedad o por promocion?");


    const OPCION_S = opcion.toUpperCase();

    if (OPCION_S == "VARIEDAD") {
        console.log("Que variedad vas a querer? Te recuerdo los precios." + "\n" + "Clasicos $800")
        alert("Que variedad vas a querer? Te recuerdo los precios." + "\n" + "Clasicos $800")
        pedirVariedad();
    } else if (OPCION_S == "PROMOCION") {
        console.log("Que promocion vas a elegir? Te recuerdo los precios" + "\n" + "1-Equipate: 3 docenas(incluye una de Ternera) a $2400" + "\n" + "2-Equipa tu heladera: 6 docenas(incluye dos de Ternera) a $4300" + "\n" + "3-Con amigos y familia: 8 docenas(incluye tres de Ternera) a $5800");
        alert("Que promocion vas a elegir? Te recuerdo los precios" + "\n" + "1-Equipate: 3 docenas(incluye una de Ternera) a $2400" + "\n" + "2-Equipa tu heladera: 6 docenas(incluye dos de Ternera) a $4300" + "\n" + "3-Con amigos y familia: 8 docenas(incluye tres de Ternera) a $5800");
        pedir()
    } else {
        alert("Si deseas hacer el pedido via wp, en nuestra pagina encontraras el contacto");
    }
}


function pedirVariedad() {
    let ingreso = prompt("La unica opcion disponible deberas elegir.\n " + "\n\n1-Clasico");
    let clasico = 1;
    //let ternera = 2;

    while ((parseInt(ingreso) !== clasico)) {
        ingreso = prompt("La unica opcion disponible deberas elegir.\n " + "\n\n1-Clasico");
    }

    if (ingreso == clasico) {

        let variedad = 1;
        let cantidad = 2;


        let opcion = prompt("Elige si quieres por variedad o cantidad.\n " + "\n1-Variedad" + "\n2-Cantidad");

        while ((parseInt(opcion) !== variedad) && (parseInt(opcion) !== cantidad)) {
            opcion = prompt("Elige si quieres por variedad o cantidad.\n " + "\n1-Variedad" + "\n2-Cantidad");
        }

        if (opcion == 1) {
            alert("Vas a comprar Sorrentinos Clasicos'");
            alert("El costo unitario es de $800 pesos");

            let cantidadClasico = prompt("Indica la cantidad de Clasicos que deseas");

            while ((parseInt(cantidadClasico) <= 0)) {
                alert("Debes elegir al menos 1 docena para seguir la compra. Gracias");
                cantidadClasico = prompt("Indica la cantidad de Clasicos");
            }
            let suma = parseInt(cantidadClasico) * 800;
            alert("El monto a pagar es " + suma);

            let pago = prompt("Con cuanto abonarias?");

            if (pago < suma) {
                alert("Tu Saldo es insuficiente para la compra")
            }
            if (pago >= suma) {
                alert(" Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
            }

        } else {
            alert("Vas a comprar Sorrentinos Clasicos por cantidad'");
            alert("El costo unitario es de $800 pesos");

            let cantidadClasico = prompt("Indica la cantidad de Clasico que deseas");

            while ((parseInt(cantidadClasico) <= 0)) {
                alert("Debes elegir al menos 1 docena para seguir la compra. Gracias");
                cantidadClasico = prompt("Indica la cantidad de Clasico");
            }
            let suma = parseInt(cantidadClasico) * 800;
            alert("El monto a pagar es " + suma);

            let pago = prompt("Con cuanto abonarias?");

            if (pago < suma) {
                alert("Tu Saldo es insuficiente para la compra")
            }
            if (pago >= suma) {
                alert(" Tu compra se finalizo con exito. Tu vuelto es " + (parseInt(pago) - parseInt(suma)));
            }


        } 
        
}
}
//Ejemplo del uso del switch
function pedir() {
    let promo = parseInt(prompt("Dime el numero de la promocion que quieres"));

    switch (promo) {
        case (1):
            console.log("-->Equipate: 3 docenas(incluye una de Ternera) a $2400");
            alert("Compraste la promo Equipate: 3 docenas(incluye una de Ternera) a $2400'");
            break;
        case (2):
            console.log("-->Equipa tu heladera: 6 docenas(incluye dos de Ternera) a $4300");
            alert("Compraste la promo Equipa tu heladera: 6 docenas(incluye dos de Ternera) a $4300");
            break;
        case (3):
            console.log("-->Con amigos y familia: 8 docenas(incluye tres de Ternera) a $5800");
            alert("Compraste la promo Con amigos y familia: 8 docenas(incluye tres de Ternera) a $5800");
            break;
        default:
            console.log("--> Debes elegir una de las 3 opciones ");
            alert("Debes elegir una opcion del 1 al 3.");
            break;
    }
}
