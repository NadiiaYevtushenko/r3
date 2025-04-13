import { ChangeEvent } from 'react';

interface Props {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    error?: string;
}

const allowedPhoneChars = /^[0-9+\-\s()]*$/;

const PhoneInput = ({ value, onChange, placeholder, error }: Props) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (allowedPhoneChars.test(e.target.value)) {
            onChange(e);
        }
        // інакше нічого не робимо — блокуються недопустимі символи
    };

    return (
        <div>
            <input
                className="input"
                type="tel"
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
            />
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default PhoneInput;