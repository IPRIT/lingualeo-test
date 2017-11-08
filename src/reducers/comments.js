// comments reducer
export default function comments(state = {}, action) {
  switch (action.type) {
    case 'COMMENTS_LIST_SAVE':
      return action.comments;

    case 'COMMENT_ADD_SAVE':
      const comment = action.comment;
      return [ comment, ...state ];

    case 'COMMENT_DELETE_SAVE':
      return state.filter(comment =>
        Number(comment.id) !== Number(action.commentId)
      );

    case 'COMMENT_LIKE_SAVE':
      return state.map(comment =>
        Number(comment.id) === Number(action.comment.id) ? { ...action.comment } : comment
      );
      break;

    // initial state
    default:
      return state;
  }
}