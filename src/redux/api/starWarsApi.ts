import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ApiResponse} from '../../types/ApiResponse';
import {Person} from '../../types/Person';
import {Planet} from '../../types/Planet';
import {Species} from '../../types/Species';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
  endpoints: builder => ({
    getPageOfCharacters: builder.query<ApiResponse<Person[]>, number>({
      query: page => ({url: 'people/', params: {page}}),
    }),
    getCharacterById: builder.query<ApiResponse<Person>, string>({
      query: id => `people/${id}`,
    }),
    getCharacterByName: builder.query<ApiResponse<Person[]>, string>({
      query: name => ({url: '/people', params: {search: name}}),
    }),
    getPlanetById: builder.query<ApiResponse<Planet>, string>({
      query: id => `planet/${id}`,
    }),
    getSpeciesById: builder.query<ApiResponse<Species>, string>({
      query: id => `species/${id}`,
    }),
  }),
});

export const {
  useGetPageOfCharactersQuery,
  useGetCharacterByIdQuery,
  useGetPlanetByIdQuery,
  useGetSpeciesByIdQuery,
} = starWarsApi;
