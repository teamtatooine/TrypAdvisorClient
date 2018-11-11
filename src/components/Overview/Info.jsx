import React from 'react';
//import GoogleMapReact from 'google-map-react';
import $ from 'jquery';
import styled from 'styled-components';
import InfoItem from './InfoItem.jsx';
import EditList from './EditList.jsx';
import ReactStars from 'react-stars';
import SimpleMap from './SimpleMap.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


const Wrapper = styled.section`
  webkit-font-smoothing: antialiased;
  margin-right: env(safe-area-inset-right);
  margin-left: env(safe-area-inset-left);
  margin: 0;
  padding: 0;
  font-size: medium;
  font-family: Arial,Tahoma,"Bitstream Vera Sans",sans-serif;
  color: #2c2c2c;
  background-color: #fff;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
`;

const Headerdiv = styled.h2`
  display: inline-block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: Arial,Tahoma,"Bitstream Vera Sans",sans-serif;
  font-weight: bold;
  font-size: 32px;
  line-height: 36px;
  color: #000a12;
`;
const Reviews = styled.p`
  display: inline-block;
  color: #4a4a4a;
  font-size: 14px;
  line-height: 18px;
  margin-left: 5px;
`;
const Things = styled.p`
  display: inline-block;
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
`;

const Category = styled.p`
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
  color: #2c2c2c;
`;

const Address = styled.p`
  line-height: 26px;
  margin-right: 12px;
  white-space: nowrap;
  color: #4a4a4a;
  cursor: pointer;
  text-align: left;
  font-size: 14px;
`;


const Image = styled.img`
  padding: 12px;
  height: 446px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  -webkit-box-flex: 0;
  flex: none;
  width: 66.66666667%;
  display: block;
  box-sizing: border-box;
  margin: 0;
`;


const OuterLower = styled.div`
  background-color: #f2f2f2;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  background: none;
  border: none;
  padding-top: 16px;

  display: block;
  font-size: medium;
  font-family: Arial,Tahoma,"Bitstream Vera Sans",sans-serif;
  color: #2c2c2c;
  border-width: 1px 0 0;
    border-style: solid;
    border-color: #e5e5e5;

`;

const Aboutdiv = styled.div`
  padding-bottom: 0;
  padding-top: 0;
  -webkit-box-flex: 0;
  flex: none;
  width: 50.0%;
  min-width: 300px;
  border-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
  border-radius: 2px;
  background: #fff;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  font-size: medium;
  font-family: Arial,Tahoma,"Bitstream Vera Sans",sans-serif;
  color: #2c2c2c;
`;

const Aboutdescription = styled.div`
  padding-bottom: 10px;
  margin: 0;
  padding: 0;
  display: block;
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
`;

const Duration = styled.div`
  position: relative;
  padding-left: 25px;
  line-height: 20px;
  margin: 0;
  padding: 0;
  display: block;
  font-size: 14px;
  color: #4a4a4a;
`;
const Featured = styled.div`
  position: relative;
  padding-left: 25px;
  line-height: 20px;
  margin: 0;
  padding: 0;
  display: block;
  font-size: 14px;
  color: #4a4a4a;
`;

const Contactdiv = styled.div`
  min-width: 300px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  padding-top: 0;
  padding-bottom: 0;
  -webkit-box-flex: 0;
  flex: none;
  width: 33.33333333%;
  margin: 0;
  border-width: 1px;
    border-style: solid;
    border-color: #e5e5e5;
    border-radius: 2px;
`;

const Contactheader = styled.div`
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #000a12;
  margin: 0;
  padding: 0;
  display: block;
`;

const Locality = styled.div`
  position: relative;
  padding-left: 25px;
  padding-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
`;

const Websitediv = styled.div`
  position: relative;
  padding-left: 25px;
  padding-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  padding: 0;
  display: block;
  white-space: nowrap;
`;

const Emaildiv = styled.div`
  position: relative;
  padding-left: 25px;
  padding-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  margin: 0;
  padding: 0;
  display: block;
  white-space: nowrap;
`;
const Improvediv = styled.div`
  color: #069;
  text-decoration: none;
  outline: none;
  font-size: 14px;
  text-align: right;
`;


class Info extends React.Component {
  constructor(props) {
    super(props);
   this.handleClick =this.handleClick.bind(this);
  }

handleClick() {
  console.log("Click");

}

render() {
//console.log("th",this);
if(this.props && this.props.info) {
var name = this.props.info.name;
    var cat = this.props.info.category;
    var  infoAddress = this.props.info.address1 + ", " + this.props.info.city + ", " + this.props.info.state + ", " + this.props.info.zip;
    var photos = this.props.info.imageUrl;
    var description = this.props.info.description;
    var suggestedDuration = this.props.info.suggestedDuration;
    var featuredIn = this.props.info.featuredIn;
    var phone = this.props.info.phone;
    var latitude = this.props.info.latitude;
    console.log("latitude",latitude);
    var longitude = this.props.info.longitude;
    console.log("longitude", longitude);
  }
  return(
    <div>
    <Router>
<Wrapper>
  <div>
  <Headerdiv>
  <h2> {name}</h2>
  </Headerdiv>
  <div> <ReactStars count={5} value={4} size={22} color2={'#00a680'} edit={false} char={'\u2605'}
/><Reviews>{Math.floor((Math.random() * 5000) + 1)} Reviews </Reviews>|<Things> #{Math.floor((Math.random() * 15) + 1)} of 20 things to do in {name} National Park </Things>| </div>
  <div><Address> {infoAddress} </Address></div>
  <Image src={photos}/>
  <OuterLower>
  <Aboutdiv>
    <h3> About </h3>
      <Aboutdescription> {description} </Aboutdescription>
      <Duration> Suggested duration: {suggestedDuration}</Duration>
      <Featured> As featured in {featuredIn}</Featured>
  </Aboutdiv>
  <Contactdiv>
    <Contactheader>
      <h3> Contact </h3>
      <SimpleMap simpleMap = {this.props.info}/>
    </Contactheader>

    <Locality>
      <div> {infoAddress}</div>
    </Locality>
    <div id="map"></div>
    <Websitediv> Website     {phone} </Websitediv>
    <Emaildiv> Email </Emaildiv>
    <Link to="/editListing">Improve this Listing</Link>
    <Route path="/editListing" render={(props) => <EditList {...props}
              edit={this.props.info} />} />
    {/*<Improvediv onClick={this.handleClick}>
       Improve this Listing </Improvediv>*/}
  </Contactdiv>
  </OuterLower>
  <table>

    <tbody>
      <tr>
        <td></td>
      </tr>
    </tbody>
  </table>

</div>
</Wrapper>
</Router>
</div>
)
}

};

//export default TopTenAuthors;

export default Info;