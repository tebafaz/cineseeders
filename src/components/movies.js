import Link from "next/link";


const Movies = ({movies}) => {
  if (movies === undefined) {
    return (
    <h2 className="text-center">
      Nothing found :(
    </h2>)
  }
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 text-center mt-4 mb-4">
          <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
              <img width="230" height="345" className="image-hov" src={movie.medium_cover_image} alt={movie.title} />
              <p className="transition h6">
                {movie.title}<br/>
                {movie.year} - {movie.language}
              </p>
          </Link>
        </div>
      ))}
    </>
  );
}
 
export default Movies