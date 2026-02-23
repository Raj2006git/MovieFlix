import { useEffect, useState } from 'react'
import Search from './components/Search'
import { Spinner } from './components/Spinner';
import MovieCard from './components/MovieCard';

const API_BASE_URL = "https://www.omdbapi.com/";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const App = () => {

  const [searchTerm, setsearchTerm] = useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [movieList, setmovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchMovies = async (query = '') => {
    setisLoading(true);
    seterrorMessage('');

    try {
      const endpoint = `${API_BASE_URL}?s=${searchTerm || "Avengers"}&apikey=${API_KEY}`;


      const response = await fetch(endpoint);
      const data = await response.json();

      console.log(data);
      if (data.Response === "True") {
        setmovieList(data.Search);
        seterrorMessage('');
      } else {
        seterrorMessage(data.Error || "No movies found.");
        setmovieList([]);
        return;
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      seterrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <main>
      <div className='pattern'>

        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner" />
            <h1>Find <span className='text-gradient'>Movies </span>You'll Enjoy Without the Hassle</h1>
            <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
          </header>

          <section className='all-movies'>
            <h2>All Movies</h2>

            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className='text-red-500' > {errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie, index) => (
                  <MovieCard
                    key={`${movie.imdbID}-${index}`}
                    movie={movie}
                  />
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
