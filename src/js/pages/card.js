import templateCore from 'templates/card.pug';
import $article, { openedPage } from 'js/models/$article';

function card(match) {
  openedPage({ id:match.params.id });
  $article.watch(store => {
    document.querySelector("#root").innerHTML = templateCore(store);
  });
}

export default card;