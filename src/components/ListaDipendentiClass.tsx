import React from "react";
import { Dipendente } from '../models/Dipendente';
import '../style/styleComponent/ListaDipendenti.css';


export type Props = {
    listaDipendenti?: Dipendente[];
};


class ListadipendentiClass extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {

    return (
        <div>
            <h2>Lista dipendenti nel class component child:</h2>
            {this.props.listaDipendenti?.map((item, index) => (
                <div key={index} className="scheda-dipendente">
                    <div>Nome: {item.nome}</div>
                    <div>Codice: {item.codice}</div>
                </div>
            )) || "La lista è undefined"}
        </div>

    )

  }

}

export default ListadipendentiClass;