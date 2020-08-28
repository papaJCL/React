import React from 'react';
import styled from 'styled-components';
import bg from './images/reverse.jpg'


export const ContactStyles = styled.div`
    //align-items: center;
    height:450px;
    //background-color:	rgb(173, 208, 236);
    background: url(${bg}) no-repeat center center ;
    //background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
  `


const Footer = ({ id }) => {
    return (
        <div id={id} >
            <ContactStyles />
        </div>
    )
}
export default Footer;