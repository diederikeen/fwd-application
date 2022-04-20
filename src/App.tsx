import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from "./common/components/Container";
import { styled } from "@stitches/react";

const Wrapper = styled('div', {
  padding: '$xlg 0',
})

export function App() {
  return (
    <Wrapper>
      <Container>
        <Outlet/>
      </Container>
    </Wrapper>
  );
}
