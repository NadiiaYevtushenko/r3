import { useRef, useEffect, FormEvent, useState } from 'react';
import '../jquery-setup';
import '../styles/FormStyles.css';
import 'jquery-ui-dist/jquery-ui.css';
import 'jquery-ui-dist/jquery-ui.js';

const UncontrolledForm = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const topicRef = useRef<HTMLSelectElement>(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (dateRef.current) {
            const today = new Date();
            today.setDate(today.getDate() + 1); // завтра
            // @ts-ignore
            window.$(dateRef.current).datepicker({
                dateFormat: 'yy-mm-dd',
                minDate: today,
            });
        }
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = nameRef.current?.value || '';
        const email = emailRef.current?.value || '';
        const topic = topicRef.current?.value || '';
        const date = dateRef.current?.value || '';

        if (!name || !email || !topic || !date) {
            alert('Please fill in all fields.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    topic,
                    date,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit booking.');
            }

            setSuccess(true);
            const form = e.target as HTMLFormElement;
            form.reset();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-wrapper">
            <h3 className="form-title">Uncontrolled Component</h3>
            <form className="form glass bordered" onSubmit={handleSubmit}>
                <h4>Book an IT Consultation</h4>
                {success && <p className="success">Thank you! Your consultation is booked.</p>}
                {loading && <p className="loading">Submitting...</p>}
                {error && <p className="error">{error}</p>}

                <input className="input" type="text" ref={nameRef} placeholder="Your name" required />
                <input className="input" type="email" ref={emailRef} placeholder="Your email" required />
                <select className="select" ref={topicRef} defaultValue="">
                    <option value="" disabled>Select topic</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend/API</option>
                    <option value="devops">DevOps & Deployment</option>
                    <option value="career">IT Career Advice</option>
                </select>
                <input className="input" ref={dateRef} placeholder="Choose a date" />
                <button className="button" type="submit" disabled={loading}>Book Now</button>
            </form>
        </div>
    );
};

export default UncontrolledForm;