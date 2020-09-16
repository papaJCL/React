import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { shadows } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import mePic from './Images/me.jpg'







export const AboutStyles = styled.div`
    //align-items: center;
    //height:900px;
    display: flex;
     background-color:	rgb(173, 208, 236);
    //background-color: rgb(218, 230, 242);
    // background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);
  `

export const Header = styled.h1`
  font-size:2.5rem;
  text-transform: uppercase;
  text-align: center;
  font-weight:700;
  margin-top:1.5em;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 2px;
  &:after {
      content: ""; 
      display: block; 
      margin: 0 auto; 
      width: 115px; 
      padding-top: 0.35em; 
      border-bottom: 3px solid ${({ theme }) => theme.jeremyFont};
  }
  
`




const useStyles = makeStyles({
  root: {
    //maxWidth: 400,
    // width: 'auto',
    height: 400,
    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
  },
  media: {
    height: 400,
    width: 300,
    //maxWidth: 400
    
  },

});

const AboutMeBody = (
    "I am a Computer Science Graduate from CSU who is very interested in developing new and complex software. \n" +
    "My favorite hobbies besides programming include skiing, hiking, and playing video games."
)

const About = ({ id }) => {

  const classes = useStyles();

  return (
    <div id={id} >
      <AboutStyles>
        <Container>
          <Header>About</Header>
          <Grid container spacing={3} justify='center'>
            <Grid item md={3}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={mePic}
                  title="Me"
                />
              </Card>
            </Grid>
            <Grid item md={3}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h2">
                    Me
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    I am a Computer Science Graduate from CSU who is very interested in developing new and complex software.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                    My favorite hobbies besides programming include skiing, hiking, and playing video games
          </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid >
        </Container>
      </AboutStyles>
    </div>
  )
}



export default About;

//<JeremyImage src="https://jeremylesser.tk/5a8f34cf1fd08b4d5f0c0cc40d623966.jpg" />