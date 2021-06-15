import axios from 'axios'
import {axiosGetCancellable} from '../helpers/axios.helper'


const axiosConfig = {
    baseURL: 'https://yts.mx/api/v2/'
}

function getMovies(filmFilter) {
    let query = '?' + Object.keys(filmFilter).map((key) => {
        if (filmFilter[key] != '' && filmFilter[key] != ' ') {
            return key+'='+filmFilter[key]+'&'
        }
        return
    }).join('')
    query = query.slice(0, -1)
    return axiosGetCancellable('/api/search' + query)
}

function getMovieDetails(movieId) {
    return axios.get('/api/movie_details?movie_id=' + movieId)
}

export {getMovies, getMovieDetails}