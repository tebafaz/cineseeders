import GENRES from "../../constants/genres";

const GenreSelect = ({value, onChange}) => {
  return (
    <>
      <div className="col-md-1 my-auto">
        <label className="h5" htmlFor="genre">Genre</label>
      </div>
      <div className="col-md-2 my-auto">
        <select className="form-select my-auto disable-outline" value={value} onChange={(e) => onChange(e.target.value)}>
          {GENRES.map((genre) => (
            <option key={genre.value} value={genre.value}>{genre.label}</option>
          ))}
        </select>
      </div>
    </>
  );
}
 
export default GenreSelect;