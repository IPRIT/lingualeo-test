import React from "react";

// Comment add form component
export default class CommentAdd extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  // render
  render() {
    return (
      <div className="b-comment-add">
        <form className="b-comment-add__form" onSubmit={this.formSubmit}>
          <input className="input b-comment-add__input b-comment-add__input_text" name="text" type="text" placeholder="Введите комментарий"/>
          <input className="b-comment-add__submit-button" type="submit" value="Отправить"></input>
        </form>
      </div>
    );
  }

  // submit the form
  formSubmit(event) {
    event.stopPropagation();
    event.preventDefault();

    let form = event.target;
    let text = form.text.value;
    this.props.onCommentAdd({ text });
    form.text.value = ''; // resetting value for form

    return false;
  }
}