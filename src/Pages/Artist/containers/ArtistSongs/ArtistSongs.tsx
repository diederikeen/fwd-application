import { useGetAllSongsByArtistQuery } from "../../../../api";
import { SongRow } from "../../components/SongRow";
import { Container } from "../../../../common/components/Container";
import { styled } from "../../../../theme";

const Wrapper = styled('section', {
  padding: '$xlg 0'
});

const copy = {
  loadingMessage: 'Loading songs from',
  errorMessage: 'Sorry, we couldn\'t find songs from this artist.'
}

export function ArtistSongs({ name }: { name: string }) {
  const { data, isLoading } = useGetAllSongsByArtistQuery(name);

  if (isLoading) {
    return <p> {copy.loadingMessage} {name}</p>
  }

  if (!Boolean(data?.length)) {
    return <p>{copy.errorMessage}</p>
  }

  return (
    <Wrapper>
      <Container>
        {data?.length
            ? data.map((song) => <SongRow key={song.name} song={song}/>)
            : <div>No data available</div>
        }
      </Container>
    </Wrapper>
  )
}
