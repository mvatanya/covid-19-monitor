import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountriesData } from '../../api'

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountriesApi = async () => {
      setCountries(await fetchCountriesData())
    }

    fetchCountriesApi();
  }, [setCountries])
  console.log('countries here', countries)
  return(
    <FormControl className={styles.FormControl}>
      <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
        <option value='global'>Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>{country} </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;