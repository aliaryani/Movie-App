import axios from "axios";
var API_URL = "https://www.omdbapi.com/?apikey=1ab6999d&s=all";

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
