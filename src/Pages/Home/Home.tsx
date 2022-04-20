import { styled } from "../../theme";
import { ArtistSearch } from "./containers/ArtistSearch";


const Title = styled('h1', {
  fontSize: '40px',
  lineHeight: '50px',
  letterSpacing: '1px',
  textTransform: 'uppercase',

  '@bp2': {
    fontSize: '70px',
    lineHeight: '80px',
  }
});

const SubTitle = styled('p', {
  fontSize: '20px',
  lineHeight: '32px',
  opacity: '.8',

  '@bp2': {
    fontSize: '24px'
  }
});


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
      <SubTitle>{copy.subtitle}</SubTitle>

      <Section>
        <ArtistSearch/>
      </Section>
    </>
  )
}
