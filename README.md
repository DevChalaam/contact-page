# CONTACT PAGE

![alt text](image.png)

## Coding Scripts

Javascript

```js
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
```

CSS Scripts

```css
/* Import Font From Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
    margin: 0 auto;
    padding: 0 auto;
    box-sizing: border-box;
}
body {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 100;
    font-style: normal;
    font-optical-sizing: auto;
    background: linear-gradient(to right, #ff008f, #4036A9);
}
/* Main Container */
div.main-container {
    display: flex;
    width: 100%;
    height: 120vh;
    flex-direction: column;
    /* Container Logo */
    & div.logo-container {
        display: block;
        width: 110px;
        height: 3.5vh;
        margin: 20px 0 44px 100px;
    }
    & div.Topic-container {
        display: block;
        width: 40%;
        height: 18vh;
        text-align: center;

        & label.text-topic {
            font-size: 4rem;
            color: #FFFFFF;
            font-weight: bold;
        }
    }
    /* Container Contact Under Topic */
    & div.contactUnder-container {
        display: block;
        width: 40%;
        height: 9.5vh;
        text-align: center;
        margin-top: 16px;

        & p.text-under-topic {
            font-size: 2rem;
            font-weight: 500;
            color: #FFFFFF;
        }
    }
    /* Container From Input */
    & div.container-form-input {
        border-radius: 50px;
        width: 56%;
        height: 70vh;
        margin-top: 72px;
        background: rgba(255, 255, 255, 0.2);
        
        & div.container-form {
            margin: 32px 52px;
            height: 63vh;

            & div.containers-form-input {
                height: 9.5vh;
                /* Name Input Box */
                & label.label-name {
                    color: #F8FAFC;
                    font-size: 0.875rem;
                    font-weight: 450;
                }
                & input.input-name {
                    width: 48%;
                    height: 7.2vh;
                    border: #F8FAFC 1px solid;
                    margin: 0 24px 0 0;
                    padding: 24px;
                    display: flex;
                    cursor: pointer;
                    outline: none;
                    font-size: 0.875rem;
                    font-weight: bold;
                    border-radius: 15px;
                    flex-direction: column;
                }
                & input.input-name::placeholder { color: #CDD5E0;}
                /* Email Compony Box */
                & label.label-email {
                    top: -90px;
                    color: #F8FAFC;
                    display: flex;
                    position: relative;
                    font-size: 0.875rem;
                    font-weight: 450;
                    margin-left: 500px;
                }
                & input.input-email {
                    top: -87px;
                    left: 250px;
                    width: 48%;
                    height: 7.2vh;
                    border: #F8FAFC 1px solid;
                    padding: 24px;
                    display: flex;
                    cursor: pointer;
                    outline: none;
                    position: relative;
                    font-size: 0.875rem;
                    font-weight: bold;
                    border-radius: 15px;
                    flex-direction: column;
                }
                & input.input-email::placeholder {color: #CDD5E0;}
            }
            /* Container Form Select */
            & div.containers-form-select {
                display: flex;
                margin-top: 24px;
                flex-direction: row;
                /* Container Compony Size */
                & label.label-size-company {
                    width: 105px;
                    color: #F8FAFC;
                    height: 2vh;
                    font-size: 0.875rem;
                    font-weight: 450;
                    margin-left: 0;
                }
                & select.employees-select {
                    width: 48%;
                    height: 7.2vh;
                    border: #F8FAFC 1px solid;
                    cursor: pointer;
                    display: block;
                    padding: 24px;
                    outline: none;
                    position: relative;
                    margin-top: 20px;
                    font-size: 0.875rem;
                    font-family: "Be Vietnam Pro", sans-serif;
                    margin-left: -103px;
                    font-weight: bold;
                    border-radius: 15px;
                }
                /* Container Subject */
                & label.label-subject {
                    left: 54px;
                    color: #F8FAFC;
                    position: relative;
                    font-size: 0.875rem;
                    font-weight: 450;
                }
                & select.subject-select {
                    width: 48%;
                    height: 7.2vh;
                    border: #F8FAFC 1px solid;
                    cursor: pointer;
                    display: block;
                    padding: 24px;
                    outline: none;
                    position: relative;
                    margin-top: 20px;
                    font-size: 0.875rem;
                    font-family: "Be Vietnam Pro", sans-serif;
                    font-weight: bold;
                    border-radius: 15px;
                }
            }
            /* Container Message */
            & div.container-message {
                display: flex;
                margin-top: 24px;
                flex-direction: column;

                & label.label-message {
                    color: #F8FAFC;
                    font-size: 0.875rem;
                    font-weight: 450;
                    margin-left: 0;
                }
                & textarea.textAreaBox {
                    width: 100%;
                    height: 25vh;
                    border: #F8FAFC 1px solid;
                    cursor: pointer;
                    outline: none;
                    padding: 24px;
                    font-size: 1rem;
                    margin-top: 4px;
                    font-family: "Be Vietnam Pro", sans-serif;
                    font-weight: bold;
                    margin-left: 0;
                    border-radius: 15px;
                }
                & textarea.textAreaBox::placeholder {color: #111729;}
            }
            /* Button Contact Sales */
            & button.button-submit {
                border: #F8FAFC 1px solid;
                width: 100%;
                color: #4036A9;
                height: 7vh;
                cursor: pointer;
                display: flex;
                font-size: 1.25rem;
                margin-top: 24px;
                font-family: "Be Vietnam Pro", sans-serif;
                font-weight: bold;
                align-items: center;
                margin-left: 0;
                border-radius: 15px;
                text-transform: capitalize;
                flex-direction: column;
                justify-content: center;
            }
        }
    }
}
/* Responsive Mobile */
@media screen and (max-width: 640px){
    /* Main Container */
    & div.main-container {
        width: 100%;
        height: 150vh;
        /* Container Logo */
        & div.logo-container {margin-left: 42px;}
        /* Container Topic */
        & div.Topic-container {
            width: 90%;
            & label.text-topic {font-size: 4rem;}
        }
        /* Container Contact Under Topic */
        & div.contactUnder-container {
            width: 65%;
            height: 6vh;
            & p.text-under-topic {font-size: 1.25rem;}
        }
        /* Container From Input */
        & div.container-form-input {
            width: 89%;
            height: 95vh;
            & div.container-form {
                display: block;
                & div.containers-form-input {
                    width: 100%;
                    height: 21vh;
                    /* Name Input Box */
                    & input.input-name {width: 100%;}
                    /* Email Compony Box */
                    & label.label-email {
                        margin-left: 0;
                        margin-top: 100px;
                    }
                    & input.input-email {
                        width: 100%;
                        margin-left: -250px;
                    }
                }
                /* Container Form Select */
                & div.containers-form-select {
                    width: 100%;
                    height: 21.5vh;
                    /* Container Compony Size */
                    & select.employees-select {
                        width: 100%;
                        margin-left: -105px;
                    }
                    /* Container Subject */
                    & label.label-subject {
                        left: -460px;
                        top: 95px;
                    }
                    & select.subject-select {
                        top: 96px;
                        width: 100%;
                        margin-left: -512px;
                    }
                }
            }
        }
    }
}
/* Responsive Tablet */
@media screen and (min-width: 641px) and (max-width: 1024px){
    /* Main Container */
    & div.main-container {
        width: 100%;
        height: 130vh;
        /* Container Logo */
        & div.logo-container {margin-left: 42px;}
        /* Container Topic */
        & div.Topic-container {width: 56%;}
        /* Container Contact Under Topic */
        & div.contactUnder-container {width: 63%;}
        /* Container From Input */
        & div.container-form-input {
            width: 90%;
            & div.container-form {
                & div.containers-form-input {
                    width: 100%;
                    height: 10vh;
                    /* Email Compony Box */
                    & label.label-email {
                        margin-top: 10px;
                        margin-left: 420px;
                    }
                    & input.input-email {
                        margin-top: -3px;
                        margin-right: 250px;
                    }
                }
            }
        }
    }
}
/* Responsive Desktop */
@media screen and (min-width: 1025px) and (max-width: 1280px) {
    /* Main Container */
    & div.main-container {
        width: 100%;
        height: 140vh;
        /* Container Logo */
        & div.logo-container {margin-left: 80px;}
        /* Container Topic */
        & div.Topic-container {width: 50%;}
        /* Container Contact Under Topic */
        & div.contactUnder-container {width: 60%;}
        /* Container From Input */
        & div.container-form-input {
            width: 80%;
        }
    }
}
```

Run Project on Terminal

`npm start`

### Result

![alt text](image-1.png)

Device Mobile (640px)

![alt text](image-2.png)

Deviec Tablet (1024px)

![alt text](image-3.png)

Device Desktop (1280px)

![alt text](image-4.png)