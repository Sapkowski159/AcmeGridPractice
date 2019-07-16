import React from "react";
import styled from "styled-components";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Layout = styled.div`
      display: grid;
      grid-gap: 50px 50px;
      grid-template-columns: auto auto auto;
      background-color: #2196f3;
      padding: 10px;
    `;

    const Item = styled.div`
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(0, 0, 0, 0.8);
      padding: 20px;
      font-size: 30px;
      text-align: center;
    `;
    return (
      <Layout>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Layout>
    );
  }
}

export default Layout;
