import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';

class App extends Component {
  constructor(props) {
    // calling the parent constructor here
    super(props)
    // getting the store reference here 
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  }

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  }

  render() {
    return (
      <div>
        <div className="jumbotron" style={{'textAlign': 'center', 'backgroundColor': '#fff'}}>
          <img src="img/crown_logo.jpg" height="96" alt="ExcellingInMotion" />
          <h2>What is your favourite front-ened framework in 2017</h2>
          <h4>Click on the logos below to vote!</h4>
          <hr />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img src="img/angular_logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular} />
            </div>
            <div className="col-xs-2">
              <img src="img/react_logo.png" height="96" alt="React" onClick={this.handleVoteReact} />
            </div>
            <div className="col-xs-2">
              <img src="img/vuejs_logo.png" height="96" alt="Vuejs" onClick={this.handleVoteVuejs} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
