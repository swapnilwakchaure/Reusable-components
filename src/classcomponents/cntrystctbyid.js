import { useEffect, useState } from "react";
import styled from "styled-components";

function CountryStateCityById() {
  const API_KEY = "RUd5Q3o0eGk2U0RwcDJsNm1qSTFnREtsYVlyS2wwcVV3dlE5UHhEOA==";

  let headers = new Headers();
  headers.append("X-CSCAPI-KEY", `${API_KEY}`);

  let requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [cntryCode, setCntryCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [cityCode, setCityCode] = useState("");

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (cntryCode) {
      getStates(cntryCode);
      setStateCode('MH');
    }
  }, [cntryCode]);
  
  useEffect(() => {
    if (stateCode) {
      getCities(cntryCode, stateCode);
      setCityCode('Pune');
    }
  }, [stateCode]);

  function getCountries() {
    // { "id":1, "name":"Afghanistan", "iso2":"AF" } length = 250
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      .then((response) => response.json())
      .then((response) => setCountries(response))
      .catch((error) => console.log("error", error));
  }

  function getStates(cncode) {
    // Pass Country Code -- Eg: Country Code : IN
    if (cncode !== "") {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${cncode}/states`,
        requestOptions
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response.length);
          setStates(response);
        })
        .catch((error) => console.log("error", error));
    }
  }

  function getCities(cncode, stateCode) {
    // Pass Country & State Code -- Eg: Country Code : IN & State Code : MH
    // {id: 57589, name: 'Achalpur'}
    if (stateCode !== "") {
      fetch(
        `https://api.countrystatecity.in/v1/countries/${cncode}/states/${stateCode}/cities`,
        requestOptions
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response.length);
          setCities(response);
        })
        .catch((error) => console.log("error", error));
    }
  }

  function onCountryChange(e) {
    console.log(e.target.value);
    setCntryCode(e.target.value);
    getStates(e.target.value);
  }

  function onStateChange(e) {
    console.log(e.target.value);
    setStateCode(e.target.value);
    getCities(cntryCode, e.target.value);
  }

  function setCntryStateCity() {
    console.log('values are set');
    setCntryCode('IN');
  }

  return (
    <div>
      <div>
        <button onClick={setCntryStateCity}>SetValues</button>
      </div>

      <Filter>
        <Select value={cntryCode} onChange={onCountryChange}>
          <option value="">Select Country</option>
          {countries.length > 0 &&
            countries.map((el) => (
              <option key={el.id} value={el.iso2}>
                {el.name}
              </option>
            ))}
        </Select>
        <Select
          value={stateCode}
          onChange={onStateChange}
          disabled={cntryCode === ""}
        >
          <option value="">Select State</option>
          {states.length > 0 &&
            states.map((el) => (
              <option key={el.id} value={el.iso2}>
                {el.name}
              </option>
            ))}
        </Select>
        <Select
          value={cityCode}
          onChange={(e) => setCityCode(e.target.value)}
          disabled={stateCode === ""}
        >
          <option value="">Select City</option>
          {cities.length > 0 &&
            cities.map((el) => (
              <option key={el.id} value={el.name}>
                {el.name}
              </option>
            ))}
        </Select>
      </Filter>
    </div>
  );
}

export default CountryStateCityById;

const Filter = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Select = styled.select`
  width: 30%;
  padding: 10px;
  font-size: 18px;
  border-radius: 7px;
  outline: none;
`;
