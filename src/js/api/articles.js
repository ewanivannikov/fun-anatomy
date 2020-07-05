import request from '../request';

const getList = () => request('GET', '/articles.json');

const getItem = (id) => request('GET', `/articles/${id}.json`);

/**
 * update user
 */
// const updateItem = (body) => request('PUT', '/users.json', { options: { body } });

const articlesApi = {
  getList,
  getItem,
};
export default articlesApi;