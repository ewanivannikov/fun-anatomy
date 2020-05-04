import {addCart} from "./";
let template = require("../list.pug");

export const render = ({data, loading}) => {
  if(loading){
    console.log("pending", loading);
    document.querySelector(".list").innerHTML = template({loading});
  }else{
    document.querySelector(".list").innerHTML = template({goods:data, loading:false});
    // обработчик события "Добавить в корзину"

    let buttonsAddToCart = document.querySelectorAll(".btn-add-cart");

    const handlerAddToCart = (e) => {
      addCart({
        id:e.target.id,
        title:e.target.getAttribute("data-title"),
        image:e.target.getAttribute("data-image"),
        price:e.target.getAttribute("data-price")
      });

    };
    buttonsAddToCart.forEach(function(element) {
      element.addEventListener('click', handlerAddToCart);
    });
  }
};
