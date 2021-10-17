import styled from "styled-components";
import { InnerSection, FlexRow, Typography } from "../../App.Styles";

export const NavbarContainer = styled(InnerSection)`
  height: auto;
  max-height: 10vh;
  background: #242424;
  width: 100%;
`;

export const InnerNav = styled(InnerSection)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavBox = styled(FlexRow)`
  width: auto;
  font-size: 40px;
  color: #ccc;
`;

export const Text = styled(Typography)`
  padding: 0.5rem 4rem;
  color: #ccc;
  font-family: "Oswald";
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  width: 100%;
  text-decoration: none;
`;
