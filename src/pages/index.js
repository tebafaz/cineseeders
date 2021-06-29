import axios from 'axios'
import {useState} from 'react'
import Search from '../components/search'
import {getMovies} from '../services/ytsService'
import PageListingNav from '../components/shared/pageListingNav'
import Movies from '../components/movies'
import Loading from '../components/shared/loading'


export const getServerSideProps = async () => {
  const movies = await axios.get('https://yts.mx/api/v2/list_movies.json')
  return {
    props: {
      currentPage: movies.data.data.page_number,
      pages: Math.ceil(movies.data.data.movie_count / 20),
      movies: movies.data.data.movies
    }
  }
}

const Index = (props) => {
  
  const [movies, setMovies] = useState(props.movies)
  const [search, setSearch] = useState('')
  const [quality, setQuality] = useState(" ")
  const [genre, setGenre] = useState(" ")
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(props.currentPage)
  const [lastPage, setLastPage] = useState(props.pages)

  const onSearchChange = (search) => {
    setSearch(search)
    loadMovies(search, quality, genre, 1)
  }

  const onQualityChange = (quality) => {
    setQuality(quality)
    loadMovies(search, quality, genre, 1)
  }

  const onGenreChange = (genre) => {
    setGenre(genre)
    loadMovies(search, quality, genre, 1)
  }

  const loadMovies = async (query_term, quality, genre, page) => {
    setLoading(true)
    const res = await getMovies({query_term, genre, quality, page})
    setLoading(false)
    if (res && res.data) {
      setLastPage(Math.ceil(res.data.data.movie_count / 20))
      setCurrentPage(res.data.data.page_number)
      setMovies(res.data.data.movies)
    }
  }

  const changeToPrev = (page) => {
    if (currentPage > 1){
      setCurrentPage(currentPage - 1)
      loadMovies(search, quality, genre, page)
    }
  }

  const changeToNext = (page) => {
    if (currentPage < lastPage){
      setCurrentPage(currentPage + 1)
      loadMovies(search, quality, genre, page)
    }
  }

  const changeToFirst = (page) => {
    if (currentPage > 1){
      setCurrentPage(1)
      loadMovies(search, quality, genre, page)
    }
  }

  const changeToLast = (page) => {
    if (currentPage < lastPage){
      setCurrentPage(lastPage)
      loadMovies(search, quality, genre, page)
    }
  }

  return (
    <div>
      <Search onSearchChange={onSearchChange}
        onQualityChange={onQualityChange}
        onGenreChange={onGenreChange}
        search={search}
        genre={genre}
        quality={quality}
      
      />
      <div className="container"><br />
        <div className="row">
          
          {loading ? <Loading /> : 
            <>
              <PageListingNav currentPage={currentPage} lastPage={lastPage} prev={changeToPrev} next={changeToNext} first={changeToFirst} last={changeToLast} />
              <Movies movies={movies}/>
            </>
          }
        </div>
        {loading ? '' : <PageListingNav currentPage={currentPage} lastPage={lastPage} prev={changeToPrev} next={changeToNext} first={changeToFirst} last={changeToLast} />}
      </div>
    </div>
  );
}

export default Index;