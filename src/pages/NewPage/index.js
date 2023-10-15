import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import Banner from '../../components/Banner';


const NewPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchData = JSON.parse(searchParams.get('searchResult'));

  const searchDeets = location.state.searchFormData;

  console.log(searchData, searchDeets,'New Page')

  return (
    <div>
      <h1>New Page</h1>
      <p>Received searchData from URL parameter:</p>
      <pre>{JSON.stringify(searchData, null, 2)}</pre>
      {/* <pre>{searchDeets}</pre> */}
    </div>
  );
}

export default NewPage;
