import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const Layout = styled.div`
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 25px;
  padding-left: 0px;
  margin-bottom: 25px;
  border-bottom: 1px solid #ddd;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(221, 221, 221);
  border-width: 0;
  border-style: solid;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: initial;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  margin: 0;
  display: block;
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
  font-size: 0.75em;
  font-family: Arial, Tahoma, 'Bitstream Vera Sans', sans-serif;
  color: #2c2c2c;
`;

const HeaderInfodiv = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
  color: #4a4a4a;
  font-weight: normal;
  margin: 0;
  padding: 0;
  display: block;
  padding-inline-start: 2px;
  padding-inline-end: 2px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
`;

const Place = styled.div`
  padding: 0;
  display: block;
  height: auto;
  overflow: visible;
  width: 58%;
  margin-right: 25px;
  position: relative;
  display: block;
  font-size: 14px;
  margin: 25px 0 6px;
  font-weight: bold;
  cursor: default;
`;

const Placediv = styled.div`
  position: relative;
  display: block;
  font-size: 14px;
  margin: 25px 0 6px;
  margin-top: 25px;
  margin-right: 0px;
  margin-bottom: 6px;
  margin-left: 0px;
  font-weight: bold;
`;

const Phonediv = styled.div`
  position: relative;
  display: block;
  font-size: 14px;
  margin: 25px 0 6px;
  margin-top: 25px;
  margin-right: 0px;
  margin-bottom: 6px;
  margin-left: 0px;
  font-weight: bold;
`;

const Websitediv = styled.div`
  position: relative;
  display: block;
  font-size: 14px;
  margin: 25px 0 6px;
  margin-top: 25px;
  margin-right: 0px;
  margin-bottom: 6px;
  margin-left: 0px;
  font-weight: bold;
`;

const Addressdiv = styled.div`
  position: relative;
  display: block;
  font-size: 14px;
  margin: 25px 0 6px;
  margin-top: 25px;
  margin-right: 0px;
  margin-bottom: 6px;
  margin-left: 0px;
  font-weight: bold;
`;

const Citydiv = styled.div`
  position: relative;
  display: block;
  font-size: 14px;
  margin: 25px 0 6px;
  margin-top: 25px;
  margin-right: 0px;
  margin-bottom: 6px;
  margin-left: 0px;
  font-weight: bold;
`;

const Statediv = styled.div`
  position: relative;
  display: block;
  font-size: 14px;
  margin: 25px 0 6px;
  margin-top: 25px;
  margin-right: 0px;
  margin-bottom: 6px;
  margin-left: 0px;
  font-weight: bold;
`;

const Zipdiv = styled.div`
  position: relative;
  display: block;
  font-size: 14px;
  margin: 25px 0 6px;
  margin-top: 25px;
  margin-right: 0px;
  margin-bottom: 6px;
  margin-left: 0px;
  font-weight: bold;
`;

class EditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.edit.name,
      phone: this.props.edit.phone,
      website: this.props.edit.website,
      address1: this.props.edit.address1,
      city: this.props.edit.city,
      state: this.props.edit.state,
      zip: this.props.edit.zip
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeWebsite = this.handleChangeWebsite.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeZip = this.handleChangeZip.bind(this);
  }

  handleChangeName(event) {
    event.preventDefault();
    this.setState({ name: event.target.value });
    console.log('name is ', this.state.name);
  }
  handleChangePhone(event) {
    event.preventDefault();
    this.setState({ phone: event.target.value });
  }

  handleChangeWebsite(event) {
    event.preventDefault();
    this.setState({ website: event.target.value });
  }

  handleChangeAddress(event) {
    event.preventDefault();
    this.setState({ address1: event.target.value });
  }

  handleChangeCity(event) {
    event.preventDefault();
    this.setState({ city: event.target.value });
  }

  handleChangeState(event) {
    event.preventDefault();
    this.setState({ state: event.target.value });
  }

  handleChangeZip(event) {
    event.preventDefault();
    console.log('I am here inside onchange');
    console.log('e', event.target);
    this.setState({ zip: event.target.value });
  }

  handleSubmit(event) {
    console.log('name sub', this.state.name);
    event.preventDefault();
    var id = this.props.edit.attractionId;
    console.log('name', this.state.name);
    console.log('phone', this.state.phone);
    console.log('website', this.state.website);
    console.log('address1', this.state.address1);
    console.log('city', this.state.city);
    console.log('state', this.state.state);
    console.log('zip', this.state.zip);
    console.log(id);
    $.ajax({
      url: 'http://localhost:4000/api/:id/overview',
      type: 'PUT',
      data: {
        id: id,
        name: this.state.name,
        phone: this.state.phone,
        website: this.state.website,
        address1: this.state.address1,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
      },
      success: function(data) {
        alert('put was performed.');
      }
    });
  }

  render() {
    if (this.props) {
      //console.log("edil",this.props.edit);
      var name = this.props.edit.name;
      var phone = this.props.edit.phone;
      var website = this.props.edit.website;
      var address = this.props.edit.address1;
      var city = this.props.edit.city;
      var state = this.props.edit.state;
      var zip = this.props.edit.zip;
    }
    //console.log(this.state.value);
    return (
      <div>
        <Layout>
          <HeaderInfodiv>
            <h4>General Information</h4>
          </HeaderInfodiv>
          <form onSubmit={this.handleSubmit}>
            <label>
              <Placediv>
                Place Name
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChangeName}
                />
              </Placediv>
              <Phonediv>
                Phone
                <input
                  type="text"
                  value={this.state.phone}
                  onChange={this.handleChangePhone}
                />
              </Phonediv>
              <Websitediv>
                Website
                <input
                  type="text"
                  value={this.state.website}
                  onChange={this.handleChangeWebsite}
                />
              </Websitediv>
              <Addressdiv>
                Address
                <input
                  type="text"
                  value={this.state.address}
                  onChange={this.handleChangeAddress}
                />
              </Addressdiv>
              <Citydiv>
                City
                <input
                  type="text"
                  value={this.state.city}
                  onChange={this.handleChangeCity}
                />
              </Citydiv>
              <Statediv>
                State
                <input
                  type="text"
                  value={this.state.state}
                  onChange={this.handleChangeState}
                />
              </Statediv>
              <Zipdiv>
                Zip
                <input
                  type="text"
                  value={this.state.zip}
                  onChange={this.handleChangeZip}
                />
              </Zipdiv>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Layout>
      </div>
    );
  }
}

/*<div> Phone </div>
        <div> {phone}</div>
        <div> Website</div>
        <div> {website}</div>
        <div> Location </div>
        <div> Street Address </div>
        <div> {address}</div>
        <div> {city}</div>
        <div> {state}</div>
        <div> {zip}</div>*/
//<button onClick={this.handleSubmit}>
//         Submit
//       </button>

export default EditList;
