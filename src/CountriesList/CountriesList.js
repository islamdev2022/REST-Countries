import { Link } from "react-router-dom";
import "./CountriesList.css"
import "../index.css"
const CountriesList = ({countries}) => {
    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    return ( 
        <div className="Country-container">
            
            {
            countries.map((country)=>{
               const {population,region,capital,flags,name}= country
             return <div className="country-prev" key={name.common}>
             <Link className="the-link" to={`/country/${name.common}`}>
                
                  { <img className="item item-img" src={flags.svg} alt={flags.alt} width ="256"/> }
                 <div className="items">
                   <h2 className="name item">{name.common}</h2>
                   <p className="item">Population : <span>{formatNumberWithCommas(population)}</span></p>
                   <p className="item">Region :  <span>{region}</span></p>
                   <p className="item">Capital : <span>{capital}</span></p>
                 </div>
             </Link>
             </div>
          })
            }
        </div>
     );
}
 
export default CountriesList;