import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars'
import moment from 'moment';


const ListEntry = styled.div`
  margin: 8px 0 4px;
  border-top: 1px solid #e5e5e5;
`;

const ReviewColumn1 = styled.div`
  padding: 8px 0;
  width: 17%;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
`;

const ReviewColumn2 = styled.div`
  padding: 8px 0;
  width: 75%;
  display: inline-block;
  box-sizing: border-box;
`;

const User = styled.div`
  cursor: pointer;
`;

const Avatar = styled.div`
  margin: 0px auto 10px auto
  width: 72px;
  height: 72px;
  border-radius: 72px;
  overflow: hidden;
  position: relative;
`;

const AvatarImg = styled.img`
  display: block;
  width: 100%!important;
  height: 100%!important;
`;

const UserInfo = styled.div`
  padding: 0 8px;
  display: block;
  text-align: center;
  height: inherit;
  margin-bottom: 4px
  font-size: 11px;
  color: #4a4a4a;
`;

const RatingContainer = styled.div`
`;

const Rating = styled.span`
  padding-right: 8px;
  display: table-cell;
`;

const RatingDate = styled.span`
  display: table-cell;
  color: #4a4a4a;
  font-size: 12px;
  padding-right: 9px;
  vertical-align: middle;
`;

const ReviewTitle = styled.div`
  text-align: left;
  margin: 8px 0 0;
  font-size: 20px;
`;

const ReviewDescription = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #4a4a4a;
  padding: 0;
  margin: 5px 0 0;
  word-break: break-word;
`;

const ReviewPics = styled.div`
  overflow: hidden;
  margin-top: 12px;
  height: 74px;
`;

const ReviewPicsWrapper = styled.div`
  white-space: nowrap;
  height: 94px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const ReviewPicContainer = styled.div`
  width: 106px;
  height: 70px;
  display: inline-block;
  margin-right: 24px;
`;

const ReviewImg = styled.img`
  height: 100%;
  max-width: 106px;
  max-height: 70px;
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-width: 70px;
  position: relative;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
`;

const AskQuestion = styled.div`
  margin-top: 12px;
  color: #006699;
  font-size: 12px;
`;

const UpVote = styled.div`
  width: 20%;
  overflow: hidden;
  margin-top: 12px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
  color: #4a4a4a;
  font-size: 12px;
`;

const Disclaimer = styled.div`
  color: #767676;
  font-size: 12px;
  margin-top: 12px;
  font-style: italic;
  border-top: 1px solid #e5e5e5;
  padding-top: 6px;
  display: inline-block;
`;


const ReviewsListEntry = (props) => {

  return (
    <ListEntry>

      <ReviewColumn1>
        <User>
          <Avatar>
            <AvatarImg src={props.review.userData[0].profilePicture} />
          </Avatar>
          <UserInfo> {props.review.userData[0].userName} </UserInfo>
          <UserInfo><b> {props.review.userData[0].location} </b></UserInfo>
        </User>
      </ReviewColumn1>

      <ReviewColumn2>

        <RatingContainer>
          <Rating>
            <ReactStars count={5} char={'\u2605'} value={props.review.userRating} size={22} color2={'#00a680'} edit={false} />
          </Rating>
          <RatingDate> Reviewed {moment(props.review.reviewDate, "YYYY-MM-DDTHH:mm:ss.sssZ").fromNow()} </RatingDate>
        </RatingContainer>

        <ReviewTitle> {props.review.title} </ReviewTitle>

        <ReviewDescription> {props.review.description} </ReviewDescription>

        <ReviewPics>
          <ReviewPicsWrapper>
            {props.review.photos.map((photo) =>
              <ReviewPicContainer key={photo}>
                <ReviewImg src={"https://picsum.photos/200/300?image=" + Math.floor(Math.random() * 1000)} />
              </ReviewPicContainer>
            )}
          </ReviewPicsWrapper>
        </ReviewPics>

        <AskQuestion> Ask {props.review.userData[0].userName} about Haleakala Crater </AskQuestion>

        <UpVote> Thank {props.review.userData[0].userName} </UpVote>

        <Disclaimer> This review is the subjective opinion of a TripAdvisor member and not of TripAdvisor LLC. </Disclaimer>

      </ReviewColumn2>

    </ListEntry>
  );
};

export default ReviewsListEntry;