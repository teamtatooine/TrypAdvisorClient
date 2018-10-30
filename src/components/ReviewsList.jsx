import React from 'react';
import styled from 'styled-components';

import ReviewsListEntry from './ReviewsListEntry.jsx';

const List = styled.div`
`;

let ReviewsList = (props) => {

  return (
    props === undefined ?
      <div>No Data</div>
    :
      <List></List>
  )
};

export default ReviewsList;