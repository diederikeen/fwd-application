import { styled } from "../../../theme";
import { Container } from "../Container";

const StyledHeader = styled('header', {
  height: '400px',
  backgroundColor: '$grey800',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '$xlg',
});

export function Header({children}: { children: JSX.Element | JSX.Element[] }) {
  return (
    <StyledHeader>
      <Container>
        {children}
      </Container>
    </StyledHeader>
  )
}
