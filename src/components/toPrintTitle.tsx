import React from "react";
import styled from "styled-components";

const ToPrint = styled.h1`
  display: none;

  @media print {
    display: block;
    text-align: center;
  }
`;

const ToPrintTitle: React.FC<{
  title: string;
}> = (props) => <ToPrint>{props.title}</ToPrint>;

export default ToPrintTitle;
