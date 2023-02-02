import React from 'react';
import '../style/stylePage/Home.css';


function Home() {
  return (
    <div className="Text-center-template">
        <img className="logoHome" src="img/logo-doagency-bianco.png" />
        <h1>Homepage</h1>
        <p>
          Web app di esempio di <a href="https://doagency.it" target="_blank">DoAgency</a> a scopo meramente didattico.
        </p>
    </div>
  );
}

export default Home;