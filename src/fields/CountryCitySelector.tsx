interface Props {
    country: string;
    city: string;
    countryData: Record<string, { cities: string[] }>;
    onCountryChange: (value: string) => void;
    onCityChange: (value: string) => void;
}

const CountryCitySelector = ({ country, city, countryData, onCountryChange, onCityChange }: Props) => (
    <>
        <select
            className="select"
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
        >
            <option value="" disabled>Select your country</option>
            {Object.keys(countryData).map((c) => (
                <option key={c} value={c}>{c}</option>
            ))}
        </select>
        {country && (
            <select
                className="select"
                value={city}
                onChange={(e) => onCityChange(e.target.value)}
            >
                <option value="" disabled>Select your city</option>
                {countryData[country].cities.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>
        )}
    </>
);

export default CountryCitySelector;