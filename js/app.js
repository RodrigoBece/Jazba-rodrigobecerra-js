let cart = [];


document.addEventListener('DOMContentLoaded', () => {
    fetch('productos.json')
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
            document.getElementById('category').addEventListener('change', (e) => {
                filterProducts(products, e.target.value);
            });
        });
});


function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}" class="product-image">
            <h3>${product.nombre}</h3>
            <p>${product.descripcion}</p>
            <p>Precio: ${product.precio.toFixed(2)} $</p>
            <button onclick="addToCart(${product.id}, '${product.nombre}', ${product.precio})">Añadir al Carrito</button>
        `;
        productContainer.appendChild(productDiv);
    });
}


function filterProducts(products, category) {
    const filteredProducts = category ? products.filter(product => product.categoria === category) : products;
    displayProducts(filteredProducts);
}


function addToCart(id, nombre, precio) {
    cart.push({ id, nombre, precio });
    updateCart();
}


function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        total += item.precio;
        const li = document.createElement('li');
        li.innerHTML = `${item.nombre} - ${item.precio.toFixed(2)} $ <button onclick="removeFromCart(${item.id})">Eliminar</button>`;
        cartItems.appendChild(li);
    });

    totalPrice.textContent = total.toFixed(2);
}


function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}


document.getElementById('checkout').addEventListener('click', () => {
    alert('Compra confirmada! Gracias por tu pedido.');
    cart = [];
    updateCart();
});


document.getElementById('simulate-process').addEventListener('click', () => {
    document.getElementById('simulation-result').textContent = '¡Pedido simulado con éxito!';
});

const shippingOptions = [
  { city: "Buenos Aires", deliveryTime: 4, shippingCost: 9500 },
  { city: "Cordoba", deliveryTime: 2, shippingCost: 3200 },
  { city: "Mendoza", deliveryTime: 4, shippingCost: 8000 },
  { city: "San Luis", deliveryTime: 3, shippingCost: 6500 },
  { city: "Catamarca", deliveryTime: 5, shippingCost: 9500 }
];


function initializeSimulator() {
  const simulationResult = document.getElementById("simulation-result");
  const simulateButton = document.getElementById("simulate-process");

  simulateButton.addEventListener("click", () => {
      
      const city = prompt("Ingrese su ciudad de envío (Buenos Aires, Cordoba, Mendoza, San Luis, Catamarca):");
      const shipping = shippingOptions.find(option => option.city.toLowerCase() === city?.toLowerCase());

      if (shipping) {
          
          const deliveryTime = shipping.deliveryTime;
          const shippingCost = shipping.shippingCost;
          const cartTotal = cart.reduce((sum, item) => sum + item.precio, 0);


          simulationResult.innerHTML = `
              <p>Ciudad: ${shipping.city}</p>
              <p>Tiempo estimado de entrega: ${deliveryTime} días</p>
              <p>Costo de envío: ${shippingCost.toFixed(2)} $</p>
          `;
      } else {
          simulationResult.textContent = "La ciudad ingresada no está disponible para envío.";
      }
  });
}


document.addEventListener('DOMContentLoaded', () => {
  initializeSimulator();
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nombre && apellido && email) {
        document.getElementById('form-message').textContent = '¡Formulario enviado con éxito!';
    } else {
        document.getElementById('form-message').textContent = 'Por favor, completa todos los campos.';
    }
});