import styled from 'styled-components';




export const ButtonWrapper = styled.button`
text-transform : capitalize;
font-size : 1.4rem;
color : var(--mainWhite);
background : transparent;
padding : 0.2rem 0.5rem;
margin : 0.2rem 0.5rem 0.2rem 0;
border : 0.02rem var(--lightBlue);
border-radius : 0.3rem;
&:hover{
    background : var(--lessBlue);
    color : var(--mainDark);
}
&:focus{
    outline : none;
}
`;