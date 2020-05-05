import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) { return 'Loading...' }
    return (
        <div>
            <br />
            <p className="w3-text-grey w3-wide">{"DEATHS: "}
                <CountUp className="w3-text-red w3-normal numberText" start={0} end={deaths.value} duration={1.5} separator="," />
            </p>
            <p className="w3-text-grey w3-wide">{"RECOVERED: "}
                <CountUp className="w3-text-green  w3-normal numberText" start={0} end={recovered.value} duration={1.5} separator="," />
            </p>
            <p className="w3-text-grey w3-wide">{"CONFIRMED CASES: "}
                <CountUp className="w3-text-blue w3-normal numberText" start={0} end={confirmed.value} duration={1.5} separator="," />
            </p>
        </div>
    )
}

export default Cards;