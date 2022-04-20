import format from 'date-fns/format';

import { ISong } from "../../../../api";
import { styled } from "../../../../theme";
import { Anchor } from "../../../../common/components/Anchor";

const StyledRow = styled('div', {
  padding: '$lg',
  border: '1px solid $grey100',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  fontWeight: 700,

  '@bp2': {
    fontSize: '16px',
  },

  '&:not(:last-child)': {
    marginBottom: '$lg',
  },

  '.song-genre': {
    fontSize: '10px',
    textTransform: 'uppercase',
    fontWeight: 800,
    opacity: .8,
    marginBottom: '$sm',
    color: '$primary',
  },

  '.song-duration': {
    fontSize: '12px',
    marginLeft: '$md',
  },

  '.song-actions': {
    display: 'flex',
    marginLeft: 'auto',

    'a:first-child': {
      marginRight: '$sm',
    }
  }
});

export function SongRow({ song }: { song: ISong }) {

  return (
    <StyledRow>

      <div>
        <p className="song-genre">Genre: <span>{song.genre}</span></p>
        <p className="song-name">
          Title: {song.name}
          <span className="song-duration">({format(song.duration, 'm:ss')})</span>
        </p>
      </div>

      <div className="song-actions">
        <Anchor to={song.spotifyId} level="secondary" label="Add to playlist"/>
        <Anchor to={song.spotifyId} external={true} label="Listen on spotify"/>
      </div>
    </StyledRow>
  )
}
