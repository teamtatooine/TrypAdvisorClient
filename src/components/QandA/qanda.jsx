import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import QandaList from './QandaList.jsx';

class Qanda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attraction: [],
      questions: []
    };
  }

  componentDidMount() {
    $.get('http://localhost:5000/api/attraction/1', data => {
      this.setState({ attraction: data });
    });
    $.get('http://localhost:5000/api/questions/1', data => {
      console.log('data', data);
      this.setState({ questions: data });
    });
  }

  askQuestion(question) {
    // console.log(`${question} was asked.`);
    // console.log(this);
    var that = this;
    // TODO
    $.post(
      'http://localhost:5000/api/question/1/50',
      { question: question },
      function(data) {
        console.log('data post', data);
        // let dataParsed = JSON.parse(data);
        that.setState({ questions: data });
      }
    );
  }

  render() {
    // console.log('render', this.state.questions);
    return (
      <div>
        <h1>{this.state.attraction.name}</h1>
        <QandaList
          data={this.state.questions}
          askQuestion={this.askQuestion.bind(this)}
        />
      </div>
    );
  }
}
export default Qanda;
