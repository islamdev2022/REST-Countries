import React from 'react';
import { useParams } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ByRegion from './ByRegion'; // Import your component
import "./RegionRoute.css"
import "../index.css"
function RegionRoute() {
  const { name } = useParams(); // Access the :name parameter from the URL

  return (
    
    <Route path="/region/:name">
      <p className='region-name'>{name} :</p>
      <ByRegion region={name}></ByRegion>
    </Route>
  );
}

export default RegionRoute;
