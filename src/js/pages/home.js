let templateCore = require("templates/catalog.pug");

const listData = {
    list:[
        {
            content:'Главная страница',
            title: 'Ядро клетки',
        },
        {
            content:'Главная страница',
            title: 'Вторая статья',
        }
    ],
    loading:false
  };
function home() {
    document.querySelector("#root").innerHTML = templateCore(listData);
}
export default home;