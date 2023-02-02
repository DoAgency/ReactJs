import React, { useEffect, useState } from 'react';
import ListaDipendenti from '../components/ListaDipendenti';
import Axios from "axios"
import { Dipendente } from '../models/Dipendente';

let JsonFake = require('../jsonFakeApi/list.json');  //Importo da json locale


function FunctionComponent() {
  
  //Chiamata API:
  const [eventApi, setEventApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function chiamataApi () {
    setIsLoading(true);
    Axios.get('https://catfact.ninja/fact').then(response => response.data)
    .then((data) => {
        setEventApi(data[0])
        setIsLoading(false);
    });
  }


  useEffect ( () => {
    chiamataApi();
  }, [isLoading, eventApi]);


  //Uso JSON locale:
  var JsonFakeString = JSON.stringify(JsonFake, null, 2);

  return (
    <div className="page-template">
        <h1 className="titolo-page">Function Component</h1>
        <div><h2>JSON completo:</h2></div>
        <div>{JsonFakeString}</div>
        <br></br>
        <div><h2>Lista dipendenti:</h2></div>
        <div>Nome: {JsonFake[0].nome}</div>
        <br></br>
        <ListaDipendenti/>
        {eventApi}
        {isLoading}
    </div>
  );
}

export default FunctionComponent;