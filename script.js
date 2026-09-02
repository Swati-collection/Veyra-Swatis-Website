let products = [

  {
    name:"Premium Suit",
    category:"Suits",
    price:null
  },

  {
    name:"Classic Hoodie",
    category:"Hoodies",
    price:null
  },

  {
    name:"Premium T-Shirt",
    category:"T-Shirts",
    price:null
  },

  {
    name:"Classic Sweatshirt",
    category:"Sweatshirts",
    price:null
  },

  {
    name:"Elegant Saree",
    category:"Saree",
    price:null
  },

  {
    name:"Classic Cap",
    category:"Caps",
    price:null
  },

  {
    name:"Elegant Necklace",
    category:"Necklace",
    price:null
  },

  {
    name:"Designer Earrings",
    category:"Earrings",
    price:null
  },

  {
    name:"Fashion Ring",
    category:"Rings",
    price:null
  },

  {
    name:"Fashion Bracelet",
    category:"Bracelets",
    price:null
  },

  {
    name:"Designer Bangles",
    category:"Bangles",
    price:null
  },

  {
    name:"Elegant Mangalsutra",
    category:"Mangalsutra",
    price:null
  },

  {
    name:"Designer Anklets",
    category:"Anklets",
    price:null
  },

  {
    name:"Nose Pin",
    category:"Nose Pins",
    price:null
  },

  {
    name:"Maang Tikka",
    category:"Maang Tikka",
    price:null
  },

  {
    name:"Jewellery Set",
    category:"Jewellery Sets",
    price:null
  }

];


let cart=[];


/* SHOW PRODUCTS */

function renderProducts(category="All"){

  const grid=document.getElementById("productGrid");

  const title=document.getElementById("productTitle");

  let list=products;

  if(category!=="All"){

    list=products.filter(
      product=>product.category===category
    );

    title.textContent=category;

  }else{

    title.textContent="Featured Products";

  }


  grid.innerHTML="";


  list.forEach((product,index)=>{

    const card=document.createElement("div");

    card.className="product-card";


    card.innerHTML=`

      <div class="product-photo">

        Product Photo<br>
        will be added here

      </div>


      <div class="product-info">

        <h3>${product.name}</h3>

        <div class="product-category">
          ${product.category}
        </div>

        <div class="price">

          ${
            product.price
            ? "₹"+product.price
            : "Price Coming Soon"
          }

        </div>


        <button

          class="add-cart"

          onclick="addToCart(${index})"

          ${
            product.price===null
            ? "disabled style='opacity:.45;cursor:not-allowed'"
            : ""
          }

        >

          ${
            product.price
            ? "ADD TO CART"
            : "COMING SOON"
          }

        </button>

      </div>

    `;


    grid.appendChild(card);

  });

}


/* CATEGORY */

function showCategory(category){

  renderProducts(category);

  document
    .querySelector(".products")
    .scrollIntoView({
      behavior:"smooth"
    });

}


/* CART */

function addToCart(index){

  const product=products[index];

  if(!product.price){

    return;

  }

  cart.push(product);

  updateCart();

  openCart();

}


function removeFromCart(index){

  cart.splice(index,1);

  updateCart();

}


function updateCart(){

  document.getElementById("cartCount")
    .textContent=cart.length;


  const items=
    document.getElementById("cartItems");


  if(cart.length===0){

    items.innerHTML=`

      <p style="
        color:#999;
        padding:25px 0;
      ">

        Your cart is empty.

      </p>

    `;

  }else{

    items.innerHTML="";


    cart.forEach((product,index)=>{

      items.innerHTML+=`

        <div class="cart-item">

          <div>

            <strong>
              ${product.name}
            </strong>

            <br>

            ₹${product.price}

          </div>


          <button

            class="remove"

            onclick="removeFromCart(${index})"

          >

            Remove

          </button>

        </div>

      `;

    });

  }


  const total=cart.reduce(

    (sum,product)=>
      sum+Number(product.price),

    0

  );


  document.getElementById("cartTotal")
    .textContent=total;

}


/* OPEN CART */

function openCart(){

  document
    .getElementById("cartPanel")
    .classList.add("open");


  document
    .getElementById("overlay")
    .classList.add("show");

}


/* CLOSE CART */

function closeCart(){

  document
    .getElementById("cartPanel")
    .classList.remove("open");


  document
    .getElementById("overlay")
    .classList.remove("show");

}


/* CHECKOUT */

function checkout(){

  alert(
    "Checkout, COD and Online Payment will be added after products and prices are finalized."
  );

}


/* START */

renderProducts();

updateCart();
