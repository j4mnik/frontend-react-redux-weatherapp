import './App.css';
import Navigation from './components/navigation/navigation';
import Title from './components/title/title';
import Searchbox from './components/searchbox/searchbox';
import Widget from './components/widget/widget';
import Signin from './components/signin/signin';
import Register from './components/register/register';
import React, { Component } from 'react';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin'
    }
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.route === 'home'
            ? <div className='in'>
              <Navigation onRouteChange={this.onRouteChange} />
              <Title />
              <Searchbox />
              <Widget />
            </div>
            : (
              this.state.route === 'signin' ?
                <Signin onRouteChange={this.onRouteChange} />
                : <Register onRouteChange={this.onRouteChange} />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;