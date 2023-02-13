import React, { useEffect, useState } from 'react';
import ListaDipendentiFunc from '../components/ListaDipendentiFunc';
import Axios from "axios"
import { Dipendente } from '../models/Dipendente';

let JsonLocale = require('../jsonFakeApi/list.json');  //Importo da json locale


function FunctionComponent() {
  
  //Chiamata API:
  const [eventApi, setEventApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function chiamataApi () {
    setIsLoading(true);
    Axios.get('https://catfact.ninja/fact').then(response => response.data)
    .then((data) => {
        setEventApi(data.fact)
        setIsLoading(false);
    });
  }


  useEffect ( () => {
    if (eventApi == undefined) {
      chiamataApi();
    }
  }, [isLoading, eventApi]);


  return (
    <div className="page-template">
        <h1 className="titolo-page">Function Component</h1>
        <ListaDipendentiFunc listaDipendenti={JsonLocale}/>
        {eventApi}
        {isLoading}
    </div>
  );
}

export default FunctionComponent;