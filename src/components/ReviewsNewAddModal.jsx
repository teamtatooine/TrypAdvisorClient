import React from 'react';
import styled from 'styled-components';
import ReactStars from 'react-stars'
import $ from 'jquery';

const NewAddModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.5);
  font-size: .75em;
  font-family: Arial, Tahoma, "Bitstream Vera Sans", sans-serif;
  z-index: 1000;
  &.display-block {
    display: block;
  }
  &.display-none {
    display: block;
  }
`;

const Window = styled.div`
  margin: 50px auto;
  padding: 30px 50px;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
  background: white;
  width: 80%;
  height: auto;
  z-index: 1100;
`;

const Column1 = styled.div`
  width: 60%;
`;

const Header = styled.div`
  margin-bottom: 20px;
  display: inline-block
  width: 100%;
`;

const AttractionThumbnail = styled.img`
  height: 110px;
  width: 110px;
  margin-right: 14px;
  border: 1px solid #ccc;
  float: left;
`;

const AttractionNameAddress = styled.div`
  margin: 25px 0 0 14px;
  background: white;
  float: left;
`;

const AttractionName = styled.h2`
  margin: 0;
`;

const AttractionAddress = styled.h4`
  font-weight: normal;
  margin-top: 6px;
`;

const MainQuestions = styled.div`
  color: #4a4a4a;
  margin: 20px 0 40px 0;
`;

const Title = styled.h2`
  margin: 10px 0 25px 0;
  border-bottom: 1px solid #ccc;
  padding-bottom: 12px;
`;

const RatingHeader = styled.div`
  font-size: 1.1670em;
  margin-bottom: 8px;
  color: #2c2c2c;
  display: block;
  font-weight: bold;
`;

const Rating = styled.div`
  margin-bottom: 12px;
  display: inline-block;
`;

const RatingStar = styled.span`
  position: relative;
  display: block;
  float: left;
`;

const RatingFlag = styled.span`
  padding-top: 7px;
`;

const ClickToRate = styled.em`
  margin: 5px 0 0 20px;
  height: 18px;
  padding: 5px 12px 5px 10px;
  line-height: 19px;
  background: #00a680;
  color: #fff;
  display: block;
  font-size: 1.167em;
  font-weight: bold;
  position: relative;
  text-align: center;
  font-style: normal;
  float: left;
  &:before {
    content: "";
    border-style: solid;
    border-width: 14px 13px 14px 0;
    border-color: transparent #00a680 transparent transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: -13px;
    top: 0;
  }
`;

const Section = styled.div`
  margin-bottom: 24px;
  margin-top: 6px;
  color: #2c2c2c;
`;

const ReviewTitle = styled(Section)`
`;

const TitleLabel = styled.label`
  color: #2c2c2c;
  font-size: 1.1670em;
  margin-bottom: 8px;
  display: block;
  font-weight: bold;
`;

const TitleInput = styled.textarea`
  margin-bottom: 6px;
  min-height: 44px;
  box-shadow: inset 0 1px 2px 0 rgba(50,50,50,0.3);
  border: 1px solid #dbdad5;
  font-weight: normal;
  font-size: 1.1670em;
  font-family: inherit;
  width: 100%;
  box-sizing: border-box;
  padding: 14px;
  height: 24px;
`;

const ReviewText = styled(Section)`
`;

const TextInput = styled(TitleInput)`
  height: 80px;
  transition: height .2s linear;
`;

const TripType = styled(Section)`
`;

const TripTypeTable = styled.div`
  display: inline-block;
