import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ApiResponse} from '../../types/ApiResponse';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
  endpoints: builder => ({
    getAllCharacters: builder.query<ApiResponse, void>({
      query: () => 'people/',
    }),
    getCharacterById: builder.query<ApiResponse, string>({
      query: id => `people/${id}`,
    }),
  }),
});

export const {useGetAllCharactersQuery, useGetCharacterByIdQuery} = starWarsApi;
