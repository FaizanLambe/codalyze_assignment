import React, {useState} from 'react';

function CountryRenderer(props) {
    const[country, setCountry] = useState(props.value);

    const onCountryChange = (event) => {
        props.onCountryChange(event.target.value);
        setCountry(event.target.value);
    }
    return(
        <div>
            <select value={country} onChange={onCountryChange}>
                <option value="india"> India </option>
                <option value="us"> US </option>
                <option value="canada"> Canada </option>
                <option value="uae"> UAE </option>
            </select>
        </div>
    )
}

export default CountryRenderer;