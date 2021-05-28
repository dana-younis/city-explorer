import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
//   constructor(props) {
//     super(props);
    // this.state = {
    //   forecastArr: this.props.weatherData
    // }
//   }

 
  render() {
    return (
      <>
     

{this.props.weatherData[0].date}
{this.props.weatherData[0].description}
     
      </>
    )
  }
}
export default Weather;