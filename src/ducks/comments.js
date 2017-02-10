import axios from 'axios';

const COMMENTS_FETCH = 'comments/FETCH';
const COMMENTS_FETCH_PENDING = `${COMMENTS_FETCH}_PENDING`;
const COMMENTS_FETCH_REJECTED = `${COMMENTS_FETCH}_REJECTED`;
const COMMENTS_FETCH_FULFILLED = `${COMMENTS_FETCH}_FULFILLED`;

//reducer
export default function reducer(
  state = {
    comments: [],
    fetching: false,
    fetched: false
  },
  action
) {
  switch (action.type) {
    case COMMENTS_FETCH_PENDING:
      return { ...state, fetching: true };
    case COMMENTS_FETCH_REJECTED:
      return { ...state, fetching: false , fetched: true };
    case COMMENTS_FETCH_FULFILLED:
      return { ...state, fetching: false , fetched: true, comments: action.payload.data };

    default:
      return state;
  }
}

//actionCreators
export function fetchComments() {
  return {
    type: COMMENTS_FETCH,
    payload: axios.get('http://localhost:4000/')
  }
}