`;

const OptionLabel = styled.div`
  float: left;
  display: block;
  cursor: pointer;
  line-height: 17px;
  white-space: nowrap;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.25);
  background: linear-gradient(to bottom,#fff 0,rgba(255,255,255,0.57) 85%,rgba(233,232,226,0.5) 100%);
  border-radius: 3px;
  border: 1px solid #e9e8e2;
  font-size: 1.1670em;
  color: #2c2c2c;
  margin-right: 6px;
  margin-bottom: 8px;
  padding: 10px 20px;
  &:hover {
    color: #00a680;
    border: 2px solid #00a680;
    box-shadow: none;
    margin-right: 4px;
    margin-bottom: 6px;
  }
`;

const TripDate = styled(Section)`
`;

const TripDateMonthYear = styled.select`
  display: block;
  margin: 5px 0 6px 0;
  border: 1px solid #CCC;
  border-radius: 3px;
  background-color: #F2F2F2;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  padding: 0 0 0 8px;
  font-size: 1.0835em;
`;

const OptionalQuestions = styled(MainQuestions)`
`;

const OptionalHeader = styled.div`
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ccc;
`;

const HeaderLabel = styled.span`
  font-weight: bold;
  font-size: 1.50em;
`;

const HeaderNote = styled.span`
  font-size: 1.25em;
  color: #4A4A4A;
  font-weight: normal;
  line-height: 22px;
  padding-left: 5px;
`;

const RecommendedLengthVisit = styled(Section)`
`;

const LengthVisitLabel = styled.label`
  display: inline-block;
  font-size: 1em;
  font-weight: normal;
  margin: 5px 20px 5px 1px;
  padding: 0;
`;

const LengthVisitInput = styled.input`
`;

const ExtraQuestions = styled(Section)`
`;

const QuestionRow = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 2px;
  font-size: 1.25em;
`;

const Question = styled.div`
  display: block;
  padding: 15px 15px 15px 24px;
  margin: 6px 0 2px 0;
  position: static;
`;

const QuestionHighlight = styled.span`
  color: #00a680;
  font-weight: bold;
`;

const AnswerBlock = styled.div`
  margin: 0 10px;
  float: right;
`;

const PhotoShare = styled(MainQuestions)`
`;

const PhotoHeader = styled(OptionalHeader)`
  margin-top: 20px;
`;

const Button = styled.button`
  -webkit-appearance: none;
  position: relative;
  display: inline-block;
  padding: 8px 16px;
  font-weight: bold;
  font-family: inherit;
  border: 1px solid transparent;
  border-color: #00a680 #267060 #267060 #00a680;
  background-color: #00a680;
  color: #fff;
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

const FraudCheck = styled(Section)`
`;

const CheckBox = styled.input`
  float: left;
  margin-top: 1px;
`;

const FraudText = styled.div`
  margin-bottom: 6px;
  font-weight: normal;
  height: 100%;
  padding-left: 5px;
  overflow: hidden;
  font-size: 1.0em;
`;

const ReviewSubmit = styled.div`
  margin: 54px 0 0;
`;

const ReviewSubmitButton = styled(Button)`
  font-size: 16px;
  line-height: 20px;
`;




const ReviewsNewAddModal = (props) => {

  const showHideClassName = props.show ? "display-block" : "display-none";
  let ratingFlagText = 'Click to rate';

  const ratingChanged = (newRating) => {
    if (newRating === 5) {
      ratingFlagText = 'Excellent';
    } else if (newRating === 4) {
      ratingFlagText = 'Very Good';
    } else if (newRating === 3) {
      ratingFlagText = 'Average';
    } else if (newRating === 2) {
      ratingFlagText = 'Poor';
    } else if (newRating === 1) {
      ratingFlagText = 'Terrible';
    }
    $('.rating').text(ratingFlagText);
  };

  return (
    <NewAddModal className={showHideClassName}>
      <Window>
        <Column1>

          <MainQuestions>

            <Header>
              <AttractionThumbnail src={props.attraction[0].mainPhotoUrl} />
              <AttractionNameAddress>
                <AttractionName> {props.attraction[0].name} </AttractionName>
                <AttractionAddress> {props.attraction[0].address1 + ' ' + props.attraction[0].address2 + ' ' + props.attraction[0].city + ', ' + props.attraction[0].state + ' ' + props.attraction[0].zip} </AttractionAddress>
              </AttractionNameAddress>
            </Header>

            <Title> Your first-hand experiences really help other travelers. Thanks! </Title>

            <RatingHeader> Your overall rating of this attraction </RatingHeader>

            <Rating>
              <RatingStar>
                <ReactStars count={5} value={5} size={37} color2={'#00a680'} half={false} onChange={ratingChanged} />
              </RatingStar>
              <RatingFlag>
                <ClickToRate className="rating"> {ratingFlagText} </ClickToRate>
              </RatingFlag>
            </Rating>

            <ReviewTitle>
              <TitleLabel> Title of your review </TitleLabel>
              <TitleInput type="text" placeholder="Summarize your visit or highlight an interesting detail" maxLength="120" />
            </ReviewTitle>

            <ReviewText>
              <TitleLabel> Your review </TitleLabel>
              <TextInput placeholder="Tell people about your experience: describe the place or activity, recommendations for travelers?" data-minlen="100" data-maxlen="20000" />
            </ReviewText>

            <TripType>
              <TitleLabel> What sort of visit was this? </TitleLabel>
              <TripTypeTable>
                <OptionLabel> Couples </OptionLabel>
                <OptionLabel> Family (young children) </OptionLabel>
                <OptionLabel> Family (teens) </OptionLabel>
                <OptionLabel> Friends </OptionLabel>
                <OptionLabel> Business </OptionLabel>
                <OptionLabel> Solo </OptionLabel>
              </TripTypeTable>
            </TripType>

            <TripDate>
              <TitleLabel> When did you visit? </TitleLabel>
              <TripDateMonthYear>
                <option value> Select one </option>
                <option value="11, 2018"> November 2018 </option>
                <option value="10, 2018"> October 2018 </option>
                <option value="9, 2018"> September 2018 </option>
                <option value="8, 2018"> August 2018 </option>
                <option value="7, 2018"> July 2018 </option>
                <option value="6, 2018"> June 2018 </option>
                <option value="5, 2018"> May 2018 </option>
                <option value="4, 2018"> April 2018 </option>
                <option value="3, 2018"> March 2018 </option>
                <option value="2, 2018"> February 2018 </option>
                <option value="1, 2018"> January 2018 </option>
                <option value="12, 2017"> December 2017 </option>
              </TripDateMonthYear>
            </TripDate>

          </MainQuestions>

          <OptionalQuestions>

            <OptionalHeader>
              <HeaderLabel> Could you say a little more about it? </HeaderLabel>
              <HeaderNote> (optional) </HeaderNote>
            </OptionalHeader>

            <RecommendedLengthVisit>
              <TitleLabel> Recommended length of visit </TitleLabel>
              <LengthVisitLabel>
                <LengthVisitInput type="radio" name="LengthVisit" /> &lt;1 Hour
              </LengthVisitLabel>
              <LengthVisitLabel>
                <LengthVisitInput type="radio" name="LengthVisit" /> 1-2 Hours
              </LengthVisitLabel>
              <LengthVisitLabel>
                <LengthVisitInput type="radio" name="LengthVisit" /> 2-3 Hours
              </LengthVisitLabel>
              <LengthVisitLabel>
                <LengthVisitInput type="radio" name="LengthVisit" /> More than 3 hours
              </LengthVisitLabel>
            </RecommendedLengthVisit>

            <ExtraQuestions>
              <QuestionRow>
                <AnswerBlock>
                  <OptionLabel> Yes </OptionLabel>
                  <OptionLabel> No </OptionLabel>
                  <OptionLabel> Not Sure </OptionLabel>
                </AnswerBlock>
                <Question>
                  Would you tell a friend to <QuestionHighlight>pay to skip the line</QuestionHighlight>?
                </Question>
              </QuestionRow>
              <QuestionRow>
                <AnswerBlock>
                  <OptionLabel> Yes </OptionLabel>
                  <OptionLabel> No </OptionLabel>
                  <OptionLabel> Not Sure </OptionLabel>
                </AnswerBlock>
                <Question>
                  Is a <QuestionHighlight>headcover required</QuestionHighlight> for this place or activity?
                </Question>
              </QuestionRow>
              <QuestionRow>
                <AnswerBlock>
                  <OptionLabel> Yes </OptionLabel>
                  <OptionLabel> No </OptionLabel>
                  <OptionLabel> Not Sure </OptionLabel>
                </AnswerBlock>
                <Question>
                  Would you recommend wearing <QuestionHighlight>modest dress</QuestionHighlight> to this place or activity?
                </Question>
              </QuestionRow>
              <QuestionRow>
                <AnswerBlock>
                  <OptionLabel> Yes </OptionLabel>
                  <OptionLabel> No </OptionLabel>
                  <OptionLabel> Not Sure </OptionLabel>
                </AnswerBlock>
                <Question>
                  Do you have to <QuestionHighlight>pay for wifi</QuestionHighlight> at this place or activity?
                </Question>
              </QuestionRow>
              <QuestionRow>
                <AnswerBlock>
                  <OptionLabel> Yes </OptionLabel>
                  <OptionLabel> No </OptionLabel>
                  <OptionLabel> Not Sure </OptionLabel>
                </AnswerBlock>
                <Question>
                  Would you send a <QuestionHighlight>teenager</QuestionHighlight> to this place or activity?
                </Question>
              </QuestionRow>
              <QuestionRow>
                <AnswerBlock>
                  <OptionLabel> Yes </OptionLabel>
                  <OptionLabel> No </OptionLabel>
                  <OptionLabel> Not Sure </OptionLabel>
                </AnswerBlock>
                <Question>
                  Would you associate this place or activity with <QuestionHighlight>the arts</QuestionHighlight>?
                </Question>
              </QuestionRow>
            </ExtraQuestions>

          </OptionalQuestions>

          <PhotoShare>
            <PhotoHeader>
              <HeaderLabel> Do you have photos to share? </HeaderLabel>
              <HeaderNote> (optional) </HeaderNote>
            </PhotoHeader>
            <Button> Add a photo </Button>
          </PhotoShare>

          <FraudCheck>
            <TitleLabel> Submit your review </TitleLabel>
            <CheckBox type="checkbox"></CheckBox>
            <FraudText>
              I certify that this review is based on my own experience and is my genuine opinion of this establishment and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that TripAdvisor has a zero-tolerance policy on fake reviews.
            </FraudText>
          </FraudCheck>

          <ReviewSubmit>
            <ReviewSubmitButton> Submit your review </ReviewSubmitButton>
          </ReviewSubmit>

        </Column1>
      </Window>
    </NewAddModal>
  );
};

export default ReviewsNewAddModal;