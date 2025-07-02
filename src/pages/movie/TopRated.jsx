import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Movies from '../../components/movies/Movies'
import { useEffect, useState } from "react";
import axios from "axios";

function TopRatedMovie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchTopRatedMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

      const response = await axios(URL);
      setMovies(response.data.results);
    }

    fetchTopRatedMovie();
  }, []);
  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
}

export default TopRatedMovie;
