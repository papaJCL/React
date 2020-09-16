import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import Share from '@material-ui/icons/Share';
import { SiNodeDotJs , SiRedux } from "react-icons/si";
import { DiDocker , DiGit } from "react-icons/di";
import { FaReact , FaAws } from 'react-icons/fa';
import { CgCPlusPlus } from "react-icons/cg";
import { GrMysql , GrCss3 } from "react-icons/gr";
import Grid from '@material-ui/core/Grid';


export const SkillsStyles = styled.div`
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
  &:after {
      content: ""; 
      display: block; 
      margin: 0 auto; 
      width: 150px; 
      padding-top: 0.35em; 
      border-bottom: 3px solid ${({ theme }) => theme.jeremyFont};
  }
`

export const CardHeader = styled.h2`
  font-size:1.5rem;
  text-transform: uppercase;
  text-align: center;
  font-weight:700;
  margin-bottom: 55px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 2px;
`

export const GridTitle = styled.h2`
  font-size:1.5rem;
  text-transform: uppercase;
  text-align: center;
  font-weight:700;
  margin-bottom: 15px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 2px;
`



const useStyles = makeStyles(() => ({
    root: {
        height: 225,
        width: '100%',
        margin: 'auto',
        backgroundColor: 'white',
        transition: '0.3s',
        '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
          },

    },
    content: {
        padding: 24,
    },
    top: {
        height: 150,
        clipPath: 'polygon(0 0, 100% 0%, 100% 72%, 0% 100%)',
        backgroundColor: '#008B8B',
    },
}));


const PostCardDemo = ({ Text, Icon }) => {
    const cardStyles = useStyles();
    // const shadowStyles = useSoftRiseShadowStyles();
    // const textCardContentStyles = useN01TextInfoContentStyles();
    return (
        <Card className={cx(cardStyles.root)}>
            <CardContent className={cardStyles.top}>
                <center>{<Icon size={85} />}</center>
            </CardContent>
            <CardHeader>{Text}</CardHeader>
        </Card>
    );
}



const Skills = ({ id }) => {
    return (
        <div id={id} >
            <SkillsStyles>
                <Container>
                    <Header>Skills</Header>
                    <br />
                    <GridTitle>Main Languages</GridTitle>
                    <Grid container spacing={3} justify='center'>
                        <Grid item xs={8} sm={2} ><PostCardDemo Text="React" Icon={FaReact} /> </Grid>
                        <Grid item xs={8} sm={2} ><PostCardDemo Text="CSS" Icon={GrCss3} /> </Grid>
                        <Grid item xs={8} sm={2} ><PostCardDemo Text="mySQL" Icon={GrMysql} /> </Grid>
                        <Grid item xs={8} sm={2} ><PostCardDemo Text="C++" Icon={CgCPlusPlus} /> </Grid>
                        <Grid item xs={8} sm={2} ><PostCardDemo Text="Express" Icon={SiNodeDotJs} /> </Grid>
                    </Grid>
                    <br/>
                    <GridTitle>Technologies</GridTitle>
                    <Grid container spacing={3} justify='center'>
                        <Grid item xs={8} sm={2} ><PostCardDemo Text="Docker" Icon={DiDocker} /> </Grid>
                        <Grid item xs={8} sm={2} ><PostCardDemo Text="AWS" Icon={FaAws} /> </Grid>
                        <Grid item xs={8} sm={2} ><PostCardDemo Text="GIT" Icon={DiGit} /> </Grid>
                        <Grid item xs={8} sm={2} ><PostCardDemo Text="Redux" Icon={SiRedux} /> </Grid>
                    </Grid>
                </Container>
            </SkillsStyles>
            <br/>
        </div>
        
    )
}
export default Skills;