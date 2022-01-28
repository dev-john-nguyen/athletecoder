import { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        if (loading) return;

        if (sent) return alert("It looks like you already submitted a contact form.");

        setLoading(true)

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                alert("Thank you for reaching out. I will get back to you as soon as I can.");
                setLoading(false);
                setSent(true)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    };


    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <textarea placeholder="Message" name="message" required />
            <button>{sent ? "Sent" : loading ? 'Sending...' : "Submit"}</button>
        </form>
    )
}

export default Contact;