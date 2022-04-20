import { styled } from '@stitches/react';

const StyledContainer = styled('div', {
  padding: '0px $lg',
  width: '100%',
  maxWidth: '1200px',
  margin: '0px auto',
});

export function Container({children}: { children: JSX.Element }) {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}
