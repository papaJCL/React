import React , {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import {fetchCountries} from '../api'

const Countries = ({setCountry}) => {

    const [getCountries, setGetCountries] = useState([]);

    useEffect(() =>{
        const getCountries = async () => {
            setGetCountries(await fetchCountries());
        }
        getCountries();
    } , [setGetCountries])



    return(
        <div className = "barBraph">
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => {setCountry(e.target.value)}}>
                <option value="global">Global</option>
                {getCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </div>
    )
}

export default Countries;