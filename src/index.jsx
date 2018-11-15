import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Overview from './components/Overview/Overview.jsx';
import Reviews from './components/Reviews/Reviews.jsx';


const Upperborder = styled.div`
  height: 60px;
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
  position: relative;
  padding: 0 24px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-font-smoothing: antialiased;
  background-color: #00a680;
`;

const Headertryp = styled.div`
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-font-smoothing: antialiased;
`;

const Logo = styled.img`
  height: 100%;
  width: 180px;
`;

const Container = styled.div`
  max-width: calc(1232px);
  margin: 36px;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>

        <Upperborder>
          <Headertryp>
            <Logo src = 'https://static.tacdn.com/img2/branding/rebrand/TA_logo_secondary.svg' />
          </Headertryp>
        </Upperborder>

        <Overview />

        <Container>
          <Reviews />
        </Container>

        <Container>

        </Container>

      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));