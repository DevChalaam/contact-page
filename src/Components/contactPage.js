// Import Module
import React from "react";
import contactLogo from "../Assets/Image/contactLogo.svg";
import "./contactPage.css"

function ContactPage() {
    return(
        // Main Container
        <div className="main-container">
            {/* Container Logo */}
            <div className="logo-container">
                <img src={contactLogo} alt="Contact Logo" className="contactLogos"></img>
            </div>
            {/* Container Topic */}
            <div className="Topic-container">
                <label className="text-topic">Interested in our <br></br> business pricing?</label>
            </div>
            {/* Container Contact Under Topic */}
            <div className="contactUnder-container">
                <p className="text-under-topic">Fill out the form to view details and we’ll <br></br> contact you as soon as possible.</p>
            </div>
            {/* Container From Input */}
            <div className="container-form-input">
                <div className="container-form">
                    <form action="/api/postFormInput" method="post">
                        <div className="containers-form-input">
                            {/* Name Input Box */}
                            <label className="label-name">Name</label>
                            <input type="text" className="input-name" placeholder="Ethan Johnson" color="red"></input>
                            {/* Email Compony Box */}
                            <label className="label-email">Company Email</label>
                            <input type="email" className="input-email" placeholder="ethan@johnson.com"></input>
                        </div>
                        {/* Container Form Select */}
                        <div className="containers-form-select">
                            {/* Container Compony Size */}
                            <label className="label-size-company">Company Size</label>
                            <select className="employees-select">
                                <option>50-100 employees</option>
                            </select>
                            {/* Container Subject */}
                            <label className="label-subject">Subject</label>
                            <select className="subject-select">
                                <option>Building Landing pages</option>
                            </select>
                        </div>
                        {/* Container Message */}
                        <div className="container-message">
                            <label className="label-message">Message</label>
                            <textarea className="textAreaBox" name="textArea" id="textArea" placeholder="50-100 employees"></textarea>
                        </div>
                        {/* Button Contact Sales */}
                        <button type="click" className="button-submit">contact sales</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;