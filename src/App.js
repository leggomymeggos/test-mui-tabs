import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MuiThemeProvider, Tabs, Tab} from 'material-ui';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Tabs
          style={{width: "500px"}}
          contentContainerStyle={{
            padding: "20px"
          }}
          tabTemplateStyle={{
            color: "#993333",
            // paddingLeft: "20px",
            // paddingTop: "20px",
          }}
          tabItemContainerStyle={{
            backgroundColor: "gray",
          }}
        >
          <Tab 
            buttonStyle={{
              textTransform:"none",
              alignItems: "unset",
              justifyContent: "unset"
            }}
            style={{
              width: "25%"
            }}
            label="first tab">
            <div>The first tab</div>
          </Tab>
          <Tab label="second tab">
            <div>The second tab</div>
          </Tab>
        </Tabs> 
      </MuiThemeProvider>
    );
  }
}

export default App;
