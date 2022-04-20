import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";

import { Title } from "../../common/components/Title";
import { Subtitle } from "../../common/components/Subtitle";
import { Header } from "../../common/components/Header";

import { ArtistSongs } from "./containers/ArtistSongs";

const copy = {
  errorMessage: `Oops, it seems we can't find this artist.`,
  title: 'Music by',
  subtitle: 'Listen to your favourite music!'

}

export function Artist() {
  const { name } = useParams();
  const artistName = name ? name : skipToken.toString();

  return (
    <>
      <Header>
        <Title role="heading">{copy.title} {name}</Title>
        <Subtitle>{copy.subtitle}</Subtitle>
      </Header>

      <ArtistSongs name={artistName}/>
    </>
  )
}
