import React from 'react';
import axios from 'axios';
import Weather from './Weather';





class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      data: '',
      maps: false,
      errorMessage: false,
      information: {},
    }
  }

  getLocation = async (e) => {
    e.preventDefault();


    let URL = `https://eu1.locationiq.com/v1/search.php?key=pk.5cfe5f9f2a57741c1a80641f27fa86d9&q=${this.state.searchQuery}&format=json`;



    //http://localhost:3101/Weather?city_name=Seattle&lon=-122.33207&lat=47.60621

    let Location = await axios.get(URL);
    // let Route = process.env.REACT_APP_SERVER;
    // let lon = Math.round(this.state.data.lon);
    // let lat = Math.round(this.state.data.lat);


    try {

      // const urls = `${Route}/Weather?city_name=${this.state.searchQuery}&lon=${lon}&lat=${lat}`;
      // const exp = await axios.get(urls);

      this.setState({
        data: Location.data[0],
        maps: true,
        // information: exp.data[0],

      })
     
      console.log(this.state.data);
    }
    catch {
      this.setState({
        maps: false,
        errorMessage: true
      })
    }

  }

  updateSearchQuery = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
    console.log(this.state.searchQuery);
  }


  render() {
    return (
      <>

        <h1>City Explorer</h1>
        <form onSubmit={this.getLocation}


        >
          <input type='text' placeholder='add a city' onChange={this.updateSearchQuery} />

          <input type='submit' value='Get Location' />
        </form>
        <div>
          {this.state.maps
            && <p>
              Name: {this.state.data.display_name}
            </p>}
          {this.state.maps
            && <p>
              latitude:{this.state.data.lat}
            </p>}
          {this.state.maps
            && <p>
              longitude: {this.state.data.lon}
            </p>}
          {this.state.maps
            &&
            <img
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.5cfe5f9f2a57741c1a80641f27fa86d9&center=${this.state.data.lat},${this.state.data.lon}`} alt=''
              />
             
          }




{this.state.maps
            &&
           
             <Weather cityName={this.state.searchQuery}    maps={this.state.maps}  lon={this.state.data.lon}  lat={this.state.data.lat} />
          }

        </div>
          {this.state.errorMessage &&
            <p>  error</p>
          },



      </>

    )
  }
}

export default App;

