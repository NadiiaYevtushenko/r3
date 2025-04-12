import { ChangeEvent } from 'react';

interface Props {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    error?: string;
}

const PhoneInput = ({ value, onChange, placeholder, error }: Props) => (
    <div>
        <input
            className="input"
            type="tel"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
        {error && <p className="error">{error}</p>}
    </div>
);

export default PhoneInput;