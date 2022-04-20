import { useState } from "react";
import { debounce } from "throttle-debounce";

import { useGetAllArtistsQuery } from "../../../../api";

import { ArtistRow } from "../../components";
import { styled } from "../../../../theme";
import { Title } from "../../../../common/components/Title";
import { Subtitle } from "../../../../common/components/Subtitle";
import { Header } from "../../../../common/components/Header";
import { Container } from "../../../../common/components/Container";


const StyledInput = styled('input', {
  height: '44px',
  borderRadius: '$sm',
  border: '1px solid $primary',
  padding: '0 $lg',
  fontWeight: '600',
  width: '100%',
  marginTop: '$lg',

  '@bp2': {
    width: '50%',
    marginTop: '$xlg',
    height: '54px',
  },

  '&::placeholder': {
    color: '$grey100',
    transition: 'color 125ms ease',
  },

  '&:focus': {
    outline: 'none',
  }
})

const StyledSection = styled('section', {
  padding: '$xlg 0',
  marginTop: '$xlg',
})

const StyledLabel = styled('p', {
  marginBottom: '$md',
  fontWeight: 700,
})


const copy = {
  title: 'FWD Music',
  subtitle: 'Find your music now!',
  loadingMessage: 'Loading all artists...',
  resultsLabel: "Results"
}

export function ArtistSearch() {
  const [query, setQuery] = useState<string>('');
  const {data, isLoading} = useGetAllArtistsQuery(query);

  const debounceSearch = debounce(500, true, (event) => {
    const { currentTarget } = event;
    setQuery(decodeURIComponent(currentTarget.value));
  })

  return (
    <>
      <Header>
        <Title>{copy.title}</Title>
        <Subtitle>{copy.subtitle}</Subtitle>

        <StyledInput
          name="artist_search"
          placeholder="Example: Weird Al"
          onChange={(event) =>  debounceSearch(event)}
        />
      </Header>

      <Container>
        <StyledSection>
          <StyledLabel>{copy.resultsLabel}</StyledLabel>
          {isLoading  ? <p>{copy.loadingMessage}</p> : (
            data?.map((artist) => <ArtistRow key={artist.name} artist={artist}/>)
          )}
        </StyledSection>
      </Container>
    </>
  )
}
