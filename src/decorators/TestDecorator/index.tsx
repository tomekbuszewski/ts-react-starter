import * as React from "react";

export interface TestDecoratorProps {
  sayHello: () => void;
}

const withTestDecorator = <P extends TestDecoratorProps>(
  Component: React.ComponentType<P>,
) =>
  class TestDecorator extends React.Component {
    private sayHello = () => {
      console.log("Hello");
    };

    public render() {
      return <Component {...this.props as P} sayHello={this.sayHello} />;
    }
  };

export default withTestDecorator;
