
import "./Contact.css"
import Navbar from '../../components/Navbar/Navbar.js'
import img1 from "./cont3.jpg"

import React, { useEffect, useState } from 'react'
import axios from "axios";


function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user" || "{}"));
        if (storedUser.name) {
            setName(storedUser.name);
        }
        if (storedUser.email) {
            setEmail(storedUser.email);
        }
        if (storedUser.mobile) {
            setMobile(storedUser.mobile);
        }
    }, []);

    const contact = async () => {
        if (!name) {
            alert("Name is required")
            return;
        }
        if (!email) {
            alert("Email is required")
            return;
        }
        if (!mobile) {
            alert("Mobile is required")
            return;
        }
        if (!message) {
            alert("Message is required")
            return;
        }


        try {
            const response = await axios.post('/api/contacts', {
                name,
                email,
                mobile,
                message,
            });

            // alert(response?.data?.message);


            if (response?.data?.success) {
                alert('Contact form saved successfully!');
                setName('');
                setEmail('');
                setMobile('');
                setMessage('');

            } else {
                alert('Failed to save contact data. Please try again.');
            }
        } catch (error) {
            console.error('Error saving contact data:', error.message);
        }



    };


    return (
        <div>
            <Navbar />
            <div className="contact-main-container">
                <div>
                    <img src={img1} className="contact-img" />
                </div>
                <div className="contact-sub-container">
                    <h2 className="contact-heading">Contact Us</h2>
                    <form>
                        <input type="text"
                            placeholder="Enter Your Name"
                            className="cnt-input-box"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }} /><br />

                        <input type="text"
                            placeholder="Enter Your Email"
                            className="cnt-input-box" value={email} onChange={(e) => {
                                setEmail(e.target.value);
                            }} /><br />

                        <input type="text"
                            placeholder="Enter Your Mobile Number"
                            className="cnt-input-box" value={mobile} onChange={(e) => {
                                setMobile(e.target.value);
                            }} /><br />

                        <input type="text" placeholder="Enter Message Here" className="message-box" value={message} onChange={(e) => {
                            setMessage(e.target.value);
                        }} /><br />
                        <button type="button" className="sendmessage" onClick={contact}>Send Message</button>

                    </form>

                </div>
            </div>

        </div>
    )
}

export default Contact

