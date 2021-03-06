const React = require('react')

const RestaurantMap = React.createClass({
  componentDidUpdate(){
    console.log('prop', this.props)
    var lat = this.props.data.latitude
    var lon = this.props.data.longitude
        var google = window.google

        function initMap() {
        var uluru = {lat: +lat, lng: +lon};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
    }
    initMap()
  },

  render(){
    return (
      <div>
        <h2>Find us here...</h2>
        <div id='map'></div>
      </div>
    )
  }
})

module.exports = RestaurantMap
