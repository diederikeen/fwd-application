import { useGetAllSongsByArtistQuery } from "../../../../api";
import { SongRow } from "../../components/SongRow";

export function ArtistSongs({ name }: { name: string }) {
  const { data, isLoading } = useGetAllSongsByArtistQuery(name);

  if (isLoading) {
    return <p>Loading songs from {name}</p>
  }

  if (!Boolean(data?.length)) {
    return <p>Sorry, we couldn't find songs from this artist.</p>
  }

  return (
    <>

      {data?.length
          ? data.map((song) => <SongRow key={song.name} song={song}/>)
          : <div>No data</div>
      }
    </>
  )
}
