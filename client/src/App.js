import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

//import Home from './pages/Home';

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



{/* <Route exact path='/' component={Home} /> */ }