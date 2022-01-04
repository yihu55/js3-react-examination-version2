import styled from "styled-components";
import { Colors } from "../global/constants";
export const NavbarStyled=styled.nav`
ul{
  background-color:${Colors.purple};
  margin:0;
  height:100px;
  display:flex;
  align-items:center;

  li{
    list-style:none;
  }

  a{
      padding-left:50px;
      text-decoration:none;
      color:${Colors.white};
      font-size:1.8rem;
     };
    }
`