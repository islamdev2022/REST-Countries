import CountriesList from "../CountriesList/CountriesList";
import UseFetch from "../UseFetch";
import Loader from "../Loader/Loader";

const ByRegion = ({ region }) => {
  const {
    data: countries,
    isPending,
    error,
  } = UseFetch("https://restcountries.com/v3.1/region/" + region);
  return (
    <>
      {error && <p>{error}</p>}
      {isPending && !error && <Loader></Loader>}
      {countries && <CountriesList countries={countries}></CountriesList>}
    </>
  );
};

export default ByRegion;
