import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth'
import store from './store';
import { Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
      </Router>
    </Provider>
  )
}



export default App