
const PageListingNav = ({currentPage, lastPage, prev, next, first, last}) => {
    if(lastPage == 0){
        return ''
    }
    const prevClass = (currentPage > 1 ? "enabled-arrow" : "disabled-arrow")
    const nextClass = (currentPage < lastPage ? "enabled-arrow" : "disabled-arrow")
    return (
        <div className="text-center">
            <div className="page-listing">
                <svg className={`arrow ${prevClass}`} width="30" height="62" viewBox="0 0 70 70" onClick={() => first(1)}>
                    <path
                        d="M 0.17016802,37.360275 17.038219,55.662 33.90779,73.990786 V 61.789027 L 28.302365,55.662 11.433494,37.360275 28.302365,19.029132 33.90779,12.928967 V 0.70164322 L 17.038219,19.029132 0.17016802,37.360275" />
                    <path
                        d="M 17.924899,37.360275 34.768353,55.662 51.637572,73.990786 V 0.70164322 L 34.768353,19.029132 17.924899,37.360275" />
                </svg>
                <svg className={`arrow ${prevClass}`} width="30" height="62" viewBox="0 0 70 70" onClick={() => prev(currentPage - 1)}>
                    <path 
                        d="M 9.5844739,37.360275 26.452525,55.662 43.322096,73.990786 V 61.789027 L 37.716671,55.662 20.8478,37.360275 37.716671,19.029132 43.322096,12.928967 V 0.70164322 L 26.452525,19.029132 9.5844739,37.360275" />
                </svg>
                <div className="my-auto pages">
                    <h3>{currentPage}/{lastPage}</h3>
                </div>
                <svg className={`arrow ${nextClass}`} width="30" height="62" viewBox="0 0 70 70" onClick={() => next(currentPage + 1)}>
                <path
                        d="M 43.322096,37.360275 26.454045,55.662 9.5844739,73.990786 V 61.789027 L 15.189899,55.662 32.05877,37.360275 15.189899,19.029132 9.5844739,12.928967 V 0.70164322 L 26.454045,19.029132 43.322096,37.360275" />
                </svg>
                    
                    
                <svg className={`arrow ${nextClass}`} width="30" height="62" viewBox="0 0 70 70" onClick={() => last(lastPage)}>
                    <path
                        d="M 51.637572,37.360275 34.769521,55.662 17.89995,73.990786 V 61.789027 L 23.505375,55.662 40.374246,37.360275 23.505375,19.029132 17.89995,12.928967 V 0.70164322 L 34.769521,19.029132 51.637572,37.360275" />
                    <path
                        d="M 33.882841,37.360275 17.039387,55.662 0.17016802,73.990786 V 0.70164322 L 17.039387,19.029132 33.882841,37.360275" />
                </svg>
            </div>
        </div>
        
    );
}
 
export default PageListingNav;