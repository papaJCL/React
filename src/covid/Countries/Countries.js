import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";




import { fetchCountries } from '../api'

const useStyles = makeStyles(({

    root: {
        background: '#222',
        borderRadius: 3,
        border: 0,
        color: 'white',
    } , 
    inputRoot: {
      color: "#bbb",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "black"
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "black"
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#222"
      },
      "&.MuiAutocomplete-hasClearIcon" : {
        borderColor: "green",
        color: "green"
      }
    }
  }));

const Countries = ({ setCountry }) => {

    const [getCountries, setGetCountries] = useState([]);
    const classes = useStyles();


    useEffect(() => {
        const getCountries = async () => {
            setGetCountries(await fetchCountries());
        }
        getCountries();
    }, [setGetCountries])

    


    const work = () => {
        let test = getCountries.map((country, i) => country)
        var len = test.length;
        for (var i = 1; i < len + 1 ; i++) {
            countries.push({
                name: test[i -1]
            });
        }
    }

    const countries = [
        {name: "Global"}
    ]

    const handleChange = (event , newValue) => {
        setCountry(newValue.name.toLowerCase())
    }

   
      

    return (
        <div >
            {work()}
            <Autocomplete
                onChange={handleChange}
                classes={classes}
                options={countries}
                getOptionLabel={(option) => option.name}
                
                renderInput={(params) => <TextField {...params}  variant="outlined" fullWidth 
                />
            }
            />
        </div>
    )
}


export default Countries;