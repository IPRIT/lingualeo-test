import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";

// Comment delete component
export default class CommentDeletePrompt extends React.Component {

  // render
  render() {
    const {
      show, comment,
      hideDelete, commentDelete
    } = this.props;
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>
            Удалить #<strong>{comment.id}</strong> комментарий?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={hideDelete}>Нет</Button>
          <Button bsStyle="primary" onClick={commentDelete}>Да</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

// prop checks
CommentDeletePrompt.propTypes = {
  show: PropTypes.bool.isRequired,
  comment: PropTypes.object.isRequired,
  hideDelete: PropTypes.func.isRequired,
  commentDelete: PropTypes.func.isRequired,
};
