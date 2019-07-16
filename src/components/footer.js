import React from "react";
import styled from "styled-components";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Footer = styled.footer`
      padding: 2em;
      background: #000;
      color: #fff;
      text-align: center;
    `;

    const ContentWrap = styled.div``;
    const ContentTitle = styled.h2``;

    const Box = styled.div`
      @media (min-width: 700px) {
        grid-column: span 2;
      }
    `;
    const Link = styled.a`
      color: #2690d4;
      text-decoration: none;
    `;

    return (
      <Footer id="main-footer">
        <div>Acme Web Soulutions</div>
        <div>
          Project by Andrasi <Link href="#">AndreMadarSolutions</Link>
        </div>
      </Footer>
    );
  }
}

export default Footer;
