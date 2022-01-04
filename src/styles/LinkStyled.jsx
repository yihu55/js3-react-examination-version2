import styled,{css} from "styled-components";
import { Link } from "react-router-dom";


export const LinkStyled=styled(Link)`
text-decoration: none;
color:${props=>props.color};

${props=>props.fontSize && css `font-size:1rem;`};

&:hover {
    color:darkgreen;

}
h4{
    padding-top:10px;
    margin:10px;
}
`