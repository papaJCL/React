import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import tripPic from './Images/trip.png'
import GPAPic from './Images/GPAPic.png'
import covidPic from './Images/covid.png'
import Tooltip from '@material-ui/core/Tooltip';
import Fade from 'react-reveal/Fade';







export const ProjectStyles = styled.div`
    //align-items: center;
    //height:900px;
    //display: flex;
    background-color:	rgb(173, 208, 236);
    // background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);

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
      width: 300px; 
      padding-top: 0.35em; 
      border-bottom: 3px solid ${({ theme }) => theme.jeremyFont};
  }
`

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        transition: '0.3s',
        '&:hover': {
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
            cursor: "pointer",
        },
    },
    media: {
        maxWidth: 600,
        //paddingTop: '56.25%', // 16:9
        paddingTop: '42.25%', // 16:9
        objectFit: 'cover',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

}));


const Projects = ({ id }) => {

    const classes = useStyles();
    const [gpaExpanded, setGpaExpanded] = React.useState(false);
    const [covidExpanded, setCovidExpanded] = React.useState(false);
    const [tripExpanded, setTripExpanded] = React.useState(false);
    const [wipExpanded, setWipExpanded] = React.useState(false);

    const handleGPAClick = () => {
        setGpaExpanded(!gpaExpanded);
    };
    const handleCovidClick = () => {
        setCovidExpanded(!covidExpanded);
    };
    const handleTripClick = () => {
        setTripExpanded(!tripExpanded);
    };
    const handleWIPClick = () => {
        setWipExpanded(!wipExpanded);
    };

    return (
        <div id={id} >

            <ProjectStyles>
            <Fade bottom>
                <Header>My Projects</Header>
                <Container>
                    <Grid container spacing={3} justify='center'>
                        <Grid item xs={12} sm={6} >
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image={GPAPic}
                                    title="GPA Calculator"
                                />
                                <CardHeader title="GPA Calculator" />
                                <CardActions disableSpacing >
                                    <Tooltip title="View Source Code">
                                        <IconButton onClick={() => window.open("https://github.com/papaJCL/GPA-Calculator", "_blank")}>
                                            <CodeIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Go To Site">
                                        <IconButton onClick={() => window.open("https://papajcl.github.io/GPA-Calculator/", "_blank")} >
                                            <ExitToAppIcon />
                                        </IconButton>
                                    </Tooltip >
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: gpaExpanded,
                                        })}
                                        onClick={handleGPAClick}
                                        aria-expanded={gpaExpanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={gpaExpanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography variant="h6" color="textSecondary">
                                            Technologies Used:
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary">
                                            Styled-Components, React-Bootstrap
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} >

                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image={covidPic}
                                    title="Paella dish"
                                />
                                <CardHeader title="COVID-19 Tracker" />
                                <CardActions disableSpacing>
                                    <Tooltip title="View Source Code">
                                        <IconButton onClick={() => window.open("https://github.com/papaJCL/COVID", "_blank")}>
                                            <CodeIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Go To Site">
                                        <IconButton onClick={() => window.open("https://papajcl.github.io/COVID/", "_blank")}>
                                            <ExitToAppIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: covidExpanded,
                                        })}
                                        onClick={handleCovidClick}
                                        aria-expanded={covidExpanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={covidExpanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography variant="h6" color="textSecondary">
                                            Technologies Used:
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary">
                                            Material-UI , Axios, Recharts, Styled-Components
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} >

                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image={tripPic}
                                    title="Paella dish"
                                />
                                <CardHeader title="Plan Your Trip" />
                                <CardActions disableSpacing>
                                <Tooltip title="View Source Code">
                                    <IconButton onClick={() => window.open("https://github.com/papaJCL/Plan-Your-Own-Trip", "_blank")}>
                                        <CodeIcon />
                                    </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Go To Site">
                                    <IconButton onClick={() => window.open("http://ec2-3-21-242-13.us-east-2.compute.amazonaws.com:8888/", "_blank")}>
                                        <ExitToAppIcon />
                                    </IconButton>
                                    </Tooltip>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: tripExpanded,
                                        })}
                                        onClick={handleTripClick}
                                        aria-expanded={tripExpanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={tripExpanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography variant="h6" color="textSecondary">
                                            Technologies Used:
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary">
                                            MySQL, Java Spark, MariaDB, Junit, Maven, Bootstrap, Leaflets
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>

                    </Grid>
                </Container>
                </Fade>
            </ProjectStyles>
        </div>
    )
}
export default Projects;