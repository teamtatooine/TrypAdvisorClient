import React from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';

const Wrapper = styled.section`
  background-color: #fff;
  padding: 15px;
  margin: 15px;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  line-height: 32px;
  color: #000a12;
  font-family: Arial, Tahoma;
`;

const Text = styled.p`
  font-size: 20px;
  color: #000a12;
  font-family: Arial, Tahoma;
  margin-bottom: 0;
`;

const Small = styled.p`
  font-size: 12px;
  color: #4a4a4a;
  font-family: Arial, Tahoma;
  margin-top: 12px;
`;

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
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
  // padding: 0.5em;
  color: black;
  background: white;
  border-radius: 3px;
  width: 100%;
  font-size: 16px;
  margin: 3px -1px;
  padding: 0;
`;

class QandaList extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      question: ''
    };

    this.onChange = this.onChange.bind(this);
    this.questionText = this.questionText.bind(this);
  }

  onChange(e) {
    // console.log('onChange e', e.target.value);
    this.setState({
      question: e.target.value
    });
  }

  questionText() {
    console.log('this: ', this);
    this.props.askQuestion(this.state.question);
    this.setState({
      question: ''
    });
  }

  render(props) {
    // console.log('this', this.props.data.questions);
    return (
      <Wrapper>
        <Title>Questions & Answers</Title>
        <Text>Get quick answers from staff and past visitors.</Text>
        <Small>
          Note: your question will be posted publicly on the Questions & Answers
          page.
        </Small>
        <Textarea
          ref={this.inputRef}
          placeholder="Hi, Name. What would you like to know bout this attraction?"
          onMouseEnter={() => {
            this.inputRef.current.focus();
          }}
          onChange={this.onChange}
          name="question"
          value={this.state.question}
        />
        <Button onClick={this.questionText}>Submit</Button>
        <Question questions={this.props.data.questions} />
      </Wrapper>
    );
  }
}

export default QandaList;
