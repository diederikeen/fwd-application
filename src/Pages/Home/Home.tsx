import { styled } from "../../theme";
import { ArtistSearch } from "./containers/ArtistSearch";
import { Title } from "../../common/components/Title";
import { Subtitle } from "../../common/components/Subtitle";

const copy = {
  title: 'FWD Music',
  subtitle: 'Find your music now!'
}

const Section = styled('section' , {
  marginTop: '64px',
})

export function Home() {
  return (
    <>
      <Title>{copy.title}</Title>
      <Subtitle>{copy.subtitle}</Subtitle>

      <Section>
        <ArtistSearch/>
      </Section>
    </>
  )
}
