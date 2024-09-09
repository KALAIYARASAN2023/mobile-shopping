let forms = document.getElementById("forms");
let uname = document.getElementById("uname");
let email = document.getElementById("emails");
let nation = document.getElementById("inputState");
let pass = document.getElementById("pwds");
let passc = document.getElementById("cpwds");
let cont = document.getElementById("contact");
let count = document.getElementById("car");

console.log(forms);
forms.addEventListener("submit", (e) => {
  e.preventDefault();
  validInput();

  // if(!validInput){
  //   forms.reset()
  // }
});

const showError = (ele, msg) => {
  const inputControl = ele.parentElement;
  const errormsg = inputControl.querySelector(".error");
  console.log(errormsg);
  errormsg.innerText = msg;
};

const setSuccess = (ele) => {
  const inputControl = ele.parentElement;
  const errormsg = inputControl.querySelector(".error");
  errormsg.innerText = "";
};

function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return pattern.test(email);
}
console.log(email);

const validInput = () => {
  const usere = uname.value;
  const emaile = email.value;
  const natione = nation.value;
  const password = pass.value;
  const cpassword = passc.value;
  const contact = cont.value;

  if (usere === "") {
    showError(uname, "please enter filed");
  } else {
    setSuccess(uname);
  }

  if (emaile === "") {
    showError(email, "please enter filed");
  } else if (!validateEmail(emaile)) {
    showError(email, "invalid ");
  } else {
    setSuccess(email);
  }

  if (natione === "Choose...") {
    showError(nation, "please Choose anyone...");
  } else {
    setSuccess(nation);
  }
  if (password === "") {
    showError(pass, "please enter filed");
  } else if (password.length < 8) {
    showError(pass, "minimum 8 char");
  } else {
    setSuccess(pass);
  }
  //

  //

  if (cpassword === "") {
    showError(passc, "please enter filed");
  } else if (cpassword != password) {
    showError(passc, "password not match");
  } else {
    setSuccess(passc);
  }

  //
  if (contact === "") {
    showError(cont, "please enter filed");
  } else if (contact.length < 10) {
    showError(cont, "10 digits required");
  } else if (contact.length > 10) {
    showError(cont, "10 digits required");
  } else if (contact.length === 10) {
    setSuccess(cont);
  }

  localStorage.setItem("email", emaile);
  localStorage.setItem("password", password);
};

let c = 0;
function add() {
  c = c + 1;
}
function remove() {
  setSuccess(gender);
}

// add to cart
let cart = [];

function addToCart(product) {
  const findproduct = cart.find((item) => item.name === product.name);
  if (findproduct) {
    findproduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  //   alert(product.name + " has been added to the cart.");
  document.getElementById("addcartproperty").innerHTML =
    product.name + " has been added to the cart.";
  productcheck();
}

function productcheck() {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";
  let totalCount = 0;
  cart.forEach((item, index) => {
    document.getElementById("car").innerHTML = totalCount += item.quantity;
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
                <img src="${item.image}" alt="${
      item.name
    }" width="50" height="50" />
                <span>${item.name} - ₹${item.price.toFixed(2)} (Quantity: ${
      item.quantity
    })</span>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
            `;
    cartContainer.appendChild(cartItem);
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  productcheck();
}

// function removeFromCart(name) {
//   const itemIndex = cartItems.findIndex((item) => item.name === name);
//   if (itemIndex > -1) {
//     if (cartItems[itemIndex].quantity > 1) {
//       cartItems[itemIndex].quantity -= 1;
//     } else {
//       cartItems.splice(itemIndex, 1);
//     }
//   }
//   productcheck();
// }
