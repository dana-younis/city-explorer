import React from 'react';
import axios from 'axios';
import Weather from './components/Weather';
// import Movies from './components/Movies';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      data1: '',
      Maps: false,
      errorMessage: false,
      weatherArray: [],
      show1: false,
      latitude: '',
      longitude: '',
      movieArray: [],
      show2: false
    }
  }






 

  getCity = async (event) => {
    event.preventDefault();
    
    let ser = process.env.REACT_APP_SERVER;

    let cityUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.5cfe5f9f2a57741c1a80641f27fa86d9&q=${this.state.searchQuery}&format=json`;

    try {
      let cityResult = await axios.get(cityUrl);
      this.setState({

        data1: cityResult.data[0],
        Maps: true,
       
        latitude: cityResult.data[0].lat,
        longitude: cityResult.data[0].lon,
       

      })
    }
    catch (error) {
      this.setState({
        Maps: false,
        errorMessage: true,
     
       
      })
    }
  

     
   

  try {
  // const url = `http://localhost:3300/weather?city=amman&lon=35.9239625&lat=31.9515694`;
  //  const url = `${ser}/weather?city=${this.state.searchQuery}&lon=${this.state.longitude}&lat=${this.state.latitude}`;

  let weatherData1 = await axios.get(`${ser}/weather?city=${this.state.searchQuery}`);

  this.setState({
  weatherArray: weatherData1.data,
  show1: true,

  })
  console.log(this.state.weatherArray);
  } catch (error) {
    this.setState({
      weatherArray: error.response,
      show1: false
    })
  }







    try {

      let moviedata1 = await axios.get(`${ser}/movie?`, { params: { city: this.state.searchQuery } });


      this.setState({
        movieArray: moviedata1.data,
        show2: true,

      })
    } catch (error) {
      this.setState({
        movieArray: error.message,
        show2: false
      })
    }
  }

  updateSearchQuery = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }


  render(){
    return (
      <>
        <Row>
          <Col>

            <h1 className="bg-danger text-white">City Explorer</h1>
            <Form onSubmit={this.getCity}>


              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter City Name" onChange={this.updateSearchQuery} size="sm" />
              </Form.Group>


              <Button type="submit" className="btn btn-danger active" size="sm"  >
                Explore
              </Button>

            </Form>
           

        </Col>

        </Row>
          <Col> 

             {/* <div className="card text-center">
              <div className="card-header">
                The cities
  </div>
              <div className="card-body">
                <p className="card-title">Amman</p>
                <p className="card-text">Seattle</p>
                <p className="card-text">Paris </p>


              </div> */}

            {/* </div> */}
            {this.state.Maps &&
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.5cfe5f9f2a57741c1a80641f27fa86d9&center=${this.state.data1.lat},${this.state.data1.lon}`} />
                <Card.Body>
                  <Card.Title>{this.state.data1.display_name}</Card.Title>
                  <Card.Text>latitude {this.state.data1.lat}</Card.Text>
                  <Card.Text>longitude {this.state.data1.lon}</Card.Text>
                  

                  
                </Card.Body>

              </Card>

              }

        </Col> 



        
        {this.state.show1 && <Weather weatherData={this.state.weatherArray} searchQuery={this.state.searchQuery}/>}

        {/* {this.state.show2 && <Movies moviesData={this.state.movieArray} show2={this.state.show2}></Movies>} */}
     
      </>
    );
  }
}

export default App;