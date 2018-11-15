import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

import ReviewsFilters from './ReviewsFilters.jsx'
import ReviewsSearch from './ReviewsSearch.jsx'
import ReviewsList from './ReviewsList.jsx';
import ReviewsNewAddModal from './ReviewsNewAddModal.jsx';


const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${props => (props.hide ? 'hidden' : 'auto')};
  }
`;

const Container = styled.div`
  background-color: #fff;
  padding: 16px 24px 24px 24px;
  width: 67%;
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


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attractionId: '5be289c3806fa8daa75a64d9',
      userId: '5be289c3806fa8daa75a6552',
      reviews: null,
      attraction: null,
      showAddReviewModal: false,

      // Filters for ratings
      excellentFilter: false,
      verygoodFilter: false,
      averageFilter: false,
      poorFilter: false,
      terribleFilter: false,

      // Filters for visit type
      familiesFilter: false,
      couplesFilter: false,
      soloFilter: false,
      businessFilter: false,
      friendsFilter: false,

      // Filters for visit date
      quarter1Filter: false,
      quarter2Filter: false,
      quarter3Filter: false,
      quarter4Filter: false,

      // Filters for keyword search
      searchFilter: null,

      // Totals for ratings
      reviewTotals: {}
    };
  };

  // GET request to retrieve attraction info
  getAttraction() {
    $.get('http://trypadvisorreviewsservice-LB-2114261024.us-west-2.elb.amazonaws.com/api/review/' + this.state.attractionId + '/attraction', (attractionInfo) => {
      this.setState({
        attraction: attractionInfo
      });
    });
  };

  // POST request to GET reviews & calculate totals
  getReviews() {
    $.post('http://trypadvisorreviewsservice-LB-2114261024.us-west-2.elb.amazonaws.com/api/review/' + this.state.attractionId, (reviews) => {
      this.setState({
        reviews: reviews,
        reviewTotals: {
          totalAll: reviews.length,
          total5star: reviews.reduce((acc, review) => review.userRating === 5 ? acc + 1 : acc, 0),
          total4star: reviews.reduce((acc, review) => review.userRating === 4 ? acc + 1 : acc, 0),
          total3star: reviews.reduce((acc, review) => review.userRating === 3 ? acc + 1 : acc, 0),
          total2star: reviews.reduce((acc, review) => review.userRating === 2 ? acc + 1 : acc, 0),
          total1star: reviews.reduce((acc, review) => review.userRating === 1 ? acc + 1 : acc, 0)
        }
      });
    });
  };

  // POST request to GET filtered reviews (no totals calculation)
  getFilteredReviews() {
    $.post('http://trypadvisorreviewsservice-LB-2114261024.us-west-2.elb.amazonaws.com/api/review/' + this.state.attractionId, {
      // Ratings
      excellent: this.state.excellentFilter,
      verygood: this.state.verygoodFilter,
      average: this.state.averageFilter,
      poor: this.state.poorFilter,
      terrible: this.state.terribleFilter,
      // Visit type
      families: this.state.familiesFilter,
      couples: this.state.couplesFilter,
      solo: this.state.soloFilter,
      business: this.state.businessFilter,
      friends: this.state.friendsFilter,
      // Visit date
      quarter1: this.state.quarter1Filter,
      quarter2: this.state.quarter2Filter,
      quarter3: this.state.quarter3Filter,
      quarter4: this.state.quarter4Filter,
      search: this.state.searchFilter
    }, (reviews) => {
      this.setState({
        reviews: reviews
      });
    });
  };

  // POST request to add new review
  addNewReview(params) {
    $.post('http://trypadvisorreviewsservice-LB-2114261024.us-west-2.elb.amazonaws.com/api/review/' + this.state.attractionId + '/add/' + this.state.userId, params, (review) => {
      this.hideNewReviewModal();
      this.getReviews();
    });
  };

  // Toggle filters based on user input
  async filterReviews(event) {
    const filter = event.target.value + 'Filter';
    await this.setState({
      [filter]: !this.state[filter]
    })
    this.getFilteredReviews();
  };

  // Filter reviews by user inputted keyword
  async searchReviews(keyword) {
    await this.setState({
        searchFilter: keyword
    });
    this.getFilteredReviews();
  };

  // Open new review modal
  openNewReviewModal() {
    this.setState({ showAddReviewModal: true });
  };

  // Close new review modal
  hideNewReviewModal() {
    this.setState({ showAddReviewModal: false });
  };

  componentDidMount() {
    this.getAttraction();
    this.getReviews();
  };

  render() {
    return (
      (this.state.reviews === null) ?
        // Display loading screen upon initial render
        <img src="https://i.imgur.com/k9GyXLC.gif"/>
      :
        <div>
          <Container>

            <Header>
              <Title>
                Reviews
                <ReviewCount> {this.state.reviews.length} </ReviewCount>
              </Title>
              <ReviewButton onClick={this.openNewReviewModal.bind(this)}>
                Write a Review
              </ReviewButton>
            </Header>

            <ReviewsFilters reviewTotals={this.state.reviewTotals} filterReviews={this.filterReviews.bind(this)} />

            <ReviewsSearch searchReviews={this.searchReviews.bind(this)} />

            <ReviewsList reviews={this.state.reviews}/>

            <ReviewsNewAddModal
              attraction={this.state.attraction}
              reviews={this.state.reviews}
              show={this.state.showAddReviewModal}
              hide={this.hideNewReviewModal.bind(this)}
              onSubmit={this.addNewReview.bind(this)}
            />

            {this.state.showAddReviewModal ? <GlobalStyle hide /> : null}

          </Container>
        </div>
    );
  };
};

export default Reviews;