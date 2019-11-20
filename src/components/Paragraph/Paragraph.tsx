import * as React from "react";

interface Props {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: Props) => <p>{children}</p>;
