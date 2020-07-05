import templateCore from 'templates/catalog.pug';
import $articles, { openedPage } from 'js/models/$articles';

function home() {
  openedPage();

  $articles.watch(store => {
    document.querySelector("#root").innerHTML = templateCore(store);
  });
  
}
export default home;