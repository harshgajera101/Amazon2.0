
// function getItems(){
//     db.collection("items").get().then((querySnapshot) => {
//         let items = [];
//         querySnapshot.forEach((doc) => {
//             items.push({
//                 id: doc.id,
//                 image: doc.data().image,
//                 name: doc.data().name,
//                 make: doc.data().make,
//                 rating: doc.data().rating,
//                 price: doc.data().price
//             });
//         });
//         generateItems(items)
//     });
//  }

//  function addToCart(){
//     let cartItem = db.collection("cart-items").doc(item.id)
//     .set({
//         image: item.image,
//         make: item.make,
//         name: item.name,
//         rating: item.rating,
//         price: item.price,
//         quatity: 1
//     })
//  }


//  function generateItems(items){
//      let itemsHTML = ""
//      items.forEach((item) => {
//          let doc = document.createElement("div");
//          doc.classList.add("main-product", "mr-5");
//          doc.innerHTML = `
//          <div class="product-1">
//             <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
//                 <img class="w-full h-full object-contain" src="${item.image}">
//             </div>
//             <div class="product-name text-gray-700 font-bold mt-2 text-sm">
//                 ${item.name}
//             </div>
//             <div class="product-make text-gray-400 font-bold">
//                 ${item.make}
//             </div>
//             <div class="product-rating text-yellow-300 font-bold my-1">
//             ⭐⭐⭐⭐⭐ ${item.rating}
//             </div>
//             <div class="product-price font-bold text-gray-700 text-lg">
//                 $ ${item.price}
//             </div>
//             <div class="add-to-cart h-8 w-28 bg-yellow-500 flex justify-center items-center rounded text-white text-md cursor-pointer hover:bg-yellow-600">
//                 Add to cart
//             </div>

//         </div>`

//         let addToCartEl = document.createElement("div");
//         addToCartEl.classList.add("add-to-cart h-8 w-28 bg-yellow-500 flex justify-center items-center rounded text-white text-md cursor-pointer hover:bg-yellow-600");
//         addToCartEl.innerText = "Add to cart";
//         addToCartEl.addEventListener("click", function(){
//             addToCart(item)
//         })
//         doc.appendChild(addToCartEl);
//         document.querySelector(".main-section-product");
//         appendChild(doc);

//      })

//      document.querySelector(".main-section-products").innerHTML = itemsHTML
//  }

//  getItems();