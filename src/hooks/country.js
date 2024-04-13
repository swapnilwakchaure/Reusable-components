import { useEffect, useState } from "react";
import globalCountry from "./countries.json";

const Country = () => {
  const [localCountry, setLocalCountry] = useState([]);

  useEffect(() => {
    function getCountry() {
      fetch(
        "https://prepod.manashakti.org/admin/backend/index.php/getAllCountry"
      )
        .then((res) => res.json())
        .then((res) => setLocalCountry(res))
        .catch((error) => console.log("error: ", error));
    }

    getCountry();
    globalCountry.sort((a, b) => {
      if (a.country > b.country) {
        return 1;
      }
      if (a.country < b.country) {
        return -1;
      }
      return 0;
    });

    // console.log('global: ', globalCountry);
    // console.log('local: ', localCountry);
  }, []);

  function findMissingCountries(arr1, arr2) {
    const missingValues = [];

    arr1.forEach((obj1) => {
      const existsInarr2 = arr2.some((obj2) => {
        return Object.values(obj2).includes(obj1.country || obj1.name);
      });

      if (!existsInarr2) {
        missingValues.push(obj1);
      }
    });

    console.log(missingValues);
  }

  return (
    <div>
      <h3>Countries</h3>

      {localCountry.length > 0 ? (
        <button
          onClick={() => findMissingCountries(globalCountry, localCountry)}
        >
          Missing Countries
        </button>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Country;
