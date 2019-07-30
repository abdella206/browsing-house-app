import React from 'react';
import Home from './Home'
import NeighborhoodList from './NeighborhoodList'
import Show from './Show'
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neighborhoodList: {park:'park slope', stuy:'bed stuy', green:'green point'},
      
      schoolList: '',
    }
  }



  // componentDidMount() {
  //   axios.get('https://api.schooldigger.com/v1.2/schools?st=NY&q=Brooklyn&appID=b684e7a3&appKey=8851828265cb952a8d799c60acdb852a')
  //     .then(result => {
  //       console.log(result)
  //       this.setState({
  //         school: result.data
  //       })
  //     })
  // }





  render() {
    return (


      <>
        {/* <Home />
        <Show />
        <NeighborhoodList /> */}

        <Router>
          <nav>
            <Link to='/'>HOME</Link>{' '}
            <Link to='/city'>CityList</Link>{' '}
            <Link to='/show'>Show</Link>{''}


          </nav>

          <Route exact path='/' render={() => <Home procedures={this.state.procedures} />} />
          

          {/* <NeighborhoodList  list={this.state.NeighborhoodList }/> */}

          <Route exact path='/city' render={(props) => <NeighborhoodList {...props} list={this.state.neighborhoodList} />} />


          <Route exact path='/show' render={(props) => <Show {...props} />} />


        </Router>


      </>

    );
  }
}


















export default App;
