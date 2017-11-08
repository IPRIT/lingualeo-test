import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { commentsFetchList, commentAdd, commentDelete, commentLike } from "./comments";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'COMMENTS_FETCH_LIST', commentsFetchList),
    fork(takeLatest, 'COMMENT_ADD', commentAdd),
    fork(takeLatest, 'COMMENT_DELETE', commentDelete),
    fork(takeLatest, 'COMMENT_LIKE', commentLike)
  ];
}
