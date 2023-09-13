import CountriesList from "./CountriesList/CountriesList";
import UseFetch from "./UseFetch";
import Loader from "./Loader/Loader";
const Home = () => {
  const {
    data: countries,
    isPending,
    error,
  } = UseFetch("https://restcountries.com/v3.1/all");
  return (
    <>
      {error && <p>{error}</p>}
      {isPending && !error && <Loader></Loader>}
      {countries && <CountriesList countries={countries}></CountriesList>}
    </>
  );
};

export default Home;
