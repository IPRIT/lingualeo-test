import React from "react";
import { connect } from "react-redux";
import "../stylesheets/main.scss";

// App component
export class App extends React.Component {

  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need that comments list
    this.props.dispatch({type: 'COMMENTS_FETCH_LIST'});
  }

  // render
  render() {
    const { comments, children } = this.props;
    if (!comments.length) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        {children}
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    comments: state.comments || [],
  };
}
export default connect(mapStateToProps)(App);
