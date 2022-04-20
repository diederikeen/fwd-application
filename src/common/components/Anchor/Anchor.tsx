import { styled } from "../../../theme";

interface Props {
  to: string;
  label: string;
  external?: boolean;
  level?: 'primary' | 'secondary'
}

const StyledAnchor = styled('a', {
  padding: '$md $lg',
  borderRadius: '$sm',
  textDecoration: 'none',
  transition: 'all 175ms ease',

  variants: {
    level: {
      primary: {
        backgroundColor: '$primary',
        color: '$white',

        '&:hover': {
          color: '$grey800',
          backgroundColor: '$white',
          boxShadow: '0 12px 16px rgb(0 0 0 / 20%)',
        }
      },
      secondary: {
        color: '$primary',
        backgroundColor: '$white',

        '&:hover': {
          backgroundColor: '$grey100',
          color: '$white'
        }
      }
    }
  }
});

export function Anchor({ to, label, external, level = 'primary' } : Props) {
  return (
    <StyledAnchor level={level} href={to} target={external ? '_blank' : undefined}>{label}</StyledAnchor>
  )
}
