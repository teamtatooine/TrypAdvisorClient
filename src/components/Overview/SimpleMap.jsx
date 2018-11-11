 import React, { Component } from 'react';
 import GoogleMapReact from 'google-map-react';

const MapContactdiv = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class SimpleMap extends React.Component {
  constructor(props) {
    super(props);


}

  render() {

   if(this.props && this.props.simpleMap) {
    var latitude = this.props.simpleMap.latitude;
    var longitude = this.props.simpleMap.longitude;
    var center = {
      lat: latitude,
      lng: longitude
    };
    var zoom = 11;

  }

    return (<div style={{ height: '100vh', width: '100%' }}>>

      <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'}}
        defaultCenter={center}
        defaultZoom={zoom}
      />
      <MapContactdiv
          lat={latitude}
          lng={longitude}
        />
      </div>
    );
  }
}

export default SimpleMap;
