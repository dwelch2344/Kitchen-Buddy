import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';
import './App.css';
import './index.css';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';

import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <NavBar />
  
            <div className="outer">
              <div className="inner">
                <Switch>
                  {/* <Route exact path='/' component={Home} /> */}
                  <Route path="/sign-in" component={Login} />
                  <Route path="/sign-up" component={SignUp} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </ApolloProvider>
  );
}

export default App;
