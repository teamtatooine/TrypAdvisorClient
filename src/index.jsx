import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.h1`
  color: blue;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <Title>hello</Title>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
