import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

import ReviewsFilters from './ReviewsFilters.jsx'
import ReviewsSearch from './ReviewsSearch.jsx'
import ReviewsList from './ReviewsList.jsx';
import ReviewsNewAddModal from './ReviewsNewAddModal.jsx';

const Container = styled.div`
  background-color: #fff;
  padding: 16px 24px 24px 24px;
  margin-right: 200px;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
  font-family: Arial, Tahoma, "Bitstream Vera Sans", sans-serif;
`;

const Header = styled.div`
  padding: 0px 0px 12px;
  display: flex;
  font-weight: bold;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: #e5e5e5;
  color: #000a12;
`;

const Title = styled.div`
  flex-grow: 1;
  margin-right: 5px;
  font-size: 28px;
  line-height: 32px;
`;

const ReviewCount = styled.span`
  color: #767676;
  padding-left: 12px;
  font-size: 28px;
  font-weight: bold;
  line-height: 32px;
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

const ReviewButton = styled(Button)`
  float: right;
  border-color: #00a680 #267060 #267060 #00a680;
  background-color: #00a680;
  color: #fff;
`;




class ReviewsService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      attraction: null,
      showAddReviewModal: false
    };
  }

  getAttraction() {
    $.get('/api/review/5bda7c659ac647b24013774c/attraction', (attractionInfo) => {
      this.setState({
        attraction: attractionInfo
      });
    });
  }

  getReviews() {
    $.post('/api/review/5bda7c659ac647b24013774c', (reviews) => {
      this.setState({
        reviews: reviews
      });
    });
  }

  openNewReviewModal() {
    this.setState({ showAddReviewModal: true });
  };

  hideNewReviewModal() {
    this.setState({ showAddReviewModal: false });
  };

  componentDidMount() {
    this.getAttraction();
    this.getReviews();
  }

  render() {
    return (
      !(this.state.reviews.length) ?
        <img src="https://i.imgur.com/k9GyXLC.gif"/>
      :
        <div>
          <Container>

            <Header>
              <Title>
                Reviews
                <ReviewCount>{this.state.reviews.length}</ReviewCount>
              </Title>
              <ReviewButton onClick={this.openNewReviewModal.bind(this)}>
                Write a Review
              </ReviewButton>
            </Header>

            <ReviewsFilters />

            <ReviewsSearch />

            <ReviewsList reviews={this.state.reviews}/>

            <ReviewsNewAddModal attraction={this.state.attraction} reviews={this.state.reviews} show={this.state.showAddReviewModal} handleClose={this.hideNewReviewModal.bind(this)} />

          </Container>
        </div>
    );
  }
}

export default ReviewsService;