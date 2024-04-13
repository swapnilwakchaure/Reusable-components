import { useEffect, useState } from "react";
import styled from "styled-components";

const CountryStateCity = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [stateByCntry, setStateByCntry] = useState([]);
  const [cities, setCities] = useState([]);
  const [cityByState, setCityByState] = useState([]);
  
  useEffect(() => {
    getCountries();
    getStates();
    getCities();
  }, []);

  function getCountries() {
    // id: 1, iso2: "AF",name: "Afghanistan"
    fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries.json')
      .then((response) => response.json())
      .then((result) => {
        // console.log('country: ', result);
        setCountries(result);
      })
      .catch((error) => console.log("error", error))
  }

  function getStates() {
    // country_code: "AF", country_id: 1, country_name: "Afghanistan", id: 3901, name: "Badakhshan", state_code: "BDS"
    fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/states.json')
      .then((response) => response.json())
      .then((result) => {
        // console.log('state: ', result);
        setStates(result);
      })
      .catch((error) => console.log("error", error))
  }

  function getCities() {
    // country_code: "AF", country_id: 1, country_name: "Afghanistan", id: 52, name: "Ashkāsham", state_code: "BDS", state_id: 3901, state_name: "Badakhshan"
    fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json')
      .then((response) => response.json())
      .then((result) => {
        console.log('city: ', result.length);
        setCities(result);
      })
      .catch((error) => console.log("error", error))
  }

  function onCountryChange(e) {
    const newStates = states.filter((el) => {
        return el.country_id === Number(e.target.value)
    });
    setStateByCntry(newStates);
  }

  function onStateChange(e) {
    const newCities = cities.filter((el) => {
        return el.state_id === Number(e.target.value)
    });
    console.log(newCities.length);
    setCityByState(newCities);
  }

  return (
    <div>
      <Filter>
        <select onChange={onCountryChange}>
          <option value=''>Select Country</option>
          { countries.length > 0 && countries.map((el) => (
            <option key={el.id} value={el.id}>{el.name}</option>
          ))}
        </select>
        <select onChange={onStateChange} disabled={stateByCntry.length === 0}>
          <option value=''>Select State</option>
          { stateByCntry.length > 0 && stateByCntry.map((el) => (
            <option key={el.id} value={el.id}>{el.name}</option>
          ))}
        </select>
        <select onChange={(e) => console.log(e.target.value)} disabled={cityByState.length === 0}>
          <option value=''>Select City</option>
          { cityByState.length > 0 && cityByState.map((el) => (
            <option key={el.id} value={el.name}>{el.name}</option>
          ))}
        </select>
      </Filter>
    </div>
  );
};

export default CountryStateCity;


const Filter = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
