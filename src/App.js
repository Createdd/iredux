import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import { fetchComments } from './ducks/comments';

const mapDispatchToProps = function (dispatch) {
  return {
    fetchComments: () => {
      dispatch(fetchComments())
    }
  }
}

const mapStateToProps = function (store) {
  return {
    comments: store.comments.comments,
    fetching: store.comments.fetching,
    fetched: store.comments.fetched
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this.props.fetchComments}>Load Comments</button>
        <ul>
          {this.props.comments.map( (item, key) => <li key={key}>{item}</li> )}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
