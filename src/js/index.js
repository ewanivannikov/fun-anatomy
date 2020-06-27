import page from 'page';
import '../styles/index.css';
import home from './pages/home';
import {createStore, createEvent, createEffect, createStoreObject, forward} from 'effector';
// import {pagination} from "./pagination";
// import {render} from "./render";

// let templateCart = require("templates/cart.pug");
// let templatePagination = require("templates/pagination.pug");
let templateCore = require("../templates/card.pug");
const data = {
  content:'![Книга ДНК](https://lh3.googleusercontent.com/zHIBDCM6sniXgcg8sPKj2Si4vW3bLNEw_v8xO1iweSlBNtCdPBD9xQlo6TKHhxyTlUpJHeleWGIlefTbdYEegWS-R109g5Hi4U7EaQrxu-hM76Blk8PmjmqOoV_b1K3Dx5-zjcJbxJ4H3rP07FXgm_0AOpCn4QcIFo-cJjSD-90jSklj8kfNuJQioTOjk5fQ85aiWt_-qGMH-TLSvpe8NzwxE7RT2_6BzYERxRCnAzRuS2BKbOIRTz2arFPvxywlmubhOBVaPDPid4hbqItLRWjgbFr2PYK_eOwsPI7iv4PflgMz57_I2cr2s-9UTLJNDBoz3QHls2uRhaAVF3qgOc8XbBkhSIVEmJ_MtvrmvcrO7kqsZFmrIO5TEKN4ork8g9YWLAJl0c79nFX-3RQROYYKly5ou661vdIx3jZqcgcbyoRbxd7GVX8UQkvxc1GW4Xs5KD4kDBsZmUybtp0U9g5m9rqLG1vYJBSYgqOl0fsP1HcRO2SeawMeTdRX3Qe4hq9Okq54aDIDmRkKwVJDpIcTUMU2Eekn5IvQtOylg01PfuSE2D1TdlTwoq15a0hRpNirfbkp0PMB-1PtmM0rkzyHKWbvpn_hs5Yeldt7PNeW920O9-6JE7h3xLp16TDpL0GGLu0sFIut4u_lM4W3WrQpR0ucPOGfwuMZGPUKCP7Mnxl9LP-PHQSZofTi7yL59F5zUjsTKRnzbptBYPvy4docj9-7-LrfTUelUKyaWTDylBo4BTVfuA=w718-h539-no?authuser=0)\n\na this book has DNA code about cells\n\n![Письмо РНК](https://lh3.googleusercontent.com/Pq3XttpEJCYLpdSPyOQXZee6kjyBRQFSK1196NCugGk6fW12LMAbl-FmpzqSGfCjq6BluyVonBsvHZvEYPuFac4Es8R5Aq1xnzsPO40kggxADbZyuCUmQYJ0XjHKB6OQscM4ePVnimtyqnNy2WYmIy1QXz7rkm2rNgn-ufdV9NB6NOG1wlwnNnCZI6BX4dfJ86hg6czXL5j8W3KLGubiprDH8EZZcvOLAocg_sgoY6VoS5FWgcG6IjMSrfD6EnDH9C8VzsxKJzFB9VmK37kWIaP35qkTphnwSY3YYWuE-ZVegscr-OSkw_bkbhrIK-7v6YMheWCt7hd15zHRRhfr7L7mgu9XTS7IuIrNXIamJNA3uIsOMD0WbzkcjxlwRSyjTUh7LTiKgkmyPDEkrxngFPPfLa3WhbuxjR3s7v8v8VN4bOmp9Y6TIJK6ryoZ8kwnqG6IshRS1Ayg9CXy_2xY3Zd21czwIUT7qcRypuTebYrkAG3znxiVoHzgvWInfVCYGwCyYBEausfuPx8-tW92ldxUhnMPQUd-2hwJCVdhmnZNTpoUgQrpM03pdkTmUnkO9Gw00ppNV-ZCDOO73m7YYiXjmdwm4dTX3n7a2nRoHKISJr4cisWmzq5N-QB6oas8E3BpZSVe4M6cL_Vv2pN_2BSJtRfFxNfqvAg4D3meqn_TpV6fNRLrzC9sm9A5NYTtMmuYq5PysevPZGBQkebuqgxUXpuIGUXyDveMeLUx7aU96vDWBv8CCA=w718-h539-no?authuser=0)\n\na letter has RNA (half DNA code)',
  title: 'Ядро клетки',
  loading:false
};



page('/', home);

page('/card/:id', card);

page('*', notfound);

page();

function card(match) {
  console.log("match", match.params.id);
  
  document.querySelector("#root").innerHTML = templateCore(data);
}

function notfound() {
  document.querySelector("#root").innerHTML = '<p>Page not found</p>';
}
/////////////// Effects

// const fetchList = createEffect({
//   handler: ({url = `http://localhost:3000/goods?_page=1&_limit=15`}) => fetch(url).then(req => req.json())
// });
// const fetchCartList = createEffect({
//   handler(data) {
//     return JSON.parse(localStorage.getItem('cart'));
//   }
// });

// const saveCart = createEffect({
//   handler(data) {
//     localStorage.setItem(
//       'cart',
//       JSON.stringify(data, null, 2)
//     );
//   }
// });

/////////////// Events

// export const addCart = createEvent("addCart");

// const removeCart = createEvent("removeCart");

// const sumPrice = createEvent("sumPrice");

