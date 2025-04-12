import { ChangeEvent, FocusEvent, useState } from 'react';

interface Props {
    value: string;
    name: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    error?: string;
    hint?: string;
}

const PasswordField = ({
                           value,
                           name,
                           placeholder,
                           onChange,
                           onFocus,
                           onBlur,
                           error,
                           hint,
                       }: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="field-group">
            <div className="password-wrapper">
                <input
                    className="input"
                    type={showPassword ? 'text' : 'password'}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                <span
                    className="toggle-password"
                    onClick={() => setShowPassword((prev) => !prev)}
                >
          {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M1 1l22 22M17.94 17.94A10.45 10.45 0 0 1 12 19C5 19 1 12 1 12a20.87 20.87 0 0 1 4.3-5.88M9.9 9.9a3 3 0 0 1 4.24 4.24" />
              </svg>
          ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
              </svg>
          )}
        </span>
            </div>
            {hint && <p className="hint">{hint}</p>}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default PasswordField;