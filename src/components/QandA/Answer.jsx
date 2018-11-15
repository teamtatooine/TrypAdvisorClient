import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import $ from 'jquery';

const AnswerDiv = styled.div`
  padding-left: 40px;
`;

const Text = styled.p`
  font-size: 20px;
  color: #000a12;
  font-family: Arial, Tahoma;
  margin-bottom: 0;
`;

const Date = styled.p`
  font-size: 12px;
  color: #4a4a4a;
  font-family: Arial, Tahoma;
  margin-bottom: 0;
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  // margin: 0.5rem 1rem;
  width: 11rem;
  background: #49a382;
  color: white;
  border: 2px solid #49a382;
  text-align: center;
`;

const Textarea = styled.textarea`
  padding: 0.5em;
  color: black;
  background: white;
  border-radius: 3px;
  width: 100%;
  font-size: 16px;
  margin-top: 20px;
`;

const Username = styled.p`
  border-top: 1px solid #e5e5e5;
  font-size: 11px;
  color: #4a4a4a;
  text-align: left;
  padding-top: 15px;
`;

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: this.props.questionId,
      answer: ''
    };

    console.log('questionId', this.state);

    this.onAnswerChange = this.onAnswerChange.bind(this);
    this.giveAnswer = this.giveAnswer.bind(this);
  }

  onAnswerChange(e) {
    console.log('onChange e', e.target.value);
    this.setState({
      answer: e.target.value
    });
  }

  giveAnswer(questionId, answer) {
    console.log(`${questionId} : ${answer} was asked.`);
    console.log('give answer', questionId);
    var that = this;
    $.post(
      'http://localhost:5000/api/answer/' + questionId + '/1',
      { answer: answer },
      function(data) {
        console.log('data post', data);
        // let dataParsed = JSON.parse(data);
        that.setState({ answer: '' });
        window.location.reload();
      }
    );
  }

  render() {
    console.log('answer', this.props);
    if (this.props.answer[0].answer != null) {
      return (
        <AnswerDiv>
          <Textarea
            placeholder="Hi, answer this travelers question."
            onChange={this.onAnswerChange}
            name="answer"
            value={this.state.answer}
          />
          <Button
            onClick={() =>
              this.giveAnswer(this.props.questionId, this.state.answer)
            }
          >
            Submit
          </Button>
          {this.props.answer.map((answer, index) => (
            <div key={index}>
              <Username>Response from {answer.user.username}</Username>
              <Text>{answer.answer}</Text>
              <Date>{moment(answer.answerDate).format('MMMM M, YYYY')}</Date>
            </div>
          ))}
        </AnswerDiv>
      );
    } else {
      return (
        <AnswerDiv>
          <Textarea
            placeholder="Hi, answer this travelers question."
            onChange={this.onAnswerChange}
            name="answer"
            value={this.state.answer}
          />
          <Button
            onClick={() =>
              this.giveAnswer(this.props.questionId, this.state.answer)
            }
          >
            Submit
          </Button>
        </AnswerDiv>
      );
    }
  }
}

export default Answer;
