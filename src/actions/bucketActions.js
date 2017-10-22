import { db } from '../db.config';

export function loadBuckets() {
  return function (dispatch: Function) {
    db.ref().on('value', snap => {
      dispatch({
        type: 'LOAD_BUCKETS',
        payload: { ...snap.val() }
      });
    })
  }
}

export function createBucket(name) {
  return function (dispatch: Function) {
    db.ref().child(name).set(true);
  }
}