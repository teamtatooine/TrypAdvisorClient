import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ReactStars from 'react-stars'
import $ from 'jquery';

// Standard elements

  const Label = styled.label`
    color: #2c2c2c;
    font-size: 1.1670em;
    margin-bottom: 8px;
    display: block;
    font-weight: bold;
    &.show {
      color: #d80007;
    };
    &.hide {
    };
  `;

  const Section = styled.div`
    margin-bottom: 24px;
    margin-top: 6px;
    color: #2c2c2c;
  `;

  const ErrorMessage = styled.div`
    display: block;
    margin: 0;
    padding: 0;
    color: #d80007;
    &.show {
      display: block;
    };
    &.hide {
      display: none;
    };
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

  const OptionButton = styled.div`
    float: left;
    display: block;
    cursor: pointer;
    line-height: 17px;
    white-space: nowrap;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.25);
    background: linear-gradient(to bottom,#fff 0,rgba(255,255,255,0.57) 85%,rgba(233,232,226,0.5) 100%);
    border-radius: 3px;
    border: 1px solid #e9e8e2;
    font-size: 1em;
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
    &.checked {
      background: #00a680;
      color: #fff;
      box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.25);
      border: none;
      padding: 11px 21px;
      margin-right: 6px;
      margin-bottom: 8px;
      filter: none;
    }
  `;

// Main Window Block

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
    &.show {
      display: block;
    };
    &.hide {
      display: none;
    };
  `;

  const Window = styled.div`
    display: table;
    margin: 50px auto;
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    border-color: #e5e5e5;
    background: white;
    width: 80%;
    height: auto;
    z-index: 1100;
  `;

  const LeftColumn = styled.div`
    display: table-cell;
    width: 60%;
    padding: 30px 50px;
  `;

  const RightColumn = styled.div`
    display: table-cell;
    width: 40%;
    padding: 50px 30px;
    box-shadow: rgba(0, 0, 0, 0.2) 8px 0px 9px -8px inset;
    vertical-align: top;
  `;

// Attraction Header Block

  const Header = styled.div`
    margin-bottom: 20px;
    display: inline-block
    width: 100%;
  `;

  const SubmitErrorMessage = styled.div`
    margin: 20px 2px 0 0;
    padding: 10px;
    color: #d80007;
    background-color: #FEE;
    border: 2px solid #d80007;
    &.show {
      display: block;
    };
    &.hide {
      display: none;
    };
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

// Main Questions Block

  const MainQuestions = styled.div`
    color: #4a4a4a;
    margin: 20px 0 40px 0;
  `;

  const Opening = styled.h2`
    margin: 10px 0 25px 0;
    border-bottom: 1px solid #ccc;
    padding-bottom: 12px;
  `;

  // User Rating Block

    const RatingLabel = styled(Label)`
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

    const RatingErrorMessage = styled(ErrorMessage)`
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

  // Review Title Block

    const Title = styled(Section)`
    `;

    const TitleLabel = styled(Label)`
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

    const TitleErrorMessage = styled(ErrorMessage)`
    `;

  // Description Block

    const Description = styled(Section)`
    `;

    const DescriptionLabel = styled(Label)`
    `;

    const TextInput = styled(TitleInput)`
      height: 80px;
      transition: height .2s linear;
    `;

    const DescriptionMinimum = styled.div`
      color: #2C2C2C;
      line-height: 1em;
      font-size: .9165em;
      float: right;
      margin-right: 2px;
      margin-top: -5px;
    `;

    const DescriptionErrorMessage = styled(ErrorMessage)`
    `;

  // Visit Type Block

    const VisitType = styled(Section)`
    `;

    const VisitTypeLabel = styled(Label)`
    `;

    const VisitTypeTable = styled.div`
      display: inline-block;
    `;

    const VisitTypeButton = styled(OptionButton)`
      font-size: 1.167em;
    `;

    const VisitTypeErrorMessage = styled(ErrorMessage)`
    `;

  // Visit Date Block

    const VisitDate = styled(Section)`
    `;

    const VisitDateLabel = styled(Label)`
    `;

    const VisitDateMonthYear = styled.select`
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

    const VisitDateErrorMessage = styled(ErrorMessage)`
    `;

// Optional Questions Block

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

  // Recommended Length of Visit Block

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

  // Extra Questions Block

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

  // Photo Share Block

    const PhotoShare = styled(MainQuestions)`
    `;

    const PhotoHeader = styled(OptionalHeader)`
      margin-top: 20px;
    `;

  // User Consent Block

    const UserConsent = styled(Section)`
    `;

    const UserConsentLabel = styled(Label)`
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

    const UserConsentErrorMessage = styled(ErrorMessage)`
    `;

