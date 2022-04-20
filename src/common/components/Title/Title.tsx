import { styled } from "../../../theme";

export const Title = styled('h1', {
  fontSize: '40px',
  lineHeight: '50px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: '$white',

  '@bp2': {
    fontSize: '70px',
    lineHeight: '80px',
  }
});
