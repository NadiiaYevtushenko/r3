import { ChangeEvent, FocusEvent } from 'react';

interface Props {
    type?: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    error?: string;
    hint?: string;
}

const InputField = ({ type = 'text', name, value, placeholder, onChange, onFocus, onBlur, error, hint }: Props) => (
    <div>
        <input
            className="input"
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
        {hint && <p className="hint">{hint}</p>}
        {error && <p className="error">{error}</p>}
    </div>
);

export default InputField;