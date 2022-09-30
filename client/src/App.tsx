import React from "react";
import styled from "styled-components";

const MainContainer = styled.div({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const TestDiv = styled.div({
  width: "20%",
  height: "20vh",
  backgroundColor: "red",
});

function App() {
  return (
    <MainContainer className="App">
      <TestDiv></TestDiv>
    </MainContainer>
  );
}

export default App;
