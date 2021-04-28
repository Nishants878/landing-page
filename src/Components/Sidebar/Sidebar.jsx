import React from 'react'
import classes from './Sidebar.module.css';
import MainLogo from '../Assest/Pictures/logo.png';
import Contact from '../Assest/Pictures/Contact.svg'
export default function Sidebar() {
    return (
        <div className={classes.MainContainer}>
            <div className={classes.ContentWrapper}>
                <div className={classes.LogoContainer}>
                    <img src={MainLogo} alt="Hospital Icon"/>
                </div>
                <div className={classes.NavMenu}>
                    <div className={ classes.Appoint}>
                        <p>Book Appointment</p>
                    </div>
                    <div className={classes.NavBar}>
                        <p>Patients & Visitors</p>
                    </div>
                    <div className={classes.NavBar}>
                        <p>Doctors</p>
                    </div>
                    <div className={classes.NavBar}>
                        <p>Departments</p>
                    </div>
                    <div className={classes.NavBar}>
                        <p>Gallery</p>
                    </div>
                </div>
                <div className={classes.ContactWrapper}>
                <p>Contact</p>
                    <img src={Contact} alt="Contact"/>
                   
                </div>
            </div>
        </div>
    )
}
