import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import "./varibales.css"
import logo from "./logo.svg"
import DemoComponent from "./DemoComponent"

const AppContainer = styled.div`
  text-align: center;
`

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const Rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const AppLogo = styled.img`
  animation: ${Rotate360} infinite 20s linear;
  height: 80px;
}
`

const AppIntro = styled.p`
  font-size: large;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <h2>Welcome to React</h2>
        </AppHeader>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro>
        <DemoComponent />
      </AppContainer>
    )
  }
}

export default App
