import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

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

const Answer = props => (
  <AnswerDiv>
    <Textarea
      placeholder="Hi, answer this travelers question."
      // onChange={this.onAnswerChange}
      name="answer"
      // value={props.answerText}
    />
    <Button>Submit</Button>
    {props.answer.map((answer, index) => (
      <div key={index}>
        <Username>Response from {answer.user.username}</Username>
        <Text>{answer.answer}</Text>
        <Date>{moment(answer.answerDate).format('MMMM M, YYYY')}</Date>
      </div>
    ))}
  </AnswerDiv>
);

export default Answer;
