import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Movies from '../../components/movies/Movies'
import { useEffect, useState } from "react";
import axios from "axios";
import ENDPOINTS from "../../utils/constans/endpoint";

function PopularMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      // const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

      // const response = await axios(URL);
      const response = await axios(ENDPOINTS.POPULAR);
      setMovies(response.data.results);
    }

    fetchPopularMovie();
  }, []);
  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
}

export default PopularMovie;
