import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Auth from './utils/auth';


function App() {

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

  return (
    <div className="app">
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            {Auth.loggedIn() ? (
            <Route exact path ="/" component={Dashboard} />
            ) : (
              <Route exact path ="/" component={Landing} />
            )}
            <Route exact path ="/signup" component={Signup} />
            <Route exact path ="/login" component={Login} />
            <Route exact path ="/dashboard" component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>

        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
