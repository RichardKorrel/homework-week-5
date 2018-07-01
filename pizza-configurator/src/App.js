import React, { Component } from 'react';
import './App.css';
import PizzaBaseContainer from './components/PizzaBaseContainer'
import PizzaSauceContainer from './components/PizzaSauceContainer'
import PizzaToppingContainer from './components/PizzaToppingContainer'
import PizzaDeliveryContainer from './components/PizzaDeliveryContainer'
import PizzaOrderContainer from './components/PizzaOrderContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the PizzaConfigurator</h1>
        </header>
        <main>
          <h2>Please configure your pizza
              <br></br>
              by selecting the various pizza elements
          </h2>
          <PizzaBaseContainer />
          <PizzaSauceContainer />
          <PizzaToppingContainer />
          <PizzaDeliveryContainer />
          <PizzaOrderContainer />
        </main>
      </div>
    );
  }
}

export default App;
