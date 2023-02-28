import React, {useState} from "react";
import GooglePlacesAutocomplete from "react-google-autocomplete";

const GooglePlaces = () => {
  const [value, setValue] = useState(null);
  return (
    <div>
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
    </div>
  );
};

export default GooglePlaces;
