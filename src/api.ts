import axios from "axios";
var API_URL = process.env.NEXT_PUBLIC_API_URL as string;

interface Response {
  Search: Movie[];
}

type Movie = {
  Title: string;
  Poster: string;
  imdbID: string;
};

export const reqGetMovies = async () => {
  const response = await axios.get<Response>(API_URL);
  return response.data;
};
