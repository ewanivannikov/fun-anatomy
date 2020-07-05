import {
    createStore, createEffect, combine, createEvent, forward, sample,
  } from 'effector';
  
  import articlesApi from '../api/articles';
  
  // Определения
  
  export const openedPage = createEvent('open page');
  
  const getArticleFx = createEffect('get article');
  
  const loading = createStore(false);
  const error = createStore(null);
  const data = createStore(null);
  
  const $article = combine({ loading, data, error });
  
  // Логика и связи
  
  getArticleFx.use((id) => articlesApi.getItem(id));
  
  loading.on(getArticleFx.pending, (state, pending) => pending);
  
  error.on(getArticleFx.fail, (state, { error: err }) => err);
  
  data.on(getArticleFx.done, (state, { result }) => result);
  
  forward({
    from: openedPage,
    to: getArticleFx,
  });
  
  export default $article;