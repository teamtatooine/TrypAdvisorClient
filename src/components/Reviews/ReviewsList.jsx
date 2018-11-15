import React from 'react';
import styled from 'styled-components';

import ReviewsListEntry from './ReviewsListEntry.jsx';


const List = styled.div`
`;

const Button = styled.button`
  -webkit-appearance: none;
  position: relative;
  display: inline-block;
  padding: 8px 16px;
  font-weight: bold;
  font-family: inherit;
  border: 1px solid transparent;
  border-radius: 2px;
  background-clip: padding-box;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  &:hover {
    border-color: #00c094 #267060 #267060 #00c094;
    background-color: #00c094;
  };
`;

const Totals = styled.div`
  text-align: right;
  color: #4a4a4a;
  font-size: 12px;
  padding: 16px 0 10px;
`;

const Footer = styled.div`
  padding: 12px 10px;
  overflow: hidden;
  border-width: 1px 0;
  border-style: solid;
  border-color: #e5e5e5;
  background-color: #fff;
  text-align: center;
`;

const PreviousPage = styled(Button)`
  float: left;
  border-color: #e5e5e5 #767676 #767676 #e5e5e5;
  background-color: #fff;
  color: #00a680;
  &:hover {
    border-color: #f2f2f2 #838383 #838383 #f2f2f2;
    color: #fff;
  };
`;

const NextPage = styled(Button)`
  float: right;
  border-color: #00a680 #267060 #267060 #00a680;
  background-color: #00a680;
  color: #fff;
`;

const PageNumbers = styled.div`
  display: inline-block;
  padding-top: 3px;
`;

const Page = styled.a`
  line-height: 40px;
  height: 40px;
  width: 40px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  display: inline-block;
  color: #00a680;
  cursor: pointer;
  border-radius: 2px;
  &:hover {
    color: #00c094;
    text-decoration: none;
  }
`;

const Separator = styled.a`
  width: 32px;
  line-height: 30px;
  color: #767676;
  &:hover {
    text-decoration: underline;
  }
`;

const currentPage = {
  backgroundColor: '#f2f2f2',
  borderColor: '#f2f2f2',
  color: '#000a12',
  cursor: 'default'
}


const ReviewsList = (props) => {

  return (
    <List>

      {props.reviews.length > 10 ?
        <Totals>
          <b>1</b> - <b>10</b> of <b>{props.reviews.length}</b> reviews
        </Totals>
      :
        <Totals></Totals>
      }

      {props.reviews.map((review, index) =>
        <ReviewsListEntry
          review={review}
          key={review._id}
          index={index}
        />
      )}

      <Footer>
        <PreviousPage as="a" href="/"> Previous </PreviousPage>
        <PageNumbers>
          <Page style={currentPage}> 1 </Page>
          <Page> 2 </Page>
          <Page> 3 </Page>
          <Page> 4 </Page>
          <Page> 5 </Page>
          <Page> 6 </Page>
          <Separator> ... </Separator>
          <Page> {Math.ceil(props.reviews.length / 10 || 0)} </Page>
        </PageNumbers>
        <NextPage as="a" href="/"> Next </NextPage>
      </Footer>

    </List>
  )
};

export default ReviewsList;