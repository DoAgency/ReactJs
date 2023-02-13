import React from "react";
import ListaDipendentiClass from '../components/ListaDipendentiClass';

let JsonLocale = require('../jsonFakeApi/list.json');  //Importo da json locale


export type Props = {
  };


class ClassComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {

    return (
      <div className="page-template">
        <h1 className="titolo-page">Class Component</h1>
        <ListaDipendentiClass listaDipendenti={JsonLocale}/>
        <></>
      </div>
    )

  }

}

export default ClassComponent;