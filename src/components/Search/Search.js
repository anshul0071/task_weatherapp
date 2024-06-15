import React, { useCallback, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../redux/actions";

const Search = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);

  const loadOptions = useCallback(
    async (inputValue) => {
      if (inputValue && (!cities.data || cities.inputValue !== inputValue)) {
        await dispatch(fetchCities(inputValue));
      }

      return {
        options: cities.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        })),
      };
    },
    [dispatch, cities]
  );

  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for cities"
      debounceTimeout={1200}
      value={searchValue}
      onChange={onChangeHandler}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
