import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import Overview from './components/Overview/Overview.jsx';


const Upperborder = styled.div`
  height: 50px;
  box-sizing: border-box;
  display: flex;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  position: relative;
  padding-top: 0px;
  padding-right: 24px;
  padding-bottom: 0px;
  padding-left: 24px;
  max-width: 1280px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-font-smoothing: antialiased;
  font-size: medium;
  font-family: Arial,Tahoma,"Bitstream Vera Sans",sans-serif;
  color: #2c2c2c;
  background-color: #00a680;
`;

const Headertryp = styled.h1`
  height: 50px;
  width: 160px;
  vertical-align: middle;
  border: 0;
  user-select: none;
  color: #069;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-font-smoothing: antialiased;
  font-size: medium;
  font-family: Arial,Tahoma,"Bitstream Vera Sans",sans-serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Upperborder>
          <Headertryp>
            <img src = 'https://static.tacdn.com/img2/branding/rebrand/TA_logo_secondary.svg'
            />
          </Headertryp>
        </Upperborder>
        <Overview/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));

