const MovieCard = ({ movie }) => {
  const poster =
    movie?.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "no-movie.png";

  return (
    <div className="bg-[#020424] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-crosshair">
      <img
        src={poster}
        alt={movie.Title}
        className="w-88.5% object-cover "
      />

      <div className="p-3">
        <h3 className="text-white font-semibold text-lg">
          {movie.Title}
        </h3>

        <p className="text-gray-400 text-sm">
          {movie.Year}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
