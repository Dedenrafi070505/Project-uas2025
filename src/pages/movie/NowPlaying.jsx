import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Movies from '../../components/Movies/Movies'
import { useEffect, useState } from "react";
import axios from "axios";

function NowPlayingMovie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchNowPlayingMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

      const response = await axios(URL);
      setMovies(response.data.results);
    }

    fetchNowPlayingMovie();
  }, []);
  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
}

export default NowPlayingMovie;
