import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { GrLinkedin , GrGithub , GrMail} from "react-icons/gr";




export const ContactStyles = styled.div`
//align-items: center;
    //height:450px;
    background-color:	rgb(173, 208, 236);
  `

export const Header = styled.h1`
  font-size:2.5rem;
  text-transform: uppercase;
  text-align: center;
  font-weight:700;
  margin-top:1.5em;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 2px;

 
`

export const ThankYouHeader = styled.h1`
  color: ${({ theme }) => theme.jeremyFont};
  font-size:2.5rem;
  text-transform: uppercase;
  text-align: center;
  font-weight:700;
  margin-top:1.5em;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 2px;
`

const Footertext = styled.p`
color:  ${({ theme }) => theme.primaryDark};
font-size:0.8rem;
font-family: 'Raleway', sans-serif;
letter-spacing: 1px;
font-weight:500;
text-align: center;
`

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));


const Contact = ({ id }) => {
    const classes = useStyles();

    return (
        <div id={id} >
            <ContactStyles>
                <Container>
                <ThankYouHeader>Thank You For Visiting!</ThankYouHeader>
                    <Header>Contact</Header>
                    <center>
                    <IconButton onClick={()=> window.open("https://www.linkedin.com/in/jeremy-collier-lesser/", "_blank")} aria-label="delete" className={classes.margin}>
                        <GrLinkedin size={45} style={{color: 'black'}} />
                    </IconButton>
                    <IconButton  onClick={()=> window.open("https://github.com/papaJCL", "_blank")} className={classes.margin}>
                        <GrGithub size={45}  style={{color: 'black'}}/>
                    </IconButton>
                    <IconButton  onClick={()=> window.open(`mailto:${'jeremylessermore@gmail.com'}`)} className={classes.margin}>
                        <GrMail size={45}  style={{color: 'black'}}/>
                    </IconButton>
                    </center>
                    <br/> <br/> 
                    <Footertext>Built with Material-UI and Styled-Components</Footertext>
                    <Footertext>Jeremy Lesser ©2020</Footertext>
                </Container>
            </ContactStyles>

        </div>
    )
}
export default Contact;