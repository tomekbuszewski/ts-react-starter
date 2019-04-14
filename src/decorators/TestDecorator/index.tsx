import * as React from "react";

export interface TestDecoratorProps {
  sayHello: () => void;
}

const withTestDecorator = <P extends TestDecoratorProps>(
  Component: React.ComponentType<P>,
): React.FunctionComponent<any> => (props: TestDecoratorProps) => {
  const sayHello = () => {
    console.log("hello");
  };

  return <Component {...props as P} sayHello={sayHello} />;
};

export default withTestDecorator;
