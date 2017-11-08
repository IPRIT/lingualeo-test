import { call, put } from "redux-saga/effects";
import ApiComments from "../api/comments";

// fetch the comment's list
export function* commentsFetchList(action) {
  // call the api to get the comments list
  const comments = yield call(ApiComments.getList);

  // save the comments in state
  yield put({
    type: 'COMMENTS_LIST_SAVE',
    comments,
  });
}

// add a comment
export function* commentAdd(action) {
  // call the api to add the comment
  yield call(ApiComments.add);

  // update the state by adding the comment
  yield put({
    type: 'COMMENT_ADD_SAVE',
    comment: action.comment,
  });

  // success
  action.callbackSuccess();
}

// delete a comment
export function* commentDelete(action) {
  // call the api to delete the comment
  yield call(ApiComments.delete);

  // update the state by removing the comment
  yield put({
    type: 'COMMENT_DELETE_SAVE',
    commentId: action.commentId,
  });
}

// like a comment
export function* commentLike(action) {
  // call the api to delete the comment
  yield call(ApiComments.like);

  // update the state by saving the comment
  yield put({
    type: 'COMMENT_LIKE_SAVE',
    comment: action.comment,
  });

  // success
  action.callbackSuccess();
}
