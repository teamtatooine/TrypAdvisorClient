import React from 'react';
import styled from 'styled-components';

const Filters = styled.div`
  font-size: medium;
  color: #2c2c2c;
  margin: 0 -12px;
  // position: static;
  // overflow: inherit;
`;

let ReviewsFilters = (props) => {

  return (
    props === undefined ?
      <div>No Data</div>
    :
      <Filters></Filters>
  )
};

export default ReviewsFilters;