
let correoElectronico;
let validarCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

while (true) {
    correoElectronico = prompt("-INGRESA TU CORREO ELECTRONICO- \n Por motivos de seguridad se solicita su correo electronico");

    if (validarCorreo.test(correoElectronico)) {
        console.log("Correo electrónico válido:", correoElectronico);
        alert("Correo electrónico válido: " + correoElectronico);
        break;
    } else {
        console.log("Correo electrónico inválido. Por favor, ingresa un correo válido.");

        alert("Correo electrónico inválido. Por favor, ingresa un correo válido.");
    }
}
const productos = [
    {
    id: 1,
    nombre: "Frutos secos",
    precio: 2600,
    },
    {
    id: 2,
    nombre: "cereales",
    precio: 1850,
    },
    {
    id: 3,
    nombre: "Semillas",
    precio: 1100,
    },
    {
        id: 4,
        nombre: "Yerbas",
        precio: 2350,
        },
];

const agregarProductos = ({ nombre, precio}) => {
    productos.push({ id: 2, nombre, precio });
};

const mostrarProductos = () => {
    let mensajeInformativo = "";
    for (let producto of productos) {
    mensajeInformativo += `
  
    ID : ${producto.id}
    Nombre : ${producto.nombre}
    Precio : ${producto.precio}\n

    `;
    }
    console.log(mensajeInformativo);
  };
  
  const solicitarDatosDelProducto = () => {
    let nombreProducto = prompt("Ingresa el nombre del producto");
    let precioDelProducto = parseFloat(
        prompt("A continuacion ingresa el precio")
      );
      alert("Solicitud exitosa.")
    if (nombreProducto && !isNaN(precioDelProducto)) {
      return { nombre: nombreProducto, precio: precioDelProducto };
    } else {
      alert("Por favor ingresa datos validos");
    }
  };
  
  const eliminarProducto = (nombre) => {
    const indice = productos.findIndex(
      (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()
    );
  
    if (indice !== -1) {
      productos.splice(indice, 1);
      console.log(`Producto ${nombre} eliminado con exito`);
      mostrarProductos();
    } else {
      alert(`Producto ${nombre} no encontrado`);
    }
  };

  
  const main = () => {
    let opcion = "";
  
    while (opcion !== "4") {
      opcion = prompt(
        "Selecciona una opcion: \n1. Agregar Productos \n2. Ver Productos \n3. Eliminar producto \n4. Salir"
      );
  
      switch (opcion) {
        case "1":
          const nuevoProducto = solicitarDatosDelProducto();
          if (nuevoProducto) {
            agregarProductos(nuevoProducto);
          };
          break;
  
        case "2":
          mostrarProductos();
          break;
  
        case "3":
          const productoAElimar = prompt(
            "ingresa el nombre del producto a eliminar"
          );
          eliminarProducto(productoAElimar);
          break;

  
        case "4":
          console.log("Saliendo...");
          break;
  
        default:
          alert("Opcion no valida . Por favor selecciona de nuevo");
      }
    }
  };
  
  main()