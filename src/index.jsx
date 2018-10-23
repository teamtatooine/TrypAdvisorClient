import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import QandaList from './components/QandA/QandaList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <QandaList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
