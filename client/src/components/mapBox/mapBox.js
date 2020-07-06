import React, { Component, Fragment } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGhld2lja2VkIiwiYSI6ImNrY2E4Y292OTBibjcyc211dGtoZGVidW0ifQ.6w1diZIW_5fx9TWCP6mzwA";

export class mapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: this.props.lng ?? 5,
      lat: this.props.lat ?? 34,
      zoom: this.props.zoom ?? 2,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    return (
      <>
        <style>
          {`.sidebarStyle {
display: inline-block;
position: absolute;
top: 0;
left: 0;
margin: 12px;
background-color: #404040;
color: #ffffff;
z-index: 1 !important;
padding: 6px;
font-weight: bold;
}
 
.mapContainer {
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;`}
        </style>
        <div>
          <div className='sidebarStyle'>
            <div>
              Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
              {this.state.zoom}
            </div>
          </div>
          <div
            ref={(el) => (this.mapContainer = el)}
            className='mapContainer'
          />
        </div>
      </>
    );
  }
}

export default mapBox;
