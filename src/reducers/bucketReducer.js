export default function reducer(state = {}, action) {
  switch (action.type) {
    case "LOAD_BUCKETS": {
      return { ...action.payload };
    }
    case "CREATE_BUCKET": {
      state = { ...action.payload };
      return state;
    }
    case "REMOVE_BUCKET": {
      state = {};
      return state;
    }
    default:
      return state;
  }
};