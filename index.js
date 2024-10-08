
let correoElectronico;
let validarCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

while (true) {
    correoElectronico = prompt("-Ingresa tu correo electrónico- \n Nos comunicaremos por este medio para coordinar la entrega");

    if (validarCorreo.test(correoElectronico)) {
        console.log("Correo electrónico válido:", correoElectronico);
        alert("Correo electrónico válido: " + correoElectronico);
        break;
    } else {
        console.log("Correo electrónico inválido. Por favor, ingresa un correo válido.");

        alert("Correo electrónico inválido. Por favor, ingresa un correo válido.");
    }
}

function mostrarProductos() {
    let catalogo= "Lista de productos/precios: \n";
    catalogo += "1.  Mix Frutos Secos- $4850 \n";
    catalogo += "2. Mix Cereales- $2900 \n";
    catalogo += "3. Mix semillas- $1750 \n";
    return catalogo;
}

function comprarProducto() {
    let total = 0;
    let seguirComprando = true;

    while (seguirComprando) {
        let catalogo = mostrarProductos();
        let eleccion = prompt(
        catalogo +
        "Que producto quieres comprar? Ingrese el numero o escriba 'salir' para finalizar "
        );
    
        if (eleccion === null || eleccion === "") {
        alert("No has ingresado un datos valido");
        continue;
        }
    
        if (eleccion === "salir") {
        break;
        }
    
        eleccion = parseInt(eleccion);
    
        if (isNaN(eleccion) || eleccion < 1 || eleccion > 4) {
        alert("Producto no valido, por favor selecciona nuevamente");
        continue;
        }
    
        if (eleccion === 1) {
        total += 4850;
        alert("-Mix de Frutos Secos-\n¡Agregado al carrito! ");
        } else if (eleccion === 2) {
        total += 2900;
        alert("-Mix de Cereales-\n¡Agregado al carrito! ");
        } else if (eleccion === 3) {
        total += 1750;
        alert("-Mix de Semillas-\n¡Agregado al carrito! ");
        }

        let resupuesta = prompt("¿Quieres seguir comprando? (si/no)\n 'si desea seguir escribir 'SI' de lo contrario escribir 'NO'");
    
    
        if (resupuesta === "si") {
        seguirComprando = true;
        } else {
        seguirComprando = false;
        }
    }
    
    alert(`Gracias por su compra!\n EL TOTA ES: $${total}\n-nos comunicaremos por Email para confirmar el pedido.`);
    }
    
    comprarProducto();

