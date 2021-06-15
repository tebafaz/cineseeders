import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router'
import axios from 'axios';


const Movie = ({movie, relateds}) => {
    const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  if(loading){
      return <div className="text-center loading-movie"><Image src="/loading.svg" width={200} height={200}/></div>
  }
  if(movie === undefined) {
      return <div className="text-center"><h1>Error occured, movie is not available</h1></div>
  }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center">
                    <img width="300" height="450" className="img-fluid" src={movie.large_cover_image} alt={movie.title}/>
                </div>
                <div className="col-md-8 floralwhite-text">
                    <p className="big-text">{movie.title}</p>
                    <hr/>
                    <p>{movie.year} - {movie.runtime/60 > 0 ? `${Math.floor(movie.runtime/60)} h`: ``} {movie.runtime % 60} m</p>
                    <p>Genre: {movie.genres.map((genre) => `${genre} `)}</p>
                    <p>Downloaded: {movie.download_count} times</p>
                    <p>Languge: {movie.language}</p>
                    <hr/>
                    <p>{movie.description_full}</p>
                    <div className="d-flex gap">
                        {movie.torrents !== undefined ? movie.torrents.map((torrent) =>
                            <Link key={torrent.hash} href={torrent.url}>
                                <button className="btn btn-outline-warning">Download {torrent.quality} {torrent.type}</button>
                            </Link>
                        ) : 'Torrents are not available'}
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                {relateds !== undefined ? relateds.map((related) => 
                    <div key={related.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 text-center mt-4 mb-4">
                        <Link href="/movies/[id]" as={`/movies/${related.id}`}>
                            <a>
                                <img width="230" height="345" className="image-hov" src={related.medium_cover_image} alt={related.title} />
                                <p className="transition h6">
                                    {related.title}<br/>
                                    {related.year} - {related.language}
                                </p>
                            </a>
                        </Link>
                    </div>
                ) : ''}
            </div>
        </div>
    );
}

export const getServerSideProps = async ({query}) => {
    const [details, relateds] = await Promise.all([
        axios.get('https://yts.mx/api/v2/movie_details.json?movie_id=' + query.id),
        axios.get('https://yts.mx/api/v2/movie_suggestions.json?movie_id=' + query.id)
    ])
    return {
        props: {
            movie: details.data.data.movie,
            relateds: relateds.data.data.movies
        }
    }
  }


export default Movie;