import QUALITIES from '../../constants/qualities'


const QualityRadio = ({value ,onChange}) => {
  return (
        <>
          <div className="offset-md-2 my-auto col-md-1">
            <label className="h5" htmlFor="quality">Quality</label>
          </div>
          <div className="col-md-4">
            <ul className="custom-radio-button-ul">
              {QUALITIES.map((quality) => (
                <li key={quality.value} className="custom-radio-button-li">
                  <input 
                    className="custom-radio" 
                    type="radio" 
                    value={quality.value} 
                    name="radio" 
                    id={quality.value}
                    onChange={(e) => onChange(e.target.value)}
                    checked={quality.value === value}
                  />
                  <label 
                    className="custom-label h5" 
                    htmlFor={quality.value} >
                      {quality.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </>
  );
}
 
export default QualityRadio;