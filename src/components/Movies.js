// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import 'bootstrap/dist/css/bootstrap.min.css';
// class Movies extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movieArr: this.props.weatherData
//     }
//   }
//   render() {
//     return (
//       <>
//         {this.props.moviesData.length !== 0 && this.props.showMovies &&
//           <div className='gird'>
//             {this.props.moviesData.map((day, i) => (

//                 <Card style={{ width: '18rem' }} className='box'>
//                   <Card.Header>{this.props.moviesData[i].title}</Card.Header>
//                   {/* <p variant="Secondary"> */}
//                   <p>Title: {this.props.moviesData[i].title}</p>
//                   <p>Overview: {this.props.moviesData[i].overview}</p>
//                   <p>Average Votes: {this.props.moviesData[i].average_votes}</p>
//                   <p>Total Votes: {this.props.moviesData[i].total_votes}</p>
//                   <Card.Img variant="top" src={this.props.moviesData[i].image_url} />
                 
//                   <p>Popularity: {this.props.moviesData[i].popularity}</p>
//                   <p>Release Date: {this.props.moviesData[i].released_on}</p>
//                 </p>

//               </Card>
//             ))
//             }
//           </div>
//         }
//         {this.props.showMovies === false &&
//           <p variant="danger">
//             <p>Title:  {this.props.moviesData}</p>
//           </p>

//         }
//       </>
//     )
//   }
// }
// export default Movies;