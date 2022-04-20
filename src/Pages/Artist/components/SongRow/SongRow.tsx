import format from 'date-fns/format';

import { ISong } from "../../../../api";
import { styled } from "../../../../theme";
import { Anchor } from "../../../../common/components/Anchor";

const StyledRow = styled('div', {
  padding: '$lg',
  border: '1px solid $grey100',
  borderRadius: '$sm',
  display: 'flex',
  fontSize: '14px',
  fontWeight: 700,
  flexDirection: 'column',

  '@bp2': {
    fontSize: '16px',
    alignItems: 'center',
    flexDirection: 'row'
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
    marginTop: '$xlg',

    'a': {
      flexGrow: 1,
    },

    '@bp2': {
      marginLeft: 'auto',
    },

    'a:first-child': {
      marginRight: '$sm',

      // '@bp2': {
      //   marginRight: '$sm',
      // }
    }
  }
});

export function SongRow({ song }: { song: ISong }) {

  return (
    <StyledRow>

      <div>
        <p className="song-genre">Genre: <span>{song.genre}</span></p>
        <p className="song-name">
          {song.name} - {song.album}
          <span className="song-duration">({format(song.duration, 'm:ss')})</span>
        </p>
      </div>

      <div className="song-actions">
        <Anchor to={''} level="secondary" label="Add to playlist"/>
        <Anchor to={`https://open.spotify.com/track/${song.spotifyId}`} external={true} label="Listen on spotify"/>
      </div>
    </StyledRow>
  )
}
