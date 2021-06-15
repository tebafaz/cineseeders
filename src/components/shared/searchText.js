const SearchText = ({value, onChange}) => {
    return (
        <div className="row">
            <div className="offset-md-1 col-md-2 col-lg-1">
              <label className="h4" htmlFor="search">Search</label>
            </div>
            <div className="col-md-9">
              <input 
              value={value}
              className="form-control disable-outline" 
              type="text" 
              id="search"
              onChange={(e) => onChange(e.target.value)}
              ></input>
            </div>
          </div>
    );
}
 
export default SearchText;