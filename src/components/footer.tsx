import React from "react";
import styled from "styled-components";
import { slice } from "ramda";
import FooterList from "./footerList";
import { footerList } from "../types";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  background: ${({ theme }) => theme.navbarFooterBackground};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-top: auto;
  overflow: hidden;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
  }
`;

const Footer: React.FC<{
  linksList: footerList[];
}> = (props) => {
  const { linksList } = props;

  const firstFooterColumn = slice(0, 3, linksList);
  const secondFooterColumn = slice(3, Infinity, linksList);

  return (
    <FooterDiv>
      <FooterList list={firstFooterColumn} />
      <FooterList list={secondFooterColumn} />
    </FooterDiv>
  );
};

export default Footer;
