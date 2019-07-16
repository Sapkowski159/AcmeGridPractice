import React from "react";
import styled from "styled-components";

class SectionC extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const SectionC = styled.section`
      background: #fff;
      color: #333;
      padding: 2em;
      @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
      }
    `;

    const ContentWrap = styled.div`
      @media (min-width: 700px) {
        grid-column: 2/4;
      }
    `;
    const ContentTitle = styled.h2`
      margin: 0;
      padding: 1em 0;
    `;
    return (
      <SectionC id="section-c">
        <ContentWrap>
          <ContentTitle>We handle all of your digital needs</ContentTitle>
          <p>
            {" "}
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>
        </ContentWrap>
      </SectionC>
    );
  }
}

export default SectionC;
