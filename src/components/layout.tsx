import React from "react";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import { footerLinks } from "../constants";

const links = footerLinks;

const NavigationWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout: React.FC<{ children: React.ReactNode }> = (props) => (
  <>
    <Header />
    <NavigationWrapper>
      <Main>{props.children}</Main>
      <Footer linksList={links} />
    </NavigationWrapper>
  </>
);

export default Layout;
