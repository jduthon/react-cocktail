import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import logo from './logo.svg';
import './App.css';

import CocktailList from './CocktailList';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <CocktailList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