// Review Submit Block

  const ReviewSubmit = styled.div`
    margin: 54px 0 0;
  `;

  const ReviewSubmitButton = styled(Button)`
    font-size: 16px;
    line-height: 20px;
    overflow: auto
  `;

  const CancelButton = styled(OptionButton)`
    float: right;
    padding: 8px 16px;
    line-height: 19px;
  `;

// Recent Reviews Block

  const RecentReviews = styled.div`
    margin-top: 25px;
  `;

  const RecentReviewsHeader = styled.h2`
    margin: 0;
    color: #4A4A4A;
    font-size: 1.3335em;
    padding-bottom: 7px;
  `;

  const RecentReviewContainer = styled.div`
    padding: 10px 0;
    font-size: .75em;
  `;

  const RecentReviewHeader = styled.div`
    margin-bottom: 6px;
  `;

  const RecentReviewPic = styled.img`
    margin-right: 7px;
    float: left;
    border-radius: 100%;
    width: 32px;
    height: 32px;
  `;

  const RecentReviewName = styled.div`
    font-size: .9165em;
    font-weight: normal;
  `;

  const RecentReviewRating = styled.div`
    float: left;
    margin: 2px 3px 0 0;
  `;

  const RecentReviewTitle = styled.div`
    line-height: 18px;
    font: italic 1.3335em Georgia,"Times New Roman","Century Schoolbook L",serif;
    padding-top: 2px;
    margin-left: 3px;
    height: 100%;
    overflow: hidden;
    word-break: break-all;
  `;

  const RecentReviewDescription = styled.p`
    color: #4a4a4a;
    font-size: 1.25em;
    line-height: 16px;
    margin-top: 0;
    margin-bottom: 2px;
    word-break: break-all;
  `;

  const FraudLink = styled.a`
    display: block;
    border-width: 1px 0 0;
    border-style: solid;
    border-color: #e5e5e5;
    box-sizing: border-box;
    padding-top: 12px;
    color: #4a4a4a;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    };
  `;

  const FraudIcon = styled.span`
    color: #00a680;
  `;




class ReviewsNewAddModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showSubmitError: false,
      // Required inputs (subject to validation)
      ratingFlagText: 'Click to rate',
      rating: null,
      ratingError: false,

      title: '',
      titleError: false,

      description: '',
      descriptionError: false,

      visitType: null,
      visitTypeError: false,

      visitDate: null,
      visitDateError: false,

      userConsent: null,
      userConsentError: false,

      // Optional inputs (no validation)
      visitLength: null,
      skipLine: null,
      headCover: null,
      modestDress: null,
      payForWifi: null,
      teenagerFriendly: null,
      artsAssociated: null,
      photos: []
    };
  };

  // Update the rating and flag text when user clicks a star rating
  ratingChange(newRating) {
    if (newRating === 5) {
      this.setState({
        ratingFlagText: 'Excellent',
        rating: 5
      });
    } else if (newRating === 4) {
      this.setState({
        ratingFlagText: 'Very good',
        rating: 4
      });
    } else if (newRating === 3) {
      this.setState({
        ratingFlagText: 'Average',
        rating: 3
      });
    } else if (newRating === 2) {
      this.setState({
        ratingFlagText: 'Poor',
        rating: 2
      });
    } else if (newRating === 1) {
      this.setState({
        ratingFlagText: 'Terrible',
        rating: 1
      });
    };
  };

  // Click Handlers
  titleChange(e) {
    this.setState({
      title: e.target.value
    });
  };

  descriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  };

  visitTypeChange(input) {
    this.setState({
      visitType: input
    });
  };

  visitDateChange(e) {
    this.setState({
      visitDate: e.target.value
    });
  };

  visitLengthChange(e) {
    this.setState({
      visitLength: e.target.value
    });
  };

  skipLineChange(input) {
    this.setState({
      skipLine: input
    });
  };

  headCoverChange(input) {
    this.setState({
      headCover: input
    });
  };

  modestDressChange(input) {
    this.setState({
      modestDress: input
    });
  };

  payForWifiChange(input) {
    this.setState({
      payForWifi: input
    });
  };

  teenagerFriendlyChange(input) {
    this.setState({
      teenagerFriendly: input
    });
  };

  artsAssociatedChange(input) {
    this.setState({
      artsAssociated: input
    });
  };

  userConsentToggle() {
    this.setState({
      userConsent: !this.state.userConsent
    });
  };

  // Validate all inputs required to submit form
  checkInputErrors() {
    let errorExists = false;
    const requiredInputs = {
      rating: this.state.rating,
      title: this.state.title,
      description: this.state.description,
      visitType: this.state.visitType,
      visitDate: this.state.visitDate,
      userConsent: this.state.userConsent
    };

    // Loop through all required inputs and display corresponding error messages
    for (const key in requiredInputs) {
      if (requiredInputs[key] === null || requiredInputs[key] === '') {
        this.setState({
          [key + "Error"]: true
        });
        errorExists = true;
      } else {
        this.setState({
          [key + "Error"]: false
        });
      };
    };

    // Validate review description is min 100 characters in length
    if (requiredInputs.description !== null && requiredInputs.description.length < 100) {
      this.setState({
        descriptionError: true
      });
      errorExists = true;
    };

    return errorExists;
  };

  resetToDefaults() {
    this.setState({
      showSubmitError: false,
      ratingFlagText: 'Click to rate',
      rating: null,
      ratingError: false,
      title: '',
      titleError: false,
      description: '',
      descriptionError: false,
      visitType: null,
      visitTypeError: false,
      visitDate: null,
      visitDateError: false,
      userConsent: null,
      userConsentError: false,
      visitLength: null,
      skipLine: null,
      headCover: null,
      modestDress: null,
      payForWifi: null,
      teenagerFriendly: null,
      artsAssociated: null,
      photos: []
    });
  };

  submit() {
    // Validate required inputs
    if (this.checkInputErrors()) {

      this.setState({
        showSubmitError: true
      });

    } else {
      // If all inputs pass, submit review
      const params = {
        rating: this.state.rating,
        title: this.state.title,
        description: this.state.description,
        visitType: this.state.visitType,
        visitDate: this.state.visitDate,
        visitLength: this.state.visitLength,
        skipLine: this.state.skipLine,
        headCover: this.state.headCover,
        modestDress: this.state.modestDress,
        payForWifi: this.state.payForWifi,
        teenagerFriendly: this.state.teenagerFriendly,
        artsAssociated: this.state.artsAssociated,
        photos: [],
      };

      this.props.onSubmit(params);

      this.resetToDefaults();
    };

    ReactDOM.findDOMNode(this).scrollTop = 0;
  };

  render() {
    return (
      <NewAddModal className={this.props.show ? "show" : "hide"}>
        <Window>
          <LeftColumn>

            <MainQuestions>

              <Header>
                <AttractionThumbnail src={this.props.attraction[0].mainPhotoUrl} />
                <AttractionNameAddress>
                  <AttractionName> {this.props.attraction[0].name} </AttractionName>
                  <AttractionAddress> {this.props.attraction[0].address1 + ' ' + this.props.attraction[0].address2 + ' ' + this.props.attraction[0].city + ', ' + this.props.attraction[0].state + ' ' + this.props.attraction[0].zip} </AttractionAddress>
                </AttractionNameAddress>
              </Header>

              <SubmitErrorMessage className={this.state.showSubmitError ? "show" : "hide"}> Please complete or fix all required sections (marked in red). </SubmitErrorMessage>

              <Opening> Your first-hand experiences really help other travelers. Thanks! </Opening>

              <RatingLabel className={this.state.ratingError ? "show" : "hide"}> Your overall rating of this attraction </RatingLabel>

              <Rating>
                <RatingStar>
                  <ReactStars count={5} value={this.state.rating} size={37} color2={'#00a680'} half={false} edit={true} onChange={this.ratingChange.bind(this)} />
                  <RatingErrorMessage className={this.state.ratingError ? "show" : "hide"}> This field is required. </RatingErrorMessage>
                </RatingStar>
                <RatingFlag>
                  <ClickToRate className="rating"> {this.state.ratingFlagText} </ClickToRate>
                </RatingFlag>
              </Rating>

              <Title>
                <TitleLabel className={this.state.titleError ? "show" : "hide"}> Title of your review </TitleLabel>
                <TitleInput placeholder="Summarize your visit or highlight an interesting detail" maxLength="120" onChange={this.titleChange.bind(this)} value={this.state.title} />
                <TitleErrorMessage className={this.state.titleError ? "show" : "hide"}> This field is required. </TitleErrorMessage>
              </Title>

              <Description>
                <DescriptionLabel className={this.state.descriptionError ? "show" : "hide"}> Your review </DescriptionLabel>
                <TextInput placeholder="Tell people about your experience: describe the place or activity, recommendations for travelers?" data-minlen="100" data-maxlen="20000" onChange={this.descriptionChange.bind(this)} value={this.state.description} />
                <DescriptionMinimum> (100 character minimum) </DescriptionMinimum>
                <DescriptionErrorMessage className={this.state.descriptionError ? "show" : "hide"}> Your review must be at least 100 characters long. Adding details really helps travelers. </DescriptionErrorMessage>
              </Description>

              <VisitType>
                <VisitTypeLabel className={this.state.visitTypeError ? "show" : "hide"}> What sort of visit was this? </VisitTypeLabel>
                <VisitTypeTable>
                  <VisitTypeButton className={this.state.visitType === 'couples' ? 'checked' : 'unchecked'} onClick={() => this.visitTypeChange('couples')}> Couples </VisitTypeButton>
                  <VisitTypeButton className={this.state.visitType === 'family' ? 'checked' : 'unchecked'} onClick={() => this.visitTypeChange('family')}> Family </VisitTypeButton>
                  <VisitTypeButton className={this.state.visitType === 'friends' ? 'checked' : 'unchecked'} onClick={() => this.visitTypeChange('friends')}> Friends </VisitTypeButton>
                  <VisitTypeButton className={this.state.visitType === 'business' ? 'checked' : 'unchecked'} onClick={() => this.visitTypeChange('business')}> Business </VisitTypeButton>
                  <VisitTypeButton className={this.state.visitType === 'solo' ? 'checked' : 'unchecked'} onClick={() => this.visitTypeChange('solo')}> Solo </VisitTypeButton>
                </VisitTypeTable>
                <VisitTypeErrorMessage className={this.state.visitTypeError ? "show" : "hide"}> This field is required. </VisitTypeErrorMessage>
              </VisitType>

              <VisitDate>
                <VisitDateLabel className={this.state.visitDateError ? "show" : "hide"}> When did you visit? </VisitDateLabel>
                <VisitDateMonthYear onChange={this.visitDateChange.bind(this)}>
                  <option value="null" selected={this.state.visitDate}> Select one </option>
                  <option value="2018-11-01" selected={this.state.visitDate}> November 2018 </option>
                  <option value="2018-10-01" selected={this.state.visitDate}> October 2018 </option>
                  <option value="2018-09-01" selected={this.state.visitDate}> September 2018 </option>
                  <option value="2018-08-01" selected={this.state.visitDate}> August 2018 </option>
                  <option value="2018-07-01" selected={this.state.visitDate}> July 2018 </option>
                  <option value="2018-06-01" selected={this.state.visitDate}> June 2018 </option>
                  <option value="2018-05-01" selected={this.state.visitDate}> May 2018 </option>
                  <option value="2018-04-01" selected={this.state.visitDate}> April 2018 </option>
                  <option value="2018-03-01" selected={this.state.visitDate}> March 2018 </option>
                  <option value="2018-02-01" selected={this.state.visitDate}> February 2018 </option>
                  <option value="2018-01-01" selected={this.state.visitDate}> January 2018 </option>
                  <option value="2017-12-01" selected={this.state.visitDate}> December 2017 </option>
                </VisitDateMonthYear>
                <VisitDateErrorMessage className={this.state.visitDateError ? "show" : "hide"}> This field is required. </VisitDateErrorMessage>
              </VisitDate>

            </MainQuestions>

            <OptionalQuestions>

              <OptionalHeader>
                <HeaderLabel> Could you say a little more about it? </HeaderLabel>
                <HeaderNote> (optional) </HeaderNote>
              </OptionalHeader>

              <RecommendedLengthVisit onChange={this.visitLengthChange.bind(this)}>
                <TitleLabel> Recommended length of visit </TitleLabel>
                <LengthVisitLabel>
                  <LengthVisitInput type="radio" name="LengthVisit" value="<1 hour" checked={this.state.visitLength === '<1 hour'} /> &lt;1 hour
                </LengthVisitLabel>
                <LengthVisitLabel>
                  <LengthVisitInput type="radio" name="LengthVisit" value="1-2 hours" checked={this.state.visitLength === '1-2 hours'} /> 1-2 hours
                </LengthVisitLabel>
                <LengthVisitLabel>
                  <LengthVisitInput type="radio" name="LengthVisit" value="2-3 hours" checked={this.state.visitLength === '2-3 hours'} /> 2-3 hours
                </LengthVisitLabel>
                <LengthVisitLabel>
                  <LengthVisitInput type="radio" name="LengthVisit" value="more than 3 hours" checked={this.state.visitLength === 'more than 3 hours'} /> More than 3 hours
                </LengthVisitLabel>
              </RecommendedLengthVisit>

              <ExtraQuestions>
                <QuestionRow>
                  <AnswerBlock>
                    <OptionButton className={this.state.skipLine === 'yes' ? 'checked' : 'unchecked'} onClick={() => this.skipLineChange('yes')}> Yes </OptionButton>
                    <OptionButton className={this.state.skipLine === 'no' ? 'checked' : 'unchecked'} onClick={() => this.skipLineChange('no')}> No </OptionButton>
                    <OptionButton className={this.state.skipLine === 'not sure' ? 'checked' : 'unchecked'} onClick={() => this.skipLineChange('not sure')}> Not Sure </OptionButton>
                  </AnswerBlock>
                  <Question>
                    Would you tell a friend to <QuestionHighlight>pay to skip the line</QuestionHighlight>?
                  </Question>
                </QuestionRow>
                <QuestionRow>
                  <AnswerBlock>
                    <OptionButton className={this.state.headCover === 'yes' ? 'checked' : 'unchecked'} onClick={() => this.headCoverChange('yes')}> Yes </OptionButton>
                    <OptionButton className={this.state.headCover === 'no' ? 'checked' : 'unchecked'} onClick={() => this.headCoverChange('no')}> No </OptionButton>
                    <OptionButton className={this.state.headCover === 'not sure' ? 'checked' : 'unchecked'} onClick={() => this.headCoverChange('not sure')}> Not Sure </OptionButton>
                  </AnswerBlock>
                  <Question>
                    Is a <QuestionHighlight>headcover required</QuestionHighlight> for this place or activity?
                  </Question>
                </QuestionRow>
                <QuestionRow>
                  <AnswerBlock>
                    <OptionButton className={this.state.modestDress === 'yes' ? 'checked' : 'unchecked'} onClick={() => this.modestDressChange('yes')}> Yes </OptionButton>
                    <OptionButton className={this.state.modestDress === 'no' ? 'checked' : 'unchecked'} onClick={() => this.modestDressChange('no')}> No </OptionButton>
                    <OptionButton className={this.state.modestDress === 'not sure' ? 'checked' : 'unchecked'} onClick={() => this.modestDressChange('not sure')}> Not Sure </OptionButton>
                  </AnswerBlock>
                  <Question>
                    Would you recommend wearing <QuestionHighlight>modest dress</QuestionHighlight> to this place or activity?
                  </Question>
                </QuestionRow>
                <QuestionRow>
                  <AnswerBlock>
                    <OptionButton className={this.state.payForWifi === 'yes' ? 'checked' : 'unchecked'} onClick={() => this.payForWifiChange('yes')}> Yes </OptionButton>
                    <OptionButton className={this.state.payForWifi === 'no' ? 'checked' : 'unchecked'} onClick={() => this.payForWifiChange('no')}> No </OptionButton>
                    <OptionButton className={this.state.payForWifi === 'not sure' ? 'checked' : 'unchecked'} onClick={() => this.payForWifiChange('not sure')}> Not Sure </OptionButton>
                  </AnswerBlock>
                  <Question>
                    Do you have to <QuestionHighlight>pay for wifi</QuestionHighlight> at this place or activity?
                  </Question>
                </QuestionRow>
                <QuestionRow>
                  <AnswerBlock>
                    <OptionButton className={this.state.teenagerFriendly === 'yes' ? 'checked' : 'unchecked'} onClick={() => this.teenagerFriendlyChange('yes')}> Yes </OptionButton>
                    <OptionButton className={this.state.teenagerFriendly === 'no' ? 'checked' : 'unchecked'} onClick={() => this.teenagerFriendlyChange('no')}> No </OptionButton>
                    <OptionButton className={this.state.teenagerFriendly === 'not sure' ? 'checked' : 'unchecked'} onClick={() => this.teenagerFriendlyChange('not sure')}> Not Sure </OptionButton>
                  </AnswerBlock>
                  <Question>
                    Would you send a <QuestionHighlight>teenager</QuestionHighlight> to this place or activity?
                  </Question>
                </QuestionRow>
                <QuestionRow>
                  <AnswerBlock>
                    <OptionButton className={this.state.artsAssociated === 'yes' ? 'checked' : 'unchecked'} onClick={() => this.artsAssociatedChange('yes')}> Yes </OptionButton>
                    <OptionButton className={this.state.artsAssociated === 'no' ? 'checked' : 'unchecked'} onClick={() => this.artsAssociatedChange('no')}> No </OptionButton>
                    <OptionButton className={this.state.artsAssociated === 'not sure' ? 'checked' : 'unchecked'} onClick={() => this.artsAssociatedChange('not sure')}> Not Sure </OptionButton>
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

            <UserConsent>
              <UserConsentLabel className={this.state.userConsentError ? "show" : "hide"}> Submit your review </UserConsentLabel>
              <CheckBox type="checkbox" onClick={this.userConsentToggle.bind(this)} checked={this.state.userConsent} />
              <FraudText>
                I certify that this review is based on my own experience and is my genuine opinion of this establishment and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that TripAdvisor has a zero-tolerance policy on fake reviews.
              </FraudText>
              <UserConsentErrorMessage className={this.state.userConsentError ? "show" : "hide"}> This field is required. </UserConsentErrorMessage>
            </UserConsent>

            <ReviewSubmit>
              <ReviewSubmitButton onClick={this.submit.bind(this)}> Submit your review </ReviewSubmitButton>
              <CancelButton onClick={this.props.hide}> Cancel </CancelButton>
            </ReviewSubmit>

          </LeftColumn>

          <RightColumn>

            <RecentReviews>
              <RecentReviewsHeader> Recent reviews of this attraction </RecentReviewsHeader>

              <RecentReviewContainer>
                <RecentReviewsHeader>
                  <RecentReviewPic src={this.props.reviews[0].userData[0].profilePicture} />
                  <RecentReviewName> {this.props.reviews[0].userData[0].userName} </RecentReviewName>
                  <RecentReviewRating>
                    <ReactStars count={5} value={this.props.reviews[0].userRating} size={17} color2={'#00a680'} edit={false} />
                  </RecentReviewRating>
                  <RecentReviewTitle> {'"' + this.props.reviews[0].title + '"'} </RecentReviewTitle>
                </RecentReviewsHeader>
                <RecentReviewDescription> {this.props.reviews[0].description} </RecentReviewDescription>
              </RecentReviewContainer>

              <RecentReviewContainer>
                <RecentReviewsHeader>
                  <RecentReviewPic src={this.props.reviews[1].userData[0].profilePicture} />
                  <RecentReviewName> {this.props.reviews[1].userData[0].userName} </RecentReviewName>
                  <RecentReviewRating>
                    <ReactStars count={5} value={this.props.reviews[1].userRating} size={17} color2={'#00a680'} edit={false} />
                  </RecentReviewRating>
                  <RecentReviewTitle> {'"' + this.props.reviews[1].title + '"'} </RecentReviewTitle>
                </RecentReviewsHeader>
                <RecentReviewDescription> {this.props.reviews[1].description} </RecentReviewDescription>
              </RecentReviewContainer>

              <RecentReviewContainer>
                <RecentReviewsHeader>
                  <RecentReviewPic src={this.props.reviews[2].userData[0].profilePicture} />
                  <RecentReviewName> {this.props.reviews[2].userData[0].userName} </RecentReviewName>
                  <RecentReviewRating>
                    <ReactStars count={5} value={this.props.reviews[2].userRating} size={17} color2={'#00a680'} edit={false} />
                  </RecentReviewRating>
                  <RecentReviewTitle> {'"' + this.props.reviews[2].title + '"'} </RecentReviewTitle>
                </RecentReviewsHeader>
                <RecentReviewDescription> {this.props.reviews[2].description} </RecentReviewDescription>
              </RecentReviewContainer>

              <FraudLink href="https://www.tripadvisor.com/TripAdvisorInsights/abouttripadvisorreviews">
                Learn more about how TripAdvisor fights fake reviews <FraudIcon> > </FraudIcon>
              </FraudLink>

            </RecentReviews>

          </RightColumn>
        </Window>
      </NewAddModal>
    );
  };
};

export default ReviewsNewAddModal;