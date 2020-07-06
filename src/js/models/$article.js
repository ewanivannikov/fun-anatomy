import {
    createStore, createEffect, combine, createEvent, sample,
  } from 'effector-logger';
  
  import articlesApi from '../api/articles';
  
  // Определения
  
  export const openedPage = createEvent('open page');
  
  const getArticleFx = createEffect('get article');
  
  const loading = createStore(false);
  const error = createStore(null);
  const data = createStore(null);
  
  const $article = combine({ loading, data, error });
  
  // Логика и связи
  
  getArticleFx.use((props) => articlesApi.getItem(props));
  
  loading.on(getArticleFx.pending, (state, pending) => pending);
  
  error.on(getArticleFx.fail, (state, { error: err }) => err);
  
  data.on(getArticleFx.done, (state, { result }) => result);
  
  sample({
    source: openedPage, /* 1 */
    fn: (props) => (props), /* 2 */
    target: getArticleFx, /* 3 */
  });
  
  export default $article;