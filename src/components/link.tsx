import React from "react";
import styled from "styled-components";

const LinkRoot = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.footerLinkColor};
  :hover {
    color: ${({ theme }) => theme.footerLinkColorHover};
  }
`;

type linkProps = {
  href: string;
  name: string;
};

const Link: React.FC<linkProps> = ({ href, name }: linkProps) => (
  <LinkRoot href={href}>{name}</LinkRoot>
);

export default Link;
