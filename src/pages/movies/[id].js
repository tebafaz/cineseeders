import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router'
import axios from 'axios';


const Movie = ({movie, relateds, subtitles}) => {
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
                    <div>
                        {movie.torrents !== undefined ? movie.torrents.map((torrent) =>
                            <Link key={torrent.hash} href={torrent.url} className=' me-2'>
                                <button className="btn btn-outline-warning my-1">Download {torrent.quality} {torrent.type}</button>
                            </Link>
                        ) : 'Torrents are not available'}
                    </div>
                </div>
            </div>
            <hr />
            <span className='floralwhite-text'>{subtitles !== null ? 'Download subtitles:': ''}</span>
            <br />
                {subtitles !== null ? subtitles.map((sub) =>
                    <Link key={sub.SubHash} href={sub.ZipDownloadLink} className='me-2'>
                        <button className="btn btn-outline-warning my-1">{sub.LanguageName}.{sub.SubFormat}</button>
                    </Link>
                ) : 'Subs are not available'}
            <hr />
            <div className="row">
                {relateds !== undefined ? relateds.map((related) => 
                    <div key={related.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 text-center mt-4 mb-4">
                        <Link href="/movies/[id]" as={`/movies/${related.id}`}>
                                <img width="230" height="345" className="image-hov" src={related.medium_cover_image} alt={related.title} />
                                <p className="transition h6">
                                    {related.title}<br/>
                                    {related.year} - {related.language}
                                </p>
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
    const subtitles = await axios.get('https://rest.opensubtitles.org/search/imdbid-' + details.data.data.movie.imdb_code.replace('tt',''), { headers: { 'X-User-Agent': 'TemporaryUserAgent', 'User-Agent': 'TemporaryUserAgent' }, validateStatus: (httpStatus) => true })
    if (subtitles.status >= 400) {
        console.log("opensubtitles error:", subtitles.data, subtitles.status)
        return {
            props: {
                movie: details.data.data.movie,
                relateds: relateds.data.data.movies,
                subtitles: null
            }
        }
    }

    if (subtitles !== undefined) {
        subtitles.data = subtitles.data.filter((value) => value.SubFormat == 'srt')
        const subtitlesUniq = Array.from(
            new Map(subtitles.data.map(item => [item.LanguageName, item])).values()
        )
        return {
            props: {
                movie: details.data.data.movie,
                relateds: relateds.data.data.movies,
                subtitles: subtitlesUniq
            }
        }
    }
}

export default Movie;