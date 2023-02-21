const BASE_URL = "http://localhost:5000";

export const BOOKS_URL=BASE_URL+'/api/book';
export const BOOKS_TAGS_URL=BOOKS_URL+'/tags';
export const BOOKS_BY_SEARCH_URL=BOOKS_URL+'/search/';
export const BOOKS_BY_TAG_URL=BOOKS_URL+'/tags/';
export const BOOKS_BY_ID_URL=BOOKS_URL+'/';

export const USER_LOGIN_URL = BASE_URL+'/api/users/login';
export const USER_REGISTER_URL = BASE_URL+'/api/users/register';

export const ORDERs_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERs_URL + '/create';

export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERs_URL + '/newOrderForCurrentUser';
export const PAY_URL = ORDERs_URL + '/pay';
export const ORDER_TRACK_URL = ORDERs_URL + '/track/';

