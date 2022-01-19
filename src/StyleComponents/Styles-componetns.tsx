import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.section<{ is3D?: boolean }>`
  padding: 4rem;
  margin: 2rem;
  background-color: ${({ color }) => (color ? color : "black")};
  ${({ is3D }) =>
    is3D &&
    css`
      background-color: yellow;
      box-shadow: 1rem solid black;
    `};
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: green;
`;

const CirculeWarpper = styled(Wrapper)`
  border-radius: 100%;
`;

function StylesComponetns() {
  return (
    <div>
      <Wrapper color={"red"} is3D={true}>
        <Title>Hello World! </Title>
      </Wrapper>

      <Wrapper color={"red"}>
        <Title>Hello World! </Title>
      </Wrapper>
      <CirculeWarpper color={"red"}>Hello</CirculeWarpper>
    </div>
  );
}

export default StylesComponetns;
