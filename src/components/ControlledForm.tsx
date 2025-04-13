import { useState, FormEvent } from 'react';
import InputField from '../fields/InputField';
import PasswordField from '../fields/PasswordField';
import CountryCitySelector from '../fields/CountryCitySelector';
import PhoneInput from '../fields/PhoneInput';
import { useFormHandlers } from '../hooks/useFormHandlers';
import { validateForm } from '../utils/validation.ts';
import { Errors } from '../types/formTypes';
import { countryData } from '../data/countryData';
import '../styles/FormStyles.css';

const initialFormState = {
    name: '',
    email: '',
    password: '',
    country: '',
    city: '',
    phone: ''
};

const ControlledForm = () => {
    const [formState, setFormState] = useState(initialFormState);
    const [errors, setErrors] = useState<Errors>({});
    const [successMessage, setSuccessMessage] = useState('');

    const {
        hints,
        nameWarning,
        handleFocus,
        handleBlur,
        handleNameChange,
    } = useFormHandlers();

    const handleChange = (key: keyof typeof formState) => (value: string) => {
        setFormState(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm({
            name: formState.name,
            email: formState.email,
            password: formState.password,
            phone: formState.phone
        });
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage('');
            return;
        }
        setErrors({});
        setSuccessMessage('You have been successfully registered on our platform.');
        setFormState(initialFormState);
    };

    const phonePrefix = countryData[formState.country]?.phonePrefix || '';

    return (
        <div className="form-wrapper centered">
            <h3 className="form-title">Controlled Component</h3>
            <form className="form glass bordered" onSubmit={handleSubmit} noValidate>
                <h4>Register in our platform </h4>
                <InputField
                    name="name"
                    placeholder="Enter your full name"
                    value={formState.name}
                    onChange={(e) => handleNameChange(e.target.value, handleChange('name'))}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    error={errors.name}
                    hint={nameWarning || hints.name}
                />

                <InputField
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formState.email}
                    onChange={(e) => handleChange('email')(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    error={errors.email}
                    hint={hints.email}
                />

                <PasswordField
                    name="password"
                    placeholder="Create a secure password"
                    value={formState.password}
                    onChange={(e) => handleChange('password')(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    error={errors.password}
                    hint={hints.password}
                />

                <CountryCitySelector
                    country={formState.country}
                    city={formState.city}
                    countryData={countryData}
                    onCountryChange={(value) => {
                        setFormState(prev => ({
                            ...prev,
                            country: value,
                            city: '',
                            phone: countryData[value]?.phonePrefix || ''
                        }));
                    }}
                    onCityChange={handleChange('city')}
                />

                <PhoneInput
                    value={formState.phone}
                    onChange={(e) => handleChange('phone')(e.target.value)}
                    placeholder={`Phone number (${phonePrefix})`}
                    error={errors.phone}
                />

                <button className="button" type="submit">Register</button>
                {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
        </div>
    );
};

export default ControlledForm;