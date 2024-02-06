import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
import {Person} from '../../types/Person';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
  endpoints: builder => ({
    getAllCharacters: builder.query<Person[], void>({
      query: () => 'people/',
    }),
    getCharacterById: builder.query<Person, string>({
      query: id => `people/${id}`,
    }),
  }),
});
