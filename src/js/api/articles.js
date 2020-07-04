import request from '../request';

const getList = () => request('GET', '/articles.json');

/**
 * update user
 */
// const updateItem = (body) => request('PUT', '/users.json', { options: { body } });

const articlesApi = {
  getList,
};
export default articlesApi;