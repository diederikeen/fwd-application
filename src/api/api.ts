import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:3004';

export interface ISong {
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

export interface IArtist {
  id: number;
  name: string;
}

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // Can't deep search property specific see issue
    // https://github.com/typicode/json-server/issues/1157
    // results also contain ID's that correspond with query.
    getAllArtists: builder.query<Array<ISong>, string>({
      query: (name) => name ? `/artists?q=${encodeURIComponent(name)}` : '/artists',
    }),

    getAllSongsByArtist: builder.query<Array<ISong>, IArtist['name']>({
      query: (name) => `/songs?artist=${encodeURIComponent(name)}`
    })
  }),
})

export const { useGetAllArtistsQuery, useGetAllSongsByArtistQuery } = appApi;
