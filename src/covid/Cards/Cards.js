import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed){return 'Loading...'}
    return(
        <div>
            <Grid container space={3} justify="center" >
                <Grid item component={Card} xs={12} md={3}  >
                    <CardContent  backgroundColor="primary" className="test" >
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varient="h5" >
                            <CountUp start={0} end={deaths.value} duration={1.5} separator=","/>
                        </Typography>
                        
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} >
                    <CardContent  backgroundColor="primary" className="test">
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varient="h5" >
                            <CountUp start={0} end={recovered.value} duration={1.5} separator=","/>
                        </Typography>
                        
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} >
                    <CardContent  backgroundColor="primary" className="test">
                        <Typography color="textSecondary" gutterBottom>Confirmed Cases</Typography>
                        <Typography varient="h5" >
                            <CountUp start={0} end={confirmed.value} duration={1.5} separator=","/>
                        </Typography>
                        {/* <Typography color="textSecondary" >{new Date(lastUpdate).toTimeString()}</Typography> */}
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;