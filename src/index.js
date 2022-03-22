import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Single from './components/posts/single';
import Search from './components/posts/search';
import Admin from './Admin';
import Create from './components/admin/create';
import Delete from './components/admin/delete';
import Edit from './components/admin/edit';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
      <React.StrictMode>
          <Header />
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/create" component={Create} />
            <Route exact path="/admin/edit/:id" component={Edit} />
            <Route exact path="/admin/delete/:id" component={Delete} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/post/:slug" component={Single} />
            <Route path="/search" component={Search} />
          </Switch>
          <Footer />
      </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));