import React, { Component, PropTypes } from 'react';

const exampleUser = {
  name: 'Jessica Jones',
  user_icon: 'https://s-media-cache-ak0.pinimg.com/564x/7c/1d/15/7c1d156f6e62f5559e8fada72b2117f7.jpg'
}; 

/* global google */
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: { lat: 36.1699, lng: -115.1398 }, 
      map: null,
      markers: []
    };
    this.initMap = this.initMap.bind(this);
    this.members = [];
  }

  componentDidMount() {
    this.initMap(this.members);
  }
  componentWillReceiveProps(nextProps) {
    this.members = nextProps.members;
    this.initMap(this.members);
  }

  initMap(members) {
    // initialize google maps
    const center = { lat: 37.783913, lng: -122.409020 };
    const loc = this.state.location;
    const map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 13,
      styles: [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
    });
    
    for (let i = 0; i < members.length; i++) {
      console.log('map', members);
      const infowindow = new google.maps.InfoWindow({ content: '<img class="img-circle map-icon" src=\"' + members[i].user_icon + '\" alt="avatar" />' });
      const marker = new google.maps.Marker({
        position: { lat: parseFloat(members[i].lat), lng: parseFloat(members[i].lng) },
        map: map,
        title: 'Hello World!'
      });
      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
      infowindow.open(map, marker);
    }
  

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const infoWindow = new google.maps.InfoWindow({ map: map });
        infoWindow.setPosition(pos);
        infoWindow.setContent('<img class="img-circle map-icon" src=\"' + exampleUser.user_icon + '\" alt="avatar" />');
        map.setCenter(pos);
      }, () => {
        console.log('error');
      });
    } else {
      // Browser doesn't support Geolocation
      console.log('error');
    }
  }

  render() {
    return (
      <div className="map-container">
        <div id="map"></div>
      </div>
    );
  }

}

Map.propTypes = {
  members: PropTypes.array,
};

export default Map;
