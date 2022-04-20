import { Link } from "react-router-dom";

import { IArtist } from "../../../api";
import { styled } from "../../../theme";

const StyledRow = styled(Link, {
  padding: '$lg',
  borderRadius: '$sm',
  backgroundColor: '$white',
  display: 'block',
  fontWeight: '500',
  border: '1px solid $grey100',
  color: "$grey100",
  textDecoration: 'none',

  '&:not(:last-child)': {
    marginBottom: '$lg',
  },

  '&:hover': {
    color: '$white',
    background: '$primary',
    transition: 'all 125ms ease',
    borderColor: '$primary',
  }
});

export function ArtistRow({ artist }: { artist: IArtist }) {
  return <StyledRow to={`/artist:${artist.id}`}>{artist.name}</StyledRow>
}
