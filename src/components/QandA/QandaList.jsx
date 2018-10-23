import React from 'react';
import styled from 'styled-components';

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

// class QandaList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render(props) {
//     console.log('props', props);
//     return (
//       <Wrapper>
//         <Title>Questions & Answers</Title>
//       </Wrapper>
//     );
//   }
// }

const QandaList = function(props) {
  console.log('questions', props);
  return (
    <Wrapper>
      <Title>Questions & Answers</Title>
    </Wrapper>
  );
};

export default QandaList;
