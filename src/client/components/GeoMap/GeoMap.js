// TODO: MAKE the avatars MOVE in this react component
import React from 'react';
import $ from 'jquery';
// require('dotenv').config();
// will need later
// const mapsapi = require('google-maps-api')(process.env.GOOGLE_MAPS_API);

/* global google */
class GeoMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: { lat: 36.1699, lng: -115.1398 }, 
      map: null,
      markers: []
    };
    this.initMap = this.initMap.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.moveMarkers = this.moveMarkers.bind(this);
  }

  componentDidMount() {
    this.initMap();
  }

  // initialize map and listeners
  initMap() {
    // initialize google maps
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7799, lng: -122.4198 },
      zoom: 14
    });

    map.addListener('click', event => {
      this.addMarker(event.latLng);
    });

    console.log('hello!', this.state);
    // mechanism to update locations on map
    setInterval(this.moveMarkers.bind(this), 500);
    this.setState({ map });
  }

  // Adds a marker to the map and push to the array.
  addMarker(location) {
    // random avatar generated
    const num = Math.floor(Math.random() * 2) + 2;
    const image = {
      url: `../../assets/images/avatars/av${num}.png`
    };
    const marker = new google.maps.Marker({
      position: location,
      map: this.state.map,
      icon: image
    });
    this.state.markers.push(marker);
    console.log(this.state);
  }  

  moveMarkers() {
    const markers = this.state.markers;
    for (let i = 0; i < markers.length; i++) {
      // move positions of each avatar
      const newPos = markers[i].getPosition();
      const newLat = newPos.lat() + 0.0005;
      const newLng = newPos.lng();

      const latlng = google.maps.LatLng(newLat, newLng);
      console.log('latlng, ', latlng);
      markers[i].setPosition(latlng);
    }
  }

  render() {
    return (
      <div className="main-container">
        <div id="map"></div>
      </div>
    );
  }

}

export default GeoMap;

