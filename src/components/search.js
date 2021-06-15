import GenreSelect from "./shared/genreSelect";
import QualityRadio from "./shared/qualityRadio";
import SearchText from "./shared/searchText";

const Search = ({onSearchChange, onQualityChange, onGenreChange, search, genre, quality}) => {
    return (

            <div className="jumbotron floralwhite-text vertical-center">
                <div className="container">
                    <h4 className="text-center">Download the smallest size movies with best quality available in 720p, 1080p, 2160p and 3D via torrent</h4><br/>
                    <SearchText onChange={onSearchChange} value={search}/>
                    <br/>
                    <div className="row">
                        <QualityRadio onChange={onQualityChange} value={quality}/>
                        <GenreSelect onChange={onGenreChange} value={genre}/>
                    </div>
                </div>
            </div>
    );
}
 
export default Search;