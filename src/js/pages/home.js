import templateCore from 'templates/catalog.pug';
import $articles, { openedPage } from 'js/models/$articles';

function home() {
  openedPage();
  console.log('$articles', $articles.updates.watch);
  $articles.watch(res=>{
    document.querySelector("#root").innerHTML = templateCore(res);
  });
  
}
export default home;