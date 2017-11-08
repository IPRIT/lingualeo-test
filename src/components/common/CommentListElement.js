import React, { PropTypes } from "react";
import { Button, Glyphicon } from "react-bootstrap";

// Comment List Element component
export default class CommentListElement extends React.Component {

  // render
  render() {
    const { comment, showDelete, addLike } = this.props;
    return (
      <div className="b-comment">
        <div className="b-comment__date">{comment.createdAt.toLocaleTimeString()}</div>
        <div className="b-comment__text">{comment.text}</div>
        <div className="b-comment__actions">
          <div className="b-comment__vote">
            <Button bsSize="xsmall" className="button b-comment__vote-button" onClick={() => addLike(comment)}>
              Нравится {comment.vote}
            </Button>
          </div>
          <div className="b-comment__delete">
            <Button bsSize="xsmall" className="button b-comment__delete-button" onClick={() => showDelete(comment)}>
              Удалить <Glyphicon glyph="remove-circle"/>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

// prop checks
CommentListElement.propTypes = {
  comment: PropTypes.object.isRequired,
  showDelete: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired
};
