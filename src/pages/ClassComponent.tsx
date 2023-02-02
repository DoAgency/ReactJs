import React from "react";


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
        <p>
          Lista dei dipendenti:
        </p>
        <></>
      </div>
    )

  }

}

export default ClassComponent;