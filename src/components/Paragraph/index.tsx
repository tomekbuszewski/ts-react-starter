import * as React from "react";
import withTestDecorator, { TestDecoratorProps } from "@decorators/TestDecorator";

interface Props extends TestDecoratorProps {
  children: React.ReactNode;
}

class Paragraph extends React.Component<Props> {
  public componentDidMount() {
    this.props.sayHello();
  }

  public render() {
    return <p>{this.props.children}</p>;
  }
}

export default withTestDecorator(Paragraph);
