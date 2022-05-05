import React from 'react';
import { createGlobalStyle } from "styled-components";
import styled from "styled-components"
import List from "./components/Header"
import Shows from "./components/Shows"
import Body from "./components/Body"


const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  list-style:none;
}
`

const App= () => {
    return(
      <div>
       <GlobalStyle />
        <List/>
        <Shows/>
        <Body/>
        
      </div>
    )
  }

export default App