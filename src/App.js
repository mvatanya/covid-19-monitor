import React from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from './components'; //has to create index.js inside this components folder to be able to do this
import styles from './App.module.css';
import { fetchData } from './api'
import coronaImage from './images/corona_image.png'

class App extends React.Component {
  state = {
    data: {},
    country: 'global', 
  }

  
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData }) 
  }

  handleCountryChange = async (country) => {
    console.log('country', country)
    const fetchedData = country === 'global' ? await fetchData() : await fetchData(country)
    this.setState({ country, data: fetchedData })
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt='COVID-19'/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
  

}

export default App;
