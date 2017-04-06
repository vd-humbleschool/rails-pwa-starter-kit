import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Layout from 'react-toolbox/lib/layout/Layout';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import Panel from 'react-toolbox/lib/layout/Panel';

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../assets/react-toolbox/theme';
import '../assets/react-toolbox/theme.css';

import Home from './components/Home';
import Posts from './components/Posts';

import { apiEndpoint } from './ApiUtils';
import './index.css';

class App extends Component {
  state = {
    navDrawerActive: false
  };

  toggleNavDrawer = () => {
    this.setState({ navDrawerActive: !this.state.navDrawerActive });
  };

  componentDidMount() {
    fetch(apiEndpoint('/posts')).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
    });
  }

  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Layout>
            <NavDrawer active={this.state.navDrawerActive}
                       permanentAt="xxxl"
                       onOverlayClick={this.toggleNavDrawer}>
              <List>
                <ListItem caption="Home" itemContent={
                  <Link to="/" onClick={this.toggleNavDrawer}>Home</Link>
                }/>

                <ListItem caption="Posts" itemContent={
                  <Link to="/posts" onClick={this.toggleNavDrawer}>Posts</Link>
                }/>
              </List>
            </NavDrawer>
            <Panel>
              <AppBar leftIcon='menu' onLeftIconClick={this.toggleNavDrawer}/>
              <Route exact path="/" component={Home}/>
              <Route path="/posts" component={Posts}/>
            </Panel>
          </Layout>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
