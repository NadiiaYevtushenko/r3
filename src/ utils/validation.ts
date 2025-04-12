// src/utils/validation.ts
import { Errors } from '../types/formTypes';

const isCyrillic = (value: string) => /[а-яА-ЯёЁіІїЇєЄґҐ]/.test(value);
const hasUppercase = (value: string) => /[A-Z]/.test(value);
const hasNumber = (value: string) => /[0-9]/.test(value);
const hasOnlyValidChars = (value: string) => /^[a-zA-Z0-9!@#$%^&*()_+=\-\[\]{};':"\\|,.<>/?`~\s]*$/.test(value);

export const validateForm = (data: {
    name: string;
    email: string;
    password: string;
    phone: string;
}): Errors => {
    const errors: Errors = {};

    // Name validation
    if (!data.name.trim()) {
        errors.name = 'Name is required.';
    } else if (data.name.trim().length < 3) {
        errors.name = 'Name must be at least 3 characters.';
    } else if (isCyrillic(data.name)) {
        errors.name = 'Name must not contain Cyrillic characters.';
    } else if (!hasOnlyValidChars(data.name)) {
        errors.name = 'Name contains invalid characters.';
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
        errors.email = 'Email is required.';
    } else if (!emailPattern.test(data.email)) {
        errors.email = 'Please enter a valid email address.';
    }

    // Password validation
    if (!data.password) {
        errors.password = 'Password is required.';
    } else if (data.password.length < 8) {
        errors.password = 'Password must be at least 8 characters.';
    } else if (isCyrillic(data.password)) {
        errors.password = 'Password must not contain Cyrillic characters.';
    } else if (!hasUppercase(data.password)) {
        errors.password = 'Password must include at least one uppercase letter.';
    } else if (!hasNumber(data.password)) {
        errors.password = 'Password must include at least one number.';
    } else if (!hasOnlyValidChars(data.password)) {
        errors.password = 'Password contains invalid characters.';
    }

    // Phone validation
    const phonePattern = /^[+]?\d{7,15}$/;
    if (!data.phone.trim()) {
        errors.phone = 'Phone number is required.';
    } else if (!phonePattern.test(data.phone)) {
        errors.phone = 'Enter a valid phone number with digits only.';
    }

    return errors;
};
