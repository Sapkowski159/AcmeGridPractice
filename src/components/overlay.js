import React from "react";
import styled from "styled-components";

import imgUrl from "../images/artificial-intelligence-blur-close-up-546819.jpg";
class Overlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Overlay = styled.div``;
    const ContentWrap = styled.div`
      padding: 0 1.5em;

      @media (min-width: 700px) {
        grid-column: 2/4;
      }
    `;

    const BgImage = styled.div`
      position: absolute;
      background: #333 url(${imgUrl});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 450px;
      z-index: -1;
      opacity: 0.4;
    `;

    const ReadMoreBtn = styled.a`
      background: 333;
      color: white;
      text-decoration: none;
      padding: 1em 2em;
      border: 1px solid #666;
      display: inline-block;
      margin: 0.5em 0;
      &:hover {
        background: #eaeaea;
        color: #333;
      }
    `;
    const Header = styled.header`
      min-height: 460px;
      color: #fff;
      text-align: center;
      @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
      }
    `;

    const OverlayHeading = styled.h1`
      padding-top: 100px;
      padding-bottom: 0;
    `;

    return (
      <Overlay>
        <Header id="showcase">
          <BgImage />
          <ContentWrap>
            <OverlayHeading>Welcome to Acme Web Solutions</OverlayHeading>
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <ReadMoreBtn href="#section-b">Read More</ReadMoreBtn>
          </ContentWrap>
        </Header>
      </Overlay>
    );
  }
}

export default Overlay;
