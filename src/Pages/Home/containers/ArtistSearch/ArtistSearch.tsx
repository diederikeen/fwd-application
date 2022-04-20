import { useState } from "react";
import { debounce } from "throttle-debounce";

import { useGetAllArtistsQuery } from "../../../../api";
import { ArtistRow } from "../../components";
import { styled } from "../../../../theme";


const StyledInput = styled('input', {
  height: '36px',
  borderRadius: '$sm',
  border: '1px solid $primary',
  padding: '0 $md',
  fontWeight: '600',
  minWidth: '250px',

  '&::placeholder': {
    color: '$grey100',
    transition: 'color 125ms ease',
  },

  '&:focus': {
    outline: 'none',
  }
})

const StyledSection = styled('section', {
  marginTop: '$xlg',
})

const StyledLabel = styled('label', {
  display: 'block',
  textTransform: 'uppercase',
  fontSize: '12px',
  fontWeight: 700,
  marginBottom: '$sm',
});

const copy = {
  loadingMessage: 'Loading all artists...',
  inputLabel: 'Search for your artists'
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
      <StyledLabel>{copy.inputLabel}</StyledLabel>
      <StyledInput
        name="artist_search"
        placeholder="Example: Weird Al"
        onChange={(event) =>  debounceSearch(event)}
      />


      <StyledSection>
        {isLoading  ? <p>{copy.loadingMessage}</p> : (
          data?.map((artist) => <ArtistRow key={artist.name} artist={artist}/>)
        )}
      </StyledSection>
    </>
  )
}
