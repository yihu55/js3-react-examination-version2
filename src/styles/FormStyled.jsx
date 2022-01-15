import styled from "styled-components";

export const FormStyled=styled.form`
  display:flex;
  flex-direction:column;
  justify-content:start;
  margin:0 auto;
  padding-top:100px;
  width:300px;
 
  input,button,p{
  padding:5px;
  margin:${props=>props.margin};
  outline:none;
}
 h2{
     display:flex;
     justify-content:center;
     padding-bottom:20px;
 }
  
`
