import React, { Component } from 'react';

import theme from '../assets/react-toolbox/theme';
import '../assets/react-toolbox/theme.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import Panel from 'react-toolbox/lib/layout/Panel';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';

import { apiEndpoint } from './ApiUtils';
import './index.css';

class App extends Component {
  componentDidMount() {
    fetch(apiEndpoint('/posts')).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <NavDrawer>
            <p>Navigation, account switcher, etc. go here.</p>
          </NavDrawer>
          <Panel>
            <AppBar leftIcon='menu'/>
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
              <h1>Main Content</h1>
              <p>Main content goes here.</p>
              <DatePicker/>
            </div>
          </Panel>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
