*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  font-family:Arial,Helvetica,sans-serif;
  color:#171717;
  background:#fff;
}


/* HEADER */

header{
  height:75px;
  padding:0 6%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  border-bottom:1px solid #eee;
  position:sticky;
  top:0;
  background:#fff;
  z-index:100;
}

.logo{
  font-size:15px;
  font-weight:bold;
  letter-spacing:2px;
}

.logo span{
  font-weight:normal;
  margin:0 7px;
}

.cart-button{
  border:0;
  background:#171717;
  color:#fff;
  padding:11px 19px;
  border-radius:30px;
  cursor:pointer;
  font-size:14px;
}

.cart-button span{
  background:#fff;
  color:#111;
  padding:3px 7px;
  border-radius:50%;
  margin-left:5px;
}


/* HERO */

.hero{
  min-height:600px;
  display:flex;
  align-items:center;
  padding:80px 8%;

  background:
    linear-gradient(
      90deg,
      #f2eee8 0%,
      #f8f6f3 50%,
      #fff 100%
    );
}

.hero-text{
  max-width:650px;
}

.hero-text small{
  letter-spacing:4px;
  font-size:11px;
  font-weight:bold;
}

.hero-text h1{
  font-size:clamp(50px,8vw,90px);
  line-height:.98;
  margin:20px 0;
}

.hero-text h1 i{
  font-weight:normal;
}

.hero-text p{
  max-width:500px;
  line-height:1.7;
  color:#666;
  font-size:17px;
}

.hero-text a{
  display:inline-block;
  margin-top:30px;
  padding:15px 27px;
  background:#171717;
  color:white;
  text-decoration:none;
  font-size:12px;
  letter-spacing:1px;
}


/* SECTIONS */

.section{
  padding:80px 6%;
}

.title{
  text-align:center;
  margin-bottom:40px;
}

.title p{
  font-size:11px;
  letter-spacing:3px;
  color:#999;
  margin-bottom:8px;
}

.title h2{
  font-size:36px;
}


/* CATEGORY */

.categories{
  display:grid;
  grid-template-columns:
    repeat(auto-fit,minmax(145px,1fr));

  gap:18px;
}

.category{
  min-height:145px;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  background:#faf9f7;

  border:1px solid #eee;

  cursor:pointer;

  transition:.25s;
}

.category:hover{
  transform:translateY(-6px);
  border-color:#222;
  box-shadow:0 10px 25px #00000012;
}

.category span{
  font-size:35px;
  margin-bottom:13px;
}

.category h3{
  font-size:15px;
  font-weight:500;
}


/* JEWELLERY */

.jewellery-section{
  background:#faf9f7;
}

.jewellery-section .category{
  background:white;
}


/* PRODUCTS */

.products{
  background:#fff;
}

.product-grid{
  display:grid;
  grid-template-columns:
    repeat(auto-fit,minmax(220px,1fr));

  gap:25px;
}

.product-card{
  border:1px solid #eee;
  background:white;
  overflow:hidden;
}

.product-photo{
  height:280px;

  display:flex;
  align-items:center;
  justify-content:center;

  background:#f5f5f5;

  color:#999;

  text-align:center;
  font-size:13px;
}

.product-info{
  padding:20px;
}

.product-info h3{
  font-size:17px;
  margin-bottom:8px;
}

.product-category{
  color:#999;
  font-size:12px;
  margin-bottom:12px;
}

.price{
  font-weight:bold;
  margin-bottom:15px;
}

.add-cart{
  width:100%;
  padding:12px;

  background:#171717;
  color:white;

  border:0;

  cursor:pointer;
}


/* FOOTER */

footer{
  background:#171717;
  color:white;
  text-align:center;
  padding:55px 20px;
}

.footer-logo{
  font-weight:bold;
  letter-spacing:2px;
  margin-bottom:12px;
}

footer p{
  color:#aaa;
  margin-bottom:12px;
}

footer small{
  color:#666;
}


/* CART */

.overlay{
  position:fixed;
  inset:0;
  background:#0008;
  z-index:200;
  display:none;
}

.overlay.show{
  display:block;
}

.cart-panel{
  position:fixed;
  right:-430px;
  top:0;

  width:min(410px,92vw);
  height:100vh;

  background:white;

  z-index:300;

  padding:25px;

  display:flex;
  flex-direction:column;

  transition:.3s;

  box-shadow:-10px 0 30px #0003;
}

.cart-panel.open{
  right:0;
}

.cart-top{
  display:flex;
  justify-content:space-between;
  align-items:center;

  border-bottom:1px solid #eee;

  padding-bottom:18px;
}

.cart-top h2{
  font-size:24px;
}

.cart-top button{
  border:0;
  background:none;
  font-size:30px;
  cursor:pointer;
}

.cart-item{
  display:flex;
  justify-content:space-between;
  padding:18px 0;
  border-bottom:1px solid #eee;
}

.remove{
  border:0;
  background:#eee;
  padding:7px 10px;
  cursor:pointer;
}

.cart-bottom{
  margin-top:auto;
  border-top:1px solid #eee;
  padding-top:20px;
}

.total{
  font-size:18px;
}

.checkout{
  width:100%;
  margin-top:18px;
  padding:15px;
  background:#171717;
  color:#fff;
  border:0;
  cursor:pointer;
}


/* MOBILE */

@media(max-width:600px){

  header{
    padding:0 4%;
  }

  .logo{
    font-size:10px;
  }

  .hero{
    min-height:500px;
    padding:60px 7%;
  }

  .hero-text h1{
    font-size:50px;
  }

  .section{
    padding:60px 5%;
  }

  .categories{
    grid-template-columns:
      repeat(2,1fr);
  }

  .category{
    min-height:130px;
  }

  .product-grid{
    grid-template-columns:
      repeat(2,1fr);
    gap:12px;
  }

  .product-photo{
    height:200px;
  }

  .product-info{
    padding:12px;
  }

}
