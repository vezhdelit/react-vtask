import React, { PureComponent } from "react";
import Routes from "../routes";
import styled from "styled-components";


class App extends PureComponent {

  render() {
    return (
        <div>
          <HeaderDiv>Vtask - курсовий проект Веждела Василя</HeaderDiv>
          <Routes />
        </div>
   );
  }
}

export default App;


const HeaderDiv = styled.div`
  background: rgba(0, 0, 0, 0.15);
  color: white;
  padding: 8px 0;
  margin: -10px -10px 10px -10px;
  text-align: center;
  font-size: 36px;
  font-weight: 200;
`;





