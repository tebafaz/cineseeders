import axios from "axios";

const axiosConfig = {
    baseURL: 'https://yts.mx/api/v2/'
}

export default async (req, res) => {
    const filmFilter = {
        query_term: req.query.query_term,
        genre: req.query.genre,
        page: req.query.page,
        quality: req.query.quality
    }
    let query = '?' + Object.keys(filmFilter).map((key) => {
        if (filmFilter[key] !== undefined) {
            return key+'='+filmFilter[key]+'&'
        }
        return
    }).join('')
    query = query.slice(0, -1)
    const response = await axios.get('/list_movies.json' + query, axiosConfig)
    console.log(query)
    res.json(response.data)
}