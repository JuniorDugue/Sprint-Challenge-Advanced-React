import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Display from './components/Display';
class App extends Component {
  constructor(props) {
    super();

    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then((res) => {
        this.setState({
          users: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render(){
    return (
      <div>
        <h2 data-testid="header">Sprint Project</h2>
      <Display userData={this.state.users}/>
      </div>
    )
  }
}

export default App;
