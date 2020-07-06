import {
  createStore, createEffect, combine, createEvent, forward, sample,
} from 'effector-logger';

import articlesApi from '../api/articles';

// Определения

export const openedPage = createEvent('open page');

const getArticlesFx = createEffect('get articles');

const loading = createStore(false);
const error = createStore(null);
const data = createStore(null);

const $articles = combine({ loading, data, error });

// Логика и связи

getArticlesFx.use(() => articlesApi.getList());

loading.on(getArticlesFx.pending, (state, pending) => pending);

error.on(getArticlesFx.fail, (state, { error: err }) => err);

data.on(getArticlesFx.done, (state, { result }) => result);

forward({
  from: openedPage,
  to: getArticlesFx,
});

export default $articles;