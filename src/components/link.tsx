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

const Link: React.FC<LinkProps> = (props) => {
  const { href, name } = props;
  return <LinkRoot href={href}>{name}</LinkRoot>;
};

export default Link;
