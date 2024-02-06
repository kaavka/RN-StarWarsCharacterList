import {Person} from './Person';

export type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
};
