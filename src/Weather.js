import React from 'react';
import axios from 'axios';

class Weather extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
      day1:'',
      day2:'',
      day3:'',
      maps:this.props.maps,
      errorMess: false,
      }
    }
  
    info= async () => {
     
      let serverRoute = process.env.REACT_APP_SERVER; 
      let lon= Math.round(this.props.lon);
      let lat= Math.round(this.props.lat);
      console.log(lon,lat);
      let url = `${serverRoute}/Weather?city_name=${this.props.searchQuery}&lon=${lon}&lat=${lat}`;
      let WeatherItem = await axios.get(url);
        
      
     console.log(WeatherItem);
     this.setState({
      day1:WeatherItem.data.Data[0],
      day2:WeatherItem.data.Data[1],
      day3:WeatherItem.data.Data[2]
    });
  
     
    

    }
   information=()=>{
     if(this.state.maps){
      this.info();
      this.setState({
        maps:false
      })
     }
     
   }
  
   
  
  
    render() {
  
     this.information();
  
      return (
  
  
        <>
        <p>{this.state.day1.description}</p>
        <p>{this.state.day2.description}</p>
        <p>{this.state.day3.description}</p>
        </>
  
  
  
  
      );
  
  
  
  
  
  
    }
  
  
  
  }
  
  export default Weather;