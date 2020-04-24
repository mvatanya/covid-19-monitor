import axios from 'axios';

const url = `https://covid19.mathdro.id/api`

export const fetchData = async (country) => {
  let changeableUrl = url;
  
  if(country){
    changeableUrl = `${url}/countries/${country}`
  }
  
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    const responseData = { confirmed, recovered, deaths, lastUpdate} //modified data we want to use
    return responseData;
  } catch (err) {
    console.log(err)
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }))
    return modifiedData;
  } catch (err) {
    console.log(err)
  }
}

export const fetchCountriesData = async () => {
  try {
    const {data: {countries}} = await axios.get(`${url}/countries`)
    const modifiedData = countries.map(country => country.name)
    return modifiedData;
     
  } catch (err) {
    console.log(err)
  }
}