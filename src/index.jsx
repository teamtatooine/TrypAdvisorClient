import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import QandaList from './components/QandA/QandaList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attraction: [],
      questions: []
    };
  }

  componentDidMount() {
    $.get('/api/attraction/1', data => {
      this.setState({ attraction: data });
    });
    $.get('/api/questions/1', data => {
      this.setState({ questions: data });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>{this.state.attraction.name}</h1>
        <QandaList questions={this.state.questions} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
