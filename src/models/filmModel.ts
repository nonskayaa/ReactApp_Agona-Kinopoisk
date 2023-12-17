export interface Film {
  id: number;
  image: string;
  name: string;
  year: number;
  rate: number;
  description: string;
  genre: string[];
  watched: boolean;
}
