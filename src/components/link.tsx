import React from "react";
import styled from "styled-components";

const LinkRoot = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.footerLinkColor};
  :hover {
    color: ${({ theme }) => theme.footerLinkColorHover};
  }
`;

type LinkProps = {
  href: string;
  name: string;
};

const Link: React.FC<LinkProps> = ({ href, name }: LinkProps) => (
  <LinkRoot href={href}>{name}</LinkRoot>
);

export default Link;
