import { useState, FocusEvent } from 'react';
import { Hints } from '../types/formTypes';

export const useFormHandlers = () => {
    const [hints, setHints] = useState<Hints>({});
    const [nameWarning, setNameWarning] = useState<string | null>(null);

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setHints(prev => ({
            ...prev,
            [name]: name === 'name'
                ? 'Enter your full name (min 3 characters).'
                : name === 'email'
                    ? 'Enter a valid email (e.g. john@example.com).'
                    : 'At least 8 characters, 1 capital letter, 1 number. Cyrillic characters not allowed.'
        }));
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        setHints(prev => ({ ...prev, [e.target.name]: undefined }));
    };

    const handleNameChange = (value: string, setter: (val: string) => void) => {
        setter(value.charAt(0).toUpperCase() + value.slice(1));
        const hasCyrillic = /[а-яА-ЯёЁіІїЇєЄґҐ]/.test(value);
        setNameWarning(hasCyrillic ? 'Please use Latin characters only. Cyrillic is not allowed.' : null);
    };

    return {
        hints,
        nameWarning,
        handleFocus,
        handleBlur,
        handleNameChange,
    };
};
