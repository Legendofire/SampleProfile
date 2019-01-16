import React, { Component } from 'react'
import ThemeProvider from 'styled-components';

const theme = {
    colors: {
        white: "#000000",
        lightGrey: "#ECEDEF",
        darkGrey: "#131313"
    }
}

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>

      </ThemeProvider>
    )
  }
}
