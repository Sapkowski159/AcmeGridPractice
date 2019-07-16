import React from "react";
import styled from "styled-components";

class SectionD extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const SectionD = styled.section`
      @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
      }
    `;

    const ContentWrap = styled.div`
      grid-column: 2/4;
    `;
    const ContentTitle = styled.h2`
      margin: 0;
      padding: 1em 0;
    `;
    const Box = styled.div`
      padding: 2em;
      color: #fff;

      &:first-child {
        background: #2690d4;
      }
      @media (min-width: 700px) {
        grid-column: span 2;
      }
    `;

    return (
      <SectionD id="section-d">
        <Box>
          <ContentTitle>Contact Us</ContentTitle>
          <p>
            {" "}
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>
          <p>contact@acmewebsolutions.test</p>
        </Box>
        <Box>
          <ContentTitle>About Our company</ContentTitle>
          <p>
            {" "}
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>
        </Box>
      </SectionD>
    );
  }
}

export default SectionD;
