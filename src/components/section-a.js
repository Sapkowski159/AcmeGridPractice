import React from "react";
import styled from "styled-components";

class SectionA extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const SectionA = styled.section`
      background: #eaeaea;
      color: #333;
      padding-bottom: 2em;
      @media (min-width: 700px) {
        display: grid;
        grid-template-colums: 1fr repeat(2, minmax(auto, 25em)) 1fr;
      }
    `;

    const ContentWrap = styled.div`
      padding: 0 1.5em;
      @media (min-width: 700px) {
        grid-column: 2/4;
      }
    `;

    const ContentText = styled.p`
      @media (min-width: 700px) {
        columns: 2;
        column-gap: 2em;
        padding-top: 0;
      }
    `;

    const ContentTitle = styled.h2``;
    return (
      <SectionA id="section-a">
        <ContentWrap>
          <ContentTitle>Web & Application Development</ContentTitle>
          <ContentText>
            {" "}
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing orem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing{" "}
          </ContentText>
        </ContentWrap>
      </SectionA>
    );
  }
}

export default SectionA;
