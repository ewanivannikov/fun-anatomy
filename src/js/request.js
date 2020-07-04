/**
 * @param {"GET"|"POST"|"PUT"|"DELETE"} method
 * @param {string} url
 * @param {{
  * headers?: {},
  * body?: {},
  * parse?: 'text' | 'json' | 'noparse', baseUri?: string
  * }} options
  */
 const request = (method, url, options = {}) => {
   const baseUri = 'https://resume-catalog.firebaseio.com';
   const token = '';
 
   const headers = new Headers({
     ...createContentType(options),
     ...createAuthorization(token),
     ...options.headers,
   });
 
   const uri = `${options.baseUri || baseUri}${url}`;
   // eslint-disable-next-line no-unused-vars
   const { body, ...restOptions } = options;
 
   const config = new Request(uri, {
     ...restOptions,
     method,
     headers,
     body: createBody(options, headers),
   });
 
   if (process.env.NODE_ENV === 'development') {
     logRequest(config);
   }
 
   return fetch(config).then((response) => {
     if (options.parse === 'text') {
       return response.text();
     }
     if (options.parse === 'noparse') {
       return response;
     }
     const contentType = response.headers.get('Content-Type');
     if (contentType && contentType.includes('json')) {
       return response.json().then(responseToPromise, responseToPromise);
     }
     throw new TypeError('Unexpected content-type');
   });
 };
 
 function responseToPromise(response) {
   return response && typeof response.ok === 'boolean'
     ? okToPromise(response)
     : response;
 }
 
 function okToPromise(response) {
   return response.ok
     ? Promise.resolve(response.result)
     : Promise.reject(response.error);
 }
 
 export default request;
 
 const createContentType = (options) => {
   const header = contentTypeFromOptions(options);
 
   return header ? { 'Content-Type': header } : {};
 };
 
 const createAuthorization = (token) => (token ? { Authorization: `bearer ${token}` } : {});
 
 const contentTypeFromOptions = (options) => {
   if (options && options.headers && options.headers['Content-Type']) {
     return options.headers['Content-Type'];
   }
 
   if (options && options.body && options.body instanceof FormData) {
     return 'multipart/form-data';
   }
 
   return typeof options.body === 'object'
     ? 'application/json'
     : (options.headers && options.headers['Content-Type']) || '';
 };
 
 /**
  * @param {{ body?: {} }} options
  * @param {Headers} headers
  */
 const createBody = (options, headers) => {
   const contentType = headers.get('content-type');
   if (options.body && contentType && contentType.includes('json')) {
     return JSON.stringify(options.body);
   }
   if (options.body instanceof FormData) {
     return options.body;
   }
   return undefined;
 };
 
 /**
  * @param {Request} requestConfig
  */
 const logRequest = (requestConfig) => {
   /* eslint-disable no-console */
   console.groupCollapsed(
     `API >> ${requestConfig.method} ${requestConfig.url}`,
   );
   console.log('request:', requestConfig);
   console.groupEnd();
   /* eslint-enable no-console */
 };