import templateCore from 'templates/card.pug';
import $article, { openedPage } from 'js/models/$article';

function card(match) {
  console.log("match", match.params.id);
  openedPage();
  $article.watch(store => {
    document.querySelector("#root").innerHTML = templateCore(store);
  });
}

export default card;