import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import CocktailList from './CocktailList';
import CocktailForm from './Editor/Cocktail';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjjd2wr150xwu01586oe2hwlq',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Route path="/add-cocktail" component={CocktailForm} />
            <Route exact path="/" component={CocktailList} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
