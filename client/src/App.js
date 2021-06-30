import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';


import Home from './components/pages/Home/Home';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import NoMatch from './components/NoMatch';
import Recipes from './components/Recipes';
import Timer from './components/pages/Timer';
import Converter from './components/pages/ConvertPage/ConvertPage';
import Substitutes from './components/pages/Substitute';


const graphqlEndpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:3001/graphql';

const httpLink = createHttpLink({
  uri: graphqlEndpoint,
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
        <div >

          <div className='body-main'>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/convert" component={Converter} />
              <Route path="/substitutes" component={Substitutes} />
              <Route path="/recipes" component={Recipes} />
              <Route path="/timer" component={Timer} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

