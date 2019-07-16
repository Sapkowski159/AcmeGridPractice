import React from "react";
import styled from "styled-components";

class SectionB extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const SectionB = styled.section`
      padding: 2em 1em 1em;
      @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 1fr repeat(2, minmax(auto, 25em)) 1fr;
      }
    `;

    const ContentWrap = styled.div``;
    const ContentTitle = styled.h2``;

    const Card = styled.div``;
    const CardContent = styled.div`
      padding: 1.5em;
      @media (min-width: 700px) {
        grid-column: 2/4;
      }
    `;
    const CardTitle = styled.h1`
      margin: 0;
      padding: 1em 0;
    `;
    const Image = styled.img`
      display: block;
      width: 100%;
      height: auto;
    `;
    const UList = styled.ul`
      list-style: none;
      margin: 0;
      padding: 0;
      grid-column: 2/4;
      @media (min-width: 700px) {
        display: flex;
        justify-content: space-around;
      }
    `;
    const Item = styled.li`
      margin-bottom: 1em;
      background: white;
      color: #333;

      @media (min-width: 700px) {
        width: 31%;
      }
    `;
    return (
      <SectionB id="section-b">
        <UList>
          <Item>
            <Card>
              <Image
                src="https://www.pexels.com/photo/169573/download/?search_query=programming&tracking_id=md75dytb7he"
                alt=""
              />
              <CardContent>
                <CardTitle>Web Development</CardTitle>
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </CardContent>
            </Card>
          </Item>
          <Item>
            <Card>
              <Image
                src="https://www.pexels.com/photo/261628/download/?search_query=mobile&tracking_id=md75dytb7he"
                alt=""
              />
              <CardContent>
                <CardTitle>Mobile Applications</CardTitle>
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </CardContent>
            </Card>
          </Item>
          <Item>
            <Card>
              <Image
                src="https://www.pexels.com/photo/205316/download/?search_query=tech%2520marketing&tracking_id=md75dytb7he"
                alt=""
              />
              <CardContent>
                <CardTitle>Tech Marketing</CardTitle>
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </CardContent>
            </Card>
          </Item>
        </UList>
      </SectionB>
    );
  }
}

export default SectionB;
