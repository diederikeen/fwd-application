import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:3004';

interface ISong {
  id: number;
  name: string;
  year: number;
  shortname?: string;
  bpm: number;
  duration: number;
  genre: string;
  spotifyId: string;
  album: string;
}

interface IArtist {
  id: number;
  name: string;
}

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllArtists: builder.query<ISong, void>({
      query: () => '/artists',
    }),

    getAllSongsByArtist: builder.query<Array<ISong>, IArtist['name']>({
      query: (artist) => `/songs?${artist}`
    })
  }),
})

export const { useGetAllArtistsQuery, useGetAllSongsByArtistQuery } = appApi;
