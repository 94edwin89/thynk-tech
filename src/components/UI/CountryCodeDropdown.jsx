import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import Select from "react-select";
import { countries } from "../../constants/country";

const CountryCodeDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((country) => country.dialCode === "+91")
  );

  const customSingleValue = ({ data }) => (
    <div className="flex items-center gap-2">
      <ReactCountryFlag
        countryCode={data.code}
        svg
        style={{
          width: "1.5rem",
          height: "1rem",
        }}
      />
      <span>{data.dialCode}</span>
    </div>
  );

  const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
      >
        <ReactCountryFlag
          countryCode={data.code}
          svg
          style={{
            width: "1.5rem",
            height: "1rem",
          }}
        />
        <span>{data.name}</span>
        <span className="ml-auto">{data.dialCode}</span>
      </div>
    );
  };

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      minWidth: "90px",
      border: "none",
      boxShadow: "none",
      
    }),
    menu: (provided) => ({
      ...provided,
      width: "300px", 
    }),
    option: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      gap: "10px",
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        padding: "0px",
      }),
      indicatorSeparator: () => ({
        display: "none",
      }),
      
  };

  return (
    <div className="mb-6">
      <Select
        value={selectedCountry}
        onChange={handleChange}
        options={countries}
        getOptionLabel={(e) => (
          <div className="flex items-center gap-2">
            <ReactCountryFlag
              countryCode={e.code}
              svg
              style={{
                width: "1.5rem",
                height: "1rem",
              }}
            />
            <span>{e.name}</span>
            <span className="ml-auto">{e.dialCode}</span>
          </div>
        )}
        getOptionValue={(e) => e.dialCode}
        components={{
          SingleValue: customSingleValue,
          Option: customOption,
        }}
        styles={customStyles} 
        classNamePrefix="react-select"
        isSearchable={false}
      />
    </div>
  );
};

export default CountryCodeDropdown;
