import React from "react";
import styled from "styled-components";

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;

    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
    `;

    return <Title>{this.props.content}</Title>;
  }
}

export default Title;
