import styled from "styled-components";

export const Cards = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 400px;
  height: 480px;
  margin: 20px;
  border-radius: 10px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`; 
export const ImageCard = styled.img`
  border-radius: 10px;

  width: 100%;
  height: 250px;
`;

export const InnerCard = styled.section`
  margin: 0 6px 0 6px;
`;

export const TitleCard = styled.h4`
  width: auto;
  height: auto;
  text-align: center;
`;

export const Paragraph = styled.p`
  width: auto;
  height: auto;
`;
