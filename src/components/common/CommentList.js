import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Pagination } from "react-bootstrap";
import CommentListElement from "./CommentListElement";
import CommentDeletePrompt from "./CommentDeletePrompt";
import CommentAdd from "./CommentAdd";

// Comment list component
export class CommentList extends React.Component {

  // constructor
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      deleteShow: false,
      deleteComment: {},
    };

    // bind <this> to the event method
    this.changePage = this.changePage.bind(this);
    this.showDelete = this.showDelete.bind(this);
    this.hideDelete = this.hideDelete.bind(this);

    this.addComment = this.addComment.bind(this);
    this.addLike = this.addLike.bind(this);
    this.commentDelete = this.commentDelete.bind(this);
  }

  // render
  render() {
    // pagination
    const { comments, page } = this.props;
    const perPage = 10;
    const pages = Math.ceil(comments.length / perPage);
    const startOffset = (page - 1) * perPage;
    let startCount = 0;

    // show the list of comments
    return (
      <div className="b-comments">
        <CommentAdd onCommentAdd={this.addComment} />

        <div className="b-comment-list">
          {comments.map((comment, index) => {
            if (index >= startOffset && startCount < perPage) {
              startCount++;
              return (
                <CommentListElement className="b-comment-list__item" key={index}
                                    comment={comment} addLike={this.addLike} showDelete={this.showDelete}/>
              );
            }
          })}
        </div>

        <Pagination className="b-comment-list__pagination pull-right" bsSize="medium" maxButtons={10} first last next
                    prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage}/>

        <CommentDeletePrompt show={this.state.deleteShow} comment={this.state.deleteComment}
                             hideDelete={this.hideDelete} commentDelete={this.commentDelete}/>
      </div>
    );
  }

  addComment(values) {
    const { dispatch } = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'COMMENT_ADD',
        comment: {
          id: Math.floor( Math.random() * (1 << 30) ),
          text: values.text,
          vote: 0,
          createdAt: new Date()
        },
        callbackError(error) {
          reject(new Error({_error: error}));
        },
        callbackSuccess() {
          resolve();
        }
      });
    });
  }

  // change the comment lists' current page
  changePage(page) {
    this.props.dispatch(push('/?page=' + page));
  }

  // show delete comment prompt
  showDelete(comment) {
    this.setState({
      deleteShow: true,
      deleteComment: comment,
    });
  }

  // hide delete comment prompt
  hideDelete() {
    // change the local ui state
    this.setState({
      deleteShow: false,
      deleteComment: {},
    });
  }

  // delete the comment
  commentDelete() {
    // delete the comment
    this.props.dispatch({
      type: 'COMMENT_DELETE',
      commentId: this.state.deleteComment.id
    });

    // hide the prompt
    this.hideDelete();
  }

  addLike(comment) {
    const { dispatch } = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'COMMENT_LIKE',
        comment: {...comment, vote: comment.vote + 1},
        callbackError(error) {
          reject(new Error({_error: error}));
        },
        callbackSuccess() {
          resolve();
        }
      });
    });
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    comments: state.comments,
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1
  };
}
export default connect(mapStateToProps)(CommentList);
