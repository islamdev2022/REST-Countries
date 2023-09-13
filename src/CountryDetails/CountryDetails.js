import { Link } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "../UseFetch";
import Loader from "../Loader/Loader";
import "./CountryDetails.css"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
const CountryDetails = () => {
    
    const {name}=useParams()
    console.log(name)
    const {data:country,isPending,error}=UseFetch('https://restcountries.com/v3.1/name/' +name)
    const history= useHistory()
    const Back =()=>{
        history.push('/')
    }
    
    

    return ( 
       <div >
         {isPending && !error &&  <Loader></Loader> }
       {error && <p>this is {error}</p>}
        {country && 
        country.map((countryData)=>{
            const {cioc,population,region,capital,flags,name,tld,currencies,languages,subregion,borders}=countryData
            console.log('countryData:', countryData);
            function currencyN(){
                for (let cur in currencies){
                    return currencies[cur].name
                }         
            }
           function NativeName(){
              for (let language in name.nativeName) {
                return name.nativeName[language].common; 
              }}
            function language(){
                for (let lng in languages){
                    return languages[lng]
                }
            }
            function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
        
        return (
            <>
            <button className="back" onClick={Back}><span><i class="fa-solid fa-arrow-left-long"></i> </span> Back</button>
            <div className="Country-details" key={name.common}>
            <img className="det-img" src={flags.svg} alt={flags.alt} width ="400" align="left" />
            <div className="details">
                <h2>{name.common}</h2>
                <table border="0">
                    <tr>
                        <td>Native Name : <span>{NativeName()}</span></td>
                        <td>Top Level Domain : <span>{tld.join(', ')}</span></td>
                    </tr>
                    <tr>
                        <td>Population : <span>{formatNumberWithCommas(population)}</span></td>
                        <td>Currencies : <span >{currencyN()}</span></td>
                    </tr>
                    <tr>
                       <td>Region : <span>{region}</span></td>
                        <td>Languages : <span>{language()}</span></td>
                    </tr>
                    <tr>
                        <td>Sub Region : <span>{subregion}</span></td>
                    </tr>
                     <tr>
                        <td>Capital : {capital}</td>
                        </tr> 
                        <tr>
                        <td>Border Countries : </td>
                        <td>
                            {borders && borders.length > 0 ? (
                                borders.map((border) => (
                                    <Link className="borders-link" key={border} to={`/country/${cioc}`}>
                                        <button className="borders">{border}</button>
                                    </Link>
                                ))
                                ) : (
                                    <p>{name.common} has no borders with other countries .</p>
                                    )}
                        </td>
                    </tr>
                </table>
            </div>
         </div>
         </>)})
    }
       </div>
     );
}
 
export default CountryDetails;

