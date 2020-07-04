import page from 'page';
import '../styles/index.css';
import home from './pages/home';
import about from './pages/about';
import card from './pages/card';
import {createStore, createEvent, createEffect, createStoreObject, forward} from 'effector';


page('/', home);

page('/card/:id', card);

page('/about', about);

page('*', notfound);

page();

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
