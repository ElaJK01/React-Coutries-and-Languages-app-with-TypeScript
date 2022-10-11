import React from "react";
import styled from "styled-components";

const ToPrint = styled.h1`
  display: none;

  @media print {
    display: block;
    text-align: center;
  }
`;

type toPrintTitleProps = {
  title: string;
};

const ToPrintTitle: React.FC<toPrintTitleProps> = ({
  title,
}: toPrintTitleProps) => <ToPrint>{title}</ToPrint>;

export default ToPrintTitle;
