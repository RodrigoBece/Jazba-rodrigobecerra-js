import { getCartItems } from "./cart.js";

const products = [
  {
    id: 1,
    title: "Frutos secos",
    price: 2100.0,
    image:
      "https://images.ecestaticos.com/Xu94aFXEauvhxPJfYAWxpBT-PuA=/117x0:1999x1411/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Faa8%2F26e%2F5f1%2Faa826e5f1d9b1c2efa3faf8b58688558.jpg",
  },
  {
    id: 2,
    title: "Cereales",
    price: 6000.0,
    image:
      "https://www.nutriplatonestle.es/img/blog/beneficios-cereales-integrales-para-ninos.jpg",
  },
  {
    id: 3,
    title: "Semillas",
    price: 1100.0,
    image:
      "https://www.revistacabal.coop/sites/www.revistacabal.coop/files/styles/nota_detalle/public/semillas_0.jpg?itok=DfWgM4_S",
  },
  {
    id: 4,
    title: "Yerba",
    price: 8200.0,
    image:
      "https://www.infocampo.com.ar/wp-content/uploads/2023/08/yerba-organica.png",
  },

];

export const renderProducts = () => {
  const productList = document.getElementById("productList");

  products.forEach((product) => {
    const productCard = document.createElement("article");
    productCard.classList.add("product");
    productCard.setAttribute("data-id", product.id);

    productCard.innerHTML = `
      <div>
        <img class="product__image" src="${product.image}" alt="${
      product.title
    }" />
      </div>
      <div>
        <h5 class="product__title">${product.title}</h5>
        <p class="product__price">$${product.price.toFixed(2)}</p>
      </div>
      <button class="product__add">Agregar</button>
    `;

    productList.append(productCard);
  });
};

export const updateCartUi = () => {
  const cartContainer = document.querySelector(".cart__container");

  cartContainer.innerHTML = "";
  const cartItems = getCartItems();

  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart__item");
    cartItem.setAttribute("data-id", item.id);

    cartItem.innerHTML = `
     <div class="cart__item">
        <div class="cart__item-title">${item.title}</div>
        <div>${item.price}</div>
        <div>
          <button class="cart__increase">+</button>
          <button class="cart__decrease">-</button>
          <button class="cart__remove">Eliminar</button>
        </div>
      </div>
    
    `;

    cartContainer.appendChild(cartItem);
  });
};