// const copyFromLocalStorage = createEvent("copyFromLocalStorage");

// const addCartData = createEvent("addCartData");

// const removeCartData = createEvent("removeCartData");

// const changePage = createEvent("changePage");

/////////////// Stores

// const $store = createStore([])
//   .on(addCartData, (state, cart) => {
//     let result = state.map(obj => {
//       let data = cart.find(item => item.id === obj.id);
//       return Object.assign({}, obj, data);
//     });
//     return result;
//   })
//   .on(removeCartData, (state, id) => {
//     let data = state.find(item => item.id === id);
//     let result = state.map(obj => {
//       let res = Object.assign({}, obj);
//       delete res["amt"];
//       return obj.id === id ? res : obj;
//     });
//     return result;
//   })
//   .on(fetchList.done, (state, {result}) => {

//     if(result){
//       let concat = result.map(obj => {
//         let data = $cartList.getState().find(item => item.id === obj.id);
//         return Object.assign({}, obj, data);
//       });
//       return concat;
//     }
//   })
//   .on(fetchList.fail, ({params, error}) => {
//       console.error(error); // rejected value
//   });

// const $cartList = createStore([])
//   .on(copyFromLocalStorage, (state, {result}) => result)
//   .on(saveCart, (state) => state)
//   .on(addCart, (state, {id, title, image, price}) => {

//     const newCart = state.some(item => item.id === id)
//     ? state.map(x => (x.id === id) ? Object.assign({}, x, {amt:x.amt + 1}) : x)
//     : [{id, title, image, price, amt:1}, ...state];

//     addCartData(newCart);
//     return newCart;
//   })
//   .on(removeCart, (state, {id}) => {
//     const newCart = state.filter(n=>n.id !== id);
//     removeCartData(id);
//     return newCart;
//   });

// const $totalPrice = createStore(0)
//   .on(sumPrice, (state) => {

//     return $cartList.getState() ? $cartList.getState().reduce((a, c)=>Number((a + parseFloat(c.price)*c.amt).toFixed(2)), 0) : 0;
//   });

// const $currentPage = createStore(1)
//   .on(changePage, (state, page) => {
//     return page;
//   });

// const $cart = createStoreObject({
//   cartList: $cartList,
//   totalPrice: $totalPrice
// });

// /////////////// Event Listener filter
// const handlerFilterAvailable = (e) => {
//   if(e.target.checked){
//     fetchList({url: `http://localhost:3000/goods?_page=1&_limit=15&available=true`});
//   }else{
//     fetchList({url: `http://localhost:3000/goods?_page=1&_limit=15`});
//   }
// };
// let filterAvailable = document.querySelector("#filter-available");
// filterAvailable.addEventListener('click', handlerFilterAvailable);

// /////////////// Event Listener sort
// const handlerSort = (e) => {

//   if(e.target.value){
//     const arr = e.target.value.split("-");
//     fetchList({url: `http://localhost:3000/goods?_page=1&_limit=15&_sort=${arr[0]}&_order=${arr[1]}`});
//   }else{
//     fetchList({url: `http://localhost:3000/goods?_page=1&_limit=15`});
//   }

// };
// let sort = document.querySelector("#sort");
// sort.addEventListener('click', handlerSort);

// ///////////////
// forward({
//   from: $cartList,
//   to: sumPrice
// });

// forward({
//   from: sumPrice,
//   to: saveCart
// });

// /////////////// Watchers
// fetchList.finally.watch(({params, status, result, error}) => {
//   if(!status === "done"){
//     render({loading:true});
//   }else{
//     if (error) {
//       console.log('handler rejected', error);
//     }
//     if (result) {
//       render({data:$store.getState()});

//       document.querySelector(".pagination").innerHTML = templatePagination(pagination({total:3000, current:$currentPage.getState()}));
//       let buttonsPagination = document.querySelectorAll(".pagination-item");

//       const handlerPagination = (e) => {
//         changePage(parseInt(e.target.getAttribute("data-page")));
//         fetchList({url:`http://localhost:3000/goods?_page=${e.target.getAttribute("data-page")}&_limit=15`});
//       };

//       buttonsPagination.forEach(function(element) {
//         element.addEventListener('click', handlerPagination);
//       });
//     }
//   }

// });

// addCartData.watch(data => {
//   render({data:$store.getState()});
// });
// removeCartData.watch(data => {
//   render({data:$store.getState()});
// });


// fetchCartList.finally.watch(({params, status, result, error}) => {
//   if(!status === "done"){
//     document.querySelector(".cart").innerHTML = templateCart({cart:{}, loading:true});
//   }else{

//     if (error) {
//       console.log('handler rejected', error);
//     }
//     if (result) {
//       copyFromLocalStorage({result});
//       document.querySelector(".cart").innerHTML = templateCart({cart:$cart.getState(), loading:false});
//     }
//   }


// });
// fetchCartList();
// fetchList({url: `http://localhost:3000/goods?_page=1&_limit=15`});


// $cart.watch(newState => {

//   document.querySelector(".cart").innerHTML = templateCart({cart:newState});

//   let buttonsRemoveFromCart = document.querySelectorAll(".remove-from-cart");

//   const handlerRemoveFromCart = (e) => {
//     removeCart({id:e.target.id});

//   };
//   buttonsRemoveFromCart.forEach(function(element) {
//     element.addEventListener('click', handlerRemoveFromCart);
//   });

// });
