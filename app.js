const showProductUiFromLocalStorage = () =>{
   const cartObj = getCart();
   for(const name in cartObj){
      showProductUi(name)
   }
}


const addItem = () =>{
   const inputField = document.getElementById("product-name");
   const inputFieldValue = inputField.value 

   showProductUi(inputFieldValue);
   showProductLocalStorage(inputFieldValue)
   inputField.value = ""
}

const showProductUi = (product) =>{
   const productContainer = document.getElementById("products");
   const li = document.createElement("li");
   li.innerText = product;
   productContainer.appendChild(li);
}


const showProductLocalStorage = (name) =>{
   const cartObj = getCart();
   if(cartObj[name]){
      cartObj[name] = cartObj[name]+1;
   }
   else{
      cartObj[name] = 1
   }

   const cartObjStringified = JSON.stringify(cartObj)
   localStorage.setItem("cart",cartObjStringified)
}


const getCart = () =>{
   const cart = localStorage.getItem("cart");
   let cartObj;
   if(cart){
      cartObj = JSON.parse(cart)
   }
   else{
      cartObj = {}
   }
   return cartObj;
}



const placeOrder = () =>{
   const productContainer = document.getElementById("products");
   productContainer.innerHTML = "";
   localStorage.removeItem("cart")
}

showProductUiFromLocalStorage()