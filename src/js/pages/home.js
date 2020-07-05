import templateCore from 'templates/catalog.pug';
import $articles, { openedPage } from 'js/models/$articles';

function home() {
  openedPage();
  console.log('$articles', $articles);
  
  document.querySelector("#root").innerHTML = templateCore($articles);
}
export default home;