import React from "react";
import styled from "styled-components";

const ToPrint = styled.h1`
  display: none;

  @media print {
    display: block;
    text-align: center;
  }
`;

type ToPrintTitleProps = {
  title: string;
};

const ToPrintTitle: React.FC<ToPrintTitleProps> = ({
  title,
}: ToPrintTitleProps) => <ToPrint>{title}</ToPrint>;

export default ToPrintTitle;
