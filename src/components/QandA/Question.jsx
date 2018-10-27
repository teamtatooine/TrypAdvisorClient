import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Answer from './Answer.jsx';

const Wrapper = styled.section`
  background-color: #fff;
  padding: 15px;
  margin: 15px;
  border-top: 1px solid #e5e5e5;
  border-radius: 2px;
`;

const Left = styled.div`
  width: 30%;
  display: inline-block;
`;

const Right = styled.div`
  width: 70%;
  display: inline-block;
  vertical-align: top;
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
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
`;

const Textarea = styled.textarea`
  padding: 0.5em;
  color: black;
  background: white;
  border-radius: 3px;
  width: 100%;
  font-size: 16px;
`;

const Image = styled.img`
  height: 72px;
  width: 72px;
  border-radius: 100%;
  display: block;
  margin: 0 auto;
`;

const Username = styled.p`
  font-size: 11px;
  color: #4a4a4a;
  text-align: center;
`;

const Question = props => (
  <div className="question">
    {props.questions.map((question, index) => (
      <div key={index}>
        <Left>
          <Image src={question.user.userPhotoUrl} />
          <Username>{question.user.username}</Username>
        </Left>
        <Right>
          <Text>{question.question}</Text>
          <Date>{moment(question.questionDate).format('MMMM M, YYYY')}</Date>
          <Answer answer={question.answer} />
        </Right>
      </div>
    ))}
  </div>
);

export default Question;
