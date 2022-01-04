import styled,{css} from "styled-components";
import { Colors } from "../global/constants";
export const MainStyled=styled.main`
  background-color:${Colors.lightGreen};
  height:100vh;
 
  ${props=>props.display && css `
     display:grid;
     grid-template-columns:1fr 1fr;
  `}

  
  `

 //how to change the backgroundcolor in first fraktion

  