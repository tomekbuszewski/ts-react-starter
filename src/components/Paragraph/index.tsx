import * as React from "react";

interface Props {
  children: React.ReactNode;
}

class Paragraph extends React.Component<Props> {
  public render() {
    return <p>{this.props.children}</p>;
  }
}

export default Paragraph;